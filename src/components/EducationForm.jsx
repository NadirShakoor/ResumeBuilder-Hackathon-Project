import { useResumeStore } from '../store/useResumeStore';
import { GraduationCap, Plus, Trash2 } from 'lucide-react';

export default function EducationForm() {
  const education = useResumeStore((state) => state.resumeData.education) || [];
  const updateEducation = useResumeStore((state) => state.updateEducation);
  const addEducation = useResumeStore((state) => state.addEducation);
  const deleteEducation = useResumeStore((state) => state.deleteEducation);

  return (
    <div className="bg-slate-900/80 border border-slate-800/60 p-5 rounded-2xl space-y-4 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-emerald-400" />
          <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
            Education / Study Details
          </h3>
        </div>
        <button
          type="button"
          onClick={addEducation}
          className="flex items-center gap-1 text-xs bg-emerald-600/10 text-emerald-400 border border-emerald-500/30 px-3 py-2 rounded-lg hover:bg-emerald-600 hover:text-white transition-all active:scale-95 cursor-pointer font-semibold shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" /> Add Study
        </button>
      </div>

      {education.length === 0 ? (
        <p className="text-xs text-slate-500 italic py-4 text-center bg-slate-950/20 rounded-xl border border-dashed border-slate-800/60">
          No education details added yet. Click 'Add Study' to insert academic info.
        </p>
      ) : (
        <div className="space-y-3">
          {education.map((edu) => (
            <div key={edu.id} className="grid grid-cols-1 md:grid-cols-12 gap-3 p-3 bg-slate-950/40 rounded-xl border border-slate-800/40 relative group animate-in fade-in-50 duration-200">
              
              {/* School/University */}
              <div className="md:col-span-4 space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">School / University</label>
                <input
                  type="text"
                  placeholder="e.g., Stanford University"
                  value={edu.school}
                  onChange={(e) => updateEducation(edu.id, { school: e.target.value })}
                  className="w-full text-xs bg-slate-900 border border-slate-800/80 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all"
                />
              </div>

              {/* Degree/Course */}
              <div className="md:col-span-3 space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Degree / Course</label>
                <input
                  type="text"
                  placeholder="e.g., BS Computer Science"
                  value={edu.degree}
                  onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                  className="w-full text-xs bg-slate-900 border border-slate-800/80 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all"
                />
              </div>

              {/* Duration */}
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Duration</label>
                <input
                  type="text"
                  placeholder="e.g., 2022 - 2026"
                  value={edu.duration}
                  onChange={(e) => updateEducation(edu.id, { duration: e.target.value })}
                  className="w-full text-xs bg-slate-900 border border-slate-800/80 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all"
                />
              </div>

              {/* CGPA/Marks */}
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CGPA / Marks</label>
                <input
                  type="text"
                  placeholder="e.g., 3.8"
                  value={edu.grade}
                  onChange={(e) => updateEducation(edu.id, { grade: e.target.value })}
                  className="w-full text-xs bg-slate-900 border border-slate-800/80 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all"
                />
              </div>

              {/* Delete Button */}
              <div className="md:col-span-1 flex items-end justify-center pb-1">
                <button
                  type="button"
                  onClick={() => deleteEducation(edu.id)}
                  className="p-2 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-950/40 transition-all active:scale-90 cursor-pointer"
                  title="Remove education block"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}