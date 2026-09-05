import floatingCardsStyles from '@/app/(views)/(main-page)/components/FloatingCards/floatingcards.module.scss';
import Image from 'next/image';
import masksIcon from '@/assets/static-icons/masks.svg';
import bicycleIcon from '@/assets/static-icons/bicycle.svg';
import blockIcon from '@/assets/static-icons/block.svg';
import clsx from '@/app/utils/style-utils/clsx';

const FloatingCards = () => {
  return (
    <section className={floatingCardsStyles.cardsContainer}>
      <div className={clsx('w-card', floatingCardsStyles.glassCard, floatingCardsStyles.previewMain)}>
        <div className={floatingCardsStyles.cardHeader}>
          <div className={floatingCardsStyles.headerTitleGroup}>
            <div className={floatingCardsStyles.accentDot} />
            <span className={floatingCardsStyles.headerText}>AI-предложения на эти выходные</span>
          </div>
          <div className={floatingCardsStyles.aiBadge}>AI</div>
        </div>

        <div className={floatingCardsStyles.cardContent}>
          <div className={`${floatingCardsStyles.cardItem} ${floatingCardsStyles.highlight}`}>
            <div className={floatingCardsStyles.itemMain}>
              <div className={floatingCardsStyles.iconWrapper}>
                <Image
                  src={masksIcon}
                  alt="theater"
                  unoptimized
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <div className={floatingCardsStyles.itemTitle}>Театр «Современник»</div>
                <div className={floatingCardsStyles.itemSubtitle}>Спектакль · Суббота, 19:00</div>
              </div>
            </div>
            <div className={floatingCardsStyles.badgeNew}>Новинка</div>
          </div>

          <div className={floatingCardsStyles.cardItem}>
            <div className={floatingCardsStyles.itemMain}>
              <div className={floatingCardsStyles.iconWrapper}>
                <Image
                  src={bicycleIcon}
                  alt="bike"
                  unoptimized
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <div className={floatingCardsStyles.itemTitle}>Велопрогулка в Парке Горького</div>
                <div className={floatingCardsStyles.itemSubtitle}>Активный отдых · 2–3 часа</div>
              </div>
            </div>
            <div className={floatingCardsStyles.stars}>
              <span className={floatingCardsStyles.star}>★</span>
              <span className={floatingCardsStyles.star}>★</span>
              <span className={floatingCardsStyles.star}>★</span>
            </div>
          </div>

          <div className={floatingCardsStyles.cardItem}>
            <div className={floatingCardsStyles.itemMain}>
              <div className={floatingCardsStyles.iconWrapper}>
                <Image
                  src={blockIcon}
                  alt="cook"
                  unoptimized
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <div className={floatingCardsStyles.itemTitle}>Кулинарный мастер-класс</div>
                <div className={floatingCardsStyles.itemSubtitle}>Воскресенье · На 2 человека</div>
              </div>
            </div>
            <div className={floatingCardsStyles.badgeTop}>Топ</div>
          </div>
        </div>
      </div>

      <div className={clsx('w-card', floatingCardsStyles.glassCard, floatingCardsStyles.previewRating)}>
        <div className={floatingCardsStyles.ratingLabel}>Последняя оценка</div>
        <div className={floatingCardsStyles.ratingTitle}>Каток в парке</div>
        <div className={floatingCardsStyles.ratingStars}>
          <span className={floatingCardsStyles.star}>★</span>
          <span className={floatingCardsStyles.star}>★</span>
          <span className={floatingCardsStyles.star}>★</span>
          <span className={floatingCardsStyles.star}>★</span>
          <span className={`${floatingCardsStyles.star} ${floatingCardsStyles.dim}`}>★</span>
        </div>
        <div className={floatingCardsStyles.ratingQuote}>«Очень круто, хочу снова!»</div>
      </div>

      <div className={clsx('w-card', floatingCardsStyles.glassCard, floatingCardsStyles.previewGroup)}>
        <div className={floatingCardsStyles.groupLabel}>Ищем на компанию</div>
        <div className={floatingCardsStyles.groupBadge}>
          <div className={floatingCardsStyles.groupCount}>3</div>
          <span className={floatingCardsStyles.groupText}>человека</span>
        </div>
        <div className={floatingCardsStyles.groupDivider} />
        <div className={floatingCardsStyles.groupFooter}>
          <div className={floatingCardsStyles.statusDot} />
          <span className={floatingCardsStyles.groupStatusText}>Москва · Актуально</span>
        </div>
      </div>
    </section>
  );
};

export default FloatingCards;
