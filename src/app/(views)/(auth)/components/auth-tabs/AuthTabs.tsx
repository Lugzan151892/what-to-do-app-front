'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from '@/app/utils/style-utils/clsx';
import authTabsStyles from '@/app/(views)/(auth)/components/auth-tabs/auth-tabs.module.scss';

interface IAuthTab {
  id: string
  text: string
  href: string
}

const tabs: Array<IAuthTab> = [
  { id: 'login', text: 'Вход в аккаунт', href: '/login' },
  { id: 'registration', text: 'Регистрация', href: '/registration' },
];

const AuthTabs = () => {
  const pathname = usePathname();

  return (
    <nav className={clsx('w-flex w-align-center w-gap-32 w-mb-32', authTabsStyles.tabs)}>
      {tabs.map(tab => (
        <Link
          key={tab.id}
          href={tab.href}
          className={clsx('w-fweight-600', authTabsStyles.tab, pathname === tab.href && authTabsStyles.active)}
        >
          {tab.text}
        </Link>
      ))}
    </nav>
  );
};

export default AuthTabs;
