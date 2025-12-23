'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Github, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-white/10 text-white pt-24 pb-12 px-6 md:px-12">

      {/* 1. PRE-FOOTER CTA */}
      <div className="max-w-[1400px] mx-auto mb-24 border-b border-white/10 pb-24">
        <h2 className="text-3xl md:text-5xl font-serif mb-6 tracking-tight">
          Help us architect the future.
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            We are looking for researchers, engineers, and dreamers who want to work on the frontier of AGI. Join us in solving the physics of intelligence.
          </p>
          <div className="flex gap-4">
            <Link href="/careers" className="bg-white text-black px-6 py-3 rounded-sm font-bold hover:bg-gray-200 transition-colors">
              View Open Roles
            </Link>
            <Link href="/charter" className="border border-white/20 text-white px-6 py-3 rounded-sm font-bold hover:bg-white/10 transition-colors">
              Read Our Charter
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN LINKS GRID */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 text-sm mb-24">

        {/* Research (Fixed: Added wrapper div) */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-white mb-2">Our Research</h3>
          <Link href="/research/index" className="text-gray-400 hover:text-white transition-colors">Research Index</Link>
          <Link href="/research" className="text-gray-400 hover:text-white transition-colors">Research Overview</Link>
          <Link href="/science" className="text-gray-400 hover:text-white transition-colors">Metanthropic for Science</Link>
        </div>

        {/* Business */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-white mb-2">For Business</h3>
          <Link href="/support" className="text-gray-400 hover:text-white transition-colors">Business Overview</Link>
          <Link href="/support" className="text-gray-400 hover:text-white transition-colors">API Platform</Link>
          <a href="mailto:sales@metanthropic.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">Contact Sales <Mail size={12}/></a>
        </div>

        {/* Safety */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-white mb-2">Safety</h3>
          <Link href="/safety" className="text-gray-400 hover:text-white transition-colors">Safety Overview</Link>
          <Link href="/safety/approach" className="text-gray-400 hover:text-white transition-colors">Our Approach</Link>
          <Link href="/security" className="text-gray-400 hover:text-white transition-colors">Security & Privacy</Link>
          <Link href="/trust" className="text-gray-400 hover:text-white transition-colors">Trust & Transparency</Link>
          <Link href="/policies/disclosure" className="text-gray-400 hover:text-white transition-colors">Responsible Disclosure</Link>
        </div>

        {/* Company */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-white mb-2">Company</h3>
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
          <Link href="/mission" className="text-gray-400 hover:text-white transition-colors">Mission</Link>
          <Link href="/charter" className="text-gray-400 hover:text-white transition-colors">Our Charter</Link>
          <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link>
        </div>

        {/* Support */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-white mb-2">Support</h3>
          <Link href="/support" className="text-gray-400 hover:text-white transition-colors">Help Center</Link>
          <Link href="/status" className="text-gray-400 hover:text-white transition-colors">System Status</Link>
        </div>

        {/* Terms & Policies */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold text-white mb-2">Terms & Policies</h3>
          <Link href="/policies/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/policies/commercial-terms" className="text-gray-400 hover:text-white transition-colors">Terms: Commercial</Link>
          <Link href="/policies/terms" className="text-gray-400 hover:text-white transition-colors">Terms: Consumer</Link>
          <Link href="/policies/usage" className="text-gray-400 hover:text-white transition-colors">Usage Policy</Link>
        </div>
      </div>

      {/* 3. BOTTOM BAR */}
      <div className="max-w-[1400px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex gap-6 text-gray-400">
          <a href="https://x.com/ek10sh" target='_blank' className="hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="https://www.linkedin.com/company/metanthropic/" target='_blank' className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="https://github.com/metanthropics" target='_blank' className="hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" target='_blank' className="hover:text-white transition-colors"><Youtube size={20} /></a>
        </div>

        <div className="text-xs text-gray-500 font-medium">
          Metanthropic © 2025
        </div>

        <Link href="/status" className="text-xs text-gray-500 font-medium flex items-center gap-2 hover:text-white transition-colors">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          All Systems Operational
        </Link>

      </div>
    </footer>
  );
}
