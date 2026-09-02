import React, { useState } from 'react';
import { Mail, Phone, MapPin, GraduationCap, Copy, Check } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import EditableText from './EditableText';

export default function ContactBento() {
  const { data, updatePersonal } = usePortfolio();
  const { personal, education } = data;
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
      <div className="md:col-span-7 bento-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
        <div>
          <span className="text-xs font-mono text-teal-700 font-bold uppercase tracking-wider">
            Let's Collaborate
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 mt-1">Get in touch</h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed font-normal">
            Interested in building high-performance SaaS products, full-stack architectures, or modernizing existing platforms? Feel free to reach out.
          </p>
        </div>

        <div className="space-y-2.5 font-mono text-xs">
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-teal-400 hover:bg-teal-50/20 transition-all shadow-2xs">
            <div className="flex items-center gap-2.5 text-zinc-800 font-medium">
              <Mail size={16} className="text-teal-600" />
              <EditableText
                value={personal.email}
                onSave={(val) => updatePersonal('email', val)}
                className="font-semibold text-zinc-900"
              />
            </div>
            <button
              onClick={copyEmail}
              className="px-3 py-1 rounded-md bg-white border border-zinc-200 hover:border-teal-500 hover:text-teal-700 text-zinc-700 transition-all flex items-center gap-1 text-[11px] shadow-2xs font-semibold"
            >
              {copiedEmail ? <Check size={12} className="text-teal-600" /> : <Copy size={12} />}
              <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-teal-400 hover:bg-teal-50/20 transition-all shadow-2xs">
            <div className="flex items-center gap-2.5 text-zinc-800 font-medium">
              <Phone size={16} className="text-teal-600" />
              <span className="text-zinc-500">+91</span>
              <EditableText
                value={personal.phone}
                onSave={(val) => updatePersonal('phone', val)}
                className="font-semibold text-zinc-900"
              />
            </div>
            <button
              onClick={copyPhone}
              className="px-3 py-1 rounded-md bg-white border border-zinc-200 hover:border-teal-500 hover:text-teal-700 text-zinc-700 transition-all flex items-center gap-1 text-[11px] shadow-2xs font-semibold"
            >
              {copiedPhone ? <Check size={12} className="text-teal-600" /> : <Copy size={12} />}
              <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Education & Location Card (5 cols) */}
      <div className="md:col-span-5 bento-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
        <div>
          <span className="text-xs font-mono text-zinc-500 font-bold uppercase tracking-wider">
            Background & Credentials
          </span>
          <div className="mt-4 space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-950">
                <GraduationCap size={17} className="text-teal-600" />
                <span>{education?.[0]?.degree || 'Bachelor of Engineering'}</span>
              </div>
              <p className="text-xs text-zinc-600 font-medium pl-6">
                Computer Engineering
              </p>
              <p className="text-[11px] text-zinc-500 font-mono pl-6">
                {education?.[0]?.institution} ({education?.[0]?.period})
              </p>
            </div>

            <div className="space-y-1 pt-3 border-t border-zinc-200">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-950">
                <MapPin size={17} className="text-teal-600" />
                <span>Location</span>
              </div>
              <div className="text-xs text-zinc-700 font-medium pl-6">
                <EditableText
                  value={personal.location}
                  onSave={(val) => updatePersonal('location', val)}
                />
                <span>, Gujarat, India</span>
              </div>
              <p className="text-[11px] text-zinc-500 font-mono pl-6">
                Available for Remote & Relocation
              </p>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-zinc-200 flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>Languages: English, Hindi, Gujarati</span>
        </div>
      </div>
    </div>
  );
}
