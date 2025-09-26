"use client";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const tech = [
  { name: "JavaScript", level: 95, tag: "Expert" },
  { name: "React.js", level: 80, tag: "Advanced" },
  { name: "Node.js", level: 70, tag: "Intermediate" },
  { name: "Python", level: 70, tag: "Expert" },
  { name: "HTML/CSS", level: 40, tag: "Beginner" },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="pl-60 p-6">
        <h1 className="text-5xl font-extrabold mb-6">Skills</h1>
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">
              <div className="bg-[var(--card)]">
                <div className="p-4 border-b">
                  <h2 className="text-3xl font-extrabold">Technical Skills</h2>
                </div>
                <div className="p-4 lg:grid lg:grid-cols-[1fr_auto] lg:gap-6">
                  <div className="bg-[var(--accent)] p-4">
                    <div className="space-y-5">
                      {tech.map((t) => (
                        <div key={t.name} className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
                          <div className="size-7 bg-[var(--card)]" />
                          <div className="min-w-0">
                            <div className="font-bold truncate">{t.name}</div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm opacity-80">{t.tag}</span>
                              <div className="flex-1">
                                <Progress value={t.level} className="h-3" />
                              </div>
                            </div>
                          </div>
                          <div className="font-bold tabular-nums">{t.level}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 border-t pt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-7 bg-[var(--card)]" />
                        <div>HTML/CSS</div>
                      </div>
                      <div className="font-bold">90%</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-7 bg-[var(--card)]" />
                        <div>Python</div>
                      </div>
                      <div className="font-bold">40%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-3xl font-extrabold mb-3">Soft Skills</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Communication</li>
                      <li>Problem-Solving gits</li>
                      <li>Teamwork</li>
                      <li>Time Management</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-3xl font-extrabold mb-3">Tools & Platforms</h3>
                    <div className="grid grid-cols-4 gap-3">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="aspect-square bg-[var(--accent)]" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}