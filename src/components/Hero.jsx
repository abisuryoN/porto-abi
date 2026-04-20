import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profile from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-0 lg:pt-16 pb-8 flex items-center justify-center overflow-hidden relative">

      {/* Floating Syntaxes */}
      <motion.div animate={{ y: [-10, 15, -10], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-16 lg:top-40 left-2 lg:left-[15%] text-green-500 font-mono text-[10px] lg:text-sm z-0 pointer-events-none whitespace-pre">{`<?php\n  echo "Hello";\n?>`}</motion.div>
      <motion.div animate={{ y: [10, -20, 10], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute top-64 lg:top-auto lg:bottom-48 right-2 lg:right-[10%] text-blue-400 font-mono text-[10px] lg:text-xs z-0 pointer-events-none whitespace-pre">{`function init() {\n  return true;\n}`}</motion.div>
      <motion.div animate={{ y: [0, -25, 0], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }} className="absolute bottom-[40%] lg:top-1/4 left-2 lg:left-auto lg:right-[25%] text-yellow-300 font-mono text-[10px] lg:text-base z-0 pointer-events-none whitespace-pre">{`SELECT * FROM users;`}</motion.div>
      <motion.div animate={{ y: [-15, 15, -15], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} className="absolute bottom-20 right-4 lg:right-auto lg:left-[20%] text-purple-400 font-mono text-[10px] lg:text-sm z-0 pointer-events-none whitespace-pre">{`{ status: 200 }`}</motion.div>

      {/* Extra floating syntaxes specially for mobile */}
      <motion.div animate={{ y: [-10, 10, -10], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }} className="absolute top-[40%] lg:hidden right-1 text-pink-400 font-mono text-[9px] z-0 pointer-events-none whitespace-pre">{`git commit -m`}</motion.div>
      <motion.div animate={{ y: [5, -15, 5], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }} className="absolute bottom-[20%] left-2 lg:hidden text-orange-400 font-mono text-[9px] z-0 pointer-events-none whitespace-pre">{`const port=300;`}</motion.div>

      {/* Outline Text Background Component - Centered for both Desktop and Mobile */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.1 }}
        className="absolute top-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center pointer-events-none z-0 px-4"
      >
       <span 
           className="text-[9vw] sm:text-[8vw] md:text-[8vw] lg:text-[8vw] font-black text-transparent stroke-text leading-[0.85] tracking-[0.1em] text-center whitespace-nowrap" 
           style={{ WebkitTextStroke: '1.2px rgba(255,255,255,0.25)' }}
         >
           BACKEND
         </span>
         <span 
           className="text-[7vw] sm:text-[6vw] md:text-[6vw] lg:text-[6vw] font-black text-transparent stroke-text leading-[0.85] tracking-[0.1em] text-center mt-2 lg:mt-4 whitespace-nowrap" 
           style={{ WebkitTextStroke: '1.2px rgba(255,255,255,0.25)' }}
         >
           DEVELOPER
         </span>
      </motion.div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-16 relative z-10 mt-0 lg:-mt-12">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-4">

          {/* Left Column: Name & Title */}
          <div className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 lg:w-[30%] -translate-y-20 lg:translate-y-0">
            <span className="text-blue-400 font-semibold tracking-[0.2em] uppercase mb-4 text-sm sm:text-base">
              Hello I'm
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
              Abi Suryo
              <br className="hidden lg:block" />
              <span className="block mt-2">Negoro</span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-slate-400 mb-8 font-medium">
              Backend Developer
            </h2>

            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 w-max mx-auto lg:mx-0 text-base font-medium text-slate-900 bg-yellow-400 hover:bg-yellow-500 rounded-full shadow-lg transition-all duration-300 gap-2"
            >
              Lihat Project
            </a>
          </div>

          {/* Center Column: Image */}
          <div className="order-1 lg:order-2 flex justify-center items-center relative z-20 mt-0 -translate-y-24 lg:-translate-y-16 lg:w-[40%]">
            <div className="relative flex justify-center w-full">
              {/* Blur/Glow background effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[20vw] aspect-square bg-blue-500/20 blur-3xl rounded-full"></div>
              
              {/* Profile Image (Transparent BG) */}
              <img
                src={profile}
                alt="Abi Suryo Negoro"
                className="w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[28vw] xl:w-[24vw] max-w-[450px] mx-auto object-contain relative z-20 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: About Me */}
          <div className="order-3 lg:order-3 text-center lg:text-right z-20 lg:w-[30%] flex flex-col items-center lg:items-end">
            <div className="mb-8">
              <h3 className="text-base font-bold text-white mb-4 uppercase tracking-wider relative inline-block after:content-[''] after:block after:w-1/2 after:h-1 after:bg-blue-500 after:mt-2 lg:after:mr-0 lg:after:ml-auto after:mx-auto">
                About Me
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
                Saya adalah <span className="text-blue-400 font-semibold">Backend Developer</span> yang fokus pada pengembangan web.
                Saya memiliki passion besar dalam membangun arsitektur sistem yang scalable, aman, dan efisien untuk berbagai pengujian aplikasi.
              </p>
            </div>

            {/* Follow Me Section */}
            <div>
              <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-wider">
                Follow Me
              </h4>
              <div className="flex gap-4 justify-center lg:justify-end">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#333] hover:scale-110 transition-all duration-300">
                  <FaGithub size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0077b5] hover:scale-110 transition-all duration-300">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#e1306c] hover:scale-110 transition-all duration-300">
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
