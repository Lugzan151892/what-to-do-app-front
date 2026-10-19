import clsx from '@/app/utils/style-utils/clsx';
import testimonialsStyles from '@/app/(views)/(main-page)/components/testimonials-section/testimonials-section.module.scss';
import RateStars from '@/components/rate-stars/RateStars';

interface ITestimonial {
  name: string
  city: string
  text: string
  rating: number
  avatarGradient: string
}

const orangeGradient = 'linear-gradient(135deg, var(--accent), var(--accent-secondary))';
const blueGradient = 'linear-gradient(135deg, var(--accent-blue), var(--accent-violet))';

const testimonials: Array<ITestimonial> = [
  {
    name: 'Анна М.',
    city: 'Москва',
    text: '«Раньше каждую пятницу мы с мужем тратили час на споры „что делать“. Теперь открываем Weeknd — и за 2 минуты план готов. Уже 3 месяца не повторились!»',
    rating: 5,
    avatarGradient: orangeGradient,
  },
  {
    name: 'Дмитрий К.',
    city: 'Санкт-Петербург',
    text: '«Кайф в том, что AI реально учится твоим вкусам. После 5-6 оценок рекомендации стали попадать прямо в точку. Нашёл кучу мест в Питере, о которых не знал.»',
    rating: 5,
    avatarGradient: blueGradient,
  },
  {
    name: 'Ольга Р.',
    city: 'Казань',
    text: '«Использую для планирования выходных с детьми. Указываю 4 человека и бюджет — и сразу получаю варианты, подходящие именно нам. Очень удобно и быстро.»',
    rating: 5,
    avatarGradient: orangeGradient,
  },
];

const TestimonialsSection = () => {
  return (
    <section className={clsx('w-flex w-flex-center w-text-color--cream', testimonialsStyles.section)}>
      <div className={clsx('w-flex w-flex-column w-align-center', testimonialsStyles.content)}>
        <span className={clsx(testimonialsStyles.preHeadLine, 'w-mb-20 w-fweight-600 w-text-color--accent')}>
          Отзывы
        </span>
        <h2 className={clsx(testimonialsStyles.headLine, 'w-fweight-900 w-text-center')}>
          Люди уже
          {' '}
          <span className="w-gradient-text">нашли своё</span>
        </h2>
        <div className={clsx('w-mt-56', testimonialsStyles.grid)}>
          {testimonials.map(item => (
            <div
              key={item.name}
              className="w-card w-p-24"
            >
              <RateStars
                total={5}
                filled={item.rating}
                size={16}
              />
              <p className={clsx('w-text-sm w-text-color--muted w-mt-16 w-mb-20', testimonialsStyles.text)}>
                {item.text}
              </p>
              <div className="w-flex w-align-center w-gap-12">
                <div
                  className={clsx('w-flex w-flex-center w-fweight-700 w-text-sm', testimonialsStyles.avatar)}
                  style={{ background: item.avatarGradient }}
                >
                  {item.name[0]}
                </div>
                <div>
                  <div className="w-text-sm w-fweight-600">{item.name}</div>
                  <div className="w-text-xs w-text-color--muted">{item.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
