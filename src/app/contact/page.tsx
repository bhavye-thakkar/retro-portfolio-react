"use client";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, ArrowLeft, Bell, User } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="pl-60 p-6">
        <div className="mb-4 flex items-center justify-between">
          <button className="size-10 grid place-items-center bg-[var(--card)]">
            <ArrowLeft size={18} />
          </button>
          <div className="flex items-center gap-3">
            <Input placeholder="Find courses, partners, etc." className="h-10 w-72 bg-white" />
            <button className="size-10 grid place-items-center bg-[var(--card)]">
              <Bell size={18} />
            </button>
            <div className="size-10 bg-[var(--card)]" />
          </div>
        </div>
        <h1 className="text-6xl font-extrabold mb-6">Contact</h1>
        <Card className="bg-[var(--card)] max-w-6xl mx-auto">
          <CardContent className="p-4 sm:p-6">
            <div className="p-4 sm:p-6 bg-[var(--popover)]">
              <h2 className="text-3xl font-extrabold mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="space-y-4 pr-6 lg:pr-8 lg:border-r">
                  <div className="flex items-center gap-3 text-lg">
                    <Mail size={18} />
                    <span>your.email@example.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <Mail size={18} />
                    <span>your.email@example.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <Phone size={18} />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <User size={18} />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <MapPin size={18} />
                    <span>New York, NY</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <Linkedin size={18} />
                    <span>Linkedin</span>
                  </div>
                  <div className="inline-block bg-pink-200 px-4 py-3 font-bold">Available for new opportunities!</div>
                </div>
                <div className="pl-6 lg:pl-8">
                  <h3 className="text-2xl font-extrabold mb-4">Send a Message</h3>
                  <div className="space-y-4">
                    <Input placeholder="Your Name" className="h-12 text-lg bg-white" />
                    <Input type="email" placeholder="Your Email" className="h-12 text-lg bg-white" />
                    <Textarea placeholder="Your Message" rows={6} className="text-lg bg-white" />
                    <Button className="h-12 text-xl bg-[var(--accent)] text-[var(--accent-foreground)] w-full sm:w-auto">Send Message</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}