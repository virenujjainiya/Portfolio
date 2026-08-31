import React, { useState } from 'react';
import { Mail, Phone, MapPin, GraduationCap, Copy, Check, ArrowUpRight } from 'lucide-react';

export default function ContactBento({ personal, education }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Contact card (7 cols) */}
      <div className="md:col-span-7 bento-card rounded-xl p-6 flex flex-col justify-between space-y-6">
        <div>
          <span className="text-xs font-mono text-blue-400 font-medium uppercase tracking-wider">
            Let's Collaborate
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-white mt-1">Get in touch</h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
            Interested in building high-performance SaaS products, full-stack architectures, or modernizing existing platforms? Feel free to reach out.
          </p>
        </div>

        <div className="space-y-2.5 font-mono text-xs">
          <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
            <div className="flex items-center gap-2.5 text-zinc-300">
              <Mail size={15} className="text-blue-400" />
              <span>{personal.email}</span>
            </div>
            <button
              onClick={copyEmail}
              className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors flex items-center gap-1 text-[11px]"
            >
              {copiedEmail ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
            <div className="flex items-center gap-2.5 text-zinc-300">
              <Phone size={15} className="text-blue-400" />
              <span>+91 {personal.phone}</span>
            </div>
            <button
              onClick={copyPhone}
              className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors flex items-center gap-1 text-[11px]"
            >
              {copiedPhone ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Education & Location Card (5 cols) */}
      <div className="md:col-span-5 bento-card rounded-xl p-6 flex flex-col justify-between space-y-6">
        <div>
          <span className="text-xs font-mono text-zinc-500 font-medium uppercase tracking-wider">
            Background & Credentials
          </span>
          <div className="mt-4 space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
                <GraduationCap size={16} className="text-blue-400" />
                <span>Bachelor of Engineering</span>
              </div>
              <p className="text-xs text-zinc-400 pl-6">
                Computer Engineering
              </p>
              <p className="text-[11px] text-zinc-500 font-mono pl-6">
                Government Engineering College, Rajkot (2018 — 2022)
              </p>
            </div>

            <div className="space-y-1 pt-3 border-t border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
                <MapPin size={16} className="text-blue-400" />
                <span>Location</span>
              </div>
              <p className="text-xs text-zinc-400 pl-6">
                Rajkot, Gujarat, India
              </p>
              <p className="text-[11px] text-zinc-500 font-mono pl-6">
                Available for Remote & Relocation
              </p>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>Languages: English, Hindi, Gujarati</span>
        </div>
      </div>
    </div>
  );
}
