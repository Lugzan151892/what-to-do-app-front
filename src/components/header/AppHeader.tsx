import { EBUTTON_TYPE } from '@/components/ui/button/interfaces';
import WButton from '@/components/ui/button/WButton';
import styles from '@/components/header/header.module.scss';
import AppLogo from '@/components/logo/AppLogo';

const AppHeader = () => {
  return (
    <div className={styles.header}>
      <AppLogo />
      <div>
        <span>
          Weekender
        </span>
        <span className={styles.textSalad}>
          .AI
        </span>
      </div>
      <div className="w-flex w-gap-12">
        <WButton text="Войти" />
        <WButton
          text="Начать бесплатно"
          type={EBUTTON_TYPE.FILLED}
        />
      </div>
    </div>
  );
};

export default AppHeader;
