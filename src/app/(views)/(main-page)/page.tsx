'use client';

import mainsectionStyles from '@/app/(views)/(main-page)/styles/mainsection.module.scss';
import WButton from '@/components/ui/button/WButton';
import { EBUTTON_TYPE } from '@/components/ui/button/interfaces';
import FloatingCards from '@/app/(views)/(main-page)/components/FloatingCards/FloatingCards';
import TickerText from './components/TickerText/TickerText';
import WorkDescription from './components/WorkDescription/WorkDescription';
import OppurtunitiesSection from './components/OpportunitiesSection/OppurtunitiesSection';

const MainPage = () => {
  return (
    <div>
      <section className={mainsectionStyles.mainSection}>
        <div className={mainsectionStyles.mainContent}>
          <div className={mainsectionStyles.tagWrapper}>
            <span className={mainsectionStyles.pingWrapper}>
              <span className={mainsectionStyles.pingSlow} />
              <span className={mainsectionStyles.pingDot} />
            </span>
            <span>
              AI-помощник для лучших выходных
            </span>
          </div>

          <h1 className={mainsectionStyles.headline}>
            <span>
              Выходные,
            </span>
            <br />
            <span className="w-gradient-text">которые запомнятся</span>
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
      <FloatingCards />
      <TickerText />
      <WorkDescription />
      <OppurtunitiesSection />
      tut man page
    </div>
  );
};

export default MainPage;
