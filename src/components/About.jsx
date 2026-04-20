const About = () => {
  const skills = [
    'PHP', 'Laravel', 'CodeIgniter 4', 'JavaScript', 'React JS', 'CSS', 'MySQL'
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="w-[90%] xl:w-[85%] max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8 relative inline-block after:content-[''] after:block after:w-1/3 after:h-1 after:bg-blue-500 after:mt-2">
              Pendidikan
            </h3>
            <ul className="space-y-8 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800">
              <li className="relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 bg-slate-900 border-4 border-blue-500 rounded-full z-10"></div>
                <h4 className="text-lg font-bold text-white">Universitas Indraprasta PGRI</h4>
                <p className="text-blue-400 font-medium text-sm my-1">2023 - Sekarang</p>
                <p className="text-slate-400 text-sm">Fakultas / Program Studi (Sesuaikan). IPK Saat ini: <span className="font-semibold text-white">3.29</span></p>
              </li>
              <li className="relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 bg-slate-900 border-4 border-slate-600 rounded-full z-10"></div>
                <h4 className="text-lg font-bold text-white">SMAN 1 Tajurhalang</h4>
                <p className="text-slate-500 font-medium text-sm my-1">2020 - 2023</p>
                <p className="text-slate-400 text-sm">Jurusan Ilmu Pengetahuan Alam (IPA)</p>
              </li>
            </ul>
          </div>

          {/* Kemampuan (Skills) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8 relative inline-block after:content-[''] after:block after:w-1/3 after:h-1 after:bg-blue-500 after:mt-2">
              Kemampuan
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="px-5 py-3 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center justify-center hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300"
                >
                  <span className="text-sm font-medium text-slate-300">{skill}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
               <p className="text-slate-400 text-sm leading-relaxed">
                 Terus belajar dan mengembangkan diri terhadap teknologi terbaru, termasuk pembuatan API, arsitektur database, dan implementasi frontend modern.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
