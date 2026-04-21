import { useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
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
  const [swiperInstance, setSwiperInstance] = useState(null);
  const { t } = useLanguage();

  // Mapping static tech & links to localized data
  const localizedProjects = useMemo(() => {
    const staticData = [
      { id: 1, techStack: ['PHP', 'CodeIgniter 4', 'Bootstrap'], demoUrl: 'https://comproras.netlify.app/' },
      { id: 2, techStack: ['PHP', 'CodeIgniter 4', 'MySQL', 'Bootstrap'], demoUrl: 'https://rayaabadisaudara.com/login' },
      { id: 3, techStack: ['React JS', 'Laravel', 'MySQL'], demoUrl: 'https://dualcode.vercel.app/' },
    ];

    return t.projects.items.map((item, index) => ({
      ...item,
      ...staticData[index]
    }));
  }, [t]);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1920px] mx-auto relative group">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.projects.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="relative overflow-visible px-12">
          {/* Custom Navigation Buttons */}
          <button 
            onClick={() => swiperInstance?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/80 border border-slate-800 text-blue-400 hover:text-white hover:border-blue-500 transition-all duration-300 lg:hidden shadow-xl"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={() => swiperInstance?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/80 border border-slate-800 text-blue-400 hover:text-white hover:border-blue-500 transition-all duration-300 lg:hidden shadow-xl"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <Swiper
            modules={[Autoplay, Pagination]}
            onSwiper={setSwiperInstance}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 }, // Mobile: 1 card
              768: { slidesPerView: 2 }, // Tablet: 2 cards
              1024: { slidesPerView: 3 }, // Desktop: 3 cards
            }}
            className="pb-12"
          >
          {localizedProjects.map((project) => (
            <SwiperSlide key={project.id} className="flex">
              <div 
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex-1 flex flex-col w-full hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="mb-4 flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-slate-800">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => {
                      const TechIcon = techIcons[tech];
                      return (
                        <span key={tech} className="text-[10px] px-2 py-1 bg-slate-800 text-slate-300 rounded-md flex items-center gap-1.5 border border-slate-700/50">
                          {TechIcon && <TechIcon.icon className={`${TechIcon.color} text-xs`} />}
                          {tech}
                        </span>
                      );
                    })}
                    {project.techStack.length > 3 && (
                      <span className="text-[10px] px-2 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700/50">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </div>

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            isOpen={!!selectedProject} 
            onClose={() => setSelectedProject(null)} 
            techIcons={techIcons}
          />
        )}</section>
  );
};

export default Projects;
