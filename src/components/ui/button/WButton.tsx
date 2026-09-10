'use client';

import styles from '@/components/ui/button/wbutton.module.scss';
import { EBUTTON_SIZE, EBUTTON_TYPE } from './interfaces';
import { useMemo } from 'react';
import clsx from '@/app/utils/style-utils/clsx';

interface IWButtonProps {
  radius?: number
  paddingX?: number
  paddingY?: number
  text: string
  textSize?: EBUTTON_SIZE
  type?: EBUTTON_TYPE
  fullWidth?: boolean
  selected?: boolean
  onClick: () => void
}

const WButton: React.FC<IWButtonProps> = ({
  text,
  type = EBUTTON_TYPE.BORDERED,
  textSize = EBUTTON_SIZE.XS,
  selected,
  fullWidth,
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
      className={clsx(
        styles.button,
        className,
        selected && styles.selected,
        fullWidth && styles.fullWidth,
        textSize === EBUTTON_SIZE.XS && 'w-text-xs',
        textSize === EBUTTON_SIZE.SM && 'w-text-sm',
      )}
      onClick={onClick}
      style={computedStyles}
    >
      {text}
    </button>
  );
};

export default WButton;
