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
    </div>
  )
}

export default AppHeader;