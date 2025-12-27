'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  const navLinks = [
    { name: 'Research', href: '/research' },
    { name: 'Safety', href: '/safety' },
    { name: 'Mission', href: '/mission' },
    { name: 'Company', href: '/about' }, // Simplification: Point to About page
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#030304]/80 backdrop-blur-md border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* UPDATED: Replaced placeholder div with your icon */}
          <div className="relative w-8 h-8 overflow-hidden rounded-sm">
            <Image
              src="/icon.png"
              alt="Metanthropic Logo"
              fill
              sizes="32px"
              className="object-contain"
            />
          </div>
          <span className="font-bold tracking-tight text-lg text-white group-hover:opacity-80 transition-opacity">
            Metanthropic
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#3B82F6] ${
                pathname.startsWith(link.href) ? 'text-white' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
             href="/support" target='_blank'
             className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-1"
          >
             Support
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030304] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl font-serif text-white hover:text-[#3B82F6]"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/10" />
              <Link href="/support" className="text-gray-400 hover:text-white flex items-center gap-2">
                 Help Center
              </Link>
              <Link href="/status" className="text-gray-400 hover:text-white flex items-center gap-2">
                 System Status
              </Link>
              <Link href="/careers" className="text-[#3B82F6] font-bold">
                 View Careers
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
