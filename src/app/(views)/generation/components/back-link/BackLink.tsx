'use client';

import { MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import clsx from '@/app/utils/style-utils/clsx';
import backLinkStyles from '@/app/(views)/generation/components/back-link/back-link.module.scss';
import arrowLeft from '@/assets/static-icons/arrow-left.svg';

interface IBackLinkProps {
  text: string
  fallbackHref: string
}

// Возвращает на предыдущую страницу (лента или результат), а при прямом заходе — на fallbackHref
const BackLink: React.FC<IBackLinkProps> = ({ text, fallbackHref }) => {
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (window.history.length > 1) {
      event.preventDefault();
      router.back();
    }
  };

  return (
    <Link
      href={fallbackHref}
      className={clsx('w-link w-flex--inline w-align-center w-gap-8 w-text-xs', backLinkStyles.link)}
      onClick={handleClick}
    >
      <Image
        src={arrowLeft}
        alt=""
        width={16}
        height={16}
      />
      {text}
    </Link>
  );
};

export default BackLink;
