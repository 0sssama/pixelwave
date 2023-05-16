import { ReviewItem, SectionHeader } from "@/components/organisms";
import { useInViewControl } from "@/utils/useInViewControl";
import React from "react";

function Reviews() {
  const { ref, control } = useInViewControl();

  return (
    <div className="Reviews Section" ref={ref}>
      <SectionHeader
        subtitle="OUR CLIENTS'"
        title="REVIEWS"
        control={control}
      />
      <div className="ReviewItems-wrapper">
        {reviews.map((review, index) => (
          <ReviewItem key={index} id={index} control={control} {...review} />
        ))}
      </div>
    </div>
  );
}

const reviews = [
  {
    image: "/assets/reviews/larbi.png",
    name: "EL MAHDOURI Jilali",
    title: "Project Manager at 1337 Companies",
    text: "We are extremely impressed by Pixelwave's expertise in crafting our landing page. They perfectly captured the essence of our school, 1337, and created a visually stunning and user-friendly interface.",
  },
  {
    image: "/assets/reviews/khok.png",
    name: "MANSOURI Hatim",
    title: "CEO & Manager of Palais Shazam",
    text: "The Pixelwave team has been a fantastic partner in helping me bring my vision to life. They are incredibly knowledgeable and responsive group of passionate individuals. I couldn't be happier with the website they created for my hotel.",
  },
  {
    image: "/assets/reviews/chakchak.png",
    name: "ANDALOUSSI Mohamed",
    title: "Director of Vision Unik Fes",
    text: "We couldn't be happier with the website that Pixelwave developed for our optician store. They perfectly understood our brand and customer needs, creating a seamless browsing experience that allows our customers to easily find and purchase their desired eyewear products. Thank you!",
  },
];

export default Reviews;
