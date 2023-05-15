import { globalTransition } from "@/utils/globalTransition";
import { globalVariant } from "@/utils/globalVariant";
import classNames from "classnames";
import { motion, AnimationControls } from "framer-motion";
import { AiOutlineDownCircle } from "react-icons/ai";

export interface QuestionProps {
  id: number;
  question: string;
  answer: string;
  control: AnimationControls;
  open: boolean;
  onClick: () => void;
}

function Question({
  id,
  question,
  answer,
  control,
  open,
  onClick,
}: QuestionProps) {
  return (
    <motion.div
      className={classNames("Question", { open })}
      variants={globalVariant}
      initial="hidden"
      animate={control}
      transition={{
        ...globalTransition,
        delay: 0.2 + (id + 1) * 0.4,
      }}
    >
      <div className="Question-header" onClick={onClick}>
        <h2>{question}</h2>
        <AiOutlineDownCircle />
      </div>
      <p>{answer}</p>
    </motion.div>
  );
}

export default Question;
