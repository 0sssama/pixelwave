import { SectionHeader } from "@/components/organisms";
import { globalTransition } from "@/utils/globalTransition";
import { globalVariant } from "@/utils/globalVariant";
import { useInViewControl } from "@/utils/useInViewControl";
import { motion } from "framer-motion";

function Technologies() {
  const { ref, control } = useInViewControl({ threshold: 0.3 });

  return (
    <div className="Technologies Section" ref={ref}>
      <SectionHeader
        control={control}
        subtitle="WHAT WE USE"
        title="TECHNOLOGIES"
        className="!mb-4"
      />
      <motion.div
        className="intro"
        variants={globalVariant}
        initial="hidden"
        animate={control}
        transition={{
          ...globalTransition,
          delay: 0.6,
        }}
      >
        <p>
          We use world&apos;s leading no-code platforms to deliver fully
          customized, scalable and secure digital products much faster than
          traditional software development companies.
        </p>
      </motion.div>
      <motion.div
        className="tech-wrapper"
        variants={globalVariant}
        initial="hidden"
        animate={control}
        transition={{
          ...globalTransition,
          delay: 0.8,
        }}
      >
        {tech.map((item, index) => (
          <img key={index} src={item.logo} alt={item.name} loading="lazy" />
        ))}
      </motion.div>
    </div>
  );
}

const tech = [
  {
    name: "Bubble",
    logo: "/assets/logos/bubble.svg",
  },
  {
    name: "Figma",
    logo: "/assets/logos/figma.svg",
  },
  {
    name: "Webflow",
    logo: "/assets/logos/webflow.svg",
  },
  {
    name: "Xano",
    logo: "/assets/logos/xano.svg",
  },
];

export default Technologies;
