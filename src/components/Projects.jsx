import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';
import { SiPhp, SiLaravel, SiCodeigniter, SiMysql, SiBootstrap, SiReact } from 'react-icons/si';

const techIcons = {
  'PHP': { icon: SiPhp, color: 'text-[#777BB4]' },
  'Laravel': { icon: SiLaravel, color: 'text-[#F55240]' },
  'CodeIgniter 4': { icon: SiCodeigniter, color: 'text-[#EE4323]' },
  'MySQL': { icon: SiMysql, color: 'text-[#4479A1]' },
  'Bootstrap': { icon: SiBootstrap, color: 'text-[#7952B3]' },
  'React JS': { icon: SiReact, color: 'text-[#61DAFB]' },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { t } = useLanguage();

  const localizedProjects = useMemo(() => {
    return t.projects.items.map((item, index) => ({
      ...item,
      id: index + 1,
      techStack: [['PHP', 'Laravel', 'MySQL'],['React JS', 'Vite', 'JavaScript'],['PHP', 'CodeIgniter 4', 'MySQL'],['PHP', 'CodeIgniter 4', 'Bootstrap'],['React JS', 'Laravel']][index] || [],
      demoUrl: ['https://absensitaat.insomnia247.nl/','https://followcheck.insomnia247.nl/','https://rayaabadisaudara.com','https://koperasi-ras.netlify.app/','https://dualcode.vercel.app/'][index]
    }));
  }, [t]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + localizedProjects.length) % localizedProjects.length);
  };

  return (
    <section id="projects" className="py-8 px-4">
      <div className="max-w-md mx-auto relative">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.projects.title}</h2>
        <div className="relative flex items-center justify-center">
          <button onClick={() => paginate(-1)} className="absolute left-0 z-30 p-2 bg-slate-800 text-white rounded-full hover:bg-slate-700">
            <ChevronLeft size={24} />
          </button>
          
          <div className="w-full h-[450px] overflow-hidden relative">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={{
                        enter: (direction) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
                        center: { x: 0, opacity: 1 },
                        exit: (direction) => ({ x: direction < 0 ? "100%" : "-100%", opacity: 0 })
                    }}
                    initial="enter" animate="center" exit="exit"
                    transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                    className="absolute w-full"
                >
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col h-[400px]" onClick={() => setSelectedProject(localizedProjects[currentIndex])}>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-xs font-mono text-blue-400">{String(currentIndex + 1).padStart(2, '0')} / {String(localizedProjects.length).padStart(2, '0')}</span>
                        <a href={localizedProjects[currentIndex].demoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400" onClick={(e) => e.stopPropagation()}><ExternalLink size={20} /></a>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{localizedProjects[currentIndex].title}</h3>
                      <p className="text-slate-400 text-sm mb-auto line-clamp-4">{localizedProjects[currentIndex].shortDesc}</p>
                      <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                        {localizedProjects[currentIndex].techStack.map(tech => (
                          <span key={tech} className="text-[10px] px-2 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700/50">{tech}</span>
                        ))}
                      </div>
                    </div>
                </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={() => paginate(1)} className="absolute right-0 z-30 p-2 bg-slate-800 text-white rounded-full hover:bg-slate-700">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} techIcons={techIcons} />}
    </section>
  );
};

export default Projects;
