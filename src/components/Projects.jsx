import { ExternalLink, Github, Sparkles } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project Title One',
      description: 'A comprehensive full-stack application built with modern technologies. Features include real-time updates, user authentication, and responsive design. Optimized for performance and scalability.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Project Title Two',
      description: 'An innovative web application focusing on user experience and modern design principles. Built with cutting-edge frameworks and follows best practices for code quality.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Project Title Three',
      description: 'A beautiful and interactive frontend project showcasing advanced CSS animations, smooth transitions, and pixel-perfect design implementation with excellent accessibility.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
      tags: ['React', 'Framer Motion', 'Tailwind', 'API'],
      github: '#',
      live: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 accent-gradient dark:accent-gradient-dark mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, problem-solving, and creative design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 accent-gradient dark:accent-gradient-dark text-white px-3 py-1 rounded-full text-xs font-semibold">
                    <Sparkles size={12} />
                    Featured
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-[#79b072] dark:group-hover:text-[#0a8a3f] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 accent-gradient dark:accent-gradient-dark text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}