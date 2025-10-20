"use client";

import { Button } from "@/components/ui/button";
import { FaRocket, FaPaperPlane, FaEye, FaEnvelope, FaPhone } from "react-icons/fa";
import { ContactData } from "@/data/contact";

export function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
              <FaRocket className="w-5 h-5" />
              <span className="font-medium">Ready to work together?</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Let&apos;s build something amazing
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              I&apos;m always excited to take on new challenges and collaborate
              with passionate people. Whether you have a project in mind or
              just want to explore possibilities, I&apos;d love to hear from you.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                href="/contact" 
                variant="primary" 
                className="flex items-center justify-center gap-2 px-6 py-3 text-base"
              >
                <FaPaperPlane className="w-4 h-4" />
                Start Your Project
              </Button>
              <Button 
                href="#projects" 
                variant="outline"
                className="flex items-center justify-center gap-2 px-6 py-3 text-base"
              >
                <FaEye className="w-4 h-4" />
                View My Work
              </Button>
            </div>

            {/* Contact Info */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Or reach out directly:
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
                <a 
                  href={`mailto:${ContactData.email}`} 
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <FaEnvelope className="w-4 h-4" />
                  {ContactData.email}
                </a>
                <span className="hidden sm:inline text-gray-400 dark:text-gray-600">•</span>
                <a 
                  href={`tel:${ContactData.phone.replace(/\D/g, '')}`} 
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <FaPhone className="w-4 h-4" />
                  {ContactData.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
