import { useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { motion, AnimatePresence } from 'framer-motion';

const teachingPhotos = [
  { id: 1, src: '/images/teaching/kegiatan-1.jpg', alt: 'Pembelajaran Teknik Informatika' },
  { id: 2, src: '/images/teaching/kegiatan-2.jpg', alt: 'Diskusi IT' },
  { id: 3, src: '/images/teaching/kegiatan-3.jpg', alt: 'Laboratorium IT' },
  { id: 4, src: '/images/teaching/kegiatan-4.jpg', alt: 'Lab Informatika' },
];

const TeachingGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalPhotos = teachingPhotos.length;

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + totalPhotos) % totalPhotos);
  };

  return (
    <section className="py-12 px-4 bg-slate-950 overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-4 text-center">Dokumentasi Kegiatan Mengajar</h3>
        <p className="text-slate-400 text-center mb-8 px-4">Pengalaman saya mengajar Teknik Informatika di SMA Negeri 1 Tajurhalang.</p>
        
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950">
          <button onClick={() => paginate(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white cursor-pointer hover:bg-black/70">
            <ChevronLeft size={16} />
          </button>
          <button onClick={() => paginate(1)} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-10 flex items-center justify-center rounded-full bg-black/50 text-white cursor-pointer hover:bg-black/70">
            <ChevronRight size={16} />
          </button>

          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={teachingPhotos[currentIndex].src}
              custom={direction}
              variants={{
                enter: (direction) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
                center: { zIndex: 1, x: 0, opacity: 1 },
                exit: (direction) => ({ zIndex: 0, x: direction < 0 ? "100%" : "-100%", opacity: 0 })
              }}
              initial="enter" animate="center" exit="exit"
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
              className="absolute w-full h-full object-cover"
              onClick={() => setLightboxIndex(currentIndex)}
            />
          </AnimatePresence>
        </div>
      </div>
      
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] bg-black/95 flex flex-col items-center justify-center" onClick={() => setLightboxIndex(null)}>
            <button className="absolute top-4 right-4 text-white p-3 rounded-full bg-slate-800/50 hover:bg-slate-700 z-[1001]" onClick={() => setLightboxIndex(null)}><X size={24} /></button>
            <div className="w-full h-[70vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <TransformWrapper>
                <TransformComponent wrapperClass="!w-full !h-full flex items-center justify-center">
                    <img src={teachingPhotos[lightboxIndex].src} className="max-h-[70vh] max-w-[90vw] object-contain" />
                </TransformComponent>
              </TransformWrapper>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeachingGallery;
