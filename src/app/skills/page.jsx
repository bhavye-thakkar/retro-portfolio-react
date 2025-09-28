"use client";

import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

const techSkills = [
  {
    name: "JavaScript",
    level: 95,
    tag: "Expert",
    icon: (
      <svg className="w-6 h-6" fill="#F7DF1E" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.315-.762-.315-1.379 0-2.142.315-.762 1.797-.36 1.797-1.382 0-.762-.888-1.14-1.797-1.14-1.055 0-1.797.345-1.797 1.14 0 .762.315 1.14 1.013 1.382.42.142.982.087 1.382 0 .262-.057.315-.345.315-.762 0-.345-.053-.615-.315-.762-.42-.262-1.055-.157-1.372 0-.168.082-.315.262-.315.615 0 .53.168 1.14.735 1.545.42.303.945.457 1.372.615.735.262 1.372 1.14 1.372 2.142 0 1.797-1.567 2.873-3.168 2.873-1.797 0-3.168-1.055-3.168-2.873 0-.945.42-1.797 1.055-2.142.315-.168.735-.303.945-.615.42-.615.42-1.382 0-1.797-.315-.315-.735-.457-1.14-.615-.735-.303-1.45-.262-1.797 0-.42.315-.577.787-.577 1.382 0 .762.42 1.382 1.013 1.797.315.262.577.457.787.72-.21.157-.42.303-.735.457-.945.457-1.797 1.14-1.797 2.142 0 1.35.787 2.362 1.872 2.784.577.225 1.224.315 1.797.315 1.624 0 3.168-.945 3.168-2.784z"/>
      </svg>
    )
  },
  {
    name: "Python",
    level: 90,
    tag: "Expert",
    icon: (
      <svg className="w-6 h-6" fill="#3776ab" viewBox="0 0 24 24">
        <path d="M14.25 2.26l-.08-.04-.01.02C13.46 2.22 12.74 2.21 12 2.21 6.51 2.21 2.21 6.51 2.21 12s4.3 9.79 9.79 9.79c5.49 0 9.79-4.3 9.79-9.79 0-.88-.13-1.73-.37-2.53l-.04-.08-.01.02c-.25.42-.59.76-1.02.99l.04.08c.24.66.37 1.36.37 2.08 0 4.41-3.58 7.99-7.99 7.99S4.21 16.41 4.21 12 7.79 4.21 12 4.21c.72 0 1.42.13 2.08.37l.08.04.01-.02c.42-.25.76-.59.99-1.02zM7.5 9.5C6.57 9.5 5.5 10.57 5.5 11.5S6.57 13.5 7.5 13.5 9.5 12.43 9.5 11.5 8.43 9.5 7.5 9.5zm9 0c-.93 0-2 .57-2 1.5s1.07 1.5 2 1.5 2-.57 2-1.5-1.07-1.5-2-1.5zm-4.5 5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"/>
      </svg>
    )
  },
  {
    name: "React.js",
    level: 80,
    tag: "Advanced",
    icon: (
      <svg className="w-6 h-6" fill="#61DAFB" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2"/>
        <path d="M20.2 9.7c-.1-.2-.2-.4-.3-.6-.5-.8-1.1-1.4-1.8-1.8-.3-.2-.6-.3-.9-.4-.2-.1-.4-.1-.6-.1-.4 0-.8.1-1.1.3-.2.1-.4.3-.5.5-.2.4-.3.8-.3 1.2 0 .4.1.8.3 1.1.1.2.3.4.5.5.3.2.7.3 1.1.3.4 0 .8-.1 1.1-.3.2-.1.4-.3.5-.5.4-.3.6-.7.6-1.1 0-.2 0-.4-.1-.6z"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
      </svg>
    )
  },
  {
    name: "Flutter",
    level: 75,
    tag: "Advanced",
    icon: (
      <svg className="w-6 h-6" fill="#02569B" viewBox="0 0 24 24">
        <path d="M14.314 0L2.3 12 6.462 16.062l7.852-7.852L20.537 14.3V0H14.314zM1.7 12L6.462 7.238 13.3 14.3 6.462 21.062 1.7 16.3V12z"/>
        <path d="M17.846 16.462L22.3 12l-4.454-4.454L13.3 12l4.546 4.462z"/>
      </svg>
    )
  },
  {
    name: "TensorFlow",
    level: 70,
    tag: "Intermediate",
    icon: (
      <svg className="w-6 h-6" fill="#FF6F00" viewBox="0 0 24 24">
        <path d="M14.5 7.5h-1v-1h1v1zm-5-1h1v1h-1v-1zm3-3h1v1h-1v-1zm-4 0h1v1h-1v-1zm3-3h1v1h-1v-1zm-4 0h1v1h-1v-1zm3-3h1v1h-1v-1zm-4 0h1v1h-1v-1zm11 7h1v1h-1v-1zm-4 0h1v1h-1v-1zm3-3h1v1h-1v-1zm-4 0h1v1h-1v-1zm3-3h1v1h-1v-1zm-4 0h1v1h-1v-1zm3-3h1v1h-1v-1zm-4 0h1v1h-1v-1z"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
      </svg>
    )
  },
  {
    name: "Node.js",
    level: 70,
    tag: "Intermediate",
    icon: (
      <svg className="w-6 h-6" fill="#339933" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        <path d="M8.5 9.5C7.67 9.5 7 10.17 7 11s.67 1.5 1.5 1.5S10 11.83 10 11s-.67-1.5-1.5-1.5zm7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S17 11.83 17 11s-.67-1.5-1.5-1.5zm-3.5 6c-2.33 0-4.17-1.67-4.17-4.17 0-.83.17-1.67.5-2.5L7.17 8.17c.83-.5 1.83-.83 2.83-.83 2.5 0 4.17 1.67 4.17 4.17 0 .83-.17 1.67-.5 2.5l1.17 1.17c-.83.5-1.83.83-2.83.83z"/>
      </svg>
    )
  },
  {
    name: "Pandas",
    level: 85,
    tag: "Advanced",
    icon: (
      <svg className="w-6 h-6" fill="#150458" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        <path d="M7 9h10v2H7V9zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
      </svg>
    )
  },
  {
    name: "OpenCV",
    level: 65,
    tag: "Intermediate",
    icon: (
      <svg className="w-6 h-6" fill="#5C3EE8" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        <path d="M9 9h6v6H9V9z"/>
      </svg>
    )
  },
  {
    name: "Matplotlib",
    level: 80,
    tag: "Advanced",
    icon: (
      <svg className="w-6 h-6" fill="#11557C" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        <path d="M8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/>
      </svg>
    )
  },
  {
    name: "HTML/CSS",
    level: 40,
    tag: "Beginner",
    icon: (
      <svg className="w-6 h-6" fill="#E34F26" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        <path d="M7 9h10v6H7V9zm2 4h6v-2H9v2z"/>
      </svg>
    )
  },
];

