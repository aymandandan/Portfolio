"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const hoverAnimation: Parameters<typeof motion.div>["0"]["whileHover"] = {
  scale: 1.02,
  y: -5,
  boxShadow:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  transition: {
    type: "tween" as const,
    stiffness: 300,
    damping: 25,
  },
};

export function AnimatedServiceCard({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.25, delay }}
      whileHover={hoverAnimation}
    >
      {children}
    </motion.div>
  );
}
