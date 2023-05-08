import { globalTransition } from "@/utils/globalTransition";
import { globalVariant } from "@/utils/globalVariant";
import { useInViewControl } from "@/utils/useInViewControl";
import { motion } from "framer-motion";

function TextSection() {
  const { ref, control } = useInViewControl({ threshold: 0.4 });

  return (
    <div className="Text Section" ref={ref}>
      <motion.h1
        variants={globalVariant}
        initial="hidden"
        animate={control}
        transition={{
          ...globalTransition,
          delay: 0.4,
        }}
      >
        And if you need a <b>hand</b>, we can provide you with{" "}
        <strong>ongoing help</strong> and optimization.
      </motion.h1>
      <motion.p
        variants={globalVariant}
        initial="hidden"
        animate={control}
        transition={{
          ...globalTransition,
          delay: 0.6,
        }}
      >
        We call it Bubble development on demand.
      </motion.p>
    </div>
  );
}

export default TextSection;
