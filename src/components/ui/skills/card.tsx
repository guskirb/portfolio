import { ReactNode } from "react";
import { motion } from "framer-motion";
import useTheme from "../../../hooks/useTheme";

interface CardProps {
  children: ReactNode;
  index: number;
  handleMouseOver: () => void;
  handleMouseOut: () => void;
}

export default function Card({
  children,
  index,
  handleMouseOver,
  handleMouseOut,
}: CardProps) {
  const { animation } = useTheme();

  return (
    <div className="hover:-translate-y-3 duration-300">
      <motion.div
        initial={animation ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
        whileInView={
          animation
            ? {
                opacity: 1,
                y: 0,
                transition: { delay: 0.2 * index, duration: 0.5 },
              }
            : {
                opacity: 1,
                transition: { delay: 0, duration: 0 },
              }
        }
        viewport={animation ? { once: true, amount: 0.5 } : {}}
        className="skill-card text-white dark:text-[#262626] dark:bg-neutral-100 bg-neutral-900 rounded-3xl p-8 flex flex-col gap-5"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
      >
        {children}
      </motion.div>
    </div>
  );
}
