import { useState, useRef, useEffect } from 'react';
import { Briefcase, Award } from 'lucide-react';

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef(null);

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
    }
  ];

  // Handle scroll to activate items
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const items = containerRef.current.querySelectorAll('.timeline-item');
      const triggerBottom = window.innerHeight * 0.8;

      items.forEach((item, index) => {
        const box = item.getBoundingClientRect();
        if (box.top < triggerBottom) {
          setActiveIndex(prev => Math.max(prev, index));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="min-h-screen py-4 px-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 accent-gradient dark:accent-gradient-dark mx-auto rounded-full"></div>
        </div>

        {/* Metro Timeline */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto pl-8 md:pl-0">

          {/* Main Track (Background Line) */}
          <div className="absolute left-0 md:left-12 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 rounded-full"></div>

          {/* Active Track (Light Up Effect) */}
          <div
            className="absolute left-0 md:left-12 top-0 w-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-all duration-700 ease-out rounded-full"
            style={{
              height: activeIndex === -1 ? '0%' : `${((activeIndex + 1) / timeline.length) * 100}%`
            }}
          ></div>

          <div className="space-y-16">
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx <= activeIndex;

              return (
                <div
                  key={idx}
                  className="timeline-item relative flex flex-col md:flex-row gap-8 group"
                  onMouseEnter={() => setActiveIndex(idx)}
                >
                  {/* Station Node */}
                  <div className="absolute left-[-4px] md:left-[44px] top-0 z-10">
                    <div
                      className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${isActive
                        ? 'bg-emerald-500 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,1)] scale-150'
                        : 'bg-white dark:bg-gray-900 border-gray-400 dark:border-gray-600'
                        }`}
                    ></div>
                  </div>

                  {/* Content Card */}
                  <div className="md:ml-24 flex-1">
                    <div
                      className={`relative p-6 rounded-2xl border transition-all duration-500 ${isActive
                        ? 'bg-white dark:bg-gray-900 border-emerald-500/50 shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]'
                        : 'bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800'
                        }`}
                    >
                      {/* Connector Line (Horizontal) */}
                      <div className={`absolute top-1.5 -left-8 md:-left-12 w-8 md:w-12 h-0.5 transition-all duration-500 ${isActive ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]' : 'bg-transparent'
                        }`}></div>

                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg transition-colors duration-300 ${isActive ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                            }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl font-bold text-black dark:text-white">
                            {item.title}
                          </h3>
                        </div>
                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                          {item.year}
                        </span>
                      </div>

                      <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                        {item.company}
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}