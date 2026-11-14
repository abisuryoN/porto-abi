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
  const touchStart = useRef(0);
  const totalPhotos = teachingPhotos.length;

  const handlePrev = useCallback(() => setCurrentIndex((prev) => (prev === 0 ? totalPhotos - 1 : prev - 1)), [totalPhotos]);
  const handleNext = useCallback(() => setCurrentIndex((prev) => (prev === totalPhotos - 1 ? 0 : prev + 1)), [totalPhotos]);

  return (
    <section className="py-20 px-4 bg-slate-950 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-4 text-center">Dokumentasi Kegiatan Mengajar</h3>
        <p className="text-slate-400 text-center mb-12 px-4">Pengalaman saya mengajar Teknik Informatika di SMA Negeri 1 Tajurhalang.</p>
        <div className="relative group px-0">
          <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 text-white shadow-lg cursor-pointer hover:bg-slate-700">
            <ChevronLeft size={20} />
          </button>
          <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 text-white shadow-lg cursor-pointer hover:bg-slate-700">
            <ChevronRight size={20} />
          </button>
          <div 
            className="overflow-hidden rounded-2xl mx-auto w-full max-w-2xl"
            onTouchStart={(e) => touchStart.current = e.touches[0].clientX}
            onTouchEnd={(e) => {
                const diff = touchStart.current - e.changedTouches[0].clientX;
                if (diff > 50) handleNext();
                else if (diff < -50) handlePrev();
            }}
          >
             <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: "translateX(-" + (currentIndex * 100) + "%)" }}>
                {teachingPhotos.map((photo, i) => (
                    <div key={photo.id} className="min-w-full relative aspect-[4/3] bg-slate-900 cursor-pointer" onClick={() => setLightboxIndex(i)}>
                        <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                ))}
             </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] bg-black/95 flex flex-col items-center justify-center" onClick={() => setLightboxIndex(null)}>
            <div className="absolute top-4 right-4 flex gap-3 z-[1001]">
                <button className="text-white p-3 rounded-full bg-slate-800/50 hover:bg-slate-700" onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => prev === 0 ? totalPhotos - 1 : prev - 1); }}><ChevronLeft size={24} /></button>
                <button className="text-white p-3 rounded-full bg-slate-800/50 hover:bg-slate-700" onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => prev === totalPhotos - 1 ? 0 : prev + 1); }}><ChevronRight size={24} /></button>
                <button className="text-white p-3 rounded-full bg-slate-800/50 hover:bg-slate-700" onClick={() => setLightboxIndex(null)}><X size={24} /></button>
            </div>
            <div className="w-full h-[70vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <TransformWrapper>
                {({ zoomIn, zoomOut }) => (
                  <>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-[1003] bg-slate-800/50 px-4 py-2 rounded-full">
                      <button onClick={() => zoomIn()} className="text-white p-2 hover:bg-slate-700 rounded-full"><ZoomIn size={24} /></button>
                      <button onClick={() => zoomOut()} className="text-white p-2 hover:bg-slate-700 rounded-full"><ZoomOut size={24} /></button>
                    </div>
                    <TransformComponent wrapperClass="!w-full !h-full flex items-center justify-center">
                        <img src={teachingPhotos[lightboxIndex].src} className="max-h-[70vh] max-w-[90vw] object-contain" />
                    </TransformComponent>
                  </>
                )}
              </TransformWrapper>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeachingGallery;
