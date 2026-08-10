import { useRef } from 'react';
import { useResumeStore } from './store/useResumeStore';
import Navbar from './components/Navbar';
import DevSandboxTools from './components/DevSandboxTools'; 
import FormSelector from './components/FormSelector';
import ResumePreview from './components/ResumePreview';
import WelcomeBanner from './components/WelcomeBanner'; 
import TemplateCard from './components/TemplateCard'; 
import { useReactToPrint } from 'react-to-print';
import { FileCode, Zap, LayoutTemplate, ArrowLeft, Database, Sliders } from 'lucide-react';

const TEMPLATES = [
  { id: 'euro', name: 'Official Euro Standard', desc: 'Europass professional tracking matrix' },
  { id: 'ats', name: 'Executive ATS Core', desc: 'High ranking corporate layout architecture' }
];

export default function App() {
  const { selectedTemplate, setSelectedTemplate, currentStep, setCurrentStep } = useResumeStore();
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "My_Resume_Document",
    pageStyle: `
      @page { size: A4 portrait; margin: 0mm !important; }
      @media print {
        body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; background: #ffffff !important; margin: 0 !important; padding: 0 !important; }
        html, body { width: 210mm; height: 297mm; background-color: #ffffff !important; }
        .print-none { display: none !important; }
        .print-shadow-override { box-shadow: none !important; border: none !important; }
      }
    `,
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans w-full overflow-x-hidden relative pb-8">
      
      {/* 🧊 Modern Isometric Cubix Grid Background */}
      <div className="absolute inset-0 bg-slate-950 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      {/* 🔮 Glowing Ambient Cubix Rings */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <Navbar onPrint={handlePrint} />

      <style>{`
        @media print {
          .print-hide { display: none !important; }
          .print-full { width: 100% !important; max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
        }
      `}</style>

      {/* 🧭 Step Breadcrumbs */}
      <div className="w-full max-w-4xl mx-auto px-4 pt-4 print-hide relative z-10">
        <div className="inline-flex items-center gap-1.5 bg-slate-900/60 border border-slate-800 p-1 rounded-xl backdrop-blur-sm">
          <button 
            onClick={() => setCurrentStep('biodata')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-bold text-xs transition cursor-pointer ${currentStep === 'biodata' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>1. Bio-Data Engine</span>
          </button>
          
          <div className="h-3.5 w-px bg-slate-800" />
          
          <button 
            onClick={() => setCurrentStep('canvas')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-bold text-xs transition cursor-pointer ${currentStep === 'canvas' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>2. Layout Canvas</span>
          </button>
        </div>
      </div>

      {/* 📄 MAIN CONTENT CONTAINER */}
      {currentStep === 'biodata' ? (
        <main className="w-full max-w-4xl mx-auto p-4 sm:p-6 space-y-5 relative z-10">
          <WelcomeBanner />
          <DevSandboxTools />
          <FormSelector />
        </main>
      ) : (
        <main className="w-full max-w-[1400px] mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10 print:p-0 print:block">
          
          {/* Left Controls */}
          <div className="w-full lg:col-span-4 space-y-3 print-hide lg:sticky lg:top-20">
            <button
              type="button"
              onClick={() => setCurrentStep('biodata')}
              className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white transition bg-slate-900 border border-slate-800 px-3.5 py-2.5 rounded-xl cursor-pointer w-full"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Modify Data Payload</span>
            </button>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400 border-b border-slate-800 pb-2">
                <LayoutTemplate className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Layout Architectures</span>
              </div>
              
              <div className="grid grid-cols-1 gap-2.5">
                {TEMPLATES.map((tpl) => (
                  <TemplateCard 
                    key={tpl.id}
                    tpl={tpl}
                    isSelected={selectedTemplate === tpl.id}
                    onSelect={() => setSelectedTemplate(tpl.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Live Preview */}
          <div className="w-full lg:col-span-8 print-full">
            <div className="hidden lg:flex items-center justify-between mb-2.5 px-1 print-hide">
              <div className="flex items-center gap-2 text-slate-400">
                <FileCode className="w-4 h-4 text-blue-500" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">A4 Live Preview</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded font-bold border border-cyan-800/40">
                <Zap className="w-3 h-3 text-cyan-400" />
                LIVE RENDER
              </div>
            </div>
            
            <div className="w-full rounded-xl border border-slate-800 bg-slate-900/30 p-2 sm:p-4 flex justify-center print:border-none print:bg-white print:p-0">
              <div ref={componentRef} className="w-full bg-white text-slate-800 rounded-lg overflow-hidden border border-slate-200 print:border-none">
                <ResumePreview />
              </div>
            </div>
          </div>

        </main>
      )}
    </div>
  );
}