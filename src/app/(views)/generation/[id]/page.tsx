import Image from 'next/image';
import { notFound } from 'next/navigation';
import clsx from '@/app/utils/style-utils/clsx';
import plural from '@/app/utils/text/plural';
import generationStyles from '@/app/(views)/generation/styles/generation.module.scss';
import ideaPageStyles from '@/app/(views)/generation/[id]/styles/idea-page.module.scss';
import BackLink from '@/app/(views)/generation/components/back-link/BackLink';
import GlassTag from '@/app/(views)/generation/components/glass-tag/GlassTag';
import StatBadge from '@/app/(views)/generation/components/stat-badge/StatBadge';
import IdeaActionPanel from '@/app/(views)/generation/components/idea-action-panel/IdeaActionPanel';
import IdeaRate from '@/app/(views)/generation/components/idea-rate/IdeaRate';
import PulsedDot from '@/components/ui/pulsed-dot/PulsedDot';
import YandexMap from '@/components/yandex-map/YandexMap';
import { getIdeaById, ideas } from '@/mocks/ideas';
import eye from '@/assets/static-icons/eye.svg';
import heart from '@/assets/static-icons/heart.svg';
import locationPin from '@/assets/static-icons/location-pin.svg';
import externalLink from '@/assets/static-icons/external-link.svg';

interface IIdeaPageProps {
  params: Promise<{ id: string }>
}

export const generateStaticParams = () => {
  return ideas.map(idea => ({ id: idea.id }));
};

const IdeaPage = async ({ params }: IIdeaPageProps) => {
  const { id } = await params;
  const idea = getIdeaById(id);

  if (!idea) {
    notFound();
  }

  const characteristics = [
    { id: 'duration', emoji: '⏳', label: 'Длительность', value: idea.duration },
    { id: 'group', emoji: '👥', label: 'Для кого', value: idea.groupSize },
    { id: 'vibe', emoji: '🎭', label: 'Вайб', value: idea.vibe },
    { id: 'time', emoji: idea.timeOfDay === 'Вечер' ? '🌙' : '☀️', label: 'Время', value: idea.timeOfDay },
  ];

  return (
    <main className={generationStyles.ideaLayout}>
      <div className="w-mb-16">
        <BackLink
          text="Назад к идеям"
          fallbackHref="/generation"
        />
      </div>

      <div className={clsx('w-relative w-mb-32', ideaPageStyles.hero, generationStyles.fadeUp)}>
        <Image
          className={ideaPageStyles.heroImage}
          src={idea.image}
          alt={idea.title}
          sizes="(min-width: 1200px) 1200px, 100vw"
          priority
          fill
        />
        <div className={clsx('w-absolute', ideaPageStyles.heroOverlay)} />

        <div className={clsx('w-absolute w-flex w-gap-8', ideaPageStyles.heroTags)}>
          {idea.categories.map(category => (
            <GlassTag
              key={category}
              text={category}
              uppercase
            />
          ))}
        </div>

        <div className={clsx('w-absolute', ideaPageStyles.heroContent)}>
          <h1 className={clsx('w-fweight-900 w-mb-16', ideaPageStyles.heroTitle)}>
            {idea.title}
          </h1>
          <div className="w-flex w-flex-wrap w-align-center w-gap-12">
            <StatBadge
              variant="rating"
              slotBefore={<span className={ideaPageStyles.star}>★</span>}
            >
              <span className="w-fweight-700">{idea.rating}</span>
              <span className="w-text-color--muted">
                {`(${idea.ratingsCount} ${plural(idea.ratingsCount, ['оценка', 'оценки', 'оценок'])})`}
              </span>
            </StatBadge>
            <StatBadge
              slotBefore={(
                <Image
                  src={eye}
                  alt=""
                  width={16}
                  height={16}
                />
              )}
            >
              {`${idea.viewsWeek} смотрели на этой неделе`}
            </StatBadge>
            <StatBadge
              slotBefore={(
                <Image
                  className={ideaPageStyles.opaqueIcon}
                  src={heart}
                  alt=""
                  width={16}
                  height={16}
                />
              )}
            >
              {`${idea.savedCount} сохранили`}
            </StatBadge>
            <StatBadge
              variant="accent"
              slotBefore={<PulsedDot />}
            >
              {`${idea.watchingNow} ${plural(idea.watchingNow, ['человек смотрит', 'человека смотрят', 'человек смотрят'])} прямо сейчас`}
            </StatBadge>
          </div>
        </div>
      </div>

      <div className={generationStyles.ideaGrid}>
        <div
          className={clsx('w-flex w-flex-column w-gap-32', generationStyles.fadeUp)}
          style={{ animationDelay: '0.1s' }}
        >
          <section className={clsx(generationStyles.panel, generationStyles.panelPadding)}>
            <h2 className={clsx('w-fweight-700 w-mb-16', generationStyles.sectionTitle)}>
              О мероприятии
            </h2>
            <div className="w-flex w-flex-column w-gap-16">
              {idea.description.map(paragraph => (
                <p
                  key={paragraph}
                  className={generationStyles.ideaText}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className={clsx('w-fweight-700 w-mb-16', generationStyles.sectionTitle)}>
              Характеристики
            </h2>
            <div className={generationStyles.characteristics}>
              {characteristics.map(item => (
                <div
                  key={item.id}
                  className={clsx('w-p-16 w-flex w-flex-column w-flex-center w-text-center', generationStyles.panel)}
                >
                  <div className={clsx('w-flex w-flex-center w-mb-12', generationStyles.characteristicIcon)}>
                    {item.emoji}
                  </div>
                  <div className={clsx('w-mb-4', generationStyles.caption)}>
                    {item.label}
                  </div>
                  <div className="w-text-sm w-fweight-600 w-text-color--cream">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={clsx(generationStyles.panel, generationStyles.panelPadding)}>
            <h2 className={clsx('w-fweight-700 w-mb-16', generationStyles.sectionTitle)}>
              Где проходит
            </h2>
            <div className="w-flex w-align-start w-gap-16 w-mb-24">
              <div className={clsx('w-flex w-flex-center w-flex-shrink-0', generationStyles.placeIcon)}>
                <Image
                  src={locationPin}
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <div className="w-text-base w-fweight-600 w-text-color--cream w-mb-4">
                  {idea.place}
                </div>
                <div className="w-text-sm w-text-color--muted">
                  {idea.address}
                </div>
                {!!idea.metro && (
                  <div className={clsx('w-text-xs w-mt-4', generationStyles.metro)}>
                    {`🚇 ${idea.metro}`}
                  </div>
                )}
              </div>
            </div>
            <YandexMap
              coordinates={idea.coordinates}
              title={idea.place}
            />
            <a
              href={`https://yandex.ru/maps/?pt=${idea.coordinates[1]},${idea.coordinates[0]}&z=16&l=map`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-link w-flex--inline w-align-center w-gap-6 w-text-xs w-mt-12"
            >
              <Image
                src={externalLink}
                alt=""
                width={14}
                height={14}
              />
              Открыть в Яндекс Картах
            </a>
          </section>
        </div>

        <aside
          className={clsx(generationStyles.ideaAside, generationStyles.fadeUp)}
          style={{ animationDelay: '0.2s' }}
        >
          <IdeaActionPanel idea={idea} />
          <div className="w-mt-24">
            <IdeaRate />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default IdeaPage;
