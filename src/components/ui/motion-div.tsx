import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionDivProps {
  children: ReactNode;
  delay?: number;
}

export default function MotionDiv({ children, delay = 0.2 }: MotionDivProps) {
  return (
    <motion.div
      className="flex justify-center items-center w-full h-full"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: delay, duration: 0.5 },
      }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
