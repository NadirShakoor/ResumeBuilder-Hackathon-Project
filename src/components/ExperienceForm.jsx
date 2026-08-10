import { useState } from 'react';
import { useResumeStore } from '../store/useResumeStore';
import { Sparkles, Plus, Briefcase, Trash2 } from 'lucide-react';

export default function ExperienceForm() {
  const { resumeData, updateExperience, addExperience, deleteExperience } = useResumeStore();
  const [aiLoadingId, setAiLoadingId] = useState(null);

  const handleAIEnhance = (id, currentText) => {
    /* 🚀 FIXED: Alert completely removed. If string is empty, it returns safely now without jarring popups */
    if (!currentText || !currentText.trim()) {
      return; 
    }
    setAiLoadingId(id);
    
    setTimeout(() => {
      updateExperience(id, {
        description: `• Spearheaded frontend architecture using React.js and Tailwind CSS, improving overall page load velocity by 35%.\n• Engineered high-performance responsive components reducing code redundancy across workspace views.`
      });
      setAiLoadingId(null);
    }, 1500);
  };

  const inputStyles = "w-full p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200";

  return (
    <div className="space-y-4 bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-800/80 shadow-xl">
      
      {/* Header Container */}
      <div className="flex justify-between items-center border-b border-slate-800/60 pb-3.5">
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-blue-500" />
          <h3 className="text-sm sm:text-base font-black text-slate-200 tracking-wide uppercase">Work Experience</h3>
        </div>
        <button 
          type="button" 
          onClick={addExperience} 
          className="flex items-center gap-1.5 text-xs text-blue-400 font-bold hover:text-blue-300 bg-blue-950/40 border border-blue-900/40 hover:border-blue-800/60 px-3 py-1.5 rounded-lg transition-all cursor-pointer active:scale-95"
        >
          <Plus className="w-3.5 h-3.5" /> Add More
        </button>
      </div>

      {/* Experience Cards Stack */}
      <div className="space-y-4">
        {resumeData.experience && resumeData.experience.length > 0 ? (
          resumeData.experience.map((exp, index) => (
            <div 
              key={exp.id} 
              className="p-4 border border-slate-800/60 rounded-xl space-y-4 bg-slate-950/30 relative animate-in fade-in slide-in-from-bottom-2 duration-200"
            >
              
              {/* Card Meta Header */}
              <div className="flex justify-between items-center border-b border-slate-900 pb-2">
                <span className="text-[11px] font-bold text-blue-500 bg-blue-950/30 px-2 py-0.5 rounded">
                  Position #{index + 1}
                </span>

                {resumeData.experience.length > 1 && deleteExperience && (
                  <button
                    type="button"
                    onClick={() => deleteExperience(exp.id)}
                    className="flex items-center gap-1 text-xs text-rose-500 hover:text-rose-400 font-bold bg-rose-950/20 hover:bg-rose-950/50 px-2.5 py-1 rounded-lg border border-rose-900/30 transition-all cursor-pointer active:scale-95"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                )}
              </div>

              {/* Responsive Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Meta" 
                    value={exp.company || ''} 
                    onChange={(e) => updateExperience(exp.id, { company: e.target.value })} 
                    className={inputStyles} 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Role / Position</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Frontend Developer" 
                    value={exp.role || ''} 
                    onChange={(e) => updateExperience(exp.id, { role: e.target.value })} 
                    className={inputStyles} 
                  />
                </div>
                <div className="space-y-1 sm:col-span-2 md:col-span-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Duration / Period</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Jan 2025 - Present" 
                    value={exp.duration || ''} 
                    onChange={(e) => updateExperience(exp.id, { duration: e.target.value })} 
                    className={inputStyles} 
                  />
                </div>
              </div>

              {/* Job Description Textarea Section */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Job Description</label>
                  
                  <button 
                    type="button" 
                    onClick={() => handleAIEnhance(exp.id, exp.description)} 
                    /* 🚀 PRO UX TWEAK: Button is now visually disabled if there's no text, prevents confusing empty clicks */
                    disabled={aiLoadingId === exp.id || !exp.description?.trim()}
                    className="flex items-center gap-1 text-xs text-purple-400 font-bold hover:text-purple-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                  >
                    <Sparkles className={`w-3.5 h-3.5 text-purple-400 ${aiLoadingId === exp.id ? 'animate-spin' : ''}`} /> 
                    {aiLoadingId === exp.id ? 'Enhancing...' : 'AI Enhance'}
                  </button>
                </div>

                <textarea 
                  rows="3" 
                  placeholder="Describe your core contributions, tech stack utilized, or impact you delivered..." 
                  value={exp.description || ''} 
                  onChange={(e) => updateExperience(exp.id, { description: e.target.value })} 
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200 resize-y min-h-[80px]" 
                />
              </div>

            </div>
          ))
        ) : (
          <div className="text-center py-6 border border-dashed border-slate-800 rounded-xl bg-slate-950/10">
            <p className="text-xs text-slate-500 font-medium italic">No work history records loaded. Click 'Add More' to initiate entry fields.</p>
          </div>
        )}
      </div>

    </div>
  );
}