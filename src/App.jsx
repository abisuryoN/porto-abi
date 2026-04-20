import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ScrollEffectText from './components/ScrollEffectText';
import Projects from './components/Projects';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30 selection:text-blue-200 relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ScrollEffectText />
        <Projects />
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/6285719630624" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      >
        <FaWhatsapp size={28} />
        {/* Tooltip on hover */}
        <span className="absolute right-16 bg-slate-800 text-sm py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat di WhatsApp
        </span>
      </a>
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-900 mt-20 relative z-10">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Abi Suryo Negoro. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
