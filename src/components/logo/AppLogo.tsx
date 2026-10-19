import clsx from '@/app/utils/style-utils/clsx';
import styles from '@/components/logo/logo.module.css';

interface IAppLogoProps {
  small?: boolean
}

const AppLogo: React.FC<IAppLogoProps> = ({ small }) => {
  return (
    <div
      className="w-flex w-flex-center w-gap-10"
    >
      <div className={clsx(styles.logo, small && styles.logoSmall)}>
        <span
          className={styles.logoText}
          title=""
        >
          W
        </span>
      </div>
      <span
        className={clsx(styles.text, small && styles.textSmall)}
      >
        Weeknd
      </span>
    </div>
  );
};

export default AppLogo;
