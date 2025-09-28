"use client";
import Sidebar from "@/components/Sidebar";

const flipCardStyles = `
  .flip-card-container {
    width: 100%;
    height: 220px;
    margin-bottom: 1rem;
    position: relative;
  }

  .flip-card {
    perspective: 1000px;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    border-radius: 0.5rem;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    padding: 1.25rem;
    box-sizing: border-box;
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }
`;

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f8f6f0]">
      <style jsx>{flipCardStyles}</style>
      <Sidebar />
      <main className="pl-60 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-black">Projects</h1>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium">
              View All
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Projects */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-black mb-6">Featured Projects</h2>
              <div className="space-y-4">
                {/* E-commerce Platform */}
                <div className="flip-card-container">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front bg-white border border-gray-200 rounded-lg p-4 flex flex-col h-full hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-black text-sm">E-commerce Platform</h3>
                            <p className="text-xs text-gray-600">Satoe I cmst</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-xs text-gray-500">May 2012 - Nov 2022</p>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">In progress</span>
                        </div>
                        <div className="flex gap-2 mt-auto">
                          <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors flex-1">Live Demo</button>
                          <button className="px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 transition-colors flex-1 flex items-center justify-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Code
                          </button>
                        </div>
                      </div>
                      <div className="flip-card-back bg-blue-50 border border-blue-200 rounded-lg p-4 flex flex-col h-full">
                        <h3 className="font-bold text-black text-sm mb-2">E-commerce Platform</h3>
                        <p className="text-xs text-gray-600 mb-2">Full-stack e-commerce solution with React, Node.js, and MongoDB.</p>
                        <div className="flex gap-1 mb-2">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">React</span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Node.js</span>
                        </div>
                        <div className="flex gap-1 mt-auto">
                          <button className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 flex-1">Demo</button>
                          <button className="px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 flex-1">Code</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Dashboard */}
                <div className="flip-card-container">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front bg-white border border-gray-200 rounded-lg p-4 flex flex-col h-full hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-black text-sm">Social Media Dashboard</h3>
                            <p className="text-xs text-gray-600">Inutite JavaScript Dev.</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-xs text-gray-500">May 2012 - Nov 2022</p>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Completed</span>
                        </div>
                        <div className="flex gap-2 mt-auto">
                          <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors flex-1">Live Demo</button>
                          <button className="px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 transition-colors flex-1 flex items-center justify-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Code
                          </button>
                        </div>
                      </div>
                      <div className="flip-card-back bg-blue-50 border border-blue-200 rounded-lg p-4 flex flex-col h-full">
                        <h3 className="font-bold text-black text-sm mb-2">Social Media Dashboard</h3>
                        <p className="text-xs text-gray-600 mb-2">Real-time social media analytics with multiple platform integration.</p>
                        <div className="flex gap-1 mb-2">
                          <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded">React</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">D3.js</span>
                        </div>
                        <div className="flex gap-1 mt-auto">
                          <button className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 flex-1">Demo</button>
                          <button className="px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 flex-1">Code</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Node.js */}
                <div className="flip-card-container">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front bg-white border border-gray-200 rounded-lg p-4 flex flex-col h-full hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-black text-sm">Node.js</h3>
                            <p className="text-xs text-gray-600">Imdalie JavaScript MainNerance</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-xs text-gray-500">May 2013 - Nov 2022</p>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Completed</span>
                        </div>
                        <div className="flex gap-2 mt-auto">
                          <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors flex-1">Live Demo</button>
                          <button className="px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 transition-colors flex-1 flex items-center justify-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Code
                          </button>
                        </div>
                      </div>
                      <div className="flip-card-back bg-green-50 border border-green-200 rounded-lg p-4 flex flex-col h-full">
                        <h3 className="font-bold text-black text-sm mb-2">Node.js Backend</h3>
                        <p className="text-xs text-gray-600 mb-2">RESTful API server with authentication and database integration.</p>
                        <div className="flex gap-1 mb-2">
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Node.js</span>
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Express</span>
                        </div>
                        <div className="flex gap-1 mt-auto">
                          <button className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 flex-1">Demo</button>
                          <button className="px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 flex-1">Code</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Chatbot Integration */}
                <div className="flip-card-container">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front bg-white border border-gray-200 rounded-lg p-4 flex flex-col h-full hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4-4-4z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-black text-sm">AI Chatbot Integration</h3>
                            <p className="text-xs text-gray-600">Pro Property Mainteance</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-xs text-gray-500">May 2011 - Nov 2022</p>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Completed</span>
                        </div>
                        <div className="flex gap-2 mt-auto">
                          <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors flex-1">Live Demo</button>
                          <button className="px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 transition-colors flex-1 flex items-center justify-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Code
                          </button>
                        </div>
                      </div>
                      <div className="flip-card-back bg-purple-50 border border-purple-200 rounded-lg p-4 flex flex-col h-full">
                        <h3 className="font-bold text-black text-sm mb-2">AI Chatbot Integration</h3>
                        <p className="text-xs text-gray-600 mb-2">Intelligent chatbot with natural language processing and context awareness.</p>
                        <div className="flex gap-1 mb-2">
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Python</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">NLP</span>
                        </div>
                        <div className="flex gap-1 mt-auto">
                          <button className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 flex-1">Demo</button>
                          <button className="px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 flex-1">Code</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Projects */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Personal Projects</h2>
              <div className="space-y-4">
                {/* JavaScript */}
                <div className="flip-card-container">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front bg-white border border-gray-200 rounded-lg p-4 flex flex-col h-full hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-black text-sm">JavaScript</h3>
                            <p className="text-xs text-gray-600">Indie Jascicript Experiance</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-xs text-gray-500">May 2013 - Nov 2022</p>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Completed</span>
                        </div>
                        <div className="flex gap-2 mt-auto">
                          <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors flex-1">Live Demo</button>
                          <button className="px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 transition-colors flex-1 flex items-center justify-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Code
                          </button>
                        </div>
                      </div>
                      <div className="flip-card-back bg-orange-50 border border-orange-200 rounded-lg p-4 flex flex-col h-full">
                        <h3 className="font-bold text-black text-sm mb-2">JavaScript Development</h3>
                        <p className="text-xs text-gray-600 mb-2">Interactive web applications and dynamic user interfaces.</p>
                        <div className="flex gap-1 mb-2">
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">JavaScript</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">ES6+</span>
                        </div>
                        <div className="flex gap-1 mt-auto">
                          <button className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 flex-1">Demo</button>
                          <button className="px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 flex-1">Code</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recipe Finder App */}
                <div className="flip-card-container">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front bg-white border border-gray-200 rounded-lg p-4 flex flex-col h-full hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-black text-sm">Recipe Finder App</h3>
                            <p className="text-xs text-gray-600">Juddie Javascript Dev.</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-xs text-gray-500">May 2012 - Nov 2022</p>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Completed</span>
                        </div>
                        <div className="flex gap-2 mt-auto">
                          <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors flex-1">Live Demo</button>
                          <button className="px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 transition-colors flex-1 flex items-center justify-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Code
                          </button>
                        </div>
                      </div>
                      <div className="flip-card-back bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex flex-col h-full">
                        <h3 className="font-bold text-black text-sm mb-2">Recipe Finder App</h3>
                        <p className="text-xs text-gray-600 mb-2">Smart recipe discovery with ingredient-based search and nutritional info.</p>
                        <div className="flex gap-1 mb-2">
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">JavaScript</span>
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">API</span>
                        </div>
                        <div className="flex gap-1 mt-auto">
                          <button className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 flex-1">Demo</button>
                          <button className="px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 flex-1">Code</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* To-Do List with Reminder */}
                <div className="flip-card-container">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front bg-white border border-gray-200 rounded-lg p-4 flex flex-col h-full hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-black text-sm">To-Do List with Reminder</h3>
                            <p className="text-xs text-gray-600">Juddie Jsucicript Marritsance</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-xs text-gray-500">May 2013 - Nov 2022</p>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Completed</span>
                        </div>
                        <div className="flex gap-2 mt-auto">
                          <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors flex-1">Live Demo</button>
                          <button className="px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 transition-colors flex-1 flex items-center justify-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Code
                          </button>
                        </div>
                      </div>
                      <div className="flip-card-back bg-teal-50 border border-teal-200 rounded-lg p-4 flex flex-col h-full">
                        <h3 className="font-bold text-black text-sm mb-2">To-Do List with Reminders</h3>
                        <p className="text-xs text-gray-600 mb-2">Smart task management with reminder notifications and priority levels.</p>
                        <div className="flex gap-1 mb-2">
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">JavaScript</span>
                          <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Notifications</span>
                        </div>
                        <div className="flex gap-1 mt-auto">
                          <button className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 flex-1">Demo</button>
                          <button className="px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 flex-1">Code</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Group Projects */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Group Projects</h2>
              <div className="space-y-4">
                {/* Collaborative Code Editor */}
                <div className="flip-card-container">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front bg-white border border-gray-200 rounded-lg p-4 flex flex-col h-full hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-black text-sm">Sellaborative Code Editor</h3>
                            <p className="text-xs text-gray-500">May 2012 - Nov 2022</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Todo All</span>
                        </div>
                        <div className="flex gap-2 mt-auto">
                          <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors flex-1">Live Demo</button>
                          <button className="px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 transition-colors flex-1 flex items-center justify-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Code
                          </button>
                        </div>
                      </div>
                      <div className="flip-card-back bg-indigo-50 border border-indigo-200 rounded-lg p-4 flex flex-col h-full">
                        <h3 className="font-bold text-black text-sm mb-2">Collaborative Code Editor</h3>
                        <p className="text-xs text-gray-600 mb-2">Real-time collaborative code editor with live syntax highlighting.</p>
                        <div className="flex gap-1 mb-2">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">WebSocket</span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Monaco</span>
                        </div>
                        <div className="flex gap-1 mt-auto">
                          <button className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 flex-1">Demo</button>
                          <button className="px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 flex-1">Code</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Collaborative Code Editor 2 */}
                <div className="flip-card-container">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front bg-white border border-gray-200 rounded-lg p-4 flex flex-col h-full hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-black text-sm">Collaborative Code Editor</h3>
                            <p className="text-xs text-gray-600">Pro Property Bugim gits</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-xs text-gray-500">May 2012 - Nov 2022</p>
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Todo All</span>
                        </div>
                        <div className="flex gap-2 mt-auto">
                          <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors flex-1">Live Demo</button>
                          <button className="px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 transition-colors flex-1 flex items-center justify-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Code
                          </button>
                        </div>
                      </div>
                      <div className="flip-card-back bg-cyan-50 border border-cyan-200 rounded-lg p-4 flex flex-col h-full">
                        <h3 className="font-bold text-black text-sm mb-2">Advanced Code Editor</h3>
                        <p className="text-xs text-gray-600 mb-2">Feature-rich code editor with advanced debugging tools.</p>
                        <div className="flex gap-1 mb-2">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">React</span>
                          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">WebRTC</span>
                        </div>
                        <div className="flex gap-1 mt-auto">
                          <button className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 flex-1">Demo</button>
                          <button className="px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 flex-1">Code</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Online Learning Gamification */}
                <div className="flip-card-container">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front bg-white border border-gray-200 rounded-lg p-4 flex flex-col h-full hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 8a9 9 0 110-18 9 9 0 010 18z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-black text-sm">Online Learning Gamification</h3>
                            <p className="text-xs text-gray-500">May 2012 - Nov 2032</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Todo All</span>
                        </div>
                        <div className="flex gap-2 mt-auto">
                          <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors flex-1">Live Demo</button>
                          <button className="px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 transition-colors flex-1 flex items-center justify-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Code
                          </button>
                        </div>
                      </div>
                      <div className="flip-card-back bg-rose-50 border border-rose-200 rounded-lg p-4 flex flex-col h-full">
                        <h3 className="font-bold text-black text-sm mb-2">Learning Gamification Platform</h3>
                        <p className="text-xs text-gray-600 mb-2">Interactive learning platform with game mechanics and progress tracking.</p>
                        <div className="flex gap-1 mb-2">
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">React</span>
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">GameDev</span>
                        </div>
                        <div className="flex gap-1 mt-auto">
                          <button className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 flex-1">Demo</button>
                          <button className="px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 flex-1">Code</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 bg-pink-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-300 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pink-800">25+ projects</h3>
                  <p className="text-pink-700">completed</p>
                </div>
              </div>
              <div className="w-32 h-20 bg-pink-300 rounded-lg flex items-end justify-center pb-2">
                <svg className="w-24 h-12 text-pink-400" fill="currentColor" viewBox="0 0 100 40">
                  <path d="M0,40 Q25,10 50,25 T100,20 L100,40 Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
