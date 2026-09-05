import clsx from '@/app/utils/style-utils/clsx';
import tickerTextStyles from '@/app/(views)/(main-page)/components/TickerText/tickerText.module.scss';

const baseItems = ['Музеи', 'Парки', 'Рестораны', 'Спорт', 'Концерты', 'Кинотеатры'];

const textItems = [...baseItems, ...baseItems, ...baseItems, ...baseItems];

const TickerText = () => {
  const renderGroup = () => (
    <div className={tickerTextStyles.group}>
      {textItems.map((e, i) => (
        <div
          key={i}
          className="w-flex w-flex-center"
        >
          <span className={clsx(tickerTextStyles.item, i % 2 === 0 ? 'w-gradient-text w-fweight-700' : 'w-fweight-400')}>
            {e}
          </span>
          <span className={clsx(tickerTextStyles.separator, 'w-ml-24')}>×</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className={clsx(tickerTextStyles.container, 'w-mt-24')}>
      <div className={clsx(tickerTextStyles.track, 'w-flex w-flex-center')}>
        {renderGroup()}
        {renderGroup()}
      </div>
    </div>
  );
};

export default TickerText;
