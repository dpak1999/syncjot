import { FC, ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
  params: any;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children, params }) => {
  return <main className="flex overflow-hidden h-screen">{children}</main>;
};

export default DashboardLayout;
