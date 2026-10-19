import Image from 'next/image';
import clsx from '@/app/utils/style-utils/clsx';
import generationStyles from '@/app/(views)/generation/styles/generation.module.scss';
import BestMatchCard from '@/app/(views)/generation/components/best-match-card/BestMatchCard';
import IdeaCard from '@/app/(views)/generation/components/idea-card/IdeaCard';
import AiBadge from '@/components/ui/ai-badge/AiBadge';
import WButton from '@/components/ui/button/WButton';
import { EBUTTON_SIZE } from '@/components/ui/button/interfaces';
import {
  buildGenerationQuery,
  getGenerationSummary,
  parseGenerationSettings,
  TSearchParams,
} from '@/app/utils/generation/generation-settings';
import { generationResult, getIdeaById, IIdea } from '@/mocks/ideas';
import arrowLeft from '@/assets/static-icons/arrow-left.svg';
import refresh from '@/assets/static-icons/refresh.svg';

interface IGenerationResultPageProps {
  searchParams: Promise<TSearchParams>
}

const GenerationResultPage = async ({ searchParams }: IGenerationResultPageProps) => {
  const settings = parseGenerationSettings(await searchParams);
  const query = buildGenerationQuery(settings);
  const summary = getGenerationSummary(settings);

  const bestMatch = getIdeaById(generationResult.bestMatchId);
  const alternatives = generationResult.alternativeIds
    .map(id => getIdeaById(id))
    .filter((idea): idea is IIdea => !!idea);

  return (
    <main className={generationStyles.resultLayout}>
      <div className={clsx('w-flex w-flex-column w-align-center w-text-center w-mb-48', generationStyles.fadeUp)}>
        <div className="w-mb-16">
          <AiBadge text="✓ План готов" />
        </div>
        <h1 className={clsx('w-fweight-900 w-mb-24', generationStyles.heroTitle)}>
          Ваши идеальные
          {' '}
          <span className="w-gradient-text">выходные</span>
        </h1>
        <div className="w-flex w-flex-wrap w-justify-center w-gap-8">
          {summary.map(item => (
            <span
              key={item.id}
              className={generationStyles.filterTag}
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>

      {!!bestMatch && (
        <div
          className={clsx('w-mb-48', generationStyles.fadeUp)}
          style={{ animationDelay: '0.1s' }}
        >
          <BestMatchCard idea={bestMatch} />
        </div>
      )}

      <div
        className={clsx('w-flex w-align-center w-gap-16 w-mb-24', generationStyles.fadeUp)}
        style={{ animationDelay: '0.2s' }}
      >
        <h2 className={clsx('w-fweight-700', generationStyles.sectionTitle)}>
          Отличные альтернативы
        </h2>
        <div className={generationStyles.divider} />
      </div>

      <div className={clsx('w-mb-48', generationStyles.cardsGrid)}>
        {alternatives.map((idea, index) => (
          <IdeaCard
            key={idea.id}
            idea={idea}
            tagText={`${idea.match}% Совпадение`}
            className={generationStyles.fadeUp}
            slotFooter={(
              <div className={clsx('w-flex w-align-center w-justify-space-between w-gap-12 w-pt-16 w-mt-auto', generationStyles.cardFooter)}>
                <span className="w-text-xs w-text-color--muted">
                  {idea.shortInfo}
                </span>
                <span className="w-text-xs w-fweight-600 w-text-color--accent w-flex-shrink-0">
                  Подробнее →
                </span>
              </div>
            )}
            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
          />
        ))}
      </div>

      <div className={generationStyles.bottomActions}>
        <WButton
          text="Изменить настройки"
          href={`/generation?${query}`}
          textSize={EBUTTON_SIZE.SM}
          radius={12}
          paddingX={24}
          paddingY={12}
          slotBefore={(
            <Image
              src={arrowLeft}
              alt=""
              width={16}
              height={16}
            />
          )}
        />
        <WButton
          text="Сгенерировать другие"
          href={`/generation/result?${query}`}
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
    </main>
  );
};

export default GenerationResultPage;
