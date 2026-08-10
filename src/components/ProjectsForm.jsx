import { useResumeStore } from '../store/useResumeStore';
import { FolderGit2, Plus, Trash2 } from 'lucide-react';

export default function ProjectsForm() {
  const { resumeData, updateProject, addProject, deleteProject } = useResumeStore();
  const projects = resumeData?.projects || [];

  return (
    <div className="bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-slate-800/80 shadow-xl space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
        <div className="flex items-center gap-2 text-amber-400">
          <FolderGit2 className="w-4 h-4" />
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-200">Projects</h3>
        </div>
        <button
          type="button"
          onClick={addProject}
          className="flex items-center gap-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 text-[11px] font-bold px-2.5 py-1.5 rounded-lg border border-amber-500/20 transition-all active:scale-95"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Project</span>
        </button>
      </div>

      {/* Dynamic Projects Fields (Without Scrollbar) */}
      <div className="space-y-4">
        {projects.map((proj, index) => (
          <div key={proj.id} className="p-3 bg-slate-950/60 rounded-xl border border-slate-850 space-y-3 relative group animate-in fade-in duration-200">
            {/* Project Header Count & Delete Button */}
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Project #{index + 1}</span>
              {projects.length > 1 && (
                <button
                  type="button"
                  onClick={() => deleteProject(proj.id)}
                  className="text-slate-500 hover:text-rose-400 p-1 rounded-md hover:bg-rose-500/5 transition-all"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Project Title</label>
                <input
                  type="text"
                  value={proj.title}
                  onChange={(e) => updateProject(proj.id, { title: e.target.value })}
                  placeholder="e.g. E-Commerce Platform"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Technologies Used</label>
                <input
                  type="text"
                  value={proj.technologies}
                  onChange={(e) => updateProject(proj.id, { technologies: e.target.value })}
                  placeholder="e.g. React, Node.js, MongoDB"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-all"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Project URL / Link (Optional)</label>
                <input
                  type="url"
                  value={proj.link}
                  onChange={(e) => updateProject(proj.id, { link: e.target.value })}
                  placeholder="e.g. https://github.com/username/project"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-all"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Description</label>
                <textarea
                  value={proj.description}
                  onChange={(e) => updateProject(proj.id, { description: e.target.value })}
                  placeholder="Briefly detail your core execution milestones, system architecture, or performance outputs..."
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-all resize-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}