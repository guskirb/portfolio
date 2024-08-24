import { cn } from "../../../lib/cn";
import { motion } from "framer-motion";
import React from "react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      whileInView={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 1,
        ease: "linear",
        delay: 0.5,
      }}
      viewport={{ once: true }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `duration-500 relative inline-block pb-1 px-3 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
