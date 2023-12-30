"use client";

import { FC, ReactNode } from "react";

interface TemplateProps {
  children: ReactNode;
}

const Template: FC<TemplateProps> = ({ children }) => {
  return <div className="h-screen flex justify-center p-6">{children}</div>;
};

export default Template;
