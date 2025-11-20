import { useState } from 'react';
import { Code2, Layers, Wrench } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  const tabs = [
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'frameworks', label: 'Frameworks/Libraries', icon: Layers },
    { id: 'tools', label: 'Tools', icon: Wrench }
  ];

  const skills = {
    languages: [
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', color: '#00599C' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', color: '#A8B9CC' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#007396' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' }
    ],
    frameworks: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: '#000000' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' },
      { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' }
    ],
    tools: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#181717' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#007ACC' },
      { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png', color: '#000000' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1' },
      { name: 'Supabase', icon: 'https://supabase.com/images/supabase-logo-icon.svg', color: '#3ECF8E' },
      { name: 'Render', icon: 'https://avatars.githubusercontent.com/u/36424661?s=200&v=4', color: '#46E3B7' }
    ]
  };

  return (
    <section id="skills" className="min-h-screen py-4 top-1 px-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 accent-gradient dark:accent-gradient-dark mx-auto rounded-full"></div>
        </div>

        {/* Pill Tabs - FIXED */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-900 rounded-full py-1.5 px-3 border border-gray-200 dark:border-gray-800">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative flex items-center gap-2 px-6 py-3 text-sm font-medium  duration-300 rounded-full shadow-xl
                    ${isActive
                      ? 'text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  {/* Active background - more visible gradient */}
                  {isActive && (
                    <span className="absolute inset-0 accent-gradient dark:accent-gradient-dark rounded-full "></span>
                  )}

                  {/* Icon and text need z-index to show above gradient */}
                  <Icon size={18} className="relative z-10" />
                  <span className={`${isActive ? 'inline' : 'hidden'} sm:inline relative z-10`}>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid - 2 cols mobile, 3 cols laptop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills[activeTab].map((skill, idx) => (
            <div
              key={idx}
              className="group relative bg-green-50 dark:bg-green-900/30 rounded-xl p-4 border border-green-200 dark:border-gray-800 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-4"
            >
              {/* Skill Icon */}
              <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                  style={{ filter: 'brightness(0.9)' }}
                />
              </div>

              {/* Skill Name */}
              <p className="text-base font-semibold text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                {skill.name}
              </p>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-xl accent-gradient dark:accent-gradient-dark opacity-0 group-hover:opacity-1 transition-opacity -z-10"></div>
            </div>
          ))}
        </div>

        {/* Fun Stats Below */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            <span className="font-bold text-[#79b072] dark:text-[#0a8a3f]">{skills[activeTab].length}</span> {tabs.find(t => t.id === activeTab)?.label} •
            <span className="font-bold text-[#79b072] dark:text-[#0a8a3f] ml-2">{Object.values(skills).flat().length}+</span> Total Technologies
          </p>
        </div>

      </div>
    </section>
  );
}