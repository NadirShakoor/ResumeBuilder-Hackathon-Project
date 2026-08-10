import { useResumeStore } from '../../store/useResumeStore';

export default function EuroTemplate({ data }) {
  // 🚀 Zustand Store Custom Theme, Font & Fresher Mode Consumer
  const { accentColor = '#0e7490', fontFamily = 'font-sans', isFresher = false } = useResumeStore();

  // Ultra safe fallback assignment block
  const personal = data?.personal || { fullName: '', email: '', phone: '', website: '', summary: '' };
  const experience = data?.experience || [];
  const projects = data?.projects || []; 
  const education = data?.education || []; 
  const skills = data?.skills || [];
  const languages = data?.languages || [];

  return (
    <div 
      className={`w-full min-h-full bg-white p-4 xs:p-6 sm:p-10 text-slate-800 tracking-wide relative flex flex-col gap-4 sm:gap-6 print:p-8 ${fontFamily}`}
      style={{ fontSize: 'clamp(10px, 1.1vw, 13px)' }}
    >
      {/* Top Identity Block */}
      <div 
        className="flex flex-col sm:flex-row justify-between items-start border-b-2 pb-3 gap-3"
        style={{ borderColor: accentColor }}
      >
        <div className="space-y-0.5">
          <h1 
            className="text-xl xs:text-2xl sm:text-3xl font-light tracking-tight break-words max-w-xl leading-tight"
            style={{ color: accentColor }}
          >
            {personal.fullName || "Your Name"}
          </h1>
          <p className="text-[9px] xs:text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">
            Curriculum Vitae
          </p>
        </div>
        
        {/* Contact info */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 gap-1 text-[9px] xs:text-[10px] sm:text-xs text-slate-600 w-full sm:w-auto shrink-0">
          {personal.email && (
            <a href={`mailto:${personal.email}`} className="flex items-center gap-2 break-all hover:text-slate-900 transition-colors">
              <svg className="w-3 h-3 shrink-0" style={{ color: accentColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              {personal.email}
            </a>
          )}
          {personal.phone && (
            <span className="flex items-center gap-2">
              <svg className="w-3 h-3 shrink-0" style={{ color: accentColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.72l.54 2.22a1 1 0 01-.25.96l-1.3 1.3a13.07 13.07 0 005.71 5.71l1.3-1.3a1 1 0 01.96-.25l2.22.54a1 1 0 01.72.94V19a2 2 0 01-2 2h-1C9.71 21 3 14.29 3 6V5z" /></svg>
              {personal.phone}
            </span>
          )}
          {personal.website && (
            <a href={personal.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 break-all font-medium hover:underline">
              <svg className="w-3 h-3 shrink-0" style={{ color: accentColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 12H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              {personal.website}
            </a>
          )}
        </div>
      </div>

      {/* Summary Slot */}
      {personal.summary && (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 items-start">
          <div className="sm:text-right">
            <h2 
              className="text-[9px] xs:text-[11px] sm:text-xs font-black uppercase tracking-wider pt-0.5"
              style={{ color: accentColor }}
            >
              About Me
            </h2>
          </div>
          <div className="sm:col-span-3 border-l-0 sm:border-l-2 border-slate-200 sm:pl-6">
            <p className="text-slate-700 leading-relaxed text-justify whitespace-pre-line">{personal.summary}</p>
          </div>
        </div>
      )}

      {/* Europass Experience Grid (Only shown when NOT in Fresher Mode) */}
      {!isFresher && experience.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 items-start mt-1">
          <div className="sm:text-right">
            <h2 
              className="text-[9px] xs:text-[11px] sm:text-xs font-black uppercase tracking-wider pt-0.5"
              style={{ color: accentColor }}
            >
              Work Experience
            </h2>
          </div>
          <div className="sm:col-span-3 border-l-0 sm:border-l-2 border-slate-200 sm:pl-6 space-y-4 print:space-y-3">
            {experience.map((exp, index) => (
              <div key={exp.id || `exp-${index}`} className="space-y-0.5 print:break-inside-avoid">
                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-baseline gap-0.5">
                  <h3 className="font-bold text-slate-900 text-[11px] xs:text-[12px] sm:text-sm">{exp.role || "Position"}</h3>
                  <span className="text-[9px] xs:text-[10px] font-bold shrink-0" style={{ color: accentColor }}>
                    {exp.duration || "Period"}
                  </span>
                </div>
                <h4 className="text-[9px] xs:text-[11px] text-slate-500 font-medium italic">{exp.company || "Employer"}</h4>
                {exp.description && (
                  <p className="text-slate-600 mt-1 whitespace-pre-line leading-relaxed text-[9px] xs:text-[10px] sm:text-xs text-justify">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Europass Education / Study Segment */}
      {education.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 items-start mt-1">
          <div className="sm:text-right">
            <h2 
              className="text-[9px] xs:text-[11px] sm:text-xs font-black uppercase tracking-wider pt-0.5"
              style={{ color: accentColor }}
            >
              Education
            </h2>
          </div>
          <div className="sm:col-span-3 border-l-0 sm:border-l-2 border-slate-200 sm:pl-6 space-y-3.5 print:space-y-3">
            {education.map((edu, index) => (
              <div key={edu.id || `edu-${index}`} className="space-y-0.5 print:break-inside-avoid">
                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-baseline gap-0.5">
                  <h3 className="font-bold text-slate-900 text-[11px] xs:text-[12px] sm:text-sm">
                    {edu.degree || "Degree/Qualification"}
                  </h3>
                  <span className="text-[9px] xs:text-[10px] font-bold shrink-0" style={{ color: accentColor }}>
                    {edu.duration || "Period"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[9px] xs:text-[11px] text-slate-600 font-medium italic">
                  <span>{edu.school || "School / University"}</span>
                  {edu.grade && (
                    <span className="bg-slate-100 not-italic text-slate-700 px-1.5 py-0.5 rounded font-semibold text-[9px] print:bg-transparent print:p-0">
                      Grade: {edu.grade}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Europass Projects Standard Segment */}
      {projects.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 items-start mt-1">
          <div className="sm:text-right">
            <h2 
              className="text-[9px] xs:text-[11px] sm:text-xs font-black uppercase tracking-wider pt-0.5"
              style={{ color: accentColor }}
            >
              Projects
            </h2>
          </div>
          <div className="sm:col-span-3 border-l-0 sm:border-l-2 border-slate-200 sm:pl-6 space-y-4 print:space-y-3">
            {projects.map((proj, index) => (
              <div key={proj.id || `proj-${index}`} className="space-y-0.5 print:break-inside-avoid">
                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-baseline gap-0.5">
                  <h3 className="font-bold text-slate-900 text-[11px] xs:text-[12px] sm:text-sm flex flex-wrap items-center gap-1.5">
                    <span>{proj.title || "Project Title"}</span>
                    {proj.link && (
                      <a 
                        href={proj.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-[9px] sm:text-[10px] font-normal underline break-all print:text-slate-500 hover:opacity-80"
                        style={{ color: accentColor }}
                      >
                        ({proj.link})
                      </a>
                    )}
                  </h3>
                  {proj.technologies && (
                    <span className="text-[9px] xs:text-[10px] font-bold italic shrink-0" style={{ color: accentColor, opacity: 0.85 }}>
                      {proj.technologies}
                    </span>
                  )}
                </div>
                {proj.description && (
                  <p className="text-slate-600 mt-1 whitespace-pre-line leading-relaxed text-[9px] xs:text-[10px] sm:text-xs text-justify">{proj.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Matrix */}
      {skills.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 items-start mt-1">
          <div className="sm:text-right">
            <h2 
              className="text-[9px] xs:text-[11px] sm:text-xs font-black uppercase tracking-wider pt-0.5"
              style={{ color: accentColor }}
            >
              Skills
            </h2>
          </div>
          <div className="sm:col-span-3 border-l-0 sm:border-l-2 border-slate-200 sm:pl-6 flex flex-wrap gap-1.5">
            {skills.map((skill, i) => (
              <span 
                key={`skill-${i}`} 
                className="font-semibold text-[9px] xs:text-[10px] px-2 py-0.5 rounded"
                style={{ 
                  color: accentColor, 
                  borderColor: `${accentColor}40`, 
                  borderWidth: '1px',
                  backgroundColor: `${accentColor}10` 
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Europass Languages Segment */}
      {languages.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 items-start mt-1">
          <div className="sm:text-right">
            <h2 
              className="text-[9px] xs:text-[11px] sm:text-xs font-black uppercase tracking-wider pt-0.5"
              style={{ color: accentColor }}
            >
              Languages
            </h2>
          </div>
          <div className="sm:col-span-3 border-l-0 sm:border-l-2 border-slate-200 sm:pl-6 flex flex-wrap gap-2">
            {languages.map((lang, index) => (
              <div 
                key={lang.id || `lang-${index}`} 
                className="flex items-center gap-1.5 text-[9px] xs:text-[10px] sm:text-xs px-2.5 py-1 rounded bg-slate-50 border border-slate-200 print:bg-transparent print:border-none print:p-0"
              >
                <span className="font-bold text-slate-800">{lang.name || 'Language'}</span>
                {lang.level && (
                  <span className="text-slate-500 font-medium">({lang.level})</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}