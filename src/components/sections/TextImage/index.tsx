import { useInViewControl } from "@/utils/useInViewControl";
import { motion } from "framer-motion";
import { globalTransition } from "@/utils/globalTransition";
import { globalVariant } from "@/utils/globalVariant";

function TextImage() {
  const { ref, control } = useInViewControl({ threshold: 0.3 });

  return (
    <div className="TextImage Section" ref={ref}>
      <div className="text-container">
        <motion.h1
          variants={globalVariant}
          initial="hidden"
          animate={control}
          transition={{
            ...globalTransition,
            delay: 0.4,
          }}
        >
          Once your website is built, you&apos;re in <strong>control!</strong>
        </motion.h1>
        <motion.article
          variants={globalVariant}
          initial="hidden"
          animate={control}
          transition={{
            ...globalTransition,
            delay: 0.6,
          }}
        >
          Because it&apos;s 2023. Waiting weeks on developers to make updates to
          your website is a thing of the past.
          <br />
          <br />
          That&apos;s why we use Bubble, a visual website builder and Content
          Management System made for marketing and design teams. You&apos;ll
          love it.
        </motion.article>
      </div>
      <motion.div
        className="image-container"
        variants={globalVariant}
        initial="hidden"
        animate={control}
        transition={{
          ...globalTransition,
          delay: 0.8,
        }}
      >
        <img
          src="/assets/Mockup.jpg"
          alt="Pixelwave in Laptop"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}

export default TextImage;
