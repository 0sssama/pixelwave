import { Button } from "@/components/atoms";
import React from "react";

function Hero() {
  return (
    <div className="Hero Section min-h-[500px] flex flex-col justify-center">
      <h1>
        We build MVPs in less than <strong>4 weeks</strong> with a fraction of
        the cost!
      </h1>
      <p>
        We are an agency Specialized in crafting beautiful user interfaces and
        seamless user experiences for web applications using Bubble.
      </p>
      <div className="buttons flex items-center justify-start">
        <Button variant="primary" href="https://google.com">
          Let's talk!
        </Button>
        <Button href="#portfolio">Our work</Button>
      </div>
    </div>
  );
}

export default Hero;
