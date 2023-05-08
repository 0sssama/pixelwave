import { Button } from "@/components/atoms";
import { globalTransition } from "@/utils/globalTransition";
import { globalVariant } from "@/utils/globalVariant";
import { useInViewControl } from "@/utils/useInViewControl";
import { motion } from "framer-motion";

function Hero() {
  const { ref, control } = useInViewControl();

  return (
    <div className="Hero Section flex flex-col justify-center" ref={ref}>
      {/* <div className="bg-illustration bg-illustration-hero">
        <img src="/assets/illustrations/circles.svg" alt="Circles" />
      </div> */}
      <motion.h1
        variants={globalVariant}
        initial="hidden"
        animate={control}
        transition={{
          ...globalTransition,
          delay: 0.4,
        }}
      >
        We build MVPs in less than <strong>4 weeks</strong> with a fraction of
        the cost!
      </motion.h1>
      <motion.p
        variants={globalVariant}
        initial="hidden"
        animate={control}
        transition={{
          ...globalTransition,
          delay: 0.8,
        }}
      >
        We are an agency Specialized in crafting beautiful user interfaces and
        seamless user experiences for web applications using Bubble.
      </motion.p>
      <motion.div
        className="buttons flex items-center justify-start"
        variants={globalVariant}
        initial="hidden"
        animate={control}
        transition={{
          ...globalTransition,
          delay: 1.2,
        }}
      >
        <Button variant="primary" href="https://google.com">
          Let&apos;s talk!
        </Button>
        <Button href="#portfolio">Our work</Button>
      </motion.div>
    </div>
  );
}

export default Hero;
