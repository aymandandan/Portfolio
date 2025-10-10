import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profileData } from '@/data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 dark:bg-gray-900/95">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-50 dark:text-white mb-2">
              {profileData.name}
            </h3>
            <p className="text-gray-400">{profileData.role}</p>
          </div>
          
          <div className="flex space-x-6">
            {profileData.contact.socialLinks?.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-100 transition-colors duration-300"
                aria-label={social.name}
              >
                {social.icon === 'github' ? (
                  <FaGithub className="h-5 w-5" />
                ) : (
                  <FaLinkedin className="h-5 w-5" />
                )}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </p>
          <div className="mt-2">
            <Link 
              href="/privacy" 
              className="hover:text-white transition-colors duration-300 mx-2"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link 
              href="/terms" 
              className="hover:text-white transition-colors duration-300 mx-2"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
