import { Github, Linkedin, Twitter } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 accent-gradient dark:accent-gradient-dark mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-center">

          {/* Left: Image */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center gap-8">
            {/* Avatar Image */}
            <div className="relative group w-48 h-48 sm:w-64 sm:h-64">
              {/* Image */}
              <img
                src="/avatar.jpg"
                alt="Aakash Raj"
                className="w-full h-full rounded-full shadow-2xl border-4 border-white/20 dark:border-white/10 relative z-10 object-cover object-top sm:object-center"
              />

              {/* Decorative glow behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#79b072] to-[#0a8a3f] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-24 relative z-20">
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

          {/* Right: Bio */}
          <div className="lg:col-span-3 space-y-6">
            {/* Bio - 2 paragraphs */}
            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Hey! I'm <span className="font-bold text-black dark:text-white">Aakash Raj</span>, a Full Stack Developer who loves building fast, beautiful web applications. I work with React, Next.js, and Node.js to create experiences that users actually enjoy.
              </p>

              <p>
                I've built and shipped production features, optimized app performance, and created reusable component systems from scratch. I'm always learning, whether it's solving DSA problems or diving into the latest web technologies.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}