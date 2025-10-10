"use client";

import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaServer,
  FaShoppingCart,
  FaWrench,
} from "react-icons/fa";
import { profileData } from "@/data/profile";
import Link from "next/link";
import { AnimatedServiceCard } from "@/components/services/AnimatedServiceCard";
import { ServicesHero } from "@/components/services/ServicesHero";

const iconMap = {
  code: <FaCode className="w-8 h-8" />,
  "paint-brush": <FaPaintBrush className="w-8 h-8" />,
  mobile: <FaMobileAlt className="w-8 h-8" />,
  server: <FaServer className="w-8 h-8" />,
  "shopping-cart": <FaShoppingCart className="w-8 h-8" />,
  wrench: <FaWrench className="w-8 h-8" />,
};

// Get services from profile data
const services = profileData.services.map((service) => ({
  ...service,
  id: service.title.toLowerCase().replace(/\s+/g, "-"),
  cta: `Get ${service.title}`,
}));

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <ServicesHero />

      {/* Services Grid */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Digital Solutions
            </h2>
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
                  <Link
                    href={`/contact?service=${encodeURIComponent(
                      service.title
                    )}`}
                    className="mt-auto inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </AnimatedServiceCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
