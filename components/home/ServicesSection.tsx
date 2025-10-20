"use client";

import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaServer,
  FaShoppingCart,
  FaWrench,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profile";
import { AnimatedServiceCard } from "../services/AnimatedServiceCard";

const iconMap = {
  code: <FaCode className="w-8 h-8 text-primary-500" />,
  "paint-brush": <FaPaintBrush className="w-8 h-8 text-primary-500" />,
  mobile: <FaMobileAlt className="w-8 h-8 text-primary-500" />,
  server: <FaServer className="w-8 h-8 text-primary-500" />,
  "shopping-cart": <FaShoppingCart className="w-8 h-8 text-primary-500" />,
  wrench: <FaWrench className="w-8 h-8 text-primary-500" />,
};

// Show only first 3 services on home page
const services = profileData.services
  .map((service) => ({
    ...service,
    id: service.title.toLowerCase().replace(/\s+/g, "-"),
    cta: `Get ${service.title}`,
  }))
  .slice(0, 3);

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            High-quality services tailored to your specific needs and business
            goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedServiceCard key={service.id} delay={index * 0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 mb-6">
                  {iconMap[service.icon as keyof typeof iconMap]}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  variant="primary"
                  className="w-full mt-4"
                >
                  Get Started
                </Button>
              </div>
            </AnimatedServiceCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            href="/services"
            variant="primary"
            className="inline-flex items-center px-8 py-3 text-base"
          >
            View All Services
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
