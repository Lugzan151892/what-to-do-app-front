'use client';

import mainsectionStyles from '@/app/(views)/(main-page)/styles/mainsection.module.scss';
import floatingCardsStyles from '@/app/(views)/(main-page)/styles/floatingcards.module.scss';
import WButton from '@/components/ui/button/WButton';
import { EBUTTON_TYPE } from '@/components/ui/button/interfaces';
import Image from 'next/image';
import masksIcon from '@/assets/static-icons/masks.svg';
import bicycleIcon from '@/assets/static-icons/bicycle.svg';
import blockIcon from '@/assets/static-icons/block.svg';

const MainPage = () => {
  return (
    <div>
      <section className={mainsectionStyles.mainSection}>
        {/* Background orbs */}
        <div className={mainsectionStyles.orb1} />
        <div className={mainsectionStyles.orb2} />

        {/* Hero content */}
        <div className={mainsectionStyles.mainContent}>
          <div className={mainsectionStyles.tagWrapper}>
            <div className={mainsectionStyles.tag}>
              <span className={mainsectionStyles.pingWrapper}>
                <span className={mainsectionStyles.pingSlow} />
                <span className={mainsectionStyles.pingDot} />
              </span>
              AI-помощник для лучших выходных
            </div>
          </div>

          <h1 className={mainsectionStyles.headline}>
            Выходные,
            <br />
            <span className={mainsectionStyles.gradientText}>которые запомнятся</span>
          </h1>

          <p className={mainsectionStyles.subheadline}>
            Ведите историю активностей, ставьте оценки и получайте персональные AI-рекомендации с учётом вашего города, компании и всего, что вы уже пробовали.
          </p>

          <div className={mainsectionStyles.actions}>
            <WButton
              text="Начать бесплатно →"
              type={EBUTTON_TYPE.FILLED}
            />
            <WButton
              text="Смотреть демо"
              type={EBUTTON_TYPE.BORDERED}
            />
          </div>

          {/* Stats row */}
          <div className={mainsectionStyles.stats}>
            <div className={mainsectionStyles.statItem}>
              <div className={mainsectionStyles.statNumber}>2 мин</div>
              <div className={mainsectionStyles.statLabel}>До первой идеи</div>
            </div>
            <div className={mainsectionStyles.divider} />
            <div className={mainsectionStyles.statItem}>
              <div className={mainsectionStyles.statNumber}>500+</div>
              <div className={mainsectionStyles.statLabel}>Категорий активностей</div>
            </div>
            <div className={mainsectionStyles.divider} />
            <div className={mainsectionStyles.statItem}>
              <div className={mainsectionStyles.statNumber}>100%</div>
              <div className={mainsectionStyles.statLabel}>Персонализация</div>
            </div>
          </div>
        </div>
      </section>
      <div className={floatingCardsStyles.cardsContainer}>
        <div className={`${floatingCardsStyles.glassCard} ${floatingCardsStyles.previewMain}`}>
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

            {/* Item 2 */}
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

            {/* Item 3 */}
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

        {/* Side card: rating */}
        <div className={`${floatingCardsStyles.glassCard} ${floatingCardsStyles.previewRating}`}>
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

        {/* Side card: group */}
        <div className={`${floatingCardsStyles.glassCard} ${floatingCardsStyles.previewGroup}`}>
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
      </div>
      tut man page
    </div>
  );
};

export default MainPage;
