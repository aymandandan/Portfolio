import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "@/data/projects";

interface ProjectsCardProps {
  project: Project;
}

export default function ProjectsCard({ project }: ProjectsCardProps) {
  return (
    <motion.article
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 flex items-center justify-center">
          <span className="text-gray-400 dark:text-gray-600 text-sm">
            {project.image ? (
              <Image
                src={project.image.startsWith('http') ? project.image : `/Portfolio${project.image}`}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
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
  );
}
