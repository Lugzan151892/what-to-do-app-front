import clsx from '@/app/utils/style-utils/clsx';
import generationLayoutStyles from '@/app/(views)/generation/styles/generation-layout.module.scss';
import AppHeader from '@/components/header/AppHeader';
import AppFooter from '@/components/footer/AppFooter';

const GenerationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={clsx('w-flex w-flex-column w-text-color--cream', generationLayoutStyles.page)}>
      <div className={generationLayoutStyles.noise} />
      <div className={clsx(generationLayoutStyles.orb, generationLayoutStyles.orbAccent)} />
      <div className={clsx(generationLayoutStyles.orb, generationLayoutStyles.orbSecondary)} />

      <AppHeader variant="app" />

      <div className={generationLayoutStyles.content}>
        {children}
      </div>

      <AppFooter />
    </div>
  );
};

export default GenerationLayout;
