"use client";
import { FC } from "react";

interface TitlesectionProps {
  title: string;
  subHeading?: string;
  pill: string;
}

const Titlesection: FC<TitlesectionProps> = ({ pill, title, subHeading }) => {
  return (
    <>
      <section className="flex flex-col gap-4 justify-center items-center md:items-center">
        <article className="rounded-full p-[1px] text-sm dark:bg-gradient-to-r dark:from-primary dark:to-primary">
          <div className="rounded-full px-3 py-1 dark:bg-black">{pill}</div>
        </article>
        {subHeading ? (
          <>
            <h2 className="text-left text-3xl font-semibold sm:text-5xl sm:max-w-[750px] md:text-center">
              {title}
            </h2>
            <p className="dark:text-primary/70 sm:max-w-[450px] md:text-center">
              {subHeading}
            </p>
          </>
        ) : (
          <h1 className="text-left text-4xl sm:text-6xl sm:max-w-[850px] md:text-center font-semibold">
            {title}
          </h1>
        )}
      </section>
    </>
  );
};

export default Titlesection;
