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
    image: "/assets/reviews/hatim.png",
    name: "Hatim Mzah",
    title: "CEO of N3as",
    text: "This company has been a fantastic partner in helping me bring my vision to life. Their team is incredibly knowledgeable and responsive. I couldn't be happier with the website they created for me.",
  },
  {
    image: "/assets/reviews/oussama.png",
    name: "Oussama Labrahmi",
    title: "CEO of N3as",
    text: "This company has been a fantastic partner in helping me bring my vision to life. Their team is incredibly knowledgeable and responsive. I couldn't be happier with the website they created for me.",
  },
  {
    image: "/assets/reviews/hamza.png",
    name: "Hamza Kornabi",
    title: "CEO of N3as",
    text: "This company has been a fantastic partner in helping me bring my vision to life. Their team is incredibly knowledgeable and responsive. I couldn't be happier with the website they created for me.",
  },
];

export default Reviews;
