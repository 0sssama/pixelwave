import { SectionHeader } from "@/components/organisms";
import WorkflowItem, {
  WorkflowItemProps,
} from "@/components/organisms/WorkflowItem";
import { useInViewControl } from "@/utils/useInViewControl";
import React from "react";

function Workflow() {
  const { ref, control } = useInViewControl();

  return (
    <div className="Workflow Section" ref={ref} id="workflow">
      <SectionHeader
        control={control}
        subtitle="Our projects"
        title="Workflow"
      />
      <div className="WorkflowItems-wrapper">
        {items.map((item, index) => (
          <WorkflowItem key={index} id={index} control={control} {...item} />
        ))}
      </div>
    </div>
  );
}

const items: Omit<WorkflowItemProps, "id" | "control">[] = [
  {
    title: "Discovery workshop",
    subtitle: "We learn about your project...",
    description:
      "Through few discovery sessions, we capture the requirements for each feature of your app.",
    duration: "1-2 HOURS",
    image: "/assets/workflow_icons/Discovery-Workshop-icon.svg",
  },
  {
    title: "Design",
    subtitle: "UI/UX Design Implementation...",
    description:
      "We will implement a pixel-perfect version of the designs to crafting the most modern user interface design that is fit for the target users of the application.",
    duration: "1-2 HOURS",
    image: "/assets/workflow_icons/Design-icon.svg",
  },
  {
    title: "Bubble development",
    subtitle: "Bring it to life...",
    description:
      "We will craft a responsive web app. Everything will be built with scaling in mind too (we'll make sure this is not just a proof of concept that you'll need to throw away later",
    duration: "1-2 HOURS",
    image: "/assets/workflow_icons/Bubble-Dev-icon.svg",
  },
  {
    title: "Product delivery",
    subtitle: "Try your product out!",
    description:
      "After Quality Assurance testing, your app is ready to go live! We also continue to work with you on future phases.",
    duration: "1-2 HOURS",
    image: "/assets/workflow_icons/Product-Delivery-icon.svg",
  },
];

export default Workflow;
