import WButton from '../ui/button/Button';
import styles from './header.module.scss';

const AppHeader = () => {
  return (
    <div className={styles.header}>
      <div>
        logo
      </div>
      <div>
        <span>
          Weekender
        </span>
        <span className={styles.textSalad}>
          .AI
        </span>
      </div>
      <div className="w-flex">
        <WButton text="Войти" />
        <WButton text="Начать бесплатно" />
      </div>
    </div>
  );
};

export default AppHeader;