const softSkills = [
  "Communication",
  "Problem-Solving",
  "Teamwork", 
  "Time Management"
];

const toolsPlatforms = [
  {
    name: "AWS",
    icon: (
      <svg className="w-8 h-8" fill="#FF9900" viewBox="0 0 24 24">
        <path d="M7.376 6.548l-3.67 6.317c-.05.087-.05.174 0 .261l3.67 6.317c.05.087.174.087.224 0l3.67-6.317c.05-.087.05-.174 0-.261L7.6 6.548c-.05-.087-.174-.087-.224 0z"/>
        <path d="M12.376 6.548l-3.67 6.317c-.05.087-.05.174 0 .261l3.67 6.317c.05.087.174.087.224 0l3.67-6.317c.05-.087.05-.174 0-.261l-3.67-6.317c-.05-.087-.174-.087-.224 0z"/>
        <path d="M17.376 6.548l-3.67 6.317c-.05.087-.05.174 0 .261l3.67 6.317c.05.087.174.087.224 0l3.67-6.317c.05-.087.05-.174 0-.261l-3.67-6.317c-.05-.087-.174-.087-.224 0z"/>
      </svg>
    )
  },
  {
    name: "VS Code",
    icon: (
      <svg className="w-8 h-8" fill="#007ACC" viewBox="0 0 24 24">
        <path d="M22.52 3.38l-1.9-1.9c-.78-.78-2.05-.78-2.83 0L2.48 16.79c-.78.78-.78 2.05 0 2.83l1.9 1.9c.78.78 2.05.78 2.83 0L22.52 6.21c.78-.78.78-2.05 0-2.83zM15 9l-6 6 6 6V9z"/>
      </svg>
    )
  },
  {
    name: "Git",
    icon: (
      <svg className="w-8 h-8" fill="#F05032" viewBox="0 0 24 24">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.516.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.884.719-2.604 0-.539-.541-.67-1.337-.396-1.983L12.67 8.69c-.65.218-1.393.076-1.903-.434-.72-.72-.72-1.884 0-2.604.719-.719 1.884-.719 2.604 0 .539.541.67 1.337.396 1.983l2.69 2.687c.65-.218 1.393-.076 1.903.434.72.72.72 1.884 0 2.604-.719.719-1.884.719-2.604 0-.539-.541-.67-1.337-.396-1.983l-2.69-2.687c.65.218 1.393.076 1.903.434.72.72.72 1.884 0 2.604-.719.719-1.884.719-2.604 0-.539-.541-.67-1.337-.396-1.983l-2.69-2.687c.65.218 1.393.076 1.903.434.51.51.66 1.249.438 1.884l-2.76-2.76c-.78-.78-.78-2.05 0-2.83L9.37.298c.78-.78 2.05-.78 2.83 0l10.48 10.48c.78.78.78 2.05 0 2.83l-10.48 10.48c-.78.78-2.05.78-2.83 0L1.546 16.27c-.78-.78-.78-2.05 0-2.83l7.82-7.82c.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83l-6.4 6.4c-.78.78-.78 2.05 0 2.83l7.82 7.82c.78.78 2.05.78 2.83 0l10.48-10.48c.78-.78.78-2.05 0-2.83z"/>
      </svg>
    )
  }
];

