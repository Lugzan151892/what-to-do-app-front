import generatedCardStyles from '@/app/(views)/(main-page)/components/generated-card/generated-card.module.scss';
import clsx from '@/app/utils/style-utils/clsx';
import Image, { StaticImageData } from 'next/image';

interface IGeneratedCardProps {
  background?: string | StaticImageData
  title: string
  description: string
  isNew?: boolean
}

const GeneratedCard: React.FC<IGeneratedCardProps> = ({ background, title, description, isNew }) => {
  return (
    <div className={clsx('w-card w-w-full')}>
      <div className={clsx('w-relative', generatedCardStyles.header)}>
        {!!background && (
          <Image
            className={generatedCardStyles.image}
            alt="background"
            src={background}
            fill
          />
        )}
        {isNew && (
          <div className={clsx('w-absolute w-fweight-600 w-text-xs w-py-4 w-px-10', generatedCardStyles.badge)}>
            Новинка
          </div>
        )}
        <div>
          <span>
            { title }
          </span>
          <span>
            { description }
          </span>
        </div>
      </div>
      <div className="w-p-16">
        footer
      </div>
    </div>
  );
};

export default GeneratedCard;
