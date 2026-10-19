import AppHeader from "@/components/header/AppHeader";
import AppFooter from '@/components/footer/AppFooter';

const MainPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AppHeader />
      tut main page layout
      {children}
      <AppFooter />
    </div>
  );
}

export default MainPageLayout;
