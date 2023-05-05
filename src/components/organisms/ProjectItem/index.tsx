import { globalTransition } from "@/utils/globalTransition";
import { globalVariant } from "@/utils/globalVariant";
import { AnimationControls, motion } from "framer-motion";

export interface ProjectItemProps {
  id: number;
  image: string;
  title: string;
  description: string;
  control: AnimationControls;
}

function ProjectItem({
  id,
  image,
  title,
  description,
  control,
}: ProjectItemProps) {
  return (
    <motion.div
      className="ProjectItem"
      variants={globalVariant}
      initial="hidden"
      animate={control}
      transition={{
        ...globalTransition,
        delay: 0.4 + (id + 1) * 0.6,
      }}
    >
      <div className="ProjectItem__image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="ProjectItem__content">
        <h1>{title}</h1>
        <article>{description}</article>
      </div>
    </motion.div>
  );
}

export default ProjectItem;
