import Link from 'next/link';
import Image from 'next/image';
import clsx from '@/app/utils/style-utils/clsx';
import bestMatchStyles from '@/app/(views)/generation/components/best-match-card/best-match-card.module.scss';
import GlassTag from '@/app/(views)/generation/components/glass-tag/GlassTag';
import WButton from '@/components/ui/button/WButton';
import { EBUTTON_SIZE, EBUTTON_TYPE } from '@/components/ui/button/interfaces';
import { IIdea } from '@/mocks/ideas';
import check from '@/assets/static-icons/check.svg';
import lightningAccent from '@/assets/static-icons/lightning-accent.svg';

interface IBestMatchCardProps {
  idea: IIdea
}

const BestMatchCard: React.FC<IBestMatchCardProps> = ({ idea }) => {
  const href = `/generation/${idea.id}`;

  const stats = [
    { id: 'when', label: 'Когда', value: idea.when },
    { id: 'duration', label: 'Длительность', value: idea.duration },
    { id: 'price', label: 'Бюджет', value: `${idea.price}${idea.priceUnit ? ` ${idea.priceUnit}` : ''}` },
    { id: 'place', label: 'Где', value: idea.place },
  ];

  return (
    <div className={clsx('w-card', bestMatchStyles.card)}>
      <div className={bestMatchStyles.layout}>
        <Link
          href={href}
          className={clsx('w-relative', bestMatchStyles.cover)}
        >
          <Image
            className={bestMatchStyles.image}
            src={idea.image}
            alt={idea.title}
            sizes="(min-width: 1024px) 40vw, 100vw"
            priority
            fill
          />
          <div className={clsx('w-absolute', bestMatchStyles.overlay)} />
          <div className={clsx('w-absolute', bestMatchStyles.badge)}>
            <GlassTag
              text={`${idea.match}% Совпадение`}
              slotBefore={<span className={bestMatchStyles.star}>★</span>}
              rounded
            />
          </div>
        </Link>

        <div className={clsx('w-flex w-flex-column w-justify-center', bestMatchStyles.content)}>
          <span className={clsx('w-fweight-700 w-text-color--accent w-mb-12', bestMatchStyles.preHeadLine)}>
            Выбор нейросети
          </span>

          <Link
            href={href}
            className={clsx('w-fweight-700 w-mb-16', bestMatchStyles.title)}
          >
            {idea.title}
          </Link>

          <div className={clsx('w-flex w-gap-12 w-p-16 w-mb-24', bestMatchStyles.insight)}>
            <Image
              className={bestMatchStyles.insightIcon}
              src={lightningAccent}
              alt=""
              width={20}
              height={20}
            />
            <div>
              <span className="w-text-sm w-fweight-600 w-text-color--cream w-mb-4 w-flex">
                Почему вам это понравится:
              </span>
              <p className={clsx('w-text-sm', bestMatchStyles.insightText)}>
                {idea.aiReason}
              </p>
            </div>
          </div>

          <div className={clsx('w-mb-32', bestMatchStyles.stats)}>
            {stats.map(stat => (
              <div key={stat.id}>
                <div className={clsx('w-mb-4', bestMatchStyles.statLabel)}>
                  {stat.label}
                </div>
                <div className="w-text-sm w-fweight-500 w-text-color--cream">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          <div className={bestMatchStyles.actions}>
            <div className="w-flex-grow-1">
              <WButton
                text="Сохранить в планы"
                type={EBUTTON_TYPE.GRADIENT}
                textSize={EBUTTON_SIZE.SM}
                radius={12}
                paddingY={14}
                paddingX={32}
                fullWidth
                slotBefore={(
                  <Image
                    src={check}
                    alt=""
                    width={16}
                    height={16}
                  />
                )}
              />
            </div>
            <WButton
              text="Подробнее →"
              href={href}
              textSize={EBUTTON_SIZE.SM}
              radius={12}
              paddingY={14}
              paddingX={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestMatchCard;
