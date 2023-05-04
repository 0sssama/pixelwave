import { globalTransition } from "@/utils/globalTransition";
import { globalVariant } from "@/utils/globalVariant";
import { AnimationControls, motion } from "framer-motion";

export interface WorkflowItemProps {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  duration: string;
  control: AnimationControls;
}

function WorkflowItem({
  id,
  title,
  subtitle,
  image,
  description,
  duration,
  control,
}: WorkflowItemProps) {
  return (
    <motion.div
      className="WorkflowItem"
      variants={globalVariant}
      initial="hidden"
      animate={control}
      transition={{
        ...globalTransition,
        delay: 0.4 + (id + 1) * 0.6,
      }}
    >
      <div className="WorkflowItem__image">
        <img src={image} alt={title} />
      </div>
      <div className="WorkflowItem__content">
        <div className="WorkflowItem__duration">
          <p>{duration}</p>
        </div>
        <h1 className="WorkflowItem__title">
          {id + 1}. {title}
        </h1>
        <h3 className="WorkflowItem__subtitle">{subtitle}</h3>
        <p className="WorkflowItem__description">{description}</p>
      </div>
    </motion.div>
  );
}

export default WorkflowItem;
