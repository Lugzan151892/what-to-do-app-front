import Image from 'next/image';
import clsx from '@/app/utils/style-utils/clsx';
import socialAuthStyles from '@/app/(views)/(auth)/components/social-auth/social-auth.module.scss';
import vk from '@/assets/static-icons/social/vk.svg';
import yandex from '@/assets/static-icons/social/yandex.svg';
import telegram from '@/assets/static-icons/social/telegram.svg';

type TSocialProvider = 'vk' | 'yandex' | 'telegram';

interface ISocialProvider {
  id: TSocialProvider
  text: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<TSocialProvider, any> = {
  vk,
  yandex,
  telegram,
} as const;

const providers: Array<ISocialProvider> = [
  { id: 'vk', text: 'VK' },
  { id: 'yandex', text: 'Яндекс' },
  { id: 'telegram', text: 'Telegram' },
];

const SocialAuth = () => {
  return (
    <div>
      <div className={clsx('w-relative w-flex w-flex-center w-my-24', socialAuthStyles.divider)}>
        <span className={clsx('w-relative w-px-12 w-text-xs w-fweight-500 w-text-color--muted', socialAuthStyles.dividerText)}>
          или войти через
        </span>
      </div>

      <div className={socialAuthStyles.grid}>
        {providers.map(provider => (
          <button
            key={provider.id}
            type="button"
            className={clsx('w-flex w-flex-center w-gap-8 w-text-xs w-fweight-500', socialAuthStyles.button)}
          >
            <Image
              src={iconMap[provider.id]}
              alt=""
              width={16}
              height={16}
            />
            {provider.text}
          </button>
        ))}
      </div>

      <p className={clsx('w-mt-24 w-text-center w-text-color--muted', socialAuthStyles.policy)}>
        Нажимая кнопку, вы соглашаетесь с нашей
        {' '}
        <a
          href="#"
          className={socialAuthStyles.policyLink}
        >
          Политикой конфиденциальности
        </a>
      </p>
    </div>
  );
};

export default SocialAuth;
