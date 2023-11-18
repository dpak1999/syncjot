import { FC, ReactNode } from "react";

interface HomePageLayoutProps {
  children: ReactNode;
}

const HomePageLayout: FC<HomePageLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default HomePageLayout;
