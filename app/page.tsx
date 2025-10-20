import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { profileData, dynamicPath } from "@/data/profile";
import { ServicesSection } from "@/components/home/ServicesSection";

export default function Home() {
  const { name, role, bio, avatar, contact } = profileData;
  const avatarPath = `${dynamicPath}${avatar}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section
        id="home"
        className="py-16 md:py-24 lg:py-32"
        aria-labelledby="hero-heading"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="text-lg md:text-xl text-primary-500 mb-2">
                Hi, I&apos;m
              </p>
              <h1
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              >
                {name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-primary-300 mb-6">
                {role}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                {bio}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="#projects" variant="primary">
                  View My Work
                </Button>
                <Button href="#contact" variant="outline">
                  Get In Touch
                </Button>
              </div>
              <div className="mt-8 flex justify-center lg:justify-start space-x-6">
                {contact.socialLinks.github && (
                  <a
                    href={contact.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                )}
                {contact.socialLinks.linkedin && (
                  <a
                    href={contact.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <Image
                    src={avatarPath}
                    alt={name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />
    </div>
  );
}
