import { globalTransition } from "@/utils/globalTransition";
import { globalVariant } from "@/utils/globalVariant";
import { AnimationControls, motion } from "framer-motion";

export interface AppFeatureProps {
  id: number;
  icon: string;
  title: string;
  description: string;
  control: AnimationControls;
}

function AppFeature({
  id,
  icon,
  title,
  description,
  control,
}: AppFeatureProps) {
  return (
    <motion.div
      className="AppFeature"
      variants={globalVariant}
      initial="hidden"
      animate={control}
      transition={{
        ...globalTransition,
        delay: 0.2 + (id + 1) * 0.2,
      }}
    >
      <img src={icon} alt={title} loading="lazy" />
      <h2>{title}</h2>
      <article>{description}</article>
    </motion.div>
  );
}

export default AppFeature;
