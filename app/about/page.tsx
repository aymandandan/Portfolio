import Image from 'next/image';
import profile from '@/data/profile.json';

export default function AboutPage() {
  const { personalInfo, skills } = profile;
  const { about } = personalInfo;

  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="relative py-32 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Banner.jpg"
            alt="Banner background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-secondary-700/90 mix-blend-multiply" />
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-primary-100 opacity-90">Get to know who I am and what I do</p>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/Profile.jpg"
                  alt={personalInfo.name}
                  width={400}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="mb-6">
                <h2 className="text-3xl font-bold">
                  Hello, I&apos;m {personalInfo.name}
                </h2>
                <h3 className="text-xl text-primary-600 dark:text-primary-400">
                  {personalInfo.role}
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  {about.intro}
                </p>
                <p>
                  {about.story}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Name:</h4>
                  <p className="text-gray-600 dark:text-gray-400">{personalInfo.name}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email:</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-primary-600 dark:text-primary-400 hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">From:</h4>
                  <p className="text-gray-600 dark:text-gray-400">{personalInfo.location}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Available for:</h4>
                  <p className="text-gray-600 dark:text-gray-400">{personalInfo.availability}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href={personalInfo.about.cvUrl} 
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  download
                >
                  Download CV
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">My Skills</h2>
            <p className="text-gray-600 dark:text-gray-400">Technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
                <div className="space-y-6">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div 
                          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
