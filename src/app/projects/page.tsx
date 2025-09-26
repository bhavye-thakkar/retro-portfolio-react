"use client";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent } from "@/components/ui/card";

const Item = ({ title, status }: { title: string; status: string }) => (
  <div className="flex items-center justify-between py-3">
    <div className="font-bold">{title}</div>
    <span className="px-2 py-1 bg-pink-200">{status}</span>
  </div>
);

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="pl-60 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-5xl font-extrabold">Projects</h1>
          <button className="px-3 py-2 bg-[var(--accent)]">View All</button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {name: 'Featured Projects', color: 'bg-yellow-200', items: [['E-commerce Platform','In Progress'],['Social Media Dashboard','In Progress'],['AI Chatbot Integration','Planned']]},
            {name: 'Personal Projects', color: 'bg-white', items: [['Recipe Finder App','Completed'],['To-Do with Reminders','Completed'],['JS Utilities','Ongoing']]},
            {name: 'Group Projects', color: 'bg-white', items: [['Collab Code Editor','Ongoing'],['Learning Gamification','Ongoing'],['Hackathon Tools','Ongoing']]},
          ].map((col, idx)=> (
            <Card key={col.name} className="overflow-hidden">
              <CardContent className={`p-4 ${col.color}`}>
                <h2 className="text-3xl font-extrabold mb-3">{col.name}</h2>
                <div className="divide-y">
                  {col.items.map(([t,s]) => (
                    <Item key={t as string} title={t as string} status={s as string} />
                  ))}
                </div>
                {idx === 0 ? (
                  <div className="mt-4 bg-pink-200 p-4 font-bold">25+ projects completed</div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}