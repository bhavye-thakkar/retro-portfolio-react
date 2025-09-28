"use client";
import Link from "next/link";
import { Home, Wrench, FolderGit2, Trophy, Phone, PanelsTopLeft } from "lucide-react";

export default function Sidebar() {
  const items = [
    { href: "/", label: "Home", icon: Home },
    { href: "/skills", label: "Skills", icon: Wrench },
    { href: "/projects", label: "Projects", icon: FolderGit2 },
    { href: "/hackathons", label: "Hackathons", icon: Trophy },
    { href: "/contact", label: "Contact", icon: Phone },
  ];
  return (
    <aside className="fixed left-0 top-0 h-screen w-60 bg-[var(--sidebar)] text-[var(--sidebar-foreground)] p-4 flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-3">
        <PanelsTopLeft size={22} />
        <span className="font-bold text-xl">JEDI</span>
      </div>
      <nav className="flex-1 flex flex-col gap-2">
        {items.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} prefetch className="group">
            <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-[var(--sidebar-accent)] hover:bg-[var(--sidebar-primary)/10]">
              <Icon size={18} />
              <span className="font-bold">{label}</span>
            </div>
          </Link>
        ))}
      </nav>
      <div className="mt-auto text-xs opacity-70">© {new Date().getFullYear()} Your Name</div>
    </aside>
  );
}


