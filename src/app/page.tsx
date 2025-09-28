"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

const AnimatedGraph = () => {
  const [animated, setAnimated] = useState(false);
  const [drawProgress, setDrawProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animated) {
      const duration = 3000; // 3 seconds to draw the entire graph
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setDrawProgress(progress);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [animated]);

  // Create realistic data points with ups and downs
  const createRealisticData = (width: number, height: number) => {
    const dataPoints = [];
    const segments = 40; // More segments for smoother line
    
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * width;
      const progress = i / segments;
      
      // Create realistic trend with multiple waves and noise
      const baseY = height * 0.5;
      const trend = Math.sin(progress * Math.PI * 2) * 0.3; // Main trend
      const wave1 = Math.sin(progress * Math.PI * 6) * 0.15; // High frequency wave
      const wave2 = Math.sin(progress * Math.PI * 12) * 0.08; // Very high frequency
      const noise = (Math.random() - 0.5) * 0.1; // Random noise
      
      const y = baseY + (trend + wave1 + wave2 + noise) * height * 0.4;
      dataPoints.push({ x, y });
    }
    
    return dataPoints;
  };

  const dataPoints = createRealisticData(200, 60);
  const visiblePoints = dataPoints.slice(0, Math.floor(drawProgress * dataPoints.length));
  
  const pathData = visiblePoints.length > 1 
    ? `M ${visiblePoints[0].x},${visiblePoints[0].y} L ${visiblePoints.slice(1).map(p => `${p.x},${p.y}`).join(' L ')}`
    : '';

  return (
    <div className="bg-pink-200 rounded-lg p-4 h-24 relative overflow-hidden">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 200 60" 
        className={`transition-opacity duration-500 ${
          animated ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Background grid lines for reference */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#fbb6ce" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Main graph line */}
        <path
          d={pathData}
          stroke="black"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-sm"
        />
        
        {/* Data points */}
        {visiblePoints.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="1.5"
            fill="black"
            className="drop-shadow-sm"
          />
        ))}
        
        {/* Drawing progress indicator */}
        {animated && drawProgress < 1 && (
          <circle
            cx={visiblePoints[visiblePoints.length - 1]?.x || 0}
            cy={visiblePoints[visiblePoints.length - 1]?.y || 30}
            r="3"
            fill="red"
            className="animate-pulse"
          />
        )}
      </svg>
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="pl-60 p-6">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold">Trainer info</h1>
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Box with Magnifying Glass */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search courses, trainers, etc." 
                className="h-10 w-72 pl-10 pr-4 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg 
                className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Bell Icon */}
            <button className="size-10 bg-[var(--card)] rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5v-5a7.5 7.5 0 0115 0v5z" />
              </svg>
            </button>
            
            {/* CV Button with Download */}
            <div className="relative group">
              <button className="size-10 bg-[var(--card)] rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-sm font-medium text-gray-700">CV</span>
              </button>
              
              {/* CV Dropdown Menu */}
              <div className="absolute right-0 top-12 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <button 
                    onClick={() => window.open('/cv.pdf', '_blank')}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View CV
                  </button>
                  <button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/cv.pdf';
                      link.download = 'Hillary_Bale_CV.pdf';
                      link.click();
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-6">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Profile Info Box */}
                <div className="bg-[var(--accent)] p-6 rounded-lg">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-3xl font-extrabold">Hillary Bale</h2>
                      <p className="opacity-80 text-lg">hill.bale@gmail.com</p>
                      <p className="opacity-70 mt-2">JavaScript Trainer & Developer</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href="mailto:hill.bale@gmail.com" className="size-9 grid place-items-center bg-white rounded">
                        <Mail size={16} />
                      </a>
                      <a href="https://github.com/" target="_blank" className="size-9 grid place-items-center bg-white rounded">
                        <Github size={16} />
                      </a>
                      <a href="https://linkedin.com/" target="_blank" className="size-9 grid place-items-center bg-white rounded">
                        <Linkedin size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    ["10+", "experience"],
                    ["#1", "on platform"],
                    ["5 y", "of teaching"],
                    ["12", "courses"],
                  ].map(([k, v]) => (
                    <div key={k as string} className="bg-white p-4 rounded-lg border">
                      <div className="text-2xl font-extrabold leading-none">{k}</div>
                      <div className="opacity-80 text-sm">{v}</div>
                    </div>
                  ))}
                </div>

                {/* Bio */}
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="font-bold text-lg mb-2">About</h3>
                  <p className="opacity-90">
                    I'm a JavaScript trainer with over 10 years of experience in the software development industry. Passionated about teaching how to code and helping them develop their skills.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-[var(--accent)] text-[var(--accent-foreground)]">Request session</Button>
                  <Button variant="secondary" asChild>
                    <Link href="/projects">Portfolio</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-3xl font-extrabold mb-3">Work experience</h3>
              <div className="space-y-3">
                {[
                  ["Senior JavaScript Developer", "Firecracker Inc.", "May 2022 – present"],
                  ["Senior JavaScript Developer", "Pro Property Maintenance", "May 2013 – Nov 2022"],
                  ["Middle JavaScript Developer", "Cut Rite Lawn Care", "May 2012 – Nov 2012"],
                ].map(([r, c, d]) => (
                  <div key={r as string} className="bg-white p-4">
                    <div className="font-bold">{r}</div>
                    <div className="opacity-80">{c}</div>
                    <div className="opacity-80">{d}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-4xl font-extrabold">Students reviews</h2>
            <Button variant="secondary" asChild>
              <Link href="/projects">View all</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Card className="lg:col-span-1">
              <CardContent className="p-4">
                <div className="text-3xl font-extrabold">4.4 / 5.0</div>
                <div className="opacity-80">127 rates from students.</div>
                <div className="mt-4">
                  <AnimatedGraph />
                </div>
                <Button variant="secondary" className="mt-3">See stats</Button>
              </CardContent>
            </Card>

            {[
              ["Nicol M.", "4.6", "The progress I have made working with her is impressive."],
              ["Stephanie W.", "4.7", "I felt like I learned nuances in JS that I didn't know I was missing."],
              ["Vane F.", "4.3", "Clear teaching, hands-on exercises, and great energy."],
            ].map(([name, score, text]) => (
              <Card key={name as string}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold">{name}</div>
                    <div className="bg-white px-2 py-1">{score}</div>
                  </div>
                  <p className="opacity-90">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}