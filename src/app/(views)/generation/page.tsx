import clsx from '@/app/utils/style-utils/clsx';
import generationStyles from '@/app/(views)/generation/styles/generation.module.scss';
import GeneratorForm from '@/app/(views)/generation/components/generator-form/GeneratorForm';
import CommunityFeed from '@/app/(views)/generation/components/community-feed/CommunityFeed';
import { parseGenerationSettings, TSearchParams } from '@/app/utils/generation/generation-settings';

interface IGenerationPageProps {
  searchParams: Promise<TSearchParams>
}

const GenerationPage = async ({ searchParams }: IGenerationPageProps) => {
  const initialSettings = parseGenerationSettings(await searchParams);

  return (
    <main className={generationStyles.generatorLayout}>
      <aside className={clsx(generationStyles.generatorAside, generationStyles.fadeUp)}>
        <GeneratorForm initialSettings={initialSettings} />
      </aside>
      <div
        className={clsx(generationStyles.generatorFeed, generationStyles.fadeUp)}
        style={{ animationDelay: '0.15s' }}
      >
        <CommunityFeed />
      </div>
    </main>
  );
};

export default GenerationPage;
