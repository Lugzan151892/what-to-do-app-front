import styles from '@/components/logo/logo.module.css';

const AppLogo = () => {
  return (
    <div
      className="w-flex w-flex-center w-gap-10"
    >
      <div className={styles.logo}>
        <span
          className={styles.logoText}
          title=""
        >
          W
        </span>
      </div>
      <span
        className={styles.text}
      >
        Weeknd
      </span>
    </div>
  );
};

export default AppLogo;
