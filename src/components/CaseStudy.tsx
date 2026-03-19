"use client";
import { motion } from "framer-motion";
import { CalendarSync, CreditCard, Database, CheckCircle2 } from "lucide-react";

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 bg-transparent text-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-cyan-400 font-semibold mb-3">Featured Case Study</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Mikka Tattoo Platform</h3>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl">
            A production-grade, vertical SaaS built from the ground up to solve the operational nightmare of tattoo studios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Tech Spec Card */}
          <div className="bg-[#0b1426]/60 backdrop-blur-md border border-slate-800/60 rounded-2xl p-8 shadow-xl">
            <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Database className="text-cyan-400" />
              Engineering Highlights
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1"><CalendarSync className="text-emerald-400" size={20} /></div>
                <div>
                  <strong className="block text-white">Real-Time Availability Engine</strong>
                  <span className="text-slate-400 text-sm">Bi-directional sync with Google Calendar API (FreeBusy endpoint). Outcome: 0% Double booking rate.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1"><CreditCard className="text-purple-400" size={20} /></div>
                <div>
                  <strong className="block text-white">International Payments</strong>
                  <span className="text-slate-400 text-sm">Custom checkout flows via Stripe Connect with robust webhook validation.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1"><Database className="text-amber-400" size={20} /></div>
                <div>
                  <strong className="block text-white">Double-Entry Loyalty Ledger</strong>
                  <span className="text-slate-400 text-sm">PostgreSQL ACID transactions to manage "Mikka Coins" (minting and burning points securely).</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Results Card */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="border-l-2 border-cyan-500 pl-6">
                <h4 className="text-4xl font-bold mb-2">100%</h4>
                <p className="text-slate-400">Uptime on Vercel Edge Network</p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-6">
                <h4 className="text-4xl font-bold mb-2">Zero</h4>
                <p className="text-slate-400">Scheduling Conflicts</p>
              </div>
              <div className="border-l-2 border-purple-500 pl-6">
                <h4 className="text-4xl font-bold mb-2">Sub-100ms</h4>
                <p className="text-slate-400">Database read latency globally</p>
              </div>
            </div>
            
            <a href="https://mikkatattoo.com" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
              View Live Platform <CheckCircle2 size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
