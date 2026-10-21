'use client';

import { useEffect, useState } from 'react';

/**
 * Подключение Яндекс Карт JS API 2.1 (глобальный ymaps).
 * В отличие от v3, загрузчик 2.1 отдаёт API и без ключа: карта и метки работают,
 * ограничены только геокодер, поиск и маршруты — здесь они не используются.
 * Если NEXT_PUBLIC_YANDEX_MAPS_API_KEY задан, он передаётся (так требует документация для продакшена).
 * Скрипт грузится один раз на всё приложение, повторные вызовы получают тот же промис.
 * @see https://yandex.ru/dev/jsapi-v2-1/doc/ru/v2-1/dg/concepts/load
 */

const SCRIPT_ID = 'yandex-maps-api-v21';
const API_URL = 'https://api-maps.yandex.ru/2.1/';

/* Типы — только используемая часть API */

/** В API 2.1 по умолчанию координаты идут в порядке [широта, долгота] */
export type TLatLng = [number, number];

interface IYmapsMoveOptions {
  /** Длительность анимации, мс */
  duration?: number
  checkZoomRange?: boolean
}

interface IYmapsEventManager {
  add(types: string | Array<string>, callback: () => void): this
}

export interface IYmapsGeoObject {
  properties: {
    get(key: string): unknown
    set(key: string, value: unknown): unknown
  }
}

export interface IYmapsMap {
  events: IYmapsEventManager
  geoObjects: {
    add(object: IYmapsGeoObject): void
    remove(object: IYmapsGeoObject): void
  }
  zoomRange: {
    /** Диапазон зумов в текущей точке; может быть ещё не известен */
    getCurrent(): [number, number] | null
  }
  getZoom(): number
  setCenter(center: TLatLng, zoom?: number, options?: IYmapsMoveOptions): Promise<unknown>
  setZoom(zoom: number, options?: IYmapsMoveOptions): Promise<unknown>
  destroy(): void
}

export interface IYmaps {
  ready(callback?: () => void): Promise<void>
  Map: new (container: HTMLElement, state: Record<string, unknown>, options?: Record<string, unknown>) => IYmapsMap
  Placemark: new (
    coordinates: TLatLng,
    properties?: Record<string, unknown>,
    options?: Record<string, unknown>,
  ) => IYmapsGeoObject
  templateLayoutFactory: {
    createClass(template: string): unknown
  }
}

declare global {
  interface Window {
    ymaps?: IYmaps
  }
}

let apiPromise: Promise<IYmaps> | null = null;

const appendScript = (src: string) => new Promise<void>((resolve, reject) => {
  const existing = document.getElementById(SCRIPT_ID);

  if (existing && window.ymaps) {
    resolve();

    return;
  }

  // Скрипт мог остаться от неудачной попытки — такой удаляем и грузим заново
  existing?.remove();

  const script = document.createElement('script');

  script.id = SCRIPT_ID;
  script.src = src;
  script.onload = () => resolve();
  script.onerror = () => reject(new Error('Не удалось загрузить скрипт Яндекс Карт 2.1'));

  document.head.appendChild(script);
});

const loadApi = async (): Promise<IYmaps> => {
  const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;
  const params = new URLSearchParams({ lang: 'ru_RU' });

  if (apiKey) {
    params.set('apikey', apiKey);
  }

  await appendScript(`${API_URL}?${params}`);

  const { ymaps } = window;

  if (!ymaps) {
    throw new Error('Скрипт Яндекс Карт 2.1 загрузился, но ymaps не найден');
  }

  await ymaps.ready();

  return ymaps;
};

/** Загружает API один раз; после ошибки следующий вызов пробует снова */
const loadYandexMapsV21 = () => {
  if (!apiPromise) {
    apiPromise = loadApi().catch((error: unknown) => {
      apiPromise = null;

      throw error;
    });
  }

  return apiPromise;
};

/** Состояние загрузки Яндекс Карт 2.1 для компонента */
const useYandexMapsV21 = () => {
  const [ymaps, setYmaps] = useState<IYmaps | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isCancelled = false;

    loadYandexMapsV21()
      .then((api) => {
        if (!isCancelled) {
          setYmaps(api);
        }
      })
      .catch((e: unknown) => {
        console.error(e);

        if (!isCancelled) {
          setError(e instanceof Error ? e : new Error(String(e)));
        }
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return {
    ymaps,
    error,
    isLoading: !ymaps && !error,
  };
};

export default useYandexMapsV21;
