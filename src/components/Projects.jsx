import { useState, useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
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
  const touchStart = useRef(0);
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

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-md mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t.projects.title}</h2>
          <p className="text-slate-400">{t.projects.subtitle}</p>
        </div>

        <div className="relative group overflow-hidden">
          <button onClick={() => setCurrentIndex(p => (p === 0 ? totalProjects - 1 : p - 1))} className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 text-white shadow-lg hover:bg-slate-700">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => setCurrentIndex(p => (p === totalProjects - 1 ? 0 : p + 1))} className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 text-white shadow-lg hover:bg-slate-700">
            <ChevronRight size={20} />
          </button>

          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: "translateX(-" + (currentIndex * 100) + "%)" }}
            onTouchStart={(e) => touchStart.current = e.touches[0].clientX}
            onTouchEnd={(e) => {
                const diff = touchStart.current - e.changedTouches[0].clientX;
                if (diff > 50) setCurrentIndex(p => (p === totalProjects - 1 ? 0 : p + 1));
                else if (diff < -50) setCurrentIndex(p => (p === 0 ? totalProjects - 1 : p - 1));
            }}
          >
            {localizedProjects.map((project, idx) => (
              <div key={project.id} className="min-w-full p-2">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col h-full cursor-pointer hover:border-blue-500/50 group/card">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono text-blue-400">{String(idx + 1).padStart(2, '0')} / {String(totalProjects).padStart(2, '0')}</span>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 p-1" onClick={(e) => e.stopPropagation()}>
                        <ExternalLink size={18} />
                    </a>
                  </div>
                  <div className="flex-grow" onClick={() => setSelectedProject(project)}>
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-slate-400 text-sm mb-6">{project.shortDesc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800" onClick={() => setSelectedProject(project)}>
                    {project.techStack.map((tech) => {
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
              </div>
            ))}
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
