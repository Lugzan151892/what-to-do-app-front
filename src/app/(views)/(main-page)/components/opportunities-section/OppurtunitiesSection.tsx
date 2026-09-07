import opportunitiesStyles from '@/app/(views)/(main-page)/components/opportunities-section/oportunities.module.scss';
import clsx from '@/app/utils/style-utils/clsx';
import WSwitchButton from '@/components/ui/switch-button/WSwitchButton';
import MainCardIcon from '@/app/(views)/(main-page)/components/main-card-icon/MainCardIcon';

const OppurtunitiesSection = () => {
  return (
    <section className={clsx('w-flex w-flex-center', opportunitiesStyles.section)}>
      <div className={opportunitiesStyles.content}>
        <div className="w-flex w-gap-24 w-align-end w-justify-space-between w-mb-80">
          <div className="w-flex w-flex-column">
            <span className={opportunitiesStyles.preHeadLine}>
              Возможности
            </span>
            <span className={opportunitiesStyles.headLine}>
              Всё, что нужно
              <br />
              для
              {' '}
              <span className="w-gradient-text">
                крутых выходных
              </span>
            </span>
          </div>
          <div className={opportunitiesStyles.headLineSecondary}>
            Интеллектуальный помощник, который учится вместе с вами и становится лучше с каждыми выходными.
          </div>
        </div>
        <div className="w-flex w-flex-column">
          <div className="w-flex">
            <div className="w-card w-p-24 w-flex w-flex-column">
              <MainCardIcon
                icon="calendar"
              />
              Дневник активностей
            </div>
            <div className="w-card w-p-24 w-flex w-flex-column">
              <MainCardIcon
                icon="brain"
              />
              Умные оценки
            </div>
          </div>
          <div className="w-flex">
            <div className="w-card w-p-24 w-flex w-flex-column">
              <MainCardIcon
                icon="city-map"
              />
              По вашему городу
            </div>
            <div className="w-card w-p-24 w-flex w-flex-column">
              <MainCardIcon
                icon="refresh-new"
              />
              Только новое
            </div>
            <div className="w-card w-p-24 w-flex w-flex-column">
              <MainCardIcon
                icon="group-people"
              />
              Для любой компании
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OppurtunitiesSection;
