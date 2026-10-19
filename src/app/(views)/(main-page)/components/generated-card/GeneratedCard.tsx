import generatedCardStyles from '@/app/(views)/(main-page)/components/generated-card/generated-card.module.scss';
import clsx from '@/app/utils/style-utils/clsx';
import Image, { StaticImageData } from 'next/image';

interface IGeneratedCardProps {
  background?: string | StaticImageData
  title: string
  description: string
  tags?: Array<string>
  isNew?: boolean
  highlighted?: boolean
  imageHeight?: number
  onDetailsClick?: () => void
}

const GeneratedCard: React.FC<IGeneratedCardProps> = ({
  background,
  title,
  description,
  tags = [],
  isNew,
  highlighted,
  imageHeight = 144,
  onDetailsClick,
}) => {
  return (
    <div className={clsx('w-card w-w-full', generatedCardStyles.card, highlighted && generatedCardStyles.highlighted)}>
      <div
        className={clsx('w-relative', generatedCardStyles.header)}
        style={{ height: `${imageHeight}px` }}
      >
        {!!background && (
          <Image
            className={generatedCardStyles.image}
            alt={title}
            src={background}
            sizes="(min-width: 768px) 50vw, 100vw"
            fill
          />
        )}
        <div className={clsx('w-absolute', generatedCardStyles.overlay)} />
        {isNew && (
          <div className={clsx('w-absolute w-fweight-600 w-text-xs w-py-4 w-px-10', generatedCardStyles.badge)}>
            Новинка
          </div>
        )}
        <div className={clsx('w-absolute w-flex w-flex-column', generatedCardStyles.caption)}>
          <span className="w-text-base w-fweight-700 w-text-color--cream">
            {title}
          </span>
          <span className="w-text-xs w-text-color--muted">
            {description}
          </span>
        </div>
      </div>
      <div className="w-p-16 w-flex w-align-center w-flex--space-between w-gap-12">
        <div className="w-flex w-flex-wrap w-gap-12">
          {tags.map(tag => (
            <span
              key={tag}
              className={clsx('w-text-xs w-py-4 w-px-10 w-text-color--muted', generatedCardStyles.tag)}
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          type="button"
          className={clsx('w-text-xs w-fweight-600 w-text-color--accent w-flex-shrink-0', generatedCardStyles.details)}
          onClick={onDetailsClick}
        >
          Детали →
        </button>
      </div>
    </div>
  );
};

export default GeneratedCard;
