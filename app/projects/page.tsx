"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiCode,
  FiLayers,
  FiSmartphone,
} from "react-icons/fi";
import { profileData } from "@/data/profile";

type FilterType = "all" | "web" | "design" | "mobile";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filters: { id: FilterType; label: string; icon: React.ReactNode }[] = [
    { id: "all", label: "All Projects", icon: <FiLayers className="mr-2" /> },
    { id: "web", label: "Web Dev", icon: <FiCode className="mr-2" /> },
    { id: "design", label: "Design", icon: <FiLayers className="mr-2" /> },
    { id: "mobile", label: "Mobile", icon: <FiSmartphone className="mr-2" /> },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? profileData.projects
      : profileData.projects.filter((project) => project.category === activeFilter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen py-12 pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my latest work and creative projects
          </p>
        </motion.section>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? "bg-primary-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.title}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 flex items-center justify-center">
                  <span className="text-gray-400 dark:text-gray-600 text-sm">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      "Project Image"
                    )}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    aria-label="View live demo"
                  >
                    Live Demo
                    <FiExternalLink className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-500 dark:text-gray-400">
              No projects found in this category. Check back soon for updates!
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
