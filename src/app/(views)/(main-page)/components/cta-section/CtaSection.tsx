import clsx from '@/app/utils/style-utils/clsx';
import ctaStyles from '@/app/(views)/(main-page)/components/cta-section/cta-section.module.scss';
import AppLogo from '@/components/logo/AppLogo';
import WButton from '@/components/ui/button/WButton';
import { EBUTTON_SIZE, EBUTTON_TYPE } from '@/components/ui/button/interfaces';

const CtaSection = () => {
  return (
    <section className={clsx('w-flex w-flex-center w-text-color--cream', ctaStyles.section)}>
      <div className={clsx('w-flex w-flex-column w-align-center w-text-center', ctaStyles.content)}>
        <div className="w-mb-24">
          <AppLogo />
        </div>
        <h2 className={clsx(ctaStyles.headLine, 'w-fweight-900 w-mb-24')}>
          Начните прямо
          <br />
          <span className="w-gradient-text">сегодня</span>
        </h2>
        <p className={clsx(ctaStyles.description, 'w-text-lg w-text-color--muted w-mb-40')}>
          Первые идеи для ближайших выходных — уже через 2 минуты. Бесплатно, без карты, без ограничений.
        </p>
        <div className={ctaStyles.action}>
          <WButton
            text="Начать бесплатно →"
            type={EBUTTON_TYPE.FILLED}
            textSize={EBUTTON_SIZE.LG}
            radius={16}
            paddingX={40}
            paddingY={20}
            fullWidth
          />
        </div>
        <p className="w-text-xs w-text-color--muted w-mt-20">
          Уже 7 000+ человек планируют выходные с Weeknd
        </p>
      </div>
    </section>
  );
};

export default CtaSection;
