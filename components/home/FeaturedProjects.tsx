"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProjectsCard from "@/components/projects/ProjectsCard";
import { ProjectsData } from "@/data/projects";

export function FeaturedProjects() {
  // Get first 3 projects as featured
  const featuredProjects = ProjectsData.slice(0, 3);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectsCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/projects" variant="primary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
