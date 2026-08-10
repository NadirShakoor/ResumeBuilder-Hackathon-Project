import { useState } from 'react';
import { useResumeStore } from '../store/useResumeStore';
import PersonalInfoForm from './PersonalInfoForm';
import ExperienceForm from './ExperienceForm';
import ProjectsForm from './ProjectsForm'; 
import EducationForm from './EducationForm'; 
import SkillsForm from './SkillsForm';
import LanguagesForm from './LanguagesForm';
import { ArrowRight, ArrowLeft, User, Briefcase, FolderCode, GraduationCap, Wrench, Languages, Palette, Type, Zap, Check } from 'lucide-react';

export default function FormSelector() {
  const { setCurrentStep, isFresher, setIsFresher, accentColor, setAccentColor, fontFamily, setFontFamily, calculateResumeScore } = useResumeStore();
  const [activeTab, setActiveTab] = useState('personal');

  const atsScore = calculateResumeScore ? calculateResumeScore() : 0;
  const colors = ['#2563eb', '#059669', '#7c3aed', '#e11d48', '#334155', '#d97706'];
  const fonts = [
    { label: 'Sans', value: 'font-sans' },
    { label: 'Serif', value: 'font-serif' },
    { label: 'Mono', value: 'font-mono' },
  ];

  const allTabs = [
    { id: 'personal', label: 'Personal', icon: User, component: PersonalInfoForm },
    { id: 'experience', label: 'Experience', icon: Briefcase, component: ExperienceForm },
    { id: 'projects', label: 'Projects', icon: FolderCode, component: ProjectsForm },
    { id: 'education', label: 'Education', icon: GraduationCap, component: EducationForm },
    { id: 'skills', label: 'Skills', icon: Wrench, component: SkillsForm },
    { id: 'languages', label: 'Languages', icon: Languages, component: LanguagesForm },
  ];

  const activeTabs = allTabs
    .filter(tab => !isFresher || tab.id !== 'experience')
    .map((tab, i) => ({ ...tab, step: `0${i + 1}` }));

  const currentIdx = activeTabs.findIndex(t => t.id === activeTab);
  const isLastTab = currentIdx === activeTabs.length - 1;

  const handleNext = () => {
    if (!isLastTab) {
      setActiveTab(activeTabs[currentIdx + 1].id);
    } else {
      setCurrentStep('canvas');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentIdx > 0) setActiveTab(activeTabs[currentIdx - 1].id);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4 text-slate-200 p-2 sm:p-0">
      
      {/* ⚡ Top Toolbar & Stats Header */}
      <header className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Accent + Font Selectors */}
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            {/* Color Palette */}
            <div className="flex items-center gap-1.5 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800">
              <Palette className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <div className="flex items-center gap-1">
                {colors.map(hex => (
                  <button
                    key={hex}
                    type="button"
                    onClick={() => setAccentColor(hex)}
                    className={`w-4 h-4 rounded-full transition-transform ${accentColor === hex ? 'scale-125 ring-2 ring-white' : 'opacity-60 hover:opacity-100'}`}
                    style={{ backgroundColor: hex }}
                  >
                    {accentColor === hex && <Check className="w-2.5 h-2.5 text-white m-auto" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800">
              <Type className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <select 
                value={fontFamily} 
                onChange={e => setFontFamily(e.target.value)} 
                className="bg-transparent text-xs font-medium text-slate-300 outline-none cursor-pointer"
              >
                {fonts.map(f => <option key={f.value} value={f.value} className="bg-slate-900">{f.label}</option>)}
              </select>
            </div>

            {/* Fresher Toggle */}
            <label className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 cursor-pointer select-none">
              <span className="text-[11px] font-semibold text-slate-400">Fresher</span>
              <input 
                type="checkbox" 
                checked={isFresher} 
                onChange={e => {
                  setIsFresher(e.target.checked);
                  if (e.target.checked && activeTab === 'experience') setActiveTab('personal');
                }} 
                className="accent-blue-600 w-3.5 h-3.5 cursor-pointer" 
              />
            </label>
          </div>

          {/* ATS Score Meter */}
          <div className="flex items-center gap-2 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-xs font-bold text-slate-300">ATS Score:</span>
              <span className="text-xs font-mono font-bold text-blue-400">{atsScore}%</span>
            </div>
            <div className="w-20 bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 transition-all duration-300" style={{ width: `${atsScore}%` }} />
            </div>
          </div>

        </div>
      </header>

      {/* Horizontal Dynamic Navigation Bar (Equal-sized Cards) */}
      <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
        {activeTabs.map(t => {
          const Icon = t.icon;
          const active = activeTab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              className={`h-10 px-3 rounded-lg text-xs font-semibold flex items-center justify-between border transition-all cursor-pointer ${
                active 
                  ? 'bg-blue-600 border-blue-500 text-white shadow-sm' 
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{t.label}</span>
              </div>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded shrink-0 ml-1 ${active ? 'bg-white/20' : 'bg-slate-950 text-slate-500'}`}>
                {t.step}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Main Content Form Panel */}
      <main className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 flex flex-col justify-between min-h-[380px]">
        <div>
          {activeTabs.map(t => {
            const Component = t.component;
            if (activeTab !== t.id) return null;
            return (
              <div key={t.id} className="space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">
                    {t.step}
                  </span>
                  <h2 className="text-sm font-bold uppercase tracking-wide text-slate-200">
                    {t.label} Details
                  </h2>
                </div>
                <Component />
              </div>
            );
          })}
        </div>

        {/* Action Controls Footer */}
        <footer className="flex justify-between items-center pt-4 border-t border-slate-800 mt-6">
          <button 
            type="button" 
            disabled={activeTab === 'personal'} 
            onClick={handleBack} 
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold uppercase transition border ${
              activeTab === 'personal' 
                ? 'border-slate-900 text-slate-700 cursor-not-allowed opacity-20' 
                : 'border-slate-800 bg-slate-950 hover:bg-slate-800 text-slate-300'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>

          <button 
            type="button" 
            onClick={handleNext} 
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider border border-blue-400/20 cursor-pointer"
          >
            <span>{isLastTab ? 'Proceed to Canvas' : 'Next'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </footer>
      </main>

    </div>
  );
}