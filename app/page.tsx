"use client";

import React, { useState } from "react";

// Email Form Component
function EmailForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    try {
      const formData = new FormData();
      formData.append('email', email);
      
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbzjkA4HSFB980VciZm4FTvJNLL79re3egD4_8OilIkgkKuPMUvZOShHEj70cguq046S/exec';
      
      const response = await fetch(scriptUrl, {
        
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you! You\'ll be notified when OLIGO launches.');
        setEmail('');
      } else {
        throw new Error('Network response was not ok');
      }
      
    } catch (error) {
      console.error('Error submitting email:', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl rounded-2xl bg-white/10 p-4 backdrop-blur-md shadow-2xl border border-white/15"
    >
      <div className="flex flex-col gap-3 md:flex-row">
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email to get updates"
          disabled={status === 'loading'}
          className="w-full flex-1 rounded-xl border border-white/20 bg-white/90 px-4 py-3 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-white/60 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-xl bg-white px-5 py-3 font-semibold text-black transition active:scale-[.99] hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Saving...' : 'Notify Me'}
        </button>
      </div>
      
      {message && (
        <div className={`mt-3 text-sm text-center ${
          status === 'success' ? 'text-green-300' : 'text-red-300'
        }`}>
          {message}
        </div>
      )}
    </form>
  );
}

export default function ComingSoon(): JSX.Element {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white" style={{
      backgroundImage: "url('/oligo-brand-illustration.png')",
      backgroundSize: "2000px auto",
      backgroundRepeat: "repeat-x",
      animation: "slideBackground 25s linear infinite"
    }}>
      {/* Dark overlay for better text readability */}
      <div className="pointer-events-none absolute inset-0 bg-black/80" />
      
      {/* Background overlay for effects */}
      <div 
        className="pointer-events-none absolute inset-0 -z-10 opacity-90"
        style={{
          filter: "saturate(1.1) contrast(1.05)",
        }}
      />

      {/* Subtle rotating grain overlay for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 mix-blend-soft-light">
        <div className="h-full w-full animate-[spin_120s_linear_infinite]" style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08), transparent 30%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.2), transparent 40%)",
        }} />
      </div>

      {/* Soft gradient scrim for legibility */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-10 px-6 py-16">
        {/* Logo / Wordmark */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
            OLIGO
          </h1>
          <p className="mt-3 text-2xl md:text-3xl text-white font-medium tracking-wide drop-shadow-lg">
            Coming Soon
          </p>
        </div>

        {/* Email capture (Google Sheets) */}
        <EmailForm />

        {/* Socials + Contact */}
        <div className="mt-2 flex items-center gap-3">
          {/* Update these hrefs with your real profiles */}
          <a
            href="#"
            aria-label="Instagram"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/25 ring-1 ring-white/40 hover:bg-white/40 hover:ring-white/60 transition-all duration-200 shadow-md backdrop-blur-sm"
          >
            {/* Instagram SVG */}
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-white group-hover:stroke-white" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" className="fill-white stroke-none" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="X (Twitter)"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/25 ring-1 ring-white/40 hover:bg-white/40 hover:ring-white/60 transition-all duration-200 shadow-md backdrop-blur-sm"
          >
            {/* X/Twitter SVG */}
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white group-hover:fill-white" aria-hidden="true">
              <path d="M18.9 3H21l-7.4 8.5L21.5 21h-3.7l-6-7.1-6.7 7.1H2.1l7.9-8.5L2 3h3.8l5.4 6.4L18.9 3z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="TikTok"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/25 ring-1 ring-white/40 hover:bg-white/40 hover:ring-white/60 transition-all duration-200 shadow-md backdrop-blur-sm"
          >
            {/* TikTok SVG */}
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white group-hover:fill-white" aria-hidden="true">
              <path d="M14 3c.5 2.6 2.1 4.7 4.9 5v3.1c-1.6 0-3-.4-4.3-1.2v4.9c0 3-2.4 5.2-5.5 5.2S3.5 17.8 3.5 15c0-3 2.4-5.2 5.5-5.2.5 0 1 .1 1.5.2v3.2c-.4-.2-.9-.3-1.5-.3-1.5 0-2.7 1.1-2.7 2.6s1.2 2.6 2.7 2.6 2.7-1.2 2.7-2.7V3h2.3z" />
            </svg>
          </a>
          <a
            href="mailto:info@adaptive.kitchen"
            className="ml-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition-all duration-200 shadow-md backdrop-blur-sm"
          >
            Contact
          </a>
        </div>

        {/* Footer microcopy */}
        <footer className="mt-6 text-center text-sm text-white font-medium drop-shadow-md">
          <p>© {new Date().getFullYear()} OLIGO. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}