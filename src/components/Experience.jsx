import { Briefcase, Award, GraduationCap } from 'lucide-react';

export default function Experience() {
  const timeline = [
    {
      year: "Jul 2025 - Sep 2025",
      title: "Frontend Developer Intern",
      company: "XcodeTeam",
      description: "Built responsive features with Next.js, optimizing performance by 25% and delivering 10+ reusable components. Implemented memoization and lazy loading, reducing data-fetching overhead by 20%.",
      icon: Briefcase,
      type: "work"
    },
    {
      year: "Feb 2024 - Jul 2024",
      title: "Cloud & Digital Launchpad Trainee",
      company: "PwC Acceleration Centre",
      description: "Ranked Top 1% among 500+ participants nationwide. Completed 80+ hours training in AWS, Azure, and GCP. Gained hands-on DevOps experience in 3+ digital transformation case studies.",
      icon: Award,
      type: "work"
    },
    {
      year: "2021 - 2025",
      title: "B.Tech in Electronics & Communication",
      company: "Haldia Institute of Technology",
      description: "CGPA: 8.05 • Focused on Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Object-Oriented Programming.",
      icon: GraduationCap,
      type: "education"
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-[linear-gradient(135deg,#f97316,#ec4899)] mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
            My professional journey and academic background
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[linear-gradient(180deg,#f97316,#ec4899)] transform md:-translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              const isLeft = idx % 2 === 0; // Alternate sides on desktop
              
              return (
                <div 
                  key={idx} 
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  {/* Content card - takes half width on desktop */}
                  <div className={`flex-1 md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all group">
                      
                      {/* Year badge */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-semibold rounded-full">
                          {item.year}
                        </span>
                        <span className={`text-xs font-medium px-2 py-1 rounded ${
                          item.type === 'work' 
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                            : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                        }`}>
                          {item.type === 'work' ? 'Work' : 'Education'}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                        {item.title}
                      </h4>

                      {/* Company */}
                      <p className="text-orange-500 dark:text-orange-400 font-medium mb-3">
                        {item.company}
                      </p>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center icon - positioned in middle on desktop */}
                  <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[linear-gradient(135deg,#f97316,#ec4899)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden md:block md:w-5/12"></div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-gray-100 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
            <div>
              <div className="text-2xl font-bold text-black dark:text-white">2+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Experiences</div>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-700"></div>
            <div>
              <div className="text-2xl font-bold text-black dark:text-white">8.05</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-700"></div>
            <div>
              <div className="text-2xl font-bold text-black dark:text-white">Top 1%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">at PwC</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}