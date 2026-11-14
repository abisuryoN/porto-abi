import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const teachingPhotos = [
  { id: 1, src: '/images/teaching/kegiatan-1.jpg', alt: 'Pembelajaran Teknik Informatika' },
  { id: 2, src: '/images/teaching/kegiatan-2.jpg', alt: 'Diskusi IT' },
  { id: 3, src: '/images/teaching/kegiatan-3.jpg', alt: 'Laboratorium IT' },
  { id: 4, src: '/images/teaching/kegiatan-4.jpg', alt: 'Lab Informatika' },
];

const TeachingGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [index, setIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionRef = useRef(false);
  const { t } = useLanguage();
  const total = teachingPhotos.length;

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const slides = isDesktop 
    ? [teachingPhotos[total - 1], ...teachingPhotos, teachingPhotos[0]]
    : teachingPhotos;

  const paginate = (newDirection) => {
    if (transitionRef.current) return;
    transitionRef.current = true;
    setIsTransitioning(true);
    setIndex(prev => prev + newDirection);
  };

  const handleTransitionEnd = () => {
    transitionRef.current = false;
    setIsTransitioning(false);
    if (!isDesktop) return;
    if (index === 0) setIndex(total);
    else if (index === total + 1) setIndex(1);
  };

  const handleSlideClick = (i) => {
    if (!isDesktop) {
        setLightboxIndex(i);
        return;
    }
    const realIdx = i === 0 ? total-1 : i === total+1 ? 0 : i-1;
    if (i === index) setLightboxIndex(realIdx);
    else paginate(i - index);
  };

  return (
    <section className="py-12 px-4 bg-slate-950 overflow-hidden">
      <div className="max-w-2xl md:max-w-6xl xl:max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-4 text-center">{t.teaching.title}</h3>
        <p className="text-slate-400 text-center mb-8 px-4">{t.teaching.desc}</p>
        
        <div className="relative w-full">
          <button onClick={() => paginate(-1)} className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white cursor-pointer hover:bg-black/70">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => paginate(1)} className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white cursor-pointer hover:bg-black/70">
            <ChevronRight size={24} />
          </button>

          <div className="w-full overflow-hidden md:h-[450px] flex items-center">
            <motion.div 
                className="flex flex-row flex-nowrap items-center"
                animate={{ x: isDesktop ? `-${(index - 1) * 33.33}%` : `-${index * 100}%` }}
                transition={isTransitioning ? { type: "tween", ease: "easeInOut", duration: 0.3 } : { duration: 0 }}
                onAnimationComplete={handleTransitionEnd}
                style={{ width: isDesktop ? `${slides.length * 33.33}%` : `${slides.length * 100}%` }}
            >
              {slides.map((photo, i) => {
                const isActive = i === index;
                return (
                  <div key={i} className={`${isDesktop ? 'basis-1/3' : 'basis-full'} shrink-0 grow-0 px-3 transition-all duration-300`} 
                       style={isDesktop ? { opacity: isActive ? 1 : 0.6, transform: isActive ? 'scale(1.05)' : 'scale(0.9)' } : {}}
                       onClick={() => handleSlideClick(i)}>
                    <img src={photo.src} className="w-full aspect-[4/3] object-cover rounded-2xl cursor-pointer hover:brightness-110 shadow-xl" alt={photo.alt} />
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox index={lightboxIndex} onClose={() => setLightboxIndex(null)} photos={teachingPhotos} />
        )}
      </AnimatePresence>
    </section>
  );
};

const Lightbox = ({ index, onClose, photos }) => {
  const [curr, setCurr] = useState(index);
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', handleEsc); document.body.style.overflow = 'unset'; };
  }, [onClose]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
        <button className="absolute top-4 right-4 text-white p-3 rounded-full bg-slate-800/50 hover:bg-slate-700 z-[101]" onClick={onClose}><X size={24} /></button>
        <button onClick={(e) => { e.stopPropagation(); setCurr((prev) => (prev - 1 + photos.length) % photos.length); }} className="absolute left-4 z-[101] text-white bg-black/50 p-2 rounded-full"><ChevronLeft size={32} /></button>
        <motion.img key={curr} initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} src={photos[curr].src} className="max-h-[85vh] md:max-w-5xl object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} alt="Lightbox" />
        <button onClick={(e) => { e.stopPropagation(); setCurr((prev) => (prev + 1) % photos.length); }} className="absolute right-4 z-[101] text-white bg-black/50 p-2 rounded-full"><ChevronRight size={32} /></button>
    </motion.div>
  );
};

export default TeachingGallery;
