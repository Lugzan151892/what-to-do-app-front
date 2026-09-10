'use client';

import styles from '@/components/ui/button/wbutton.module.scss';
import { EBUTTON_TYPE } from './interfaces';
import { useMemo } from 'react';
import clsx from '@/app/utils/style-utils/clsx';

interface IWButtonProps {
  radius?: number
  paddingX?: number
  paddingY?: number
  text: string
  type?: EBUTTON_TYPE
  onClick: () => void
}

const WButton: React.FC<IWButtonProps> = ({
  text,
  type = EBUTTON_TYPE.BORDERED,
  radius = 999,
  paddingX = 20,
  paddingY = 10,
  onClick,
}) => {
  const className = useMemo(() => {
    if (type === EBUTTON_TYPE.BORDERED) {
      return styles.wButtonBordered;
    }

    return styles.wButtonFilled;
  }, [type]);

  const computedStyles = useMemo(() => ({
    borderRadius: `${radius}px`,
    paddingTop: `${paddingY}px`,
    paddingBottom: `${paddingY}px`,
    paddingLeft: `${paddingX}px`,
    paddingRight: `${paddingX}px`,
  }), [radius, paddingY, paddingX]);

  return (
    <button
      className={clsx(styles.button, className)}
      onClick={onClick}
      style={computedStyles}
    >
      {text}
    </button>
  );
};

export default WButton;
