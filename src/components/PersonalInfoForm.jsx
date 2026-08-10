import { useState } from 'react';
import { useResumeStore } from '../store/useResumeStore';
import { 
  Sparkles, 
  Loader2, 
  User, 
  Mail, 
  Phone, 
  Globe,
  FileText
} from 'lucide-react';

export default function PersonalInfoForm() {
  const { resumeData, updatePersonal } = useResumeStore();
  const [loading, setLoading] = useState(false);

  const handleAIBySummary = async () => {
    setLoading(true);
    // Mimicking network matrix dispatch simulation latency
    setTimeout(() => {
      updatePersonal({
        summary: `Innovative and results-driven Frontend Developer with extensive experience in architecting highly scalable single-page applications using React, Node.js, and modern CSS frameworks like Tailwind CSS. Proven track record of optimizing client-side performance, engineering modular UI components, and transforming legacy platforms into pixel-perfect, mobile-first responsive web solutions.`
      });
      setLoading(false);
    }, 1400);
  };

  const wrapperStyles = "relative flex items-center w-full group";
  const iconStyles = "absolute left-3.5 text-slate-500 group-focus-within:text-blue-400 transition-colors duration-200 w-4 h-4";
  const inputStyles = "w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800/80 rounded-xl text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 outline-none transition-all duration-200 text-sm";

  return (
    <div className="space-y-5 bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-800/80 shadow-xl">
      
      {/* Form Section Banner */}
      <div className="flex items-center gap-2.5 border-b border-slate-800 pb-3.5">
        <div className="p-2 bg-blue-950/40 border border-blue-900/40 rounded-lg">
          <User className="w-4 h-4 text-blue-400" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-200 tracking-wide">Personal Information</h3>
          <p className="text-[11px] text-slate-500">Provide identity parameters and primary touchpoints.</p>
        </div>
      </div>
      
      {/* 2-Column Responsive Data Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className={wrapperStyles}>
          <User className={iconStyles} />
          <input 
            type="text" 
            placeholder="Full Name" 
            value={resumeData.personal.fullName} 
            onChange={(e) => updatePersonal({ fullName: e.target.value })} 
            className={inputStyles} 
          />
        </div>

        {/* Email Address */}
        <div className={wrapperStyles}>
          <Mail className={iconStyles} />
          <input 
            type="email" 
            placeholder="Email Address" 
            value={resumeData.personal.email} 
            onChange={(e) => updatePersonal({ email: e.target.value })} 
            className={inputStyles} 
          />
        </div>

        {/* Phone Number */}
        <div className={wrapperStyles}>
          <Phone className={iconStyles} />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            value={resumeData.personal.phone} 
            onChange={(e) => updatePersonal({ phone: e.target.value })} 
            className={inputStyles} 
          />
        </div>

        {/* Portfolio / Link */}
        <div className={wrapperStyles}>
          <Globe className={iconStyles} />
          <input 
            type="url" 
            placeholder="Website / LinkedIn" 
            value={resumeData.personal.website} 
            onChange={(e) => updatePersonal({ website: e.target.value })} 
            className={inputStyles} 
          />
        </div>
      </div>

      {/* Narrative Profile Block */}
      <div className="space-y-2">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-1.5 text-slate-400">
            <FileText className="w-3.5 h-3.5 text-blue-500" />
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Professional Summary</label>
          </div>
          <button 
            type="button" 
            onClick={handleAIBySummary} 
            disabled={loading}
            className="group/btn flex items-center gap-1.5 text-xs bg-purple-600 hover:bg-purple-500 disabled:hover:bg-purple-600 text-white font-semibold px-3 py-1.5 rounded-xl transition-all shadow-md hover:shadow-purple-600/10 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer border border-purple-500/20"
          >
            {loading ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Sparkles className="w-3.5 h-3.5 text-purple-200 group-hover/btn:rotate-12 transition-transform" />
            )}
            <span>{loading ? "Generating..." : "AI Write Summary"}</span>
          </button>
        </div>
        
        <textarea 
          rows="4" 
          placeholder="Tell us about your professional background, core expertise, technical domains, or execute the automated AI module..." 
          value={resumeData.personal.summary} 
          onChange={(e) => updatePersonal({ summary: e.target.value })} 
          className="w-full p-3 bg-slate-950 border border-slate-800/80 rounded-xl text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 outline-none transition-all duration-200 text-sm leading-relaxed resize-none"
        />
      </div>
    </div>
  );
}