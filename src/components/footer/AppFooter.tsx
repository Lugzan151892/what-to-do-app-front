import clsx from '@/app/utils/style-utils/clsx';
import footerStyles from '@/components/footer/footer.module.scss';
import AppLogo from '@/components/logo/AppLogo';

const links = ['О проекте', 'Политика', 'Контакты'];

const AppFooter = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={clsx('w-flex w-align-center w-gap-24', footerStyles.content)}>
        <AppLogo small />
        <nav className="w-flex w-gap-32">
          {links.map(link => (
            <a
              key={link}
              className="w-link w-text-xs"
              href="#"
            >
              {link}
            </a>
          ))}
        </nav>
        <span className="w-text-xs w-text-color--muted">
          © 2025 Weeknd. Все права защищены.
        </span>
      </div>
    </footer>
  );
};

export default AppFooter;
