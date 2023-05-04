import { motion, AnimationControls } from "framer-motion";
import { globalVariant } from "@/utils/globalVariant";
import { globalTransition } from "@/utils/globalTransition";

const SectionHeader = ({
  title,
  subtitle,
  control,
}: {
  title: string;
  subtitle: string;
  control: AnimationControls;
}) => {
  return (
    <div className="Section__header">
      <motion.h3
        variants={globalVariant}
        initial="hidden"
        animate={control}
        transition={{
          ...globalTransition,
          delay: 0.2,
        }}
      >
        {subtitle}
      </motion.h3>
      <motion.h1
        variants={globalVariant}
        initial="hidden"
        animate={control}
        transition={{
          ...globalTransition,
          delay: 0.4,
        }}
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default SectionHeader;
