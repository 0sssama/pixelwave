import { Button } from "@/components/atoms";
import { bookACallLink } from "@/utils/bookACallLink";
import { globalTransition } from "@/utils/globalTransition";
import { globalVariant } from "@/utils/globalVariant";
import { useInViewControl } from "@/utils/useInViewControl";
import { motion } from "framer-motion";
import { BiRightArrowAlt } from "react-icons/bi";

function Footer() {
  const { ref, control } = useInViewControl();

  return (
    <div className="Footer Section" ref={ref}>
      <motion.h1
        variants={globalVariant}
        initial="hidden"
        animate={control}
        transition={{
          ...globalTransition,
          delay: 0.6,
        }}
      >
        HAVE A <strong>PROJECT</strong> IN MIND?
      </motion.h1>
      <motion.div
        className="CTA"
        variants={globalVariant}
        initial="hidden"
        animate={control}
        transition={{
          ...globalTransition,
          delay: 1,
        }}
      >
        <p>
          We&apos;d love to help you bring it to life!
          <br />
          Book a free 15 minutes discovery call.
        </p>
        <Button
          variant="primary"
          icon={<BiRightArrowAlt />}
          href={bookACallLink}
        >
          Let&apos;s talk!
        </Button>
      </motion.div>
      <motion.div
        className="bottom w-full flex flex-col items-center"
        variants={globalVariant}
        initial="hidden"
        animate={control}
        transition={{
          ...globalTransition,
          delay: 1.4,
        }}
      >
        {/* <div className="socialmedia flex gap-2 items-center">

		</div> */}
        <p>
          &copy; {new Date().getFullYear()} Pixelwave | All rights reserved.
        </p>
      </motion.div>
    </div>
  );
}

// const socialMedia = [
// 	{
// 		name: "Facebook",
// 	}
// ]

export default Footer;
