import { Sparkles } from 'lucide-react';

export default function TemplateCard({ tpl, isSelected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left p-4 rounded-xl transition-all duration-300 border relative overflow-hidden cursor-pointer group ${
        isSelected
          ? 'bg-gradient-to-br from-blue-600/15 to-indigo-600/5 border-blue-500 text-white shadow-xl shadow-blue-950/50'
          : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200 hover:bg-slate-900/40'
      }`}
    >
      {isSelected && (
        <div className="absolute top-0 left-0 w-[2px] h-full bg-blue-500" />
      )}
      <div className="text-xs font-black tracking-wide flex items-center justify-between">
        <span>{tpl.name}</span>
        {isSelected && (
          <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
        )}
      </div>
      <div className="text-[10px] opacity-70 mt-1.5 leading-relaxed group-hover:opacity-90 transition-opacity">
        {tpl.desc}
      </div>
    </button>
  );
}