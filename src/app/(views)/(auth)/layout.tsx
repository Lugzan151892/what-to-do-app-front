import clsx from '@/app/utils/style-utils/clsx';
import authStyles from '@/app/(views)/(auth)/styles/auth.module.scss';
import AuthHeader from '@/app/(views)/(auth)/components/auth-header/AuthHeader';
import AuthTabs from '@/app/(views)/(auth)/components/auth-tabs/AuthTabs';
import SocialAuth from '@/app/(views)/(auth)/components/social-auth/SocialAuth';
import AuthPromo from '@/app/(views)/(auth)/components/auth-promo/AuthPromo';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={clsx('w-flex w-flex-column w-text-color--cream', authStyles.page)}>
      <div className={clsx(authStyles.orb, authStyles.orbAccent)} />
      <div className={clsx(authStyles.orb, authStyles.orbSecondary)} />

      <AuthHeader />

      <main className={clsx('w-flex w-justify-center w-align-start', authStyles.main)}>
        <div className={authStyles.grid}>
          <div className={authStyles.cardColumn}>
            <div className={clsx('w-card', authStyles.card)}>
              <AuthTabs />
              {children}
              <SocialAuth />
            </div>
          </div>
          <AuthPromo />
        </div>
      </main>

      <footer className={clsx('w-text-xs w-text-color--muted w-text-center', authStyles.footer)}>
        © 2026 Weeknd. Все права защищены.
      </footer>
    </div>
  );
};

export default AuthLayout;
