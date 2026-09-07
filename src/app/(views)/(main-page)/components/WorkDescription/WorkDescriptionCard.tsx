import workDescriptionStyles from '@/app/(views)/(main-page)/components/WorkDescription/workDescription.module.scss';
import clsx from '@/app/utils/style-utils/clsx';
import MainCardIcon, { TMainCardIcon } from '../main-card-icon/MainCardIcon';

export interface IWorkDescriptionCardProps {
  order: string
  text: string
  description: string
  icon: TMainCardIcon
}

const WorkDescriptionCard: React.FC<IWorkDescriptionCardProps> = ({ order, text, description, icon }) => {
  return (
    <div className={clsx('w-card', workDescriptionStyles.card)}>
      <div className={workDescriptionStyles.cardNumber}>
        {order}
      </div>
      <MainCardIcon
        icon={icon}
      />
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
