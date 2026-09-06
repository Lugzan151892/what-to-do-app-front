import opportunitiesStyles from '@/app/(views)/(main-page)/components/OpportunitiesSection/oportunities.module.scss';
import clsx from '@/app/utils/style-utils/clsx';

const OppurtunitiesSection = () => {
  return (
    <section className={clsx('w-flex w-flex-center', opportunitiesStyles.section)}>
      <div className={opportunitiesStyles.content}>
        <div className="w-flex w-gap-24 w-align-end w-justify-space-between">
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
      </div>
    </section>
  );
};

export default OppurtunitiesSection;
