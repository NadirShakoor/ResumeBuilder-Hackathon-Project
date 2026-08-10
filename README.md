# 📄ResumeBuilder

A modern, ultra-fast, and responsive web application to craft professional resumes in minutes.

---

## 🎯 Purpose & Overview

The **Interactive Resume Builder** was designed to solve a common problem: building a clean, professional, and ATS-friendly resume without dealing with painful word processor formatting errors.

Users can effortlessly input their details, customize visual elements in real-time, toggle student/fresher modes, adjust font styles and color palettes, and instantly export pixel-perfect A4 PDF documents with zero design distortion.

---

## ✨ Key Features

* ⚡ **Bio-Data Engine (Step 1):** Add or remove dynamic input fields for work experience, education, projects, languages, and custom skill sets effortlessly.
* 🎓 **Smart Fresher Mode:** A single toggle hides unnecessary work experience sections for students and fresh graduates.
* 🎨 **Live Customization:** Change color palettes and typography styles on the fly with real-time updates.
* 👁️ **Layout Canvas & Live A4 Preview:** See instant visual changes side-by-side on a standardized A4 paper canvas.
* 📱 **Fully Responsive UI:** Flawlessly optimized across desktops, tablets, and mobile viewports.
* 🖨️ **Pixel-Perfect Export:** One-click HD A4 PDF printing powered by vector-based render engines (`react-to-print`).

---

## 🛠️ Tech Stack & Dependencies

| Category | Technology / Library | Purpose |
| --- | --- | --- |
| **Framework** | ⚛️ **React** | Component-based UI Architecture |
| **Build Tool** | ⚡ **Vite** | Ultra-fast Development Server & Bundling |
| **Styling** | 🎨 **Tailwind CSS** | Utility-first Responsive Styling |
| **State Management** | 🐻 **Zustand** | Centralized, Lightweight Global State Store |
| **Export Engine** | 🖨️ **React-to-Print** | HD Print-to-PDF Window Rendering |
| **Icons** | 🎭 **Lucide React** | Clean, Modern Micro-Icons |

---

## 📁 Project Architecture

```
resume-builder/
├── node_modules/            # Dependencies and packages
├── public/                  # Static assets & favicon
├── Screen Recording/        # Project demo & media files
├── src/
│   ├── assets/              # Images, SVGs, and static media
│   ├── components/          # Modular React UI components
│   │   ├── templates/       # Resume layout templates
│   │   │   ├── EuropassTemplate.jsx
│   │   │   └── ExecutiveTemplate.jsx
│   │   ├── DevSandboxTools.jsx
│   │   ├── EducationForm.jsx
│   │   ├── ExperienceForm.jsx
│   │   ├── FormSelector.jsx
│   │   ├── LanguagesForm.jsx
│   │   ├── Navbar.jsx
│   │   ├── PersonalInfoForm.jsx
│   │   ├── ProjectsForm.jsx
│   │   ├── ResumePreview.jsx
│   │   ├── SkillsForm.jsx
│   │   ├── TemplateCard.jsx
│   │   └── WelcomeBanner.jsx
│   ├── store/               # State management
│   │   └── useResumeStore.js# Zustand store configuration
│   ├── App.jsx              # Main App layout & navigation
│   ├── index.css            # Global CSS & Tailwind imports
│   └── main.jsx             # React entry point
├── .gitignore               # Git ignored files
├── eslint.config.js         # ESLint configuration
├── index.html               # Main HTML document
└── package.json             # Dependencies and scripts

```

---

## 🚀 Getting Started

Follow these steps to get the project up and running on your local environment.

### Prerequisites

Make sure you have Node.js (v16 or higher) installed on your system.

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/NadirShakoor/ResumeBuilder-Hackathon-Project.git
cd ResumeBuilder-Hackathon-Project

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the development server:**
```bash
npm run dev

```


4. **Build for production:**
```bash
npm run build

```



---

## 👤 Author

**Nadir Shakoor Khatti**

* **Role:** Frontend Web Developer
* **Stack:** React, Vite, Tailwind CSS, Zustand
* **GitHub:** [@NadirShakoor](https://github.com/NadirShakoor)

---

*Made with ❤️ by Nadir Shakoor Khatti*
