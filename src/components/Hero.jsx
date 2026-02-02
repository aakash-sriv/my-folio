import { useState, useEffect, useRef } from 'react';
import { ArrowDown, Send } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

export default function Hero() {
  const targetName = "Aakash Raj";
  const [scrambled, setScrambled] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [showDot, setShowDot] = useState(true);

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";
  const scrambleRef = useRef(null);
  const cycleRef = useRef(null);

  // Theme Toggle Sync
  const [colorScheme, setColorScheme] = useState('light');

  useEffect(() => {
    const checkScheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setColorScheme(isDark ? 'dark' : 'light');
    };

    // Initial check
    checkScheme();

    // Watch for class changes on <html>
    const observer = new MutationObserver(checkScheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  // Live clock + blinking dot
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }));
    };

    updateTime();
    const clockInterval = setInterval(updateTime, 1000);

    const dotInterval = setInterval(() => {
      setShowDot(prev => !prev);
    }, 1000);

    return () => {
      clearInterval(clockInterval);
      clearInterval(dotInterval);
    };
  }, []);

  // Scramble effect for name
  useEffect(() => {
    const runScramble = () => {
      const target = targetName;
      const len = target.length;
      let revealIndex = 0;
      let tick = 0;

      const buildRandom = () =>
        target
          .split('')
          .map((ch) => (ch === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]))
          .join('');

      setScrambled(buildRandom());

      scrambleRef.current = setInterval(() => {
        tick++;

        const frame = target
          .split('')
          .map((ch, i) => {
            if (ch === ' ') return ' ';
            if (i < revealIndex) return ch;
            if (Math.random() < 0.02) return ch;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');

        setScrambled(frame);

        if (tick % 4 === 0) {
          revealIndex++;
          if (revealIndex > len) revealIndex = len;
        }

        if (revealIndex >= len) {
          clearInterval(scrambleRef.current);
          setScrambled(target);
        }
      }, 20);
    };

    runScramble();

    cycleRef.current = setInterval(() => {
      runScramble();
    }, 5000);

    return () => {
      clearInterval(scrambleRef.current);
      clearInterval(cycleRef.current);
    };
  }, []);

  const scrollToSection = (sectionId) => (e) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 pt-20 pb-8">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">

        {/* Clock - Small in corner on mobile, normal on desktop */}
        <div className="flex justify-end mb-2 sm:mb-10 mt-2 sm:mt-4 pr-2 sm:pr-20">
          <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-base font-mono text-[#79b072] dark:text-[#0a8a3f]">
            <span
              className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-opacity duration-100 ${showDot ? 'opacity-100' : 'opacity-0'} bg-[#79b072] dark:bg-[#0a8a3f]`}
            ></span>
            <span>{currentTime}</span>
          </div>
        </div>

        {/* Main Hero Content - Left Aligned within margins */}
        <div className="flex-1 flex items-center">
          <div className="w-full text-left space-y-6">

            {/* Available Tag */}
            <div className="flex justify-start">
              <div className="relative overflow-hidden inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full 
                  bg-green-100/30 dark:bg-green-900/30 
                  border border-green-200 dark:border-green-800
                  before:content-[''] before:absolute before:inset-y-0 before:left-[-150%] before:w-[120%]
                  before:bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.6)_50%,transparent_100%)]
                  before:animate-[shine_2.2s_infinite]">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-green-700 dark:text-green-300">
                  Available for work
                </span>
              </div>
            </div>

            {/* Name with Scramble */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white break-words">
                <span>Hi, I'm </span>
                <span className="text-[#79b072] dark:text-[#0a8a3f] font-mono inline-block" aria-live="polite" aria-atomic="true">
                  {scrambled}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-xl">
                Been building. Still building. Always building. <br />
                Clean code, sharp tools, and a bit of Next.js magic.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-start gap-3 sm:gap-4">
              <a
                href="#projects"
                onClick={scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-2 
                    px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg 
                    accent-gradient dark:accent-gradient-dark
                    text-white font-medium hover:opacity-90 
                    transition cursor-pointer text-sm sm:text-base"
              >
                <span>View My Work</span>
                <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                onClick={scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer text-sm sm:text-base"
              >
                <Send size={16} />
                <span>Drop a Hi</span>
              </a>
            </div>
          </div>
        </div>

        {/* GitHub Heatmap - Centered */}
        <div className="mt-20 max-w-3xl mx-auto w-full">
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 p-4 sm:p-6 flex justify-center">

            <div className="w-full overflow-x-auto flex justify-center heatmap-scroll">
              <GitHubCalendar
                username="aakash-sriv"
                colorScheme={colorScheme}
                blockSize={12}
                blockMargin={4}
                blockRadius={7}
                fontSize={12}
                theme={{
                  light: ['#ffffff', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                  dark: ['#000000', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
                style={{
                  color: 'inherit',
                  margin: 'auto'
                }}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
