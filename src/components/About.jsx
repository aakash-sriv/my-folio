import { Code2, Award, Briefcase, Github, Linkedin, Twitter } from 'lucide-react';

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
          <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 accent-gradient dark:accent-gradient-dark mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-center">

          {/* Left: Image */}
          <div className="lg:col-span-2">
            {/* Avatar Image */}
            <div className="relative group">
              <div className="relative w-64 h-64 mx-auto mb-8">
                {/* Image */}
                <img
                  src="/avatar.jpg"
                  alt="Aakash Raj"
                  className="w-full h-full rounded-full shadow-2xl border-4 border-white/20 dark:border-white/10 relative z-10"
                />

                {/* Decorative glow behind image */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#79b072] to-[#0a8a3f] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6">
                {[
                  { icon: Github, href: "https://github.com/aakash-sriv", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/aakash--raj", label: "LinkedIn" },
                  { icon: Twitter, href: "https://twitter.com/aakash__sr", label: "Twitter" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-black/5 dark:border-white/10 hover:scale-110 transition-all duration-300 group/icon"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover/icon:text-[#79b072] dark:group-hover/icon:text-[#0a8a3f] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="lg:col-span-3 space-y-6">
            {/* Bio - 2 paragraphs */}
            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Hi! I'm <span className="font-bold text-black dark:text-white">Aakash Raj</span>, a passionate Frontend Developer who thrives on crafting intuitive and dynamic web experiences. I specialize in the React ecosystem, building applications that are not just functional but also visually stunning and performant.
              </p>

              <p>
                My journey is driven by a relentless curiosity to learn and build. Whether it's solving complex algorithmic problems or deep-diving into modern UI/UX patterns, I'm always pushing my boundaries. I believe in writing clean, maintainable code and turning creative concepts into reality.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="text-center p-4 rounded-xl bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-gray-800 hover:scale-105 transition-transform"
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