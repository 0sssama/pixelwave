import { windowState } from "@/atoms/state";
import React from "react";
import { useRecoilValue } from "recoil";
import { motion } from "framer-motion";
import Link from "next/link";
import classNames from "classnames";

function Header() {
  const { scroll } = useRecoilValue(windowState);

  return (
    <motion.div
      className={classNames("Header w-full", {
        "with-bg": scroll > 80,
      })}
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.59, 0, 0.06, 1],
        delay: 0.2,
      }}
    >
      <div className="Header-wrapper wrapper flex items-center justify-between padding-x h-full">
        <Link href="/" className="Header-Logo">
          <div>
            <img src="/assets/logo-horizontal.svg" alt="Pixelwave Logo" />
          </div>
        </Link>
        <button>Book a call</button>
      </div>
    </motion.div>
  );
}

export default Header;
