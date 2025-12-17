/* FILE: src/components/ui/ShareButton.tsx */
'use client';

import React, { useState } from 'react';
import { Check, Link as LinkIcon, Linkedin } from 'lucide-react';

// Custom X (Twitter) Icon Component
const XIcon = ({ size = 16, className }: { size?: number, className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function ShareButton({ title, url }: { title?: string, url?: string }) {
  const [isCopied, setIsCopied] = useState(false);

  // Safely get window location for client-side
  const getUrl = () => url || (typeof window !== 'undefined' ? window.location.href : '');
  const getTitle = () => title || (typeof document !== 'undefined' ? document.title : '');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleTwitter = () => {
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(getTitle())}&url=${encodeURIComponent(getUrl())}`;
    window.open(shareUrl, '_blank', 'width=550,height=400');
  };

  const handleLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getUrl())}`;
    window.open(shareUrl, '_blank', 'width=550,height=400');
  };

  return (
    <div className="flex items-center gap-4 text-sm font-medium text-gray-500">

      {/* Label (Optional) */}
      <span className="text-xs uppercase tracking-widest hidden sm:block mr-1">Share</span>

      {/* X (Twitter) Button */}
      <button
        onClick={handleTwitter}
        className="hover:text-white transition-colors p-1"
        aria-label="Share on X"
        title="Share on X"
      >
        <XIcon size={18} />
      </button>

      {/* LinkedIn Button */}
      <button
        onClick={handleLinkedIn}
        className="hover:text-white transition-colors p-1"
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
      >
        <Linkedin size={20} />
      </button>

      {/* Vertical Divider */}
      <div className="w-px h-4 bg-white/10 mx-1" />

      {/* Copy Link Button */}
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 hover:text-white transition-colors p-1"
        aria-label="Copy Link"
        title="Copy Link to Clipboard"
      >
        {isCopied ? (
          <>
            <Check size={18} className="text-[#3B82F6]" />
            <span className="text-[#3B82F6] text-xs font-bold uppercase">Copied</span>
          </>
        ) : (
          <>
            <LinkIcon size={18} />
          </>
        )}
      </button>
    </div>
  );
}
