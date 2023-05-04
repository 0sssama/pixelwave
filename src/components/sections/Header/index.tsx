import { windowState } from "@/atoms/state";
import React from "react";
import { useRecoilValue } from "recoil";
import { motion } from "framer-motion";
import Link from "next/link";
import classNames from "classnames";
import Button from "@/components/atoms/Button";
import { BiRightArrowAlt } from "react-icons/bi";
import Navigation from "./Navigation";
import { globalTransition } from "@/utils/globalTransition";

function Header() {
  const { scroll } = useRecoilValue(windowState);

  return (
    <motion.div
      className={classNames("Header w-full", {
        "with-bg": scroll > 80,
      })}
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        ...globalTransition,
        delay: 1.5,
      }}
    >
      <div className="Header-wrapper wrapper flex items-center justify-between padding-x h-full">
        <Link href="/" className="Header-Logo">
          <div>
            <img src="/assets/logo-horizontal.svg" alt="Pixelwave Logo" />
          </div>
        </Link>
        <Navigation />
        <Button variant="header" icon={<BiRightArrowAlt />}>
          BOOK A CALL
        </Button>
      </div>
    </motion.div>
  );
}

export default Header;
