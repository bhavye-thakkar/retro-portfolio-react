"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="pl-60 p-6">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold">Trainer info</h1>
          <div className="hidden sm:flex items-center gap-2">
            <div className="h-10 w-72 bg-white" />
            <div className="size-10 bg-[var(--card)]" />
            <div className="size-10 bg-[var(--card)]" />
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-6">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
                <div className="bg-[var(--accent)] p-4 flex items-center justify-center">
                  <div className="aspect-square w-[180px] overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=400&auto=format&fit=crop"
                      alt="profile"
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-3xl font-extrabold">Hillary Bale</h2>
                      <p className="opacity-80">hill.bale@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href="mailto:hill.bale@gmail.com" className="size-9 grid place-items-center bg-white">
                        <Mail size={16} />
                      </a>
                      <a href="https://github.com/" target="_blank" className="size-9 grid place-items-center bg-white">
                        <Github size={16} />
                      </a>
                      <a href="https://linkedin.com/" target="_blank" className="size-9 grid place-items-center bg-white">
                        <Linkedin size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      ["10+", "experience"],
                      ["#1", "on platform"],
                      ["5 y", "of teaching"],
                      ["12", "courses"],
                    ].map(([k, v]) => (
                      <div key={k as string} className="bg-white p-3">
                        <div className="text-2xl font-extrabold leading-none">{k}</div>
                        <div className="opacity-80">{v}</div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 opacity-90">
                    I'm a JavaScript trainer with over 10 years of experience in the software development industry. Passionated about teaching how to code and helping them develop their skills.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button className="bg-[var(--accent)] text-[var(--accent-foreground)]">Request session</Button>
                    <Button variant="secondary" asChild>
                      <Link href="/projects">Portfolio</Link>
                    </Button>
                  </div>
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
                <div className="mt-4 h-24 bg-pink-200" />
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