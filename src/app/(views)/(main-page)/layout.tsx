import AppHeader from "@/components/header/AppHeader";

const MainPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AppHeader />
      tut main page layout
      {children}
    </div>
  );
}

export default MainPageLayout;
