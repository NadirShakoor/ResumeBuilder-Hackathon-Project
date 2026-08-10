import { useState } from 'react';
import { useResumeStore } from '../store/useResumeStore';
import { BrainCircuit, Plus, X } from 'lucide-react';

export default function SkillsForm() {
  const { resumeData, addSkill, removeSkill } = useResumeStore();
  const [newSkill, setNewSkill] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newSkill.trim()) {
      addSkill(newSkill.trim());
      setNewSkill('');
    }
  };

  return (
    <div className="bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-slate-800/80 shadow-xl space-y-4">
      {/* Component Title Header */}
      <div className="flex items-center gap-2 text-emerald-400 border-b border-slate-800/60 pb-2">
        <BrainCircuit className="w-4 h-4" />
        <h3 className="text-sm font-black uppercase tracking-wider text-slate-200">Skills & Expertise</h3>
      </div>

      {/* Form Input Line */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="e.g. React, Node.js, Python"
          className="flex-1 bg-slate-950 border border-slate-800/80 rounded-xl px-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/30 transition-all"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white p-2.5 rounded-xl flex items-center justify-center transition-colors shadow-lg shadow-blue-600/10 active:scale-95 shrink-0"
        >
          <Plus className="w-4 h-4" />
        </button>
      </form>

      {/* Render Active Skills Badges */}
      <div className="flex flex-wrap gap-2 pt-1">
        {resumeData.skills && resumeData.skills.length > 0 ? (
          resumeData.skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-lg text-xs font-medium transition-all hover:border-slate-700 hover:text-slate-200"
            >
              <span>{skill}</span>
              <button
                type="button"
                onClick={() => removeSkill(skill)}
                className="text-slate-500 hover:text-rose-400 p-0.5 rounded transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-[11px] text-slate-500 italic">No skills added yet. Type above to append.</p>
        )}
      </div>
    </div>
  );
}