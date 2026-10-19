import Image from 'next/image';
import clsx from '@/app/utils/style-utils/clsx';
import authPromoStyles from '@/app/(views)/(auth)/components/auth-promo/auth-promo.module.scss';
import AiBadge from '@/components/ui/ai-badge/AiBadge';
import RateStars from '@/components/rate-stars/RateStars';
import masks from '@/assets/static-icons/masks.svg';

interface IPromoAvatar {
  id: number
  letter: string
  gradient: string
}

const avatars: Array<IPromoAvatar> = [
  { id: 1, letter: 'А', gradient: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))' },
  { id: 2, letter: 'Д', gradient: 'linear-gradient(135deg, var(--accent-blue), var(--accent-violet))' },
  { id: 3, letter: 'О', gradient: 'linear-gradient(135deg, var(--accent-green), var(--accent-green-dark))' },
];

const AuthPromo = () => {
  return (
    <div className={clsx('w-flex-column w-gap-24', authPromoStyles.promo)}>
      <div className="w-flex w-flex-column w-gap-12">
        <div className={clsx('w-flex--inline w-align-center w-gap-8 w-px-12 w-py-6', authPromoStyles.tag)}>
          <AiBadge text="AI 2.0" />
          <span className={clsx('w-text-xs w-fweight-600 w-text-color--accent', authPromoStyles.tagText)}>
            Умный планер
          </span>
        </div>

        <h2 className={clsx('w-fweight-900', authPromoStyles.headLine)}>
          Ваш личный гид по
          <br />
          <span className="w-gradient-text">ярким выходным</span>
        </h2>

        <p className={clsx('w-text-sm w-text-color--muted', authPromoStyles.description)}>
          Войдите, чтобы получать персональные подборки мероприятий, вести историю впечатлений и открывать новые места города.
        </p>
      </div>

      <div className={clsx('w-card w-p-20', authPromoStyles.previewCard)}>
        <div className="w-flex w-align-center w-justify-space-between w-gap-12 w-mb-16">
          <div className="w-flex w-align-center w-gap-12">
            <div className={clsx('w-flex w-flex-center w-flex-shrink-0', authPromoStyles.previewIcon)}>
              <Image
                src={masks}
                alt=""
                width={24}
                height={24}
              />
            </div>
            <div>
              <div className="w-text-sm w-fweight-600">Выставка «Иллюзии света»</div>
              <div className="w-text-xs w-text-color--muted">Суббота · Москва · 2 человека</div>
            </div>
          </div>
          <RateStars
            total={5}
            filled={5}
          />
        </div>

        <div className={clsx('w-flex w-align-center w-justify-space-between w-p-12 w-text-xs', authPromoStyles.match)}>
          <span className="w-text-color--muted">Совпадение с вашими вкусами:</span>
          <span className="w-fweight-700 w-gradient-text">98% Match</span>
        </div>
      </div>

      <div className="w-flex w-align-center w-gap-16 w-pt-8">
        <div className="w-flex">
          {avatars.map(avatar => (
            <div
              key={avatar.id}
              className={clsx('w-flex w-flex-center w-text-xs w-fweight-700', authPromoStyles.avatar)}
              style={{ background: avatar.gradient }}
            >
              {avatar.letter}
            </div>
          ))}
        </div>
        <div className="w-text-xs w-text-color--muted">
          Присоединяйтесь к
          {' '}
          <strong className="w-text-color--cream">7 000+</strong>
          {' '}
          любителям активного отдыха
        </div>
      </div>
    </div>
  );
};

export default AuthPromo;
