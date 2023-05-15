import { motion, AnimationControls } from "framer-motion";
import { globalVariant } from "@/utils/globalVariant";
import { globalTransition } from "@/utils/globalTransition";
import classNames from "classnames";

const SectionHeader = ({
  title,
  subtitle,
  control,
  className,
}: {
  title: string;
  subtitle: string;
  control: AnimationControls;
  className?: string;
}) => {
  return (
    <div className={classNames("Section__header", className)}>
      <motion.h3
        variants={globalVariant}
        initial="hidden"
        animate={control}
        transition={{
          ...globalTransition,
          delay: 0.1,
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
          delay: 0.2,
        }}
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default SectionHeader;
