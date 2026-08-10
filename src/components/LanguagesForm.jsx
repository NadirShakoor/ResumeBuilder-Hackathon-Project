import { useState } from 'react';
import { Plus, Trash2, Languages } from 'lucide-react';
import { useResumeStore } from '../store/useResumeStore';

const LEVELS = ['Native', 'Fluent', 'Professional', 'Intermediate', 'Basic'];

export default function LanguagesForm() {
  const { resumeData, addLanguage, updateLanguage, removeLanguage } = useResumeStore();
  const languages = resumeData?.languages || [];

  const [name, setName] = useState('');
  const [level, setLevel] = useState('Fluent');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    addLanguage({ id: Date.now().toString(), name: name.trim(), level });
    setName('');
    setLevel('Fluent');
  };

  // Safe handler for deletion
  const handleRemove = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    if (removeLanguage) {
      removeLanguage(id);
    }
  };

  return (
    <div className="space-y-5">
      {/* 📥 Quick Add Form */}
      <form onSubmit={handleAdd} className="grid grid-cols-1 sm:grid-cols-[1fr_160px_auto] gap-2.5 items-end">
        <div>
          <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            Language
          </label>
          <input
            type="text"
            placeholder="e.g. English, Sindhi"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            Proficiency
          </label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-2 text-xs text-slate-300 focus:outline-none focus:border-blue-500 cursor-pointer"
          >
            {LEVELS.map((lvl) => (
              <option key={lvl} value={lvl} className="bg-slate-900">{lvl}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="h-[34px] flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white px-4 rounded-lg text-xs font-bold uppercase transition border border-blue-400/20 cursor-pointer shrink-0"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add</span>
        </button>
      </form>

      {/* 📋 Languages List */}
      <div className="space-y-2">
        {languages.map((lang) => (
          <div
            key={lang.id}
            className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 gap-2"
          >
            <input
              type="text"
              value={lang.name}
              onChange={(e) => updateLanguage(lang.id, { name: e.target.value })}
              className="flex-1 bg-transparent font-medium text-slate-200 text-xs border-b border-transparent focus:border-blue-500 focus:outline-none py-1 transition min-w-0"
            />

            <div className="flex items-center gap-2 shrink-0">
              <select
                value={lang.level}
                onChange={(e) => updateLanguage(lang.id, { level: e.target.value })}
                className="bg-slate-900 border border-slate-800 text-slate-300 text-xs rounded-md px-2 py-1 focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                {LEVELS.map((lvl) => (
                  <option key={lvl} value={lvl} className="bg-slate-900">{lvl}</option>
                ))}
              </select>

              <button
                type="button"
                onClick={(e) => handleRemove(e, lang.id)}
                className="text-slate-500 hover:text-rose-400 hover:bg-slate-900/80 p-1.5 rounded transition cursor-pointer"
                title="Remove language"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}

        {languages.length === 0 && (
          <div className="text-center py-6 border border-slate-800/60 rounded-lg bg-slate-950/40">
            <Languages className="w-5 h-5 text-slate-600 mx-auto mb-1.5" />
            <p className="text-xs text-slate-500">No languages added yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}