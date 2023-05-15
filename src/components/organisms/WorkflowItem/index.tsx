import { globalTransition } from "@/utils/globalTransition";
import { globalVariant } from "@/utils/globalVariant";
import { AnimationControls, motion } from "framer-motion";
import { useEffect, useRef } from "react";

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
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncImageHeight = () => {
      if (!imageRef || !imageRef.current) return;
      if (window.innerWidth >= 600) return;

      const width = imageRef.current.clientWidth;
      imageRef.current.style.height = `${width}px`;
    };

    syncImageHeight();
    window.addEventListener("resize", syncImageHeight);
  }, [imageRef]);

  return (
    <motion.div
      className="WorkflowItem"
      variants={globalVariant}
      initial="hidden"
      animate={control}
      transition={{
        ...globalTransition,
        delay: 0.2 + (id + 1) * 0.4,
      }}
    >
      <div className="WorkflowItem__image" ref={imageRef}>
        <img src={image} alt={title} loading="lazy" />
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
