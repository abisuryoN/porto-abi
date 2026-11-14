import { useState, useMemo, useRef, useEffect } from 'react';
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
  const [isDesktop, setIsDesktop] = useState(false);
  const { t } = useLanguage();
  const items = useMemo(() => t.projects.items.map((item, index) => ({ ...item, ...projectsData[index] })), [t]);
  const total = items.length;
  
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionRef = useRef(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const paginate = (newDirection) => {
    if (transitionRef.current) return;
    transitionRef.current = true;
    setIsTransitioning(true);
    setIndex(prev => prev + newDirection);
  };

  const handleTransitionEnd = () => {
    transitionRef.current = false;
    setIsTransitioning(false);
  };

  const currentIdx = (index - 1) % total;
  const project = items[currentIdx];

  return (
    <section id="projects" className="py-8 px-4 overflow-hidden">
      <div className="max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.projects.title}</h2>
        
        <div className="relative w-full">
          <button onClick={() => paginate(-1)} className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-30 p-2 bg-slate-800 text-white rounded-full hover:bg-slate-700">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => paginate(1)} className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-30 p-2 bg-slate-800 text-white rounded-full hover:bg-slate-700">
            <ChevronRight size={24} />
          </button>

          <div className="w-full overflow-hidden">
            <motion.div 
                animate={{ x: `-${(index - 1) * 100}%` }}
                transition={isTransitioning ? { type: "tween", ease: "easeInOut", duration: 0.3 } : { duration: 0 }}
                onAnimationComplete={handleTransitionEnd}
                className="flex"
            >
              {items.map((project, i) => (
                <div key={i} className="basis-full shrink-0 grow-0 min-w-0 px-2">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col cursor-pointer hover:border-blue-500/50" onClick={() => setSelectedProject(project)}>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-mono text-blue-400">{String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 z-30" onClick={(e) => e.stopPropagation()}>
                            <ExternalLink size={20} />
                        </a>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{project.title}</h3>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">{project.shortDesc}</p>
                      
                      <div className="mt-auto pt-4 border-t border-slate-800">
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                              <span key={tech} className="text-[10px] md:text-xs px-3 py-1.5 bg-slate-800 text-slate-300 rounded-md border border-slate-700/50">{tech}</span>
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
