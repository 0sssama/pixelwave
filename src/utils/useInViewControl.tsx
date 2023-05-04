import { AnimationControls, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const useInViewControl = (): {
  ref: any;
  control: AnimationControls;
} => {
  const [ref, inView] = useInView();

  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return { ref, control };
};
