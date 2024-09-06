import { ReactNode } from "react";
import { motion } from "framer-motion";
import useTheme from "../../hooks/useTheme";

interface MotionDivProps {
  children: ReactNode;
  delay?: number;
}

export default function MotionDiv({ children, delay = 0.2 }: MotionDivProps) {
  const { animation } = useTheme();

  return (
    <motion.div
      className="flex justify-center items-center w-full h-full"
      initial={animation ? { opacity: 0, y: -20 } : {}}
      whileInView={
        animation
          ? {
              opacity: 1,
              y: 0,
              transition: { delay: delay, duration: 0.5 },
            }
          : {}
      }
      viewport={animation ? { once: true, amount: 0.3 } : {}}
    >
      {children}
    </motion.div>
  );
}
