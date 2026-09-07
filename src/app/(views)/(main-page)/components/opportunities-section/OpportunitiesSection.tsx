import opportunitiesStyles from '@/app/(views)/(main-page)/components/opportunities-section/opportunities.module.scss';
import clsx from '@/app/utils/style-utils/clsx';
import WSwitchButton from '@/components/ui/switch-button/WSwitchButton';
import MainCardIcon from '@/app/(views)/(main-page)/components/main-card-icon/MainCardIcon';
import OpportunityActivityRow, { IOpportunityActivityItem } from './ActivityRow';

const activities: Array<IOpportunityActivityItem> = [
  { id: 1, icon: 'ice-skate', text: 'Каток в Парке Горького', date: '11 января 2025', rate: 5 },
  { id: 2, icon: 'movie', text: 'Третьяковская галерея', date: '4 января 2025', rate: 4 },
  { id: 3, icon: 'museum-art', text: 'Кино «Аватар 3»', date: '28 декабря 2024', rate: 3 },
];

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
        <div className={opportunitiesStyles.cards}>
          <div className={clsx(opportunitiesStyles.cardOne, 'w-card w-p-24 w-flex w-flex-column w-justify-center')}>
            <MainCardIcon
              icon="calendar"
            />
            <span className={clsx(opportunitiesStyles.headerSecondary, 'w-mt-16')}>
              Дневник активностей
            </span>
            <span className={clsx(opportunitiesStyles.textSecondary, 'w-mt-16')}>
              Добавляйте прошлые и новые занятия в пару кликов
            </span>
            <div className="w-flex w-flex-column w-gap-4 w-mt-24">
              {activities.map(a => (
                <OpportunityActivityRow
                  key={a.id}
                  {...a}
                />
              ))}
            </div>
          </div>
          <div className="w-card w-p-24 w-flex w-flex-column">
            <MainCardIcon
              icon="brain"
            />
            <span className={clsx(opportunitiesStyles.headerSecondary, 'w-mt-16')}>
              Умные оценки
            </span>
            <span className={clsx(opportunitiesStyles.textSecondary, 'w-mt-16')}>
              AI анализирует, что вам нравится и строит вкусовой профиль
            </span>
          </div>
          <div className="w-card w-p-24 w-flex w-flex-column">
            <MainCardIcon
              icon="city-map"
            />
            <span className={clsx(opportunitiesStyles.headerSecondary, 'w-mt-16')}>
              По вашему городу
            </span>
            <span className={clsx(opportunitiesStyles.textSecondary, 'w-mt-16')}>
              AI ищет актуальные события прямо сейчас — афиши, выставки, фестивали
            </span>
          </div>
          <div className="w-card w-p-24 w-flex w-flex-column">
            <MainCardIcon
              icon="refresh-new"
            />
            <span className={clsx(opportunitiesStyles.headerSecondary, 'w-mt-16')}>
              Только новое
            </span>
            <span className={clsx(opportunitiesStyles.textSecondary, 'w-mt-16')}>
              Фильтр «только то, что ещё не пробовали» — никаких повторов без вашего желания
            </span>
          </div>
          <div className="w-card w-p-24 w-flex w-flex-column">
            <MainCardIcon
              icon="group-people"
            />
            <span className={clsx(opportunitiesStyles.headerSecondary, 'w-mt-16')}>
              Для любой компании
            </span>
            <span className={clsx(opportunitiesStyles.textSecondary, 'w-mt-16')}>
              Укажите, сколько вас — AI подберёт подходящие варианты
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OppurtunitiesSection;
