"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function ServicesHero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            className="inline-block text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            What I Do Best
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Expert Services to Grow Your Business
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Custom solutions designed to elevate your digital presence and drive
            real results. Let&apos;s turn your ideas into reality.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="#services"
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300 text-center"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors duration-300 text-center"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedBackgroundElements count={3} />
      </div>
    </section>
  );
}

// Separate component to handle client-side only animation
function AnimatedBackgroundElements({ count }: { count: number }) {
  const [isMounted, setIsMounted] = useState(false);
  const elements = Array(count)
    .fill(null)
    .map((_, i) => ({
      id: i,
      width: 100 + Math.random() * 200, // 100-300px
      height: 100 + Math.random() * 200, // 100-300px
      top: Math.random() * 100, // 0-100%
      left: Math.random() * 100, // 0-100%
      duration: 20 + Math.random() * 20, // 20-40s
      xAmplitude: Math.random() * 100 - 50, // -50 to 50
    }));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full bg-primary-200 dark:bg-primary-700/30"
          style={{
            width: `${el.width}px`,
            height: `${el.height}px`,
            top: `${el.top}%`,
            left: `${el.left}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, el.xAmplitude, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
