import workDescriptionStyles from '@/app/(views)/(main-page)/components/WorkDescription/workDescription.module.scss';
import WorkDescriptionCard, { IWorkDescriptionCardProps } from './WorkDescriptionCard';

const cardsData: Array<IWorkDescriptionCardProps> = [
  {
    order: '01',
    text: 'Ведите историю',
    description: 'Записывайте всё, чем вы занимались в выходные — места, события, активности. Стройте личную базу впечатлений.',
    icon: 'clock',
  },
  {
    order: '02',
    text: 'Ставьте оценки',
    description: 'Оценивайте каждое занятие и оставляйте заметки. AI учится на ваших предпочтениях и становится умнее с каждым отзывом.',
    icon: 'rate',
  },
  {
    order: '03',
    text: 'Получайте идеи',
    description: 'AI подбирает актуальные предложения по вашему городу, учитывает компанию и предлагает только то, чего вы ещё не пробовали.',
    icon: 'generated',
  },
];

const WorkDescription = () => {
  return (
    <section className={workDescriptionStyles.section}>
      <div className={workDescriptionStyles.content}>
        <span className={workDescriptionStyles.preHeadLine}>Как это работает</span>
        <div className={workDescriptionStyles.headLine}>
          <span>Три шага до</span>
          <br />
          <span className="w-gradient-text">идеальных выходных</span>
        </div>
        <div className={workDescriptionStyles.cardsContainer}>
          {cardsData.map(e => (
            <WorkDescriptionCard
              key={e.order}
              order={e.order}
              text={e.text}
              description={e.description}
              icon={e.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkDescription;
