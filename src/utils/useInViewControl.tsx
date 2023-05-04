import { AnimationControls, useAnimation } from "framer-motion";
import { IntersectionOptions, useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const useInViewControl = (
  options?: IntersectionOptions
): {
  ref: any;
  control: AnimationControls;
} => {
  const [ref, inView] = useInView(options);

  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return { ref, control };
};
