import workDescriptionStyles from '@/app/(views)/(main-page)/components/WorkDescription/workDescription.module.scss';
import Image from 'next/image';
import clock from '@/assets/static-icons/clock.svg';
import rate from '@/assets/static-icons/rate.svg';
import generated from '@/assets/static-icons/generated.svg';
import { useMemo } from 'react';
import clsx from '@/app/utils/style-utils/clsx';

export interface IWorkDescriptionCardProps {
  order: string
  text: string
  description: string
  icon: 'clock' | 'rate' | 'generated'
}

const WorkDescriptionCard: React.FC<IWorkDescriptionCardProps> = ({ order, text, description, icon }) => {
  const getIcon = useMemo(() => {
    if (icon === 'clock') {
      return clock;
    }

    if (icon === 'generated') {
      return generated;
    }

    return rate;
  }, [icon]);
  return (
    <div className={clsx('w-card', workDescriptionStyles.card)}>
      <div className={workDescriptionStyles.cardNumber}>
        {order}
      </div>
      <div className={workDescriptionStyles.iconContainer}>
        <Image
          alt="clock"
          src={getIcon}
          height={28}
          width={28}
        />
      </div>
      <div className={workDescriptionStyles.cardText}>
        {text}
      </div>
      <span className={workDescriptionStyles.cardDescription}>
        {description}
      </span>
    </div>
  );
};

export default WorkDescriptionCard;
