import Link from 'next/link';
import Image from 'next/image';
import clsx from '@/app/utils/style-utils/clsx';
import authHeaderStyles from '@/app/(views)/(auth)/components/auth-header/auth-header.module.scss';
import AppLogo from '@/components/logo/AppLogo';
import arrowLeft from '@/assets/static-icons/arrow-left.svg';

const AuthHeader = () => {
  return (
    <header className={clsx('w-flex w-align-center w-justify-space-between', authHeaderStyles.header)}>
      <Link
        href="/"
        className={authHeaderStyles.logoLink}
      >
        <AppLogo />
      </Link>

      <Link
        href="/"
        className={clsx('w-link w-flex w-align-center w-gap-8 w-text-sm', authHeaderStyles.backLink)}
      >
        <Image
          src={arrowLeft}
          alt=""
          width={16}
          height={16}
        />
        На главную
      </Link>
    </header>
  );
};

export default AuthHeader;
