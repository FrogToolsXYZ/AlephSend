"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function TransitionTemplate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      variants={TransitionVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ ease: "easeInOut" }}
      className="flex w-full grow flex-col items-center"
    >
      {children}
    </motion.div>
  );
}
