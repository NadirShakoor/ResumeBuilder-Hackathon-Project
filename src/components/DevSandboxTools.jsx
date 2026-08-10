import { useResumeStore } from '../store/useResumeStore';
import { Database, Sparkles, Trash2 } from 'lucide-react';

export default function DevSandboxTools() {
  const { updatePersonal } = useResumeStore();

  // Global Mock Trigger Strategy to populate all data parameters instantly
  const injectCompleteDummyData = () => {
    // 1. Fill Personal Info (Using defined action as fallback safety)
    updatePersonal({
      fullName: "Nadir Shakoor Khatti",
      email: "nadir11@gmail.com",
      phone: "+92 3123511101",
      website: "https://nadirshakoor.dev",
      summary: "Innovative and results-driven Frontend Developer with extensive experience in architecting highly scalable single-page applications using React, Node.js, and modern CSS frameworks like Tailwind CSS. Proven track record of optimizing client-side performance, engineering modular UI components, and transforming legacy platforms into pixel-perfect, mobile-first responsive web solutions."
    });

    // 2. Direct State Updates via Zustand native setState (Synced with complete state architecture)
    if (useResumeStore.setState) {
      useResumeStore.setState({
        resumeData: {
          personal: {
            fullName: "Nadir Shakoor Khatti",
            email: "nadir11@gmail.com",
            phone: "+92 3123511101",
            website: "https://nadirshakoor.dev",
            summary: "Innovative and results-driven Frontend Developer with extensive experience in architecting highly scalable single-page applications using React, Node.js, and modern CSS frameworks like Tailwind CSS. Proven track record of optimizing client-side performance, engineering modular UI components, and transforming legacy platforms into pixel-perfect, mobile-first responsive web solutions."
          },
          experience: [
            {
              id: "exp-1",
              role: "Frontend Engineer",
              company: "TechNexus Solutions Labs",
              duration: "2025 - Present",
              description: "Engineered responsive dashboard modules decreasing load time parameters by 40% using React and Vite. Directed structural code architecture audits for modular rendering optimization patterns."
            },
            {
              id: "exp-2",
              role: "Junior Web Developer",
              company: "Quantum Pixel Agency",
              duration: "2022 - 2024",
              description: "Developed semantic HTML layouts integrated with Tailwind CSS architecture frameworks. Managed client integration touchpoints for cross-browser synchronization frameworks."
            }
          ],
          projects: [
            {
              id: "proj-1",
              title: "Autonomous Logistics Dispatcher Platform",
              link: "https://github.com/example/dispatcher",
              technologies: "React, Node.js, MongoDB, Express",
              description: "Architected end-to-end routing infrastructure schemas for truck tracking nodes. Integrated real-time client rendering views executing state updates instantly."
            }
          ],
          skills: ["React.js", "Node.js", "Tailwind CSS", "Vite", "JavaScript (ES6+)", "RESTful API Integration", "Git / GitHub Control Systems"],
          education: [
            {
              id: "edu-1",
              school: "Mehran University of Engineering and Technology",
              degree: "Bachelor of Science in Computer Science",
              duration: "2021 - 2025",
              grade: "3.8 CGPA"
            }
          ],
          
          // 🌐 NEW: Syncing structural mock data for languages slot
          languages: [
            {
              id: "lang-1",
              name: "English",
              level: "Fluent"
            },
            {
              id: "lang-2",
              name: "Urdu",
              level: "Native"
            },
            {
              id: "lang-3",
              name: "Sindhi",
              level: "Native"
            }
          ]
        }
      });
    }
  };

  // Pure State Flush Strategy to wipe all data layers back to an empty structure
  const clearAllDataFields = () => {
    if (useResumeStore.setState) {
      useResumeStore.setState({
        resumeData: {
          personal: { fullName: "", email: "", phone: "", website: "", summary: "" },
          experience: [],
          projects: [],
          skills: [],
          education: [],
          languages: [] // 🌐 NEW: Structural clean reset for languages array
        }
      });
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-slate-900/60 rounded-xl border border-slate-800/80">
      <div className="space-y-0.5">
        <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wide flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5 text-blue-400" /> Dev Sandbox Tools
        </h4>
        <p className="text-[11px] text-slate-500">Fast track testing by populating structural mock records.</p>
      </div>
      
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={injectCompleteDummyData}
          className="flex items-center gap-1.5 text-xs bg-blue-600 hover:bg-blue-500 text-white font-bold px-3.5 py-2 rounded-lg transition-all active:scale-95 cursor-pointer shadow-lg shadow-blue-600/10"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-200" />
          <span>Fill Dummy Profile</span>
        </button>

        <button
          type="button"
          onClick={clearAllDataFields}
          className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-red-950/60 hover:text-red-400 hover:border-red-900/50 text-slate-300 font-semibold px-3 py-2 rounded-lg transition-all active:scale-95 cursor-pointer border border-slate-700/60"
          title="Wipe current board data clean"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Clear All</span>
        </button>
      </div>
    </div>
  );
}