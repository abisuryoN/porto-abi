import { motion } from 'framer-motion';

const ScrollEffectText = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-y border-slate-800/50 overflow-hidden flex justify-center items-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-sm sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 leading-relaxed py-2">
            "Terus berkembang sebagai Backend Developer dengan membangun sistem yang efisien dan terstruktur serta mengikuti perkembangan teknologi modern."
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollEffectText;
