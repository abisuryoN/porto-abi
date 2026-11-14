import { useState } from 'react';
import { Menu, X, Languages, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, t, toggleLanguage } = useLanguage();
  const cvPath = "/images/cv/CV ABI SURYO NEGORO.pdf";

  const links = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.projects, href: '#projects' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold font-sans tracking-wide text-white">
              Portofolio
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href={cvPath}
              download="CV_ABI_SURYO_NEGORO.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all duration-300 shadow-lg shadow-blue-900/20"
            >
              <Download size={14} />
              <span>CV</span>
            </a>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-white hover:border-blue-500 transition-all duration-300 text-xs font-bold uppercase tracking-wider"
            >
              <Languages size={14} />
              <span>{lang}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <a
              href={cvPath}
              download="CV_ABI_SURYO_NEGORO.pdf"
              className="flex items-center justify-center p-2 rounded-full bg-blue-600 text-white"
            >
              <Download size={14} />
            </a>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-[10px] font-bold uppercase"
            >
              <Languages size={12} />
              <span>{lang}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 rounded-md text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-slate-800/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
