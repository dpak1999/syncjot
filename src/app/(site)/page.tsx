import Titlesection from "@/components/landing-page/title-section";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <div className="px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
        <Titlesection
          pill="✨Your workspace re-imagined"
          title="An integrated Collab & Productivity Platform"
        />
        <div className="bg-white p-[2px] mt-[6] rounded-xl bg-gradient-to-r from-primary to-green-500 sm:w-[300px]"></div>
      </div>
    </section>
  );
};

export default HomePage;
