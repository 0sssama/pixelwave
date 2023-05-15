import { SectionHeader, Question } from "@/components/organisms";
import { QuestionProps } from "@/components/organisms/Question";
import { useInViewControl } from "@/utils/useInViewControl";
import React, { useState } from "react";

function FAQ() {
  const { ref, control } = useInViewControl();

  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="FAQ Section" ref={ref} id="faq">
      <SectionHeader
        control={control}
        title="QUESTIONS"
        subtitle="FREQUENTLY ASKED"
      />
      <div className="Questions-wrapper">
        {questions.map((question, index) => (
          <Question
            key={index}
            id={index}
            {...question}
            control={control}
            open={open === index}
            onClick={() => {
              if (open === index) {
                setOpen(null);
              } else {
                setOpen(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

const questions: Omit<QuestionProps, "id" | "control" | "open" | "onClick">[] =
  [
    {
      question: "Will my website be mobile-friendly?",
      answer: "Yes, your website will be mobile-friendly.",
    },
    {
      question: "How often will we communicate during the project build?",
      answer:
        "We will communicate regularly throughout the project build. The frequency and method of communication will depend on your preferences, but we typically schedule weekly check-ins and provide updates via email or Slack as needed.",
    },
    {
      question: "Can changes be made mid-development?",
      answer:
        "Yes, changes can be made mid-development. However, depending on the nature and scope of the change, it may require additional time and cost. We will discuss any potential changes with you and provide an estimate of the impact on the project timeline and budget before proceeding.",
    },
    {
      question:
        "What kind of support will I receive after the website is launched?",
      answer:
        "We offer ongoing support and maintenance services to ensure your website continues to run smoothly after launch. Our support services include regular updates, backups, and security monitoring, as well as troubleshooting and bug fixes as needed.",
    },
  ];

export default FAQ;
