import { Code2, Award, Briefcase } from 'lucide-react';

export default function About() {
  const stats = [
    { label: "Projects Built", value: "10+", icon: Code2 },
    { label: "LeetCode Solved", value: "150+", icon: Award },
    { label: "Work Experience", value: "1+ Year", icon: Briefcase },
    { label: "Technologies", value: "12+", icon: Code2 }
  ];

  return (
    <section id="about" className="min-h-screen top-1 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 accent-gradient dark:accent-gradient-dark mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-center">

          {/* Left: Image */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* TODO: Replace this div with your actual image */}
              {/* <img src="/path-to-your-image.jpg" alt="Aakash Raj" className="rounded-2xl w-full shadow-2xl" /> */}

              {/* Placeholder - Remove this div when you add your image */}
              <div className="aspect-square rounded-2xl accent-gradient dark:accent-gradient-dark flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-2">AR</div>
                  <div className="text-sm opacity-80">Your Photo Here</div>
                </div>
              </div>

              {/* Decorative floating element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 accent-gradient dark:accent-gradient-dark rounded-full blur-3xl opacity-20 -z-10"></div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="lg:col-span-3 space-y-6">
            {/* Bio - 2 paragraphs */}
            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                Hi! I'm <span className="font-bold text-black dark:text-white">Aakash Raj</span>, a Frontend Developer who loves crafting modern web experiences. I specialize in React and Next.js, building applications that are fast, beautiful, and built to scale. Whether it's optimizing performance or designing intuitive interfaces, I'm all about turning ideas into polished products.
              </p>

              <p>
                With hands-on experience from my internship at XcodeTeam and recognition as a <span className="font-bold text-[#79b072] dark:text-[#0a8a3f]">Top 1% performer</span> at PwC, I bring both technical skills and a passion for continuous growth. When I'm not coding, you'll find me solving problems on LeetCode or exploring new frameworks and tools.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="text-center p-4 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:scale-105 transition-transform"
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2 text-[#79b072] dark:text-[#0a8a3f]" />
                    <div className="text-2xl font-bold text-black dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}