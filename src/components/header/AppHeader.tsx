import { EBUTTON_TYPE } from '@/components/ui/button/interfaces';
import WButton from '@/components/ui/button/WButton';
import styles from '@/components/header/header.module.scss';
import AppLogo from '@/components/logo/AppLogo';

const AppHeader = () => {
  return (
    <div className={styles.header}>
      <AppLogo />
      <nav>
        <ul className="w-flex w-flex-center w-gap-32">
          <li>
            <a
              className="w-link"
              href="#"
            >
              Как это работает
            </a>
          </li>
          <li>
            <a
              className="w-link"
              href="#"
            >
              Возможности
            </a>
          </li>
          <li>
            <a
              className="w-link"
              href="#"
            >
              AI генератор
            </a>
          </li>
        </ul>
      </nav>
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
