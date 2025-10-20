"use client";

import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { FaBlog, FaProjectDiagram } from "react-icons/fa";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-8 py-6">
      <Toaster position="top-right" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-gray-800 text-center sm:text-left"
      >
        Welcome to Your Dashboard
      </motion.h1>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Blog Management Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white shadow-md hover:shadow-lg rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Manage Blogs
            </h2>
            <FaBlog className="text-blue-500 text-2xl sm:text-3xl" />
          </div>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Create, edit, and delete your blog posts directly from the dashboard.
          </p>

          <button
            onClick={() => router.push("/blog")}
            className="mt-5 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-5 rounded-md text-sm sm:text-base font-medium transition"
          >
            Go to Blogs
          </button>
        </motion.div>

        {/* Projects Overview Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white shadow-md hover:shadow-lg rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Projects Overview
            </h2>
            <FaProjectDiagram className="text-green-500 text-2xl sm:text-3xl" />
          </div>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Track and manage your projects, view their current status, and update progress.
          </p>

          <button
            onClick={() => router.push("/projects")}
            className="mt-5 w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white py-2.5 px-5 rounded-md text-sm sm:text-base font-medium transition"
          >
            View Projects
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;
