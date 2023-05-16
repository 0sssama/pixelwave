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
    image: "/assets/projects/1337-companies.jpg",
    title: "1337 Companies",
    description:
      "Landing page for 1337 Companies, a dashboard that connects hiring companies with highly skilled graduate students from 1337 School.",
  },
  {
    image: "/assets/projects/palais-shazam.jpg",
    title: "Palais Shazam",
    description:
      "Captivating hotel landing page that showcases the hotel's amenities and services, along with a user-friendly booking dashboard.",
  },
  {
    image: "/assets/projects/Jewelry-Website.png",
    title: "Jewelry Website",
    description:
      "Lovelvin is an eccomerce website, specialized in selling different types of jewelry.",
  },
  {
    image: "/assets/projects/vision-unik.jpg",
    title: "Vision Unik",
    description:
      "Intuitive website for a prominent French optician store franchise, featuring a comprehensive range of eyewear products.",
  },
];

export default Portfolio;
