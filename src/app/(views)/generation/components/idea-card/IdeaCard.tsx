import Link from 'next/link';
import Image from 'next/image';
import clsx from '@/app/utils/style-utils/clsx';
import ideaCardStyles from '@/app/(views)/generation/components/idea-card/idea-card.module.scss';
import GlassTag from '@/app/(views)/generation/components/glass-tag/GlassTag';
import { IIdea } from '@/mocks/ideas';
import bookmark from '@/assets/static-icons/bookmark.svg';
import locationPinLight from '@/assets/static-icons/location-pin-light.svg';

interface IIdeaCardProps {
  idea: IIdea
  tagText?: string
  slotFooter?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const IdeaCard: React.FC<IIdeaCardProps> = ({
  idea,
  tagText,
  slotFooter,
  className,
  style,
}) => {
  return (
    <Link
      href={`/generation/${idea.id}`}
      className={clsx('w-card w-flex w-flex-column', ideaCardStyles.card, className)}
      style={style}
    >
      <div className={clsx('w-relative', ideaCardStyles.cover)}>
        <Image
          className={ideaCardStyles.image}
          src={idea.image}
          alt={idea.title}
          sizes="(min-width: 768px) 50vw, 100vw"
          fill
        />
        <div className={clsx('w-absolute', ideaCardStyles.overlay)} />

        <div className={clsx('w-absolute w-flex w-justify-space-between w-align-start', ideaCardStyles.top)}>
          <GlassTag
            text={tagText ?? idea.categories[0]}
            uppercase
          />
          <span
            className={clsx('w-flex w-flex-center', ideaCardStyles.bookmark)}
            title="Сохранить идею"
          >
            <Image
              src={bookmark}
              alt=""
              width={16}
              height={16}
            />
          </span>
        </div>

        <div className={clsx('w-absolute', ideaCardStyles.caption)}>
          {!!idea.isNew && (
            <span className={clsx('w-fweight-700 w-mb-4', ideaCardStyles.newBadge)}>
              Новинка
            </span>
          )}
          <h3 className={clsx('w-fweight-700 w-mb-4', ideaCardStyles.title)}>
            {idea.title}
          </h3>
          <div className={clsx('w-flex w-align-center w-gap-8 w-text-xs', ideaCardStyles.info)}>
            <Image
              src={locationPinLight}
              alt=""
              width={14}
              height={14}
            />
            {idea.shortInfo}
          </div>
        </div>
      </div>

      <div className={clsx('w-p-16 w-flex w-flex-column w-justify-space-between w-flex-grow-1', ideaCardStyles.body)}>
        <p className={clsx('w-text-sm w-mb-16', ideaCardStyles.description)}>
          {idea.shortDescription}
        </p>
        {slotFooter}
      </div>
    </Link>
  );
};

export default IdeaCard;
