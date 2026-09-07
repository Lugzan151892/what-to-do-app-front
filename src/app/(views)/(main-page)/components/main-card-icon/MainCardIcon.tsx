import maincardiconStyles from '@/app/(views)/(main-page)/components/main-card-icon/maincardicon.module.scss';
import Image from 'next/image';
import clock from '@/assets/static-icons/clock.svg';
import rate from '@/assets/static-icons/rate.svg';
import generated from '@/assets/static-icons/generated.svg';
import brain from '@/assets/static-icons/brain.svg';
import calendar from '@/assets/static-icons/calendar.svg';
import cityMap from '@/assets/static-icons/city-map.svg';
import groupPeople from '@/assets/static-icons/group-people.svg';
import refreshNew from '@/assets/static-icons/refresh-new.svg';
import { useMemo } from 'react';

export type TMainCardIcon = 'clock' | 'rate' | 'generated' | 'brain' | 'calendar' | 'city-map' | 'group-people' | 'refresh-new';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<TMainCardIcon, any> = {
  clock,
  rate,
  generated,
  brain,
  calendar,
  'city-map': cityMap,
  'group-people': groupPeople,
  'refresh-new': refreshNew,
} as const;

interface IMainCardIconProps {
  icon: TMainCardIcon
}

const MainCardIcon: React.FC<IMainCardIconProps> = ({ icon }) => {
  const getIcon = useMemo(() => iconMap[icon], [icon]);

  return (
    <div className={maincardiconStyles.container}>
      <Image
        alt="clock"
        src={getIcon}
        height={28}
        width={28}
      />
    </div>
  );
};

export default MainCardIcon;
