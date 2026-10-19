import clsx from '@/app/utils/style-utils/clsx';
import fakeMapStyles from '@/app/(views)/generation/components/fake-map/fake-map.module.scss';

// Заглушка карты до подключения картографического сервиса
const FakeMap = () => {
  return (
    <div className={clsx('w-relative w-flex w-flex-center', fakeMapStyles.map)}>
      <div className={clsx('w-absolute', fakeMapStyles.grid)} />
      <div className="w-relative w-flex w-flex-column w-align-center">
        <div className={clsx('w-flex w-flex-center', fakeMapStyles.pin)}>
          <div className={fakeMapStyles.pinDot} />
        </div>
        <div className={clsx('w-mt-4', fakeMapStyles.shadow)} />
        <span className={clsx('w-text-xs w-fweight-700 w-text-color--muted w-mt-8', fakeMapStyles.label)}>
          Карта
        </span>
      </div>
    </div>
  );
};

export default FakeMap;
