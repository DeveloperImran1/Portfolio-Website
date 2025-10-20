"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section className="pt-24 pb-16 px-6 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black flex flex-col items-center justify-center">
        <div className="max-w-3xl text-center">
          {/* Animated Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h1>

          {/* Animated Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            <p className="text-lg">
              👋 Hi, I’m{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Imran Hasan
              </span>
              .
            </p>
            <p className="text-lg">
              💻 I’m a{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                Full-Stack Developer
              </span>{" "}
              specializing in{" "}
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                React, Node.js, MongoDB
              </span>
              , and{" "}
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                Express
              </span>
              .
            </p>
            <p className="text-lg">
              🚀 I love building scalable, performant, and user-friendly web
              applications. Solving real-world problems and continuously
              learning new technologies keeps me inspired.
            </p>
            <p className="text-lg">
              ✨ My mission is to craft digital products that merge{" "}
              <span className="font-semibold text-pink-500 dark:text-pink-400">
                creativity
              </span>{" "}
              and{" "}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                functionality
              </span>{" "}
              to create delightful experiences.
            </p>
          </motion.div>

          {/* Animated Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-10 text-sm italic text-gray-600 dark:text-gray-400"
          >
            <p>“Turning ideas into elegant, functional web experiences.”</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
