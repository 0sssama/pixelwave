import { useInViewControl } from "@/utils/useInViewControl";
import { motion } from "framer-motion";
import { globalTransition } from "@/utils/globalTransition";
import { globalVariant } from "@/utils/globalVariant";
import classNames from "classnames";

interface TextImageProps {
  model: number;
}

function TextImage({ model }: TextImageProps = { model: 0 }) {
  const { ref, control } = useInViewControl();

  if (TextImageContent.length <= model) return null;

  return (
    <div
      className={classNames("TextImage Section", {
        reverse: model % 2 === 1,
      })}
      ref={ref}
      id={model === 0 ? "about" : "more"}
    >
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
          {TextImageContent[model].title}
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
          {TextImageContent[model].description}
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
          src={TextImageContent[model].image}
          alt="Pixelwave - The no-code agency you needed"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}

const TextImageContent = [
  {
    title: (
      <>
        Pixelwave: <strong>No-Code</strong> MVP Development
      </>
    ),
    description: (
      <>
        Pixelwave specializes in developing Minimum Viable Products (MVPs) using
        no-code platforms, mainly Bubble. Our team of experienced developers
        will work with you to turn your idea into a functional prototype, so you
        can start testing and gathering user feedback right away.
        <br />
        <br />
        Whether you&apos;re a startup founder or an established business owner,
        our no-code development services can help you save time and money while
        still delivering a high-quality product.
      </>
    ),
    image: "/assets/brand1.jpg",
  },
  {
    title: (
      <>
        Once your website is built, you&apos;re in <strong>control!</strong>
      </>
    ),
    description: (
      <>
        Because it&apos;s 2023. Waiting weeks on developers to make updates to
        your website is a thing of the past.
        <br />
        <br />
        That&apos;s why we use Bubble, a visual website builder and Content
        Management System made for marketing and design teams. You&apos;ll love
        it.
      </>
    ),
    image: "/assets/Mockup.jpg",
  },
];

export default TextImage;
