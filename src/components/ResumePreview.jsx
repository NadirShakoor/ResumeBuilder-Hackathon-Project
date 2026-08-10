import { useResumeStore } from '../store/useResumeStore';
import EuropassTemplate from './templates/EuropassTemplate'; 
import ExecutiveTemplate from './templates/ExecutiveTemplate'; 

export default function ResumePreview() {
  const resumeData = useResumeStore((state) => state.resumeData);
  const selectedTemplate = useResumeStore((state) => state.selectedTemplate) || 'euro';

  if (!resumeData) {
    return (
      <div className="p-12 text-center text-slate-400 italic text-xs tracking-wider">
        Awaiting data initialization layers...
      </div>
    );
  }

  return (
    <div className="w-full bg-white text-slate-900 print:p-0 print:m-0 print:shadow-none print:rounded-none">
      {/* 🎛️ Clean Conditional Rendering Strategy nested in unified container */}
      {selectedTemplate === 'euro' ? (
        <EuropassTemplate data={resumeData} />
      ) : (
        <ExecutiveTemplate data={resumeData} />
      )}
    </div>
  );
}