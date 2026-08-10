import { create } from 'zustand';

const initialResumeData = {
  personal: { fullName: '', email: '', phone: '', website: '', summary: '' },
  experience: [{ id: '1', company: '', role: '', duration: '', description: '' }],
  projects: [{ id: '1', title: '', technologies: '', description: '', link: '' }],
  skills: ['React', 'Tailwind CSS', 'JavaScript'],
  education: [{ id: '1', school: '', degree: '', duration: '', grade: '' }],
  // 🌐 Languages Initial State
  languages: [
    { id: '1', name: 'English', level: 'Fluent' },
    { id: '2', name: 'Sindhi', level: 'Native' }
  ]
};

export const useResumeStore = create((set, get) => ({
  // ─── STATE ARCHITECTURE BLOCK ───
  isFresher: false, 
  resumeData: initialResumeData,
  
  // Custom Theme & Styling Matrix
  accentColor: '#2563eb', // Default Blue
  fontFamily: 'font-sans', // Default Sans-serif

  // UI Controls Matrix
  activeTab: 'edit',        
  selectedTemplate: 'euro', 
  currentStep: 'biodata', 

  // ─── DYNAMIC ATS SCORE CALCULATOR ───
  calculateResumeScore: () => {
    const { resumeData, isFresher } = get();
    let score = 0;

    // 1. Personal Details Check (Max 25 Points)
    if (resumeData.personal.fullName.trim()) score += 5;
    if (resumeData.personal.email.trim()) score += 5;
    if (resumeData.personal.phone.trim()) score += 5;
    if (resumeData.personal.summary.trim().length > 20) score += 10;

    // 2. Experience or Fresher Logic (Max 20 Points)
    if (isFresher) {
      score += 20; // Fresher mode automatically awards points for experience
    } else if (resumeData.experience.length > 0 && resumeData.experience[0].company.trim()) {
      score += 20;
    }

    // 3. Projects Check (Max 20 Points)
    if (resumeData.projects.length > 0 && resumeData.projects[0].title.trim()) {
      score += 20;
    }

    // 4. Education Check (Max 15 Points)
    if (resumeData.education.length > 0 && resumeData.education[0].school.trim()) {
      score += 15;
    }

    // 5. Skills Check (Max 10 Points)
    if (resumeData.skills.length >= 3) {
      score += 10;
    } else if (resumeData.skills.length > 0) {
      score += 5;
    }

    // 6. Languages Check (Max 10 Points)
    if (resumeData.languages && resumeData.languages.length >= 2) {
      score += 10;
    } else if (resumeData.languages && resumeData.languages.length === 1) {
      score += 5;
    }

    return Math.min(score, 100);
  },

  // ─── GENERAL UI & THEME MUTATIONS ───
  setIsFresher: (status) => set({ isFresher: status }),
  setAccentColor: (color) => set({ accentColor: color }),
  setFontFamily: (font) => set({ fontFamily: font }),
  setCurrentStep: (step) => set({ currentStep: step }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  setSelectedTemplate: (templateName) => set({ selectedTemplate: templateName }),

  // ─── PERSONAL DATA LAYER ACTIONS ───
  updatePersonal: (fields) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      personal: { ...state.resumeData.personal, ...fields }
    }
  })),

  // ─── EXPERIENCE ACTION HANDLERS ───
  updateExperience: (id, fields) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      experience: state.resumeData.experience.map((exp) => 
        exp.id === id ? { ...exp, ...fields } : exp
      )
    }
  })),

  addExperience: () => set((state) => ({
    resumeData: {
      ...state.resumeData,
      experience: [
        ...state.resumeData.experience, 
        { id: Date.now().toString(), company: '', role: '', duration: '', description: '' }
      ]
    }
  })),

  deleteExperience: (id) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      experience: state.resumeData.experience.filter((exp) => exp.id !== id)
    }
  })),

  // ─── PROJECTS ACTION HANDLERS ───
  updateProject: (id, fields) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      projects: state.resumeData.projects.map((proj) => 
        proj.id === id ? { ...proj, ...fields } : proj
      )
    }
  })),

  addProject: () => set((state) => ({
    resumeData: {
      ...state.resumeData,
      projects: [
        ...state.resumeData.projects,
        { id: Date.now().toString(), title: '', technologies: '', description: '', link: '' }
      ]
    }
  })),

  deleteProject: (id) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      projects: state.resumeData.projects.filter((proj) => proj.id !== id)
    }
  })),

  // ─── EDUCATION ACTION HANDLERS ───
  updateEducation: (id, fields) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      education: state.resumeData.education.map((edu) => 
        edu.id === id ? { ...edu, ...fields } : edu
      )
    }
  })),

  addEducation: () => set((state) => ({
    resumeData: {
      ...state.resumeData,
      education: [
        ...state.resumeData.education,
        { id: Date.now().toString(), school: '', degree: '', duration: '', grade: '' }
      ]
    }
  })),

  deleteEducation: (id) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      education: state.resumeData.education.filter((edu) => edu.id !== id)
    }
  })),

  // ─── SKILLS LAYER ACTIONS ───
  addSkill: (skill) => set((state) => {
    const trimmedSkill = skill.trim();
    if (!trimmedSkill || state.resumeData.skills.includes(trimmedSkill)) return state;
    return {
      resumeData: {
        ...state.resumeData,
        skills: [...state.resumeData.skills, trimmedSkill]
      }
    };
  }),

  removeSkill: (skillToRemove) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      skills: state.resumeData.skills.filter((s) => s !== skillToRemove)
    }
  })),

  // ─── LANGUAGES ACTION HANDLERS ───
  addLanguage: (language) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      languages: [
        ...(state.resumeData.languages || []),
        language?.id ? language : { id: Date.now().toString(), name: '', level: 'Fluent' }
      ]
    }
  })),

  updateLanguage: (id, fields) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      languages: (state.resumeData.languages || []).map((lang) =>
        lang.id === id ? { ...lang, ...fields } : lang
      )
    }
  })),

  deleteLanguage: (id) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      languages: (state.resumeData.languages || []).filter((lang) => lang.id !== id)
    }
  })),

  // Alias for backward compatibility with components using `removeLanguage`
  removeLanguage: (id) => set((state) => ({
    resumeData: {
      ...state.resumeData,
      languages: (state.resumeData.languages || []).filter((lang) => lang.id !== id)
    }
  })),

  // ─── RESET ALL DATA ACTION ───
  resetResume: () => set({
    isFresher: false,
    resumeData: initialResumeData,
    accentColor: '#2563eb',
    fontFamily: 'font-sans',
    currentStep: 'biodata'
  })
}));