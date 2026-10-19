'use client';

import { useState } from 'react';
import clsx from '@/app/utils/style-utils/clsx';
import ideaRateStyles from '@/app/(views)/generation/components/idea-rate/idea-rate.module.scss';
import RateInput from '@/components/ui/rate-input/RateInput';

const IdeaRate = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className={clsx('w-p-20 w-text-center', ideaRateStyles.panel)}>
      <div className="w-text-sm w-fweight-500 w-text-color--cream w-mb-8">
        Уже пробовали это?
      </div>
      <div className="w-text-xs w-text-color--muted w-mb-12">
        {rating
          ? 'Спасибо! AI обновил ваш вкусовой профиль'
          : 'Поставьте оценку, чтобы AI лучше понимал ваши вкусы'}
      </div>
      <RateInput
        value={rating}
        onChange={setRating}
      />
    </div>
  );
};

export default IdeaRate;
