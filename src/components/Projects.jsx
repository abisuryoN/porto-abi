import { useState, useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';
import { SiPhp, SiLaravel, SiCodeigniter, SiMysql, SiBootstrap, SiReact } from 'react-icons/si';
import { projectsData } from '../data/projectsData';

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
  const { t } = useLanguage();
  
  // Combine localization items with fixed data
  const items = useMemo(() => {
    return t.projects.items.map((item, index) => ({
      ...item,
      ...projectsData[index]
    }));
  }, [t]);
  
  const total = items.length;
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionRef = useRef(false);

  const slides = useMemo(() => [items[total - 1], ...items, items[0]], [items, total]);

  const paginate = (newDirection) => {
    if (transitionRef.current) return;
    transitionRef.current = true;
    setIsTransitioning(true);
    setIndex(prev => prev + newDirection);
  };

  const handleTransitionEnd = () => {
    transitionRef.current = false;
    setIsTransitioning(false);
    if (index === 0) setIndex(total);
    else if (index === total + 1) setIndex(1);
  };

  const currentDisplayIndex = ((index - 1 + total) % total) + 1;

  return (
    <section id="projects" className="py-8 px-4 overflow-hidden">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.projects.title}</h2>
        
        <div className="relative w-full">
          <button onClick={() => paginate(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-slate-800 text-white rounded-full hover:bg-slate-700">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => paginate(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-slate-800 text-white rounded-full hover:bg-slate-700">
            <ChevronRight size={24} />
          </button>

          <div className="w-full overflow-hidden">
            <motion.div 
                className="flex flex-row flex-nowrap items-stretch"
                animate={{ x: `-${index * 100}%` }}
                transition={isTransitioning ? { type: "tween", ease: "easeInOut", duration: 0.3 } : { duration: 0 }}
                onAnimationComplete={handleTransitionEnd}
            >
              {slides.map((project, i) => (
                <div key={i} className="basis-full shrink-0 grow-0 min-w-0 px-4">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col h-full cursor-pointer hover:border-blue-500/50" onClick={() => setSelectedProject(project)}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono text-blue-400">{String(currentDisplayIndex).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 p-2 -mr-2 z-30" onClick={(e) => e.stopPropagation()}>
                            <ExternalLink size={20} />
                        </a>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                          <h3 className="text-lg font-semibold text-white line-clamp-2">{project.title}</h3>
                          <p className="text-slate-400 text-sm line-clamp-3">{project.shortDesc}</p>
                      </div>
                      
                      <div className="mt-3 pt-3 border-t border-slate-800">
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                              <span key={tech} className="text-[10px] px-2 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700/50">{tech}</span>
                            ))}
                        </div>
                      </div>
                    </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} techIcons={techIcons} />}
    </section>
  );
};

export default Projects;
