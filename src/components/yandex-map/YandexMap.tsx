'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from '@/app/utils/style-utils/clsx';
import yandexMapStyles from '@/components/yandex-map/yandex-map.module.scss';
import useYandexMapsV21, { IYmapsGeoObject, IYmapsMap, TLatLng } from '@/hooks/useYandexMapsV21';

const DEFAULT_ZOOM = 16;
/** Меньше этого зума мир начинает повторяться и появляются пустые области без данных */
const MIN_ZOOM = 2;
/** Запасной диапазон зумов, пока карта не сообщила реальный для текущей точки */
const DEFAULT_ZOOM_RANGE = { min: MIN_ZOOM, max: 19 };

interface IYandexMapProps {
  coordinates: TLatLng
  /** Подсказка на метке */
  title?: string
  height?: number
}

const YandexMap: React.FC<IYandexMapProps> = ({ coordinates, title = '', height = 280 }) => {
  const { ymaps, error } = useYandexMapsV21();

  const containerRef = useRef<HTMLDivElement>(null);
  // Объекты карты храним в ref: они мутабельные и не должны вызывать перерисовку
  const mapRef = useRef<IYmapsMap | null>(null);
  const placemarkRef = useRef<IYmapsGeoObject | null>(null);

  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const [zoomRange, setZoomRange] = useState(DEFAULT_ZOOM_RANGE);

  const [lat, lng] = coordinates;
  const isMapReady = !!ymaps;

  // Создание карты — один раз, когда загрузился API
  useEffect(() => {
    const container = containerRef.current;

    if (!ymaps || !container) {
      return;
    }

    const map = new ymaps.Map(container, {
      center: [lat, lng],
      zoom: DEFAULT_ZOOM,
      controls: [],
    }, {
      minZoom: MIN_ZOOM,
      suppressMapOpenBlock: true,
      yandexMapDisablePoiInteractivity: true,
      autoFitToViewport: 'always',
    });

    const syncZoom = () => {
      const [min, max] = map.zoomRange.getCurrent() ?? [DEFAULT_ZOOM_RANGE.min, DEFAULT_ZOOM_RANGE.max];

      setZoom(map.getZoom());
      setZoomRange({ min: Math.max(min, MIN_ZOOM), max });
    };

    map.events.add(['boundschange', 'sizechange'], syncZoom);
    mapRef.current = map;

    return () => {
      map.destroy();
      mapRef.current = null;
      placemarkRef.current = null;
    };
    // Координаты при создании берём текущие, дальнейшие изменения обрабатывает эффект ниже
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ymaps]);

  /**
   * Метка — HTML-шаблон: элемент ставится левым верхним углом в точку, поэтому в стилях центрируется сдвигом,
   * а область наведения (iconShape) — круг с центром в точке
   */
  useEffect(() => {
    const map = mapRef.current;

    if (!ymaps || !map) {
      return;
    }

    if (placemarkRef.current) {
      map.geoObjects.remove(placemarkRef.current);
    }

    const MarkerLayout = ymaps.templateLayoutFactory.createClass(
      `<div class="${yandexMapStyles.marker}" title="{{ properties.name }}"></div>`,
    );

    const placemark = new ymaps.Placemark([lat, lng], { name: title }, {
      iconLayout: MarkerLayout,
      iconShape: { type: 'Circle', coordinates: [0, 0], radius: 16 },
      hasBalloon: false,
      hasHint: false,
    });

    map.geoObjects.add(placemark);
    placemarkRef.current = placemark;
    map.setCenter([lat, lng], DEFAULT_ZOOM);
  }, [ymaps, lat, lng, title]);

  const zoomBy = (delta: number) => {
    const map = mapRef.current;

    if (!map) {
      return;
    }

    const { min, max } = zoomRange;

    map.setZoom(Math.min(max, Math.max(min, Math.round(map.getZoom()) + delta)), { duration: 200, checkZoomRange: true });
  };

  return (
    <div
      className={clsx('w-relative', yandexMapStyles.map)}
      style={{ height: `${height}px` }}
    >
      <div
        ref={containerRef}
        className={clsx('w-absolute', yandexMapStyles.container)}
      />

      {!isMapReady && (
        <div className={clsx('w-absolute w-flex w-flex-center w-p-24 w-text-center w-text-sm w-text-color--muted', yandexMapStyles.placeholder)}>
          {error ? 'Не удалось загрузить карту' : 'Загружаем карту...'}
        </div>
      )}

      {isMapReady && (
        <div className={clsx('w-absolute w-flex w-flex-column w-gap-8 w-p-8', yandexMapStyles.zoom)}>
          <button
            type="button"
            aria-label="Приблизить"
            className={clsx(yandexMapStyles.zoomButton, yandexMapStyles.zoomButtonIn)}
            disabled={zoom >= zoomRange.max}
            onClick={() => zoomBy(1)}
          />
          <button
            type="button"
            aria-label="Отдалить"
            className={yandexMapStyles.zoomButton}
            disabled={zoom <= zoomRange.min}
            onClick={() => zoomBy(-1)}
          />
        </div>
      )}
    </div>
  );
};

export default YandexMap;
