import { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button className="w-full transition-all flex items-center justify-center gap-2 text-white dark:text-[#262626] dark:bg-neutral-100 bg-neutral-900 duration-300 rounded-lg">
      {children}
    </button>
  );
}