export default function SkillsPage() {
  const [animatedValues, setAnimatedValues] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations when component mounts
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate each skill's progress bar
      techSkills.forEach((skill, index) => {
        const duration = 2000 + (index * 200); // Stagger animations
        const startTime = Date.now() + (index * 100);

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const currentValue = Math.floor(progress * skill.level);

          setAnimatedValues(prev => ({
            ...prev,
            [skill.name]: currentValue
          }));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        setTimeout(() => requestAnimationFrame(animate), index * 100);
      });
    }
  }, [isVisible]);

  return (
    <div className="min-h-screen bg-[#f8f6f0]">
      <Sidebar />
      <main className="pl-60 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-bold text-black">Skills</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Find courses, partners, etc."
                  className="pl-10 pr-4 py-2 w-80 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition-colors">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5v-5a7.5 7.5 0 0115 0v5z" />
                </svg>
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Skills Section */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 p-6 rounded-2xl shadow-sm border border-yellow-200/30">
              <h2 className="text-2xl font-bold text-black mb-6">Technical Skills</h2>
              <div className="space-y-4">
                {techSkills.map((skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-white/50 border border-gray-100/50 group"
                  >
                    {/* Icon */}
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      {skill.icon}
                    </div>

                    {/* Skill Info */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-black">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-600">{skill.tag}</span>
                          <span className="text-sm font-bold text-gray-600">
                            {animatedValues[skill.name] !== undefined ? animatedValues[skill.name] : 0}%
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-300/50 rounded-full h-3 overflow-hidden relative">
                        {/* Lightsaber glow effect */}
                        <div
                          className="h-3 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                          style={{
                            width: `${animatedValues[skill.name] !== undefined ? animatedValues[skill.name] : 0}%`,
                            background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
                            boxShadow: '0 0 10px rgba(251, 191, 36, 0.5), 0 0 20px rgba(251, 191, 36, 0.3), 0 0 30px rgba(251, 191, 36, 0.1)'
                          }}
                        >
                          {/* Inner glow */}
                          <div
                            className="absolute inset-0 rounded-full opacity-60"
                            style={{
                              background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.1) 100%)'
                            }}
                          />
                          {/* Core light */}
                          <div
                            className="absolute top-1/2 left-0 w-2 h-1/2 -translate-y-1/2 rounded-full opacity-90"
                            style={{
                              background: 'linear-gradient(90deg, #fef3c7 0%, #fbbf24 100%)',
                              boxShadow: '0 0 6px rgba(254, 243, 199, 0.8)'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills Section */}
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Soft Skills</h3>
              <ul className="space-y-2 mb-8">
                {softSkills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-gray-700">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>

              {/* Tools & Platforms */}
              <div>
                <h3 className="text-xl font-bold text-black mb-4">Tools & Platforms</h3>
                <div className="grid grid-cols-3 gap-3">
                  {toolsPlatforms.map((tool, index) => (
                    <div
                      key={tool.name}
                      className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 aspect-square rounded-xl flex items-center justify-center flex-col gap-2 hover:from-yellow-100 hover:to-yellow-200/50 transition-all duration-300 shadow-sm border border-yellow-200/30 hover:shadow-md"
                    >
                      {tool.icon}
                      <div className="text-xs font-medium text-gray-700">{tool.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


