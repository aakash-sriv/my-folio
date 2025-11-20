import { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowRight, Send } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "echo 'Hello, visitor! Welcome to my portfolio'";

  // Matrix-scramble rotating texts
  const rotatingTexts = [
    "Aakash Raj",
    "a Frontend Developer",
    "a Full Stack Developer",
    "a Problem Solver"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrambled, setScrambled] = useState(''); // what is shown in headline

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*()[]{}<>/?|\\+-=~"; // matrix chars

  // refs to keep intervals for cleanup
  const scrambleRef = useRef(null);
  const cycleRef = useRef(null);
  const cursorRef = useRef(null);
  const typingRef = useRef(null);

  // Terminal typing (unchanged)
  useEffect(() => {
    let i = 0;
    typingRef.current = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingRef.current);
      }
    }, 50);

    cursorRef.current = setInterval(() => {
      setShowCursor(p => !p);
    }, 500);

    return () => {
      clearInterval(typingRef.current);
      clearInterval(cursorRef.current);
    };
  }, []);

  // scramble function — creates matrix effect then reveals characters
  useEffect(() => {
    const runScramble = () => {
      const target = rotatingTexts[currentIndex] || '';
      const len = target.length;
      let revealIndex = 0; // how many characters have been fixed
      let tick = 0;

      // ensure initial scrambled state length matches target (keep spaces)
      const buildRandom = () =>
        target
          .split('')
          .map((ch) => (ch === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]))
          .join('');

      setScrambled(buildRandom());

      // run rapid scramble + gradual reveal
      scrambleRef.current = setInterval(() => {
        tick++;

        // produce a random-frame where unrevealed positions show random chars
        const frame = target
          .split('')
          .map((ch, i) => {
            if (ch === ' ') return ' ';
            if (i < revealIndex) return ch; // already revealed
            // sometimes briefly show the correct char randomly to add variance
            if (Math.random() < 0.02) return ch;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');

        setScrambled(frame);

        // every few ticks, advance revealIndex by 1 (controls reveal speed)
        // adjust modulus to speed up/down reveal
        if (tick % 4 === 0) {
          revealIndex++;
          if (revealIndex > len) revealIndex = len;
        }

        // when fully revealed, stop scramble interval
        if (revealIndex >= len) {
          clearInterval(scrambleRef.current);
          // ensure final correct text (spaces preserved)
          setScrambled(target);
        }
      }, 20); // 30ms per scramble frame — tweak for faster/slower flicker
    };

    // start scramble immediately for the current index
    runScramble();

    // cycle to next text every 3000ms (3s)
    cycleRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => {
      clearInterval(scrambleRef.current);
      clearInterval(cycleRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]); // restart scramble when index changes

  // Smooth scroll helper
  const scrollToSection = (sectionId) => (e) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-16 lg:pb-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left */}
          <div className="text-center lg:text-left space-y-6">
            <div className="relative overflow-hidden inline-flex items-center gap-2 px-4 py-2 rounded-full 
                bg-green-100/30 dark:bg-green-900/30 
                border border-green-200 dark:border-green-800
                before:content-[''] before:absolute before:inset-y-0 before:left-[-150%] before:w-[120%]
                before:bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.6)_50%,transparent_100%)]
                before:animate-[shine_2.2s_infinite]">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-700 dark:text-green-300">
                Available for work/opportunities
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white">
                <span>Hi, I'm&nbsp;</span>
                <span className="inline-block align-baseline min-h-[4.5rem] sm:min-h-[3.75rem] lg:min-h-[4.5rem]">
                  <span className="text-[#79b072] dark:text-[#0a8a3f] font-mono block" aria-live="polite" aria-atomic="true">
                    {scrambled}
                  </span>
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                Been building. Still building. Always building. <br />
                Clean code, sharp tools, and a bit of Next.js magic.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                onClick={scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-2 
                    px-6 py-3 rounded-lg 
                    accent-gradient dark:accent-gradient-dark
                    text-white font-medium hover:opacity-90 
                    transition cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown size={18} />
              </a>
              <a
                href="#contact"
                onClick={scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
              >
                <Send size={18} />
                <span>Let's Connect</span>
              </a>
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="relative">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-800">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm text-gray-400">terminal ~ portfolio</span>
                </div>
              </div>

              <div className="p-4 font-mono text-sm space-y-3 min-h-[300px]">
                <div className="text-gray-500">
                  Last login: {new Date().toLocaleString()}
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400">visitor@root</span>
                    <span className="text-gray-500">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-gray-400">$</span>
                    <span className="text-green-400">{text}</span>
                    {showCursor && <span className="text-white">|</span>}
                  </div>

                  {text.length === fullText.length && (
                    <>
                      <div className="text-gray-300 pl-4">
                        Hello, visitor! Welcome to my portfolio
                      </div>

                      <div className="flex items-start gap-2 pt-2">
                        <span className="text-orange-400">visitor@root</span>
                        <span className="text-gray-500">:</span>
                        <span className="text-blue-400">~</span>
                        <span className="text-gray-400">$</span>
                        <span className="text-green-400">./run_portfolio.sh</span>
                      </div>

                      <div className="space-y-1 pl-4 text-gray-400">
                        <div>
                          <span className="text-yellow-400">⚡</span> Initializing portfolio components...
                        </div>
                        <div>
                          <span className="text-green-400">✓</span> Loading frontend skills... <span className="text-green-400">Done!</span>
                        </div>
                        <div>
                          <span className="text-green-400">✓</span> Loading backend expertise... <span className="text-green-400">Done!</span>
                        </div>
                        <div>
                          <span className="text-green-400">✓</span> Connecting creative modules... <span className="text-green-400">Done!</span>
                        </div>
                        <div className="text-yellow-400 pt-2">
                          Portfolio is ready to explore!
                        </div>
                      </div>

                      <div className="flex items-start gap-2 pt-2">
                        <span className="text-orange-400">visitor@root</span>
                        <span className="text-gray-500">:</span>
                        <span className="text-blue-400">~</span>
                        <span className="text-gray-400">$</span>
                        <span className="text-white animate-pulse">_</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 accent-gradient rounded-full blur-3xl opacity-20"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
