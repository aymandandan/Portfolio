"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiSmartphone,
} from "react-icons/fi";
import { profileData } from "@/data/profile";
import ProjectsCard from "@/components/ProjectsCard";
import Pagination from "@/components/Pagination";

// Number of items per page
const ITEMS_PER_PAGE = 6;

type FilterType = "all" | "web" | "design" | "mobile";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filters: { id: FilterType; label: string; icon: React.ReactNode }[] = [
    { id: "all", label: "All Projects", icon: <FiLayers className="mr-2" /> },
    { id: "web", label: "Web Dev", icon: <FiCode className="mr-2" /> },
    { id: "design", label: "Design", icon: <FiLayers className="mr-2" /> },
    { id: "mobile", label: "Mobile", icon: <FiSmartphone className="mr-2" /> },
  ];

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    const filtered = activeFilter === "all"
      ? [...profileData.projects]
      : profileData.projects.filter((project) => project.category === activeFilter);
    
    // Reset to first page when filter changes
    setCurrentPage(1);
    return filtered;
  }, [activeFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          {paginatedProjects.map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              variants={item}
            >
              <ProjectsCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* No projects message */}
        {filteredProjects.length === 0 ? (
          <motion.div
            className="text-center py-12 col-span-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-500 dark:text-gray-400">
              No projects found in this category. Check back soon for updates!
            </p>
          </motion.div>
        ) : (
          /* Pagination */
          filteredProjects.length > ITEMS_PER_PAGE && (
            <motion.div 
              className="mt-12 col-span-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </motion.div>
          )
        )}
      </div>
    </main>
  );
}
