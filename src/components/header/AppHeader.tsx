import Link from 'next/link';
import { EBUTTON_TYPE } from '@/components/ui/button/interfaces';
import WButton from '@/components/ui/button/WButton';
import styles from '@/components/header/header.module.scss';
import AppLogo from '@/components/logo/AppLogo';

export type THeaderVariant = 'landing' | 'app';

interface IAppHeaderProps {
  variant?: THeaderVariant
}

const navigation = [
  { id: 'how', text: 'Как это работает' },
  { id: 'features', text: 'Возможности' },
  { id: 'generator', text: 'AI генератор' },
];

const AppHeader: React.FC<IAppHeaderProps> = ({ variant = 'landing' }) => {
  const isLanding = variant === 'landing';

  return (
    <div className={styles.header}>
      <Link href="/">
        <AppLogo />
      </Link>
      {isLanding && (
        <nav>
          <ul className="w-flex w-flex-center w-gap-32">
            {navigation.map(item => (
              <li key={item.id}>
                <a
                  className="w-link"
                  href="#"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div className="w-flex w-gap-12">
        <WButton
          text="Войти"
          href="/login"
        />
        <WButton
          text={isLanding ? 'Начать бесплатно' : 'Регистрация'}
          href={isLanding ? '/generation' : '/registration'}
          type={EBUTTON_TYPE.FILLED}
        />
      </div>
    </div>
  );
};

export default AppHeader;
