"use client";

import { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { profileData } from "@/data/profile";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <main className="py-12 pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary-700 dark:text-primary-400 mb-4">
          Get In Touch
        </h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Send me a message!
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-foreground">
            Contact Information
          </h2>
          <p className="text-foreground/80">
            Feel free to reach out through any of these channels. I typically
            respond within 24 hours.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                <EnvelopeIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Email</h3>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  {profileData.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                <PhoneIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Phone</h3>
                <a
                  href={`tel:${profileData.contact.phone}`}
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  {profileData.contact.phone}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                <MapPinIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Location</h3>
                <p className="text-foreground/80">
                  {profileData.contact.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-background-secondary p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Send Me a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground/80 mb-1"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground/80 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-foreground/80 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground/80 mb-1"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <section className="mt-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">
            Find Me On The Map
          </h2>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26762.0219851801!2d${profileData.contact.coordinates.lng}!3d${profileData.contact.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ef2d8d358291d%3A0x3f4eaaf521ef9c5!2sSidon%2C%20Lebanon!5e0!3m2!1sen!2slb!4v1620000000000!5m2!1sen!2slb`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title={`Location Map - ${profileData.contact.location}`}
            aria-label={`Interactive map showing my location in ${profileData.contact.location}`}
            className="w-full"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
