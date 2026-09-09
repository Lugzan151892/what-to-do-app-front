import opportunitiesStyles from '@/app/(views)/(main-page)/components/opportunities-section/opportunities.module.scss';
import clsx from '@/app/utils/style-utils/clsx';
import WSwitchButton from '@/components/ui/switch-button/WSwitchButton';
import MainCardIcon from '@/app/(views)/(main-page)/components/main-card-icon/MainCardIcon';
import OpportunityActivityRow, { IOpportunityActivityItem } from './ActivityRow';
import ProgressBar from '@/components/ui/progress-bar/ProgressBar';
import PulsedDot from '@/components/ui/pulsed-dot/PulsedDot';

const activities: Array<IOpportunityActivityItem> = [
  { id: 1, icon: 'ice-skate', text: 'Каток в Парке Горького', date: '11 января 2025', rate: 5 },
  { id: 2, icon: 'movie', text: 'Третьяковская галерея', date: '4 января 2025', rate: 4 },
  { id: 3, icon: 'museum-art', text: 'Кино «Аватар 3»', date: '28 декабря 2024', rate: 3 },
];

const OppurtunitiesSection = () => {
  return (
    <section className={clsx('w-flex w-flex-center w-text-color--cream', opportunitiesStyles.section)}>
      <div className={opportunitiesStyles.content}>
        <div className="w-flex w-gap-24 w-align-end w-justify-space-between w-mb-80">
          <div className="w-flex w-flex-column">
            <span className={clsx(opportunitiesStyles.preHeadLine, 'w-mb-20 w-fweight-600 w-text-color--accent')}>
              Возможности
            </span>
            <span className={clsx(opportunitiesStyles.headLine, 'w-fweight-900 w-text-color--cream')}>
              Всё, что нужно
              <br />
              для
              {' '}
              <span className="w-gradient-text">
                крутых выходных
              </span>
            </span>
          </div>
          <div className={clsx(opportunitiesStyles.headLineSecondary, 'w-text-color--muted w-text-sm')}>
            Интеллектуальный помощник, который учится вместе с вами и становится лучше с каждыми выходными.
          </div>
        </div>
        <div className={opportunitiesStyles.cards}>
          <div className={clsx(opportunitiesStyles.cardOne, 'w-card w-p-24 w-flex w-flex-column w-justify-center')}>
            <MainCardIcon
              icon="calendar"
            />
            <span className="w-mt-16 w-text-color--cream w-text-base w-fweight-700">
              Дневник активностей
            </span>
            <span className="w-text-color--muted w-text-sm">
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
            <span className="w-mt-16 w-text-color--cream w-text-base w-fweight-700">
              Умные оценки
            </span>
            <span className="w-text-color--muted w-text-sm">
              AI анализирует, что вам нравится и строит вкусовой профиль
            </span>
            <div className="w-flex w-flex-column w-gap-12 w-mt-16">
              <ProgressBar
                total={100}
                filled={92}
                text="Активный отдых"
              />
              <ProgressBar
                total={100}
                filled={78}
                text="Культура"
              />
              <ProgressBar
                total={100}
                filled={65}
                text="Еда и рестораны"
              />
              <ProgressBar
                total={100}
                filled={50}
                text="Развлечения"
              />
            </div>
          </div>
          <div className="w-card w-p-24 w-flex w-flex-column">
            <MainCardIcon
              icon="city-map"
            />
            <span className="w-mt-16 w-text-color--cream w-text-base w-fweight-700">
              По вашему городу
            </span>
            <span className="w-text-color--muted w-text-sm">
              AI ищет актуальные события прямо сейчас — афиши, выставки, фестивали
            </span>
            <div className={clsx(opportunitiesStyles.city, 'w-flex w-align-center w-p-12 w-gap-12 w-mt-20')}>
              <PulsedDot size={12} />
              <div className="w-flex w-flex-column">
                <span className="w-text-sm w-text-color--cream w-fweight-600">
                  Москва
                </span>
                <span className="w-text-sx w-text-color--muted">
                  Данные обновлены сегодня
                </span>
              </div>
            </div>
          </div>
          <div className="w-card w-p-24 w-flex w-flex-column">
            <MainCardIcon
              icon="refresh-new"
            />
            <span className="w-mt-16 w-text-color--cream w-text-base w-fweight-700">
              Только новое
            </span>
            <span className="w-text-color--muted w-text-sm">
              Фильтр «только то, что ещё не пробовали» — никаких повторов без вашего желания
            </span>
            <div>

            </div>
          </div>
          <div className="w-card w-p-24 w-flex w-flex-column">
            <MainCardIcon
              icon="group-people"
            />
            <span className="w-mt-16 w-text-color--cream w-text-base w-fweight-700">
              Для любой компании
            </span>
            <span className="w-text-color--muted w-text-sm">
              Укажите, сколько вас — AI подберёт подходящие варианты
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OppurtunitiesSection;
