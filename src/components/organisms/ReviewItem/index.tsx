import { AnimationControls, motion } from "framer-motion";
import { globalTransition } from "@/utils/globalTransition";
import { globalVariant } from "@/utils/globalVariant";
import { BsStarFill } from "react-icons/bs";

export interface ReviewItemProps {
  id: number;
  image: string;
  name: string;
  title: string;
  text: string;
  control: AnimationControls;
}

function ReviewItem({
  id,
  image,
  name,
  title,
  text,
  control,
}: ReviewItemProps) {
  return (
    <motion.div
      className="ReviewItem"
      variants={globalVariant}
      initial="hidden"
      animate={control}
      transition={{
        ...globalTransition,
        delay: 0.4 + (id + 1) * 0.6,
      }}
    >
      <img src={image} alt={`${name} - ${title}`} />
      <h3>{name}</h3>
      <p>{title}</p>
      <article>{text}</article>
      <div className="stars-container">
        {[...Array(5)].map((_, index) => (
          <BsStarFill key={index} />
        ))}
      </div>
    </motion.div>
  );
}

export default ReviewItem;
