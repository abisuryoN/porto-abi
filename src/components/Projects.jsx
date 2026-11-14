import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';
import { SiPhp, SiLaravel, SiCodeigniter, SiMysql, SiNodedotjs, SiExpress, SiMongodb, SiSocketdotio, SiBootstrap, SiDocker, SiRedis, SiGoogle } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

const techIcons = {
  'PHP': { icon: SiPhp, color: 'text-[#777BB4]' },
  'Laravel': { icon: SiLaravel, color: 'text-[#F55240]' },
  'CodeIgniter 4': { icon: SiCodeigniter, color: 'text-[#EE4323]' },
  'MySQL': { icon: SiMysql, color: 'text-[#4479A1]' },
  'Bootstrap': { icon: SiBootstrap, color: 'text-[#7952B3]' },
  'Node.js': { icon: SiNodedotjs, color: 'text-[#339933]' },
  'Express': { icon: SiExpress, color: 'text-white' },
  'MongoDB': { icon: SiMongodb, color: 'text-[#47A248]' },
  'Socket.io': { icon: SiSocketdotio, color: 'text-white' },
  'React JS': { icon: FaReact, color: 'text-[#61DAFB]' },
  'Docker': { icon: SiDocker, color: 'text-[#2496ED]' },
  'Redis': { icon: SiRedis, color: 'text-[#DC382D]' },
  'Google Login': { icon: SiGoogle, color: 'text-[#4285F4]' },
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
      techStack: [
        ['PHP', 'Laravel', 'MySQL'],
        ['React JS', 'Vite', 'JavaScript'],
        ['PHP', 'CodeIgniter 4', 'MySQL'],
        ['PHP', 'CodeIgniter 4', 'Bootstrap'],
        ['React JS', 'Laravel']
      ][index] || [],
      demoUrl: [
        'https://absensitaat.insomnia247.nl/',
        'https://followcheck.insomnia247.nl/',
        'https://rayaabadisaudara.com',
        'https://koperasi-ras.netlify.app/',
        'https://dualcode.vercel.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaeboCQqHvkAX21fK5Cjvj9WJPdXhAIyKVMCkrk2VbizlkGOaQwrJCXg4EL60w_aem_HYEYiIUAwo-6mBRwcQ_wKA'
      ][index]
    }));
  }, [t]);

  const totalProjects = localizedProjects.length;

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + totalProjects) % totalProjects);
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t.projects.title}</h2>
          <p className="text-slate-400">{t.projects.subtitle}</p>
        </div>

        <div className="relative group">
          <button onClick={() => paginate(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 text-white shadow-lg hover:bg-slate-700">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => paginate(1)} className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 text-white shadow-lg hover:bg-slate-700">
            <ChevronRight size={20} />
          </button>

          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={{
                        enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
                        center: { zIndex: 1, x: 0, opacity: 1 },
                        exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 300 : -300, opacity: 0 })
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                    className="absolute w-full"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset }) => {
                        if (offset.x > 50) paginate(-1);
                        else if (offset.x < -50) paginate(1);
                    }}
                >
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col h-full cursor-pointer hover:border-blue-500/50" onClick={() => setSelectedProject(localizedProjects[currentIndex])}>
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-mono text-blue-400">{String(currentIndex + 1).padStart(2, '0')} / {String(totalProjects).padStart(2, '0')}</span>
                        <a href={localizedProjects[currentIndex].demoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 p-1" onClick={(e) => e.stopPropagation()}>
                            <ExternalLink size={18} />
                        </a>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{localizedProjects[currentIndex].title}</h3>
                      <p className="text-slate-400 text-sm mb-6 flex-grow">{localizedProjects[currentIndex].shortDesc}</p>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                        {localizedProjects[currentIndex].techStack.map((tech) => {
                          const TechIcon = techIcons[tech];
                          return (
                            <span key={tech} className="text-[10px] px-2 py-1 bg-slate-800 text-slate-300 rounded-md flex items-center gap-1.5 border border-slate-700/50">
                              {TechIcon && <TechIcon.icon className={TechIcon.color} />}
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} techIcons={techIcons} />
      )}
    </section>
  );
};

export default Projects;
