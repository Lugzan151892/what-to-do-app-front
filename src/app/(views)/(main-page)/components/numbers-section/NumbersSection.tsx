import clsx from '@/app/utils/style-utils/clsx';
import numbersStyles from '@/app/(views)/(main-page)/components/numbers-section/numbers-section.module.scss';

interface INumberItem {
  value: string
  label: string
}

const numbers: Array<INumberItem> = [
  { value: '7K+', label: 'Активных пользователей' },
  { value: '98%', label: 'Нашли новое занятие' },
  { value: '40+', label: 'Городов России' },
  { value: '4.9', label: 'Средняя оценка' },
];

const NumbersSection = () => {
  return (
    <section className={clsx('w-flex w-flex-center', numbersStyles.section)}>
      <div className={clsx('w-text-center', numbersStyles.grid)}>
        {numbers.map(item => (
          <div key={item.label}>
            <div className={numbersStyles.number}>{item.value}</div>
            <div className="w-text-sm w-text-color--muted w-mt-8">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NumbersSection;
