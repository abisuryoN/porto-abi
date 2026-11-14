import { X, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ProjectModal = ({ project, isOpen, onClose, techIcons }) => {
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-lg bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-grow">
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">{t.projects.descLabel}</h4>
            <p className="text-slate-300 leading-relaxed">{project.fullDesc}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">{t.projects.tech}</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => {
                const TechIcon = techIcons?.[tech];
                return (
                  <span key={tech} className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-xl text-sm font-medium flex items-center gap-2">
                    {TechIcon && <TechIcon.icon className={`${TechIcon.color} text-lg`} />}
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-slate-800 bg-slate-900/50 flex flex-col gap-3">
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-lg"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
          <button onClick={onClose} className="px-6 py-3 rounded-xl border border-slate-700 text-slate-300 font-medium hover:bg-slate-800 transition-colors">
            {t.projects.close}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
