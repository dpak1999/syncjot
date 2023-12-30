import Header from "@/components/landing-page/header";
import { FC, ReactNode } from "react";

interface HomePageLayoutProps {
  children: ReactNode;
}

const HomePageLayout: FC<HomePageLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HomePageLayout;
