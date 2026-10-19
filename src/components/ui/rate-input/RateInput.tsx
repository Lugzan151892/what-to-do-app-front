'use client';

import { useState } from 'react';
import clsx from '@/app/utils/style-utils/clsx';
import rateInputStyles from '@/components/ui/rate-input/rate-input.module.scss';

interface IRateInputProps {
  value?: number
  total?: number
  size?: number
  onChange?: (value: number) => void
}

const RateInput: React.FC<IRateInputProps> = ({
  value = 0,
  total = 5,
  size = 24,
  onChange,
}) => {
  const [hovered, setHovered] = useState(0);

  const active = hovered || value;

  return (
    <div
      className="w-flex w-justify-center w-gap-4"
      onMouseLeave={() => setHovered(0)}
    >
      {Array.from({ length: total }, (_, i) => i + 1).map(star => (
        <button
          key={star}
          type="button"
          aria-label={`Оценка ${star}`}
          className={clsx(rateInputStyles.star, active >= star && rateInputStyles.filled)}
          style={{ fontSize: `${size}px`, lineHeight: `${size + 4}px` }}
          onMouseEnter={() => setHovered(star)}
          onClick={() => onChange?.(star)}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default RateInput;
