"use client";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Featured = [
  { title: "AI for Good Challenge", role: "Team Lead", note: "Winner" },
  { title: "Future of Web Summit", role: "Finalist", note: "" },
  { title: "Civic Tech Jam", role: "Participant", note: "" },
];

const Participations = [
  { title: "JacipbJancarion", role: "Mentor" },
  { title: "Recipe Finder Summit", role: "Mobile App Dev" },
  { title: "Open Source Sprint", role: "Contributor" },
];

export default function HackathonsPage() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="pl-60 p-6">
        <h1 className="text-5xl font-extrabold mb-6">Hackathons</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-extrabold">Featured Projects</h2>
              </div>
              <div className="space-y-4">
                {Featured.map((f) => (
                  <div key={f.title} className="bg-[var(--accent)] p-4 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xl">{f.title}</div>
                      <div className="opacity-80">{f.role}</div>
                    </div>
                    {f.note ? <Badge className="bg-pink-200 text-black border-black">{f.note}</Badge> : null}
                  </div>
                ))}
                <div className="bg-pink-200 p-4 font-bold">15+ hackathons attended</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-extrabold">Participations</h2>
                <span className="px-3 py-1 bg-[var(--accent)]">View All</span>
              </div>
              <div className="space-y-4">
                {Participations.map((p) => (
                  <div key={p.title} className="p-4 bg-[var(--card)] border border-black">
                    <div className="font-bold">{p.title}</div>
                    <div className="opacity-80">{p.role}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}