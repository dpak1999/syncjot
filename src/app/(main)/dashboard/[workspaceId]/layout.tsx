import Sidebar from "@/components/sidebar/Sidebar";
import { FC, ReactNode } from "react";

interface IndividualWorkspaceLayoutProps {
  children: ReactNode;
  params: any;
}

const IndividualWorkspaceLayout: FC<IndividualWorkspaceLayoutProps> = ({
  children,
  params,
}) => {
  return (
    <main className="flex overflow-hidden h-screen w-screen">
      <Sidebar params={params} />
      <div className="w-full dark:border-Neutrals/neutrals-8/70 relative overflow-scroll border-l-[1px]">
        {children}
      </div>
    </main>
  );
};

export default IndividualWorkspaceLayout;
