'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import clsx from '@/app/utils/style-utils/clsx';
import communityFeedStyles from '@/app/(views)/generation/components/community-feed/community-feed.module.scss';
import IdeaCard from '@/app/(views)/generation/components/idea-card/IdeaCard';
import PulsedDot from '@/components/ui/pulsed-dot/PulsedDot';
import WTabsSwitch from '@/components/ui/tabs-switch/WTabsSwitch';
import WButton from '@/components/ui/button/WButton';
import { EBUTTON_SIZE } from '@/components/ui/button/interfaces';
import { IOption, TOptionId } from '@/components/ui/interfaces';
import { feedItems, getIdeaById } from '@/mocks/ideas';
import refresh from '@/assets/static-icons/refresh.svg';

const filterOptions: Array<IOption> = [
  { id: 'all', text: 'Все' },
  { id: 'popular', text: 'Популярное' },
];

const CommunityFeed = () => {
  const [filter, setFilter] = useState<TOptionId>('all');

  const items = useMemo(() => {
    return feedItems
      .filter(item => filter === 'all' || item.isPopular)
      .flatMap((item) => {
        const idea = getIdeaById(item.ideaId);

        return idea ? [{ ...item, idea }] : [];
      });
  }, [filter]);

  return (
    <section>
      <div className={clsx('w-flex w-justify-space-between w-gap-16 w-mb-32', communityFeedStyles.header)}>
        <div>
          <div className="w-flex w-align-center w-gap-12 w-mb-4">
            <PulsedDot />
            <h1 className={clsx('w-fweight-700', communityFeedStyles.title)}>
              Прямо сейчас в Москве
            </h1>
          </div>
          <p className="w-text-sm w-text-color--muted">
            Свежие идеи, которые AI только что нашёл для других пользователей. Вдохновляйтесь!
          </p>
        </div>
        <div className="w-align-self-start w-flex-shrink-0">
          <WTabsSwitch
            options={filterOptions}
            value={filter}
            onChange={setFilter}
          />
        </div>
      </div>

      <div className={communityFeedStyles.grid}>
        {items.map(item => (
          <IdeaCard
            key={item.id}
            idea={item.idea}
            slotFooter={(
              <div className={clsx('w-flex w-align-center w-justify-space-between w-pt-12', communityFeedStyles.footer)}>
                <div className="w-flex w-align-center w-gap-8">
                  <span className={clsx('w-flex w-flex-center w-fweight-700', communityFeedStyles.avatar)}>
                    {item.avatarLetter}
                  </span>
                  <span className="w-text-xs w-text-color--muted">
                    {`${item.forWhom}, ${item.timeAgo}`}
                  </span>
                </div>
                <span className="w-text-xs w-fweight-600 w-gradient-text">
                  {item.label ?? `${item.idea.match}% Match`}
                </span>
              </div>
            )}
          />
        ))}
      </div>

      <div className="w-flex w-justify-center w-mt-32">
        <WButton
          text="Показать ещё идеи"
          textSize={EBUTTON_SIZE.SM}
          radius={12}
          paddingX={24}
          paddingY={12}
          slotBefore={(
            <Image
              src={refresh}
              alt=""
              width={16}
              height={16}
            />
          )}
        />
      </div>
    </section>
  );
};

export default CommunityFeed;
