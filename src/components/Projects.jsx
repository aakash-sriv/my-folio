import { ExternalLink, Github, Sparkles } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'SmartSpend',
      description: 'An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights and intelligent automation.',
      image: 'https://smart-spend-ak.vercel.app/og-image.png',
      tags: ['Next.js', 'Tailwind', 'Prisma', 'Gemini AI'],
      github: 'https://github.com/aakash-sriv/SmartSpend',
      live: 'https://smart-spend-ak.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'Chatbot Platform',
      description: 'A full-stack chatbot platform with real-time messaging, AI-powered responses, and a sleek modern interface for seamless conversations.',
      image: 'https://yellow-chatbot-orpin.vercel.app/og-image.png',
      tags: ['React', 'Node.js', 'Express', 'Gemini AI'],
      github: 'https://github.com/aakash-sriv',
      live: 'https://yellow-chatbot-orpin.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'PrepPerfect',
      description: 'AI-powered interview preparation platform that generates role-specific questions, provides detailed explanations, and helps you master your next interview.',
      image: 'https://prep-perfect.vercel.app/og-image.png',
      tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
      github: 'https://github.com/aakash-sriv/PrepPerfect',
      live: 'https://prep-perfect.vercel.app',
      featured: true
    },
    {
      id: 4,
      title: 'Coming Soon',
      description: 'Something exciting is in the works! A new project that pushes the boundaries of what is possible on the web. Stay tuned for updates.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
      tags: ['Innovation', 'Future', 'Web3', 'AI'],
      github: '#',
      live: '#',
      featured: false,
      isComingSoon: true
    }
  ];

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 accent-gradient dark:accent-gradient-dark mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, problem-solving, and creative design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ${project.isComingSoon ? 'relative' : ''
                }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Coming Soon Overlay */}
              {project.isComingSoon && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-20 flex flex-col items-center justify-center text-center p-6">
                  <div className="text-4xl font-bold text-white mb-2 animate-pulse">Coming Soon</div>
                  <p className="text-gray-200 text-sm">Cooking up something special...</p>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Featured Badge */}
                {project.featured && !project.isComingSoon && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 accent-gradient dark:accent-gradient-dark text-white px-3 py-1 rounded-full text-xs font-semibold">
                    <Sparkles size={12} />
                    Featured
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-2 group-hover:text-[#79b072] dark:group-hover:text-[#0a8a3f] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 sm:mb-4 line-clamp-3 break-words">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {!project.isComingSoon && (
                  <div className="flex items-center gap-2 sm:gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-xs sm:text-sm font-medium"
                    >
                      <Github size={14} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 accent-gradient dark:accent-gradient-dark text-white rounded-lg hover:opacity-90 transition-opacity text-xs sm:text-sm font-medium"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}