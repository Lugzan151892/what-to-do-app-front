import Image from 'next/image';
import iceSkate from '@/assets/static-icons/activitys/ice-skate.svg';
import movie from '@/assets/static-icons/activitys/movie.svg';
import museumArt from '@/assets/static-icons/activitys/museum-art.svg';
import { useMemo } from 'react';
import opportunitiesStyles from '@/app/(views)/(main-page)/components/opportunities-section/opportunities.module.scss';
import RateStars from '@/components/rate-stars/RateStars';
import clsx from '@/app/utils/style-utils/clsx';

export interface IOpportunityActivityItem {
  id: number
  icon: 'ice-skate' | 'movie' | 'museum-art'
  text: string
  date: string
  rate: number
}

const imagesMap = {
  'ice-skate': iceSkate,
  'movie': movie,
  'museum-art': museumArt,
} as const;

const OpportunityActivityRow: React.FC<Omit<IOpportunityActivityItem, 'id'>> = ({ icon, text, date, rate }) => {
  const getIcon = useMemo(() => imagesMap[icon], [icon]);
  return (
    <div className={clsx(opportunitiesStyles.activityRowWrapper, 'w-flex w-p-12 w-align-center')}>
      <div className="w-flex w-flex-center w-p-6 w-mr-12">
        <Image
          alt={getIcon}
          src={getIcon}
          width={16}
          height={16}
        />
      </div>
      <div className="w-flex w-flex-column">
        <div className="w-text-color--cream w-fweight-500">
          {text}
        </div>
        <div className="w-text-xs w-text-color--muted">
          {date}
        </div>
      </div>
      <div className="w-ml-auto">
        <RateStars
          total={5}
          filled={rate}
        />
      </div>
    </div>
  );
};

export default OpportunityActivityRow;
