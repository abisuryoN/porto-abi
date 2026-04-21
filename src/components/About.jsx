import { SiPhp, SiLaravel, SiCodeigniter, SiJavascript, SiMysql } from 'react-icons/si';
import { FaReact, FaCss3Alt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const skills = [
    { name: 'PHP', icon: SiPhp, color: 'text-[#777BB4]' },
    { name: 'Laravel', icon: SiLaravel, color: 'text-[#F55240]' },
    { name: 'CodeIgniter 4', icon: SiCodeigniter, color: 'text-[#EE4323]' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]' },
    { name: 'React JS', icon: FaReact, color: 'text-[#61DAFB]' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-[#1572B6]' },
    { name: 'MySQL', icon: SiMysql, color: 'text-[#4479A1]' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="w-[90%] xl:w-[85%] max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Pendidikan (Education) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8 relative inline-block after:content-[''] after:block after:w-1/3 after:h-1 after:bg-blue-500 after:mt-2">
              {t.about.education}
            </h3>
            <ul className="space-y-8 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800">
              <li className="relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 bg-slate-900 border-4 border-blue-500 rounded-full z-10"></div>
                <h4 className="text-lg font-bold text-white">{t.about.uni}</h4>
                <p className="text-blue-400 font-medium text-sm my-1">2023 - {t.about.now}</p>
                <p className="text-slate-400 text-sm">{t.about.study} <span className="font-semibold text-white">3.29</span></p>
              </li>
              <li className="relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 bg-slate-900 border-4 border-slate-600 rounded-full z-10"></div>
                <h4 className="text-lg font-bold text-white">{t.about.highschool}</h4>
                <p className="text-slate-500 font-medium text-sm my-1">2020 - 2023</p>
                <p className="text-slate-400 text-sm">{t.about.science}</p>
              </li>
            </ul>
          </div>

          {/* Kemampuan (Skills) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8 relative inline-block after:content-[''] after:block after:w-1/3 after:h-1 after:bg-blue-500 after:mt-2">
              {t.about.skills}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="px-5 py-3 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center gap-3 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 group"
                >
                  <skill.icon className={`text-xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
               <p className="text-slate-400 text-sm leading-relaxed">
                 {t.about.summary}
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
