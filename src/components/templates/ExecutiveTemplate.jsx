import { Mail, Phone, Globe, Briefcase, Code, User, Calendar, MapPin, Layers, GraduationCap, Languages } from 'lucide-react';
import { useResumeStore } from '../../store/useResumeStore';

export default function ExecutiveTemplate({ data }) {
  // 🚀 Zustand Store Custom Theme, Font & Fresher Mode Consumer
  const { accentColor = '#0f172a', fontFamily = 'font-sans', isFresher = false } = useResumeStore();

  // Fallbacks for data structures
  const personal = data?.personal || { 
    fullName: '', email: '', phone: '', website: '', summary: '',
    dob: '', nationality: '', country: '', address: '' 
  };
  const experience = data?.experience || [];
  const projects = data?.projects || []; 
  const education = data?.education || [];
  const skills = data?.skills || [];
  const languages = data?.languages || [];

  return (
    <div 
      className={`w-full min-h-full bg-white text-slate-900 p-6 xs:p-10 sm:p-14 md:p-16 flex flex-col gap-6 selection:bg-slate-100 ${fontFamily}`}
      style={{ fontSize: '13px' }}
    >
      {/* ─── OFFICIAL CENTERED HEADER ─── */}
      <div className="text-center space-y-2 pb-3">
        <h1 
          className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-slate-950"
          style={{ color: accentColor !== '#0f172a' ? accentColor : undefined }}
        >
          {personal.fullName || "Your Full Name"}
        </h1>
        
        {/* Contact Infrastructure Sub-Bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-600 font-medium">
          {personal.email && (
            <a href={`mailto:${personal.email}`} className="flex items-center gap-1 hover:text-slate-950 transition-colors">
              <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" /> {personal.email}
            </a>
          )}
          {personal.phone && (
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" /> {personal.phone}
            </span>
          )}
          {personal.website && (
            <a href={personal.website} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-800 font-semibold hover:underline">
              <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0" /> {personal.website}
            </a>
          )}
        </div>

        {/* Supplementary Official Meta (DOB / Address) */}
        {(personal.dob || personal.nationality || personal.address) && (
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-slate-500 font-normal">
            {personal.dob && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-300 shrink-0" /> DOB: {personal.dob}
              </span>
            )}
            {personal.address && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-300 shrink-0" /> {personal.address}{personal.country ? `, ${personal.country}` : ''}
              </span>
            )}
            {personal.nationality && (
              <span className="flex items-center gap-1 uppercase tracking-wider text-[10px] bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                Nationality: {personal.nationality}
              </span>
            )}
          </div>
        )}
      </div>

      {/* ─── OBJECTIVE / SUMMARY SECTION ─── */}
      {personal.summary && (
        <div className="space-y-1.5">
          <h2 
            className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b pb-0.5 flex items-center gap-2"
            style={{ borderColor: accentColor }}
          >
            <User className="w-3.5 h-3.5" style={{ color: accentColor }} /> About Me
          </h2>
          <p className="text-slate-700 leading-relaxed text-justify text-[12.5px] whitespace-pre-line">
            {personal.summary}
          </p>
        </div>
      )}

      {/* ─── PROFESSIONAL HISTORY (Only shown when NOT in Fresher Mode) ─── */}
      {!isFresher && experience.length > 0 && (
        <div className="space-y-2.5">
          <h2 
            className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b pb-0.5 flex items-center gap-2"
            style={{ borderColor: accentColor }}
          >
            <Briefcase className="w-3.5 h-3.5" style={{ color: accentColor }} /> Work Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={exp.id || `exec-exp-${index}`} className="space-y-0.5 print:break-inside-avoid">
                <div className="flex justify-between font-bold text-slate-950 text-[13px] items-baseline gap-2">
                  <span>{exp.role || "Position"}</span>
                  <span className="font-semibold text-xs shrink-0" style={{ color: accentColor }}>
                    {exp.duration || "Period"}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-700 italic">{exp.company || "Company"}</div>
                {exp.description && (
                  <p className="text-slate-600 text-[12.5px] whitespace-pre-line leading-relaxed text-justify pt-1">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── EDUCATION & ACADEMIC CREDENTIALS ─── */}
      {education.length > 0 && (
        <div className="space-y-2.5">
          <h2 
            className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b pb-0.5 flex items-center gap-2"
            style={{ borderColor: accentColor }}
          >
            <GraduationCap className="w-3.5 h-3.5" style={{ color: accentColor }} /> Education
          </h2>
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div key={edu.id || `exec-edu-${index}`} className="space-y-0.5 print:break-inside-avoid">
                <div className="flex justify-between font-bold text-slate-950 text-[13px] items-baseline gap-2">
                  <span>{edu.degree || "Degree / Course"}</span>
                  <span className="font-semibold text-xs shrink-0" style={{ color: accentColor }}>
                    {edu.duration || "Period"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-700 italic">
                  <span>{edu.school || "School / University"}</span>
                  {edu.grade && (
                    <span className="text-[11px] font-medium not-italic text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200/60 print:bg-transparent print:border-none print:p-0">
                      {edu.grade}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── ENGINEERING PROJECTS TRACK ─── */}
      {projects.length > 0 && (
        <div className="space-y-2.5">
          <h2 
            className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b pb-0.5 flex items-center gap-2"
            style={{ borderColor: accentColor }}
          >
            <Code className="w-3.5 h-3.5" style={{ color: accentColor }} /> Key Projects
          </h2>
          <div className="space-y-4">
            {projects.map((proj, index) => (
              <div key={proj.id || `exec-proj-${index}`} className="space-y-0.5 print:break-inside-avoid">
                <div className="flex justify-between font-bold text-slate-950 text-[13px] items-baseline gap-2">
                  <span className="flex items-center gap-1.5 font-bold flex-wrap">
                    {proj.title || "Project Title"}
                    {proj.link && (
                      <a 
                        href={proj.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-[11px] font-normal hover:underline break-all"
                        style={{ color: accentColor }}
                      >
                        ({proj.link})
                      </a>
                    )}
                  </span>
                  {proj.technologies && (
                    <span className="font-medium text-slate-500 text-xs italic shrink-0">
                      {proj.technologies}
                    </span>
                  )}
                </div>
                {proj.description && (
                  <p className="text-slate-600 text-[12.5px] whitespace-pre-line leading-relaxed text-justify pt-0.5">
                    {proj.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── SKILLS MATRIX ─── */}
      {skills.length > 0 && (
        <div className="space-y-2">
          <h2 
            className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b pb-0.5 flex items-center gap-2"
            style={{ borderColor: accentColor }}
          >
            <Layers className="w-3.5 h-3.5" style={{ color: accentColor }} /> Skills & Expertise
          </h2>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12.5px] text-slate-800 font-medium pt-1">
            {skills.map((s, idx) => (
              <div key={`exec-skill-${idx}`} className="flex items-center gap-3">
                <span>{s}</span>
                {idx < skills.length - 1 && <span className="text-slate-300 text-xs">•</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── LANGUAGES SECTION ─── */}
      {languages.length > 0 && (
        <div className="space-y-2">
          <h2 
            className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b pb-0.5 flex items-center gap-2"
            style={{ borderColor: accentColor }}
          >
            <Languages className="w-3.5 h-3.5" style={{ color: accentColor }} /> Languages
          </h2>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12.5px] pt-1">
            {languages.map((lang, idx) => (
              <div 
                key={lang.id || `exec-lang-${idx}`} 
                className="flex items-center gap-1.5 text-slate-800"
              >
                <span className="font-semibold">{lang.name || 'Language'}</span>
                {lang.level && (
                  <span className="text-slate-500 text-xs italic">({lang.level})</span>
                )}
                {idx < languages.length - 1 && <span className="text-slate-300 text-xs ml-2">•</span>}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}