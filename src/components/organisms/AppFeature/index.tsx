import { AnimationControls } from "framer-motion";
import React from "react";

export interface AppFeatureProps {
  icon: string;
  title: string;
  description: string;
  control: AnimationControls;
}

function AppFeature({ icon, title, description, control }: AppFeatureProps) {
  return <div className="AppFeature">AppFeature</div>;
}

export default AppFeature;
