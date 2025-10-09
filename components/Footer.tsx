import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from '@/data/profile.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialIcons = {
    github: <FaGithub className="h-5 w-5" />,
    linkedin: <FaLinkedin className="h-5 w-5" />,
  };

  return (
    <footer className="bg-gray-900 text-white py-12 dark:bg-gray-900/95">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-50 dark:text-white mb-2">{profile.personalInfo.name}</h3>
            <p className="text-gray-400">{profile.personalInfo.role}</p>
          </div>
          
          <div className="flex space-x-6">
            {profile.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-100 transition-colors duration-300"
                aria-label={social.name}
              >
                {socialIcons[social.icon as keyof typeof socialIcons]}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 dark:text-gray-400 text-sm">
          <p>© {currentYear} {profile.personalInfo.name}. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy" className="hover:text-white transition-colors duration-300 mx-2">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors duration-300 mx-2">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
