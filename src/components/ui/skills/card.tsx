import { ReactNode } from "react";
import { motion } from "framer-motion";

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
  return (
    <div className="hover:-translate-y-3 duration-300">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2 * index, duration: 0.5 },
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="skill-card text-white dark:text-[#262626] dark:bg-neutral-100 bg-neutral-900 rounded-3xl p-8 flex flex-col gap-5"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
      >
        {children}
      </motion.div>
    </div>
  );
}
