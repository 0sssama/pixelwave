import { AppFeature, SectionHeader } from "@/components/organisms";
import { AppFeatureProps } from "@/components/organisms/AppFeature";
import { useInViewControl } from "@/utils/useInViewControl";
import React from "react";

function AppFeatures() {
  const { ref, control } = useInViewControl({ threshold: 0.3 });

  return (
    <div className="AppFeatures Section" ref={ref}>
      <SectionHeader
        control={control}
        subtitle="OUR"
        title="Application Features"
      />
      <div className="AppFeatures-wrapper">
        {appFeatures.map((feature, index) => (
          <AppFeature key={index} {...feature} control={control} id={index} />
        ))}
      </div>
    </div>
  );
}

const appFeatures: Omit<AppFeatureProps, "id" | "control">[] = [
  {
    icon: "/assets/features/payment.svg",
    title: "Payment Processing",
    description:
      "Stripe, PayPal, Plaid, or choose your own. Create Ecommerce stores, subscription apps, pay per action, and many more.",
  },
  {
    icon: "/assets/features/database.svg",
    title: "Database Driven",
    description:
      "Full database functionality built right into your app, or use your own database; Airtable, MySQL, Postgres, SQL Server, you name it.",
  },
  {
    icon: "/assets/features/socialmedia.svg",
    title: "Social Media",
    description:
      "Full database functionality built right into your app, or use your own database; Airtable, MySQL, Postgres, SQL Server, you name it.",
  },
  {
    icon: "/assets/features/camera.svg",
    title: "Camera Access",
    description: "Access camera capabilities directly from your web app.",
  },
  {
    icon: "/assets/features/notifications.svg",
    title: "Notifications",
    description:
      "With push, email, SMS, and any chat application integrations, you’ll keep your customers up to date from your application.",
  },
  {
    icon: "/assets/features/api.svg",
    title: "API Integrations",
    description:
      "Third party API integrations with any platform give your app endless possibilities.",
  },
];

export default AppFeatures;
