import 'react';
import { 
  DownloadCloud, 
  FileText
} from 'lucide-react';

export default function Navbar({ onPrint }) {
  return (
    /* Added mb-10 sm:mb-12 to create substantial bottom margin spacing below the capsule header */
    <header className="sticky top-6 z-50 w-full px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-10 sm:mb-12 pointer-events-none">
      
      {/* Dynamic Font Loader Safeguard for Custom Cursive Signature */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        .font-pacifico {
          font-family: 'Pacifico', cursive, sans-serif;
        }
      `}</style>

      {/* 🚀 Main Capsule Floating Pill Shell */}
      <div className="pointer-events-auto relative flex items-center justify-between gap-2 sm:gap-4 px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-full bg-slate-900/70 border border-slate-700/50 backdrop-blur-2xl shadow-[0_10px_38px_rgba(0,0,0,0.55),0_0_20px_rgba(59,130,246,0.12)] transition-all duration-300 hover:border-slate-600/70">
        
        {/* Ambient Pill Inner Lighting Glow Highlights */}
        <div className="absolute inset-x-8 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent pointer-events-none" />
        <div className="absolute inset-x-12 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />

        {/* 1. Left Section: Brand Badge & Signature */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 shrink-0">
          
          {/* Logo Capsule Icon */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition duration-300" />
            <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-950 border border-slate-800 text-white shadow-inner">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 group-hover:rotate-6 transition-transform duration-300" />
            </div>
          </div>

          {/* Typography & Signature Container */}
          <div className="flex flex-col min-w-0 justify-center">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <h1 className="text-sm sm:text-base font-black tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent truncate">
                Resume<span className="text-blue-500">Builder</span>
              </h1>
            </div>

            <span className="font-pacifico text-[10px] sm:text-[11px] text-slate-400/90 tracking-wide -mt-0.5 truncate">
              by Nadir Shakoor Khatti
            </span>
          </div>
        </div>

        {/* 2. Right Section: Capsule Action Trigger Button */}
        <div className="flex items-center shrink-0">
          <button 
            type="button"
            onClick={onPrint}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 p-[1px] font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            {/* Button Inner Capsule Shell */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full bg-slate-950/20 group-hover:bg-transparent transition-colors duration-300">
              <DownloadCloud className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-200 group-hover:-translate-y-0.5 group-hover:text-white transition-all duration-300" />
              
              <span className="text-xs sm:text-sm font-extrabold tracking-wide hidden min-[420px]:inline">
                Export PDF
              </span>
              <span className="text-xs font-extrabold tracking-wide min-[420px]:hidden">
                PDF
              </span>
            </div>
          </button>
        </div>

      </div>
    </header>
  );
}