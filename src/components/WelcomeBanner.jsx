import { Sparkles, FileText, CheckCircle2 } from 'lucide-react';

export default function WelcomeBanner() {
  return (
    <div className="group relative w-full bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 p-5 sm:p-7 rounded-2xl transition-all duration-300 backdrop-blur-xl overflow-hidden shadow-2xl">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        
        {/* Left Column */}
        <div className="space-y-3 max-w-2xl">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Interactive Workspace</span>
            <span className="inline-block w-1 h-1 rounded-full bg-cyan-400 opacity-60" />
            <span className="text-[10px] text-slate-400">Step 1 of 2</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            Build your professional profile <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">effortlessly</span>.
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
            Input your personal info, work history, featured projects, and skill stacks. Your live A4 vector preview updates instantly as you type.
          </p>

          {/* Micro Features */}
          <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Live ATS Verification
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Auto-formatting Engine
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Vector PDF Output
            </span>
          </div>

        </div>

        {/* Right Column Icon */}
        <div className="hidden lg:flex items-center justify-center shrink-0">
          <div className="relative p-4 rounded-2xl bg-slate-950/60 border border-slate-800 shadow-inner group-hover:scale-105 transition-transform duration-300">
            <FileText className="w-8 h-8 text-cyan-400 relative z-10" />
          </div>
        </div>

      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
    </div>
  );
}