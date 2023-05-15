import { ProjectItem, SectionHeader } from "@/components/organisms";
import { ProjectItemProps } from "@/components/organisms/ProjectItem";
import { useInViewControl } from "@/utils/useInViewControl";
import React from "react";

function Portfolio() {
  const { ref, control } = useInViewControl();

  return (
    <div className="Portfolio Section" ref={ref} id="portfolio">
      <SectionHeader
        control={control}
        subtitle="Projects we've"
        title="Worked on"
      />
      <div className="ProjectItems-wrapper">
        {items.map((item, index) => (
          <ProjectItem key={index} id={index} control={control} {...item} />
        ))}
      </div>
    </div>
  );
}

const items: Omit<ProjectItemProps, "id" | "control">[] = [
  {
    image: "/assets/projects/Travel-Website.png",
    title: "Travel Website",
    description:
      "A traveling landing page to book flights to different countries and cities.",
  },
  {
    image: "/assets/projects/Smart-Insurance.png",
    title: "Smart Insurance",
    description:
      "Smart Insurance is an app  is designed to make finding medical professionals easy.",
  },
  {
    image: "/assets/projects/Jewelry-Website.png",
    title: "Jewelry Website",
    description:
      "Lovelvin is an eccomerce website, specialized in selling different types of jewelry.",
  },
  {
    image: "/assets/projects/Personal-Banking.png",
    title: "Personal Banking",
    description:
      "Ausbang is a personal banking, where you can withdraw money, pay online and manage your fortune.",
  },
];

export default Portfolio;
