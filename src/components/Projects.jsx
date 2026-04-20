import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import ProjectModal from './ProjectModal';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce REST API',
    shortDesc: 'Backend service untuk platform e-commerce dengan sistem keranjang dan checkout.',
    fullDesc: 'Ini adalah REST API komprehensif yang dibangun untuk platform e-commerce. Fitur utamanya mencakup manajemen produk, keranjang belanja, integrasi payment gateway, dan manajemen pesanan. Arsitekturnya difokuskan pada scalabilitas dan keamanan transaksi.',
    techStack: ['Laravel', 'MySQL', 'Redis', 'Docker'],
    demoUrl: '#demo1',
  },
  {
    id: 2,
    title: 'Sistem Informasi Akademik',
    shortDesc: 'Aplikasi manajemen data mahasiswa, dosen, dan mata kuliah.',
    fullDesc: 'Sistem informasi terintegrasi untuk institusi pendidikan. Membantu pengelolaan data akademik seperti pendaftaran mahasiswa, pengisian KRS, absensi, hingga pencetakan transkrip nilai secara otomatis.',
    techStack: ['CodeIgniter 4', 'PHP', 'MySQL', 'Bootstrap'],
    demoUrl: '#demo2',
  },
  {
    id: 3,
    title: 'Task Management App API',
    shortDesc: 'API untuk aplikasi manajemen tugas dengan fitur kolaborasi tim.',
    fullDesc: 'Backend untuk aplikasi produktivitas yang memungkinkan tim untuk berkolaborasi. Mendukung pembuatan proyek, penugasan task, deadline, serta notifikasi real-time via WebSockets.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
    demoUrl: '#demo3',
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1920px] mx-auto relative group">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Project Portfolio</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Beberapa project backend dan aplikasi web yang pernah saya bangun.
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
          {projectsData.map((project) => (
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
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded-md">
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

      {/* Modal Integration */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
