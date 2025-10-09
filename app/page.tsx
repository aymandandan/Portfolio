import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import profileData from "@/data/profile.json";

export default function Home() {
  const { personalInfo, socialLinks } = profileData;

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
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-primary-300 mb-6">
                {personalInfo.role}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                {personalInfo.bio}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="#projects" variant="primary">
                  View My Work
                </Button>
                <Button href="#contact" variant="outline">
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center lg:justify-start mt-12 gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-3xl"
                aria-label={social.name}
              >
                {social.icon === 'github' ? (
                  <FaGithub aria-hidden="true" />
                ) : (
                  <FaLinkedin aria-hidden="true" />
                )}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
