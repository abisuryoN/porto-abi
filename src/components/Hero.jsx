import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profile from '../assets/profile.png';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="min-h-screen pt-0 lg:pt-16 pb-8 flex items-center justify-center overflow-hidden relative">

      {/* Floating Syntaxes */}
      <motion.div animate={{ y: [-10, 15, -10], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-16 lg:top-40 left-2 lg:left-[15%] text-green-400 font-mono text-[10px] lg:text-sm z-0 pointer-events-none whitespace-pre">{`<?php\n  echo "Hello";\n?>`}</motion.div>
      <motion.div animate={{ y: [10, -20, 10], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute top-64 lg:top-auto lg:bottom-48 right-2 lg:right-[10%] text-blue-400 font-mono text-[10px] lg:text-xs z-0 pointer-events-none whitespace-pre">{`function init() {\n  return true;\n}`}</motion.div>
      <motion.div animate={{ y: [0, -25, 0], opacity: [0.25, 0.5, 0.25] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }} className="absolute bottom-[40%] lg:top-1/4 left-2 lg:left-auto lg:right-[25%] text-yellow-300 font-mono text-[10px] lg:text-base z-0 pointer-events-none whitespace-pre">{`SELECT * FROM users;`}</motion.div>
      <motion.div animate={{ y: [-15, 15, -15], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} className="absolute bottom-20 right-4 lg:right-auto lg:left-[20%] text-purple-400 font-mono text-[10px] lg:text-sm z-0 pointer-events-none whitespace-pre">{`{ status: 200 }`}</motion.div>
      <motion.div animate={{ y: [20, -10, 20], opacity: [0.25, 0.5, 0.25] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute top-[15%] right-[25%] text-pink-400 font-mono text-[10px] lg:text-xs z-0 pointer-events-none whitespace-pre">{`<div>\n  <span>Content</span>\n</div>`}</motion.div>
      <motion.div animate={{ y: [-5, 15, -5], opacity: [0.25, 0.5, 0.25] }} transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }} className="absolute top-[60%] left-[5%] text-cyan-300 font-mono text-[9px] lg:text-xs z-0 pointer-events-none whitespace-pre">{`const [data, setData] = useState(null);`}</motion.div>
      <motion.div animate={{ y: [0, 25, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-[30%] right-[15%] text-orange-400 font-mono text-[10px] lg:text-xs z-0 pointer-events-none whitespace-pre">{`npm install lucide-react`}</motion.div>

      {/* Extra floating syntaxes specially for mobile */}
      <motion.div animate={{ y: [-10, 10, -10], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }} className="absolute top-[40%] lg:hidden right-1 text-pink-400 font-mono text-[9px] z-0 pointer-events-none whitespace-pre">{`git commit -m`}</motion.div>
      <motion.div animate={{ y: [5, -15, 5], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }} className="absolute bottom-[20%] left-2 lg:hidden text-orange-400 font-mono text-[9px] z-0 pointer-events-none whitespace-pre">{`const port=300;`}</motion.div>



      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-16 relative z-10 lg:-mt-28">
        <div className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-between w-full gap-y-8 gap-x-2 lg:gap-4">

          {/* Left Column: Name & Title (Right on mobile side-by-side) */}
          <div className="order-2 lg:order-1 flex flex-col justify-center text-left z-20 w-[52%] lg:w-[30%] mt-24 pl-6 lg:mt-0 lg:pl-0">
            <span className="text-blue-400 font-semibold tracking-[0.1em] uppercase mb-1 text-xs sm:text-base">
              {t.hero.hello}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-1 leading-tight">
              Abi Suryo
              <br className="hidden lg:block" />
              <span className="block lg:mt-2">Negoro</span>
            </h1>

            <h2 className="text-base sm:text-xl text-slate-400 mb-4 font-medium lg:mb-8">
              {t.hero.title}
            </h2>

            <a
              href="#projects"
              className="inline-flex items-center justify-center px-5 py-2.5 lg:px-8 lg:py-3.5 w-max text-xs sm:text-base font-medium text-slate-900 bg-yellow-400 hover:bg-yellow-500 rounded-full shadow-lg transition-all duration-300 gap-2"
            >
              {t.hero.viewProjects}
            </a>
          </div>

          {/* Center Column: Image (Left on mobile side-by-side) */}
          <div className="order-1 lg:order-2 flex justify-center items-center relative z-20 w-[45%] lg:w-[40%] lg:-translate-y-16">
            <div className="relative flex justify-center w-full focus-within:z-30">
              {/* Background Text - Positioned directly behind the photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 0.35, scale: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.1 }}
                className="absolute top-1/2 left-0 lg:left-[-20%] -translate-x-1/2 -translate-y-1/2 w-max flex flex-col items-center justify-center pointer-events-none z-0 px-4"
              >
                <span
                  className="text-[11vw] sm:text-[9vw] md:text-[9vw] lg:text-[7vw] font-black text-transparent stroke-text leading-[0.85] tracking-[0.1em] text-center whitespace-nowrap"
                  style={{ WebkitTextStroke: '1.2px rgba(255,255,255,0.25)' }}
                >
                  BACKEND
                </span>
                <span
                  className="text-[9vw] sm:text-[7vw] md:text-[7vw] lg:text-[5vw] font-black text-transparent stroke-text leading-[0.85] tracking-[0.1em] text-center mt-2 whitespace-nowrap"
                  style={{ WebkitTextStroke: '1.2px rgba(255,255,255,0.25)' }}
                >
                  DEVELOPER
                </span>
              </motion.div>
              {/* Blur/Glow background effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[20vw] aspect-square bg-blue-500/20 blur-3xl rounded-full"></div>

              {/* Profile Image (Transparent BG) */}
              <img
                src={profile}
                alt="Abi Suryo Negoro"
                className="w-[125%] max-w-none sm:w-[62vw] md:w-[52vw] lg:w-[31vw] xl:w-[27vw] lg:max-w-[485px] mx-auto object-contain relative z-20 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-[1.3] lg:hover:scale-105 scale-110 lg:scale-100"
              />
            </div>
          </div>

          {/* Right Column: About Me (Full width on mobile below) */}
          <div className="order-3 lg:order-3 text-left lg:text-right z-20 w-full lg:w-[30%] flex flex-col items-start lg:items-end mt-4">
            <div className="mb-6 lg:mb-8">
              <h3 className="text-base font-bold text-white mb-3 lg:mb-4 uppercase tracking-wider relative inline-block after:content-[''] after:block after:w-1/2 after:h-1 after:bg-blue-500 after:mt-2 lg:after:mr-0 lg:after:ml-auto">
                {t.hero.aboutMe}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-none lg:max-w-sm">
                {t.hero.bio}
              </p>
            </div>

            {/* Follow Me Section */}
            <div>
              <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-wider">
                {t.hero.followMe}
              </h4>
              <div className="flex gap-4 justify-center lg:justify-end">
                <a href="https://github.com/abisuryoN" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#333] hover:scale-110 transition-all duration-300">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/abi-suryo-negoro-76b83b342/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0077b5] hover:scale-110 transition-all duration-300">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://www.instagram.com/abisuryongro/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#e1306c] hover:scale-110 transition-all duration-300">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
