import React, { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import { Reveal } from './Reveal';

// Web3Forms delivers submissions to the e-mail tied to this access key (contact@spmcreativecompany.com).
// Create a free key at https://web3forms.com using that address, then paste it here.
const WEB3FORMS_ACCESS_KEY = 'bfe60b48-514e-4a6a-8141-abfe55859ef5';

export const ArtistPortal: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append('access_key', WEB3FORMS_ACCESS_KEY);
    data.append('subject', 'New submission — SPM Artist Vault');
    data.append('from_name', 'SPM Creative Company — Website');

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) {
        setStatus('done');
        form.reset();
      } else {
        setStatus('error');
        setError(json.message || 'Something went wrong. Please email contact@spmcreativecompany.com directly.');
      }
    } catch {
      setStatus('error');
      setError('Network error. Please email contact@spmcreativecompany.com directly.');
    }
  };

  return (
    <section id="vault" className="py-24 md:py-32 bg-black relative">
      <div className="max-w-[94%] mx-auto px-6">

        {/* Section header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-10">
            <div>
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/40 block mb-4">
                Submissions / Artist Vault
              </span>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white leading-[0.85]">
                The Vault
              </h3>
            </div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 max-w-xs mt-6 md:mt-0 md:text-right leading-relaxed">
              Send your work. Every submission is reviewed between Miami and São Paulo.
            </p>
          </div>
        </Reveal>

        <Reveal>
          {status === 'done' ? (
            <div className="flex flex-col items-start py-16">
              <CheckCircle className="text-white w-12 h-12 mb-6" />
              <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tighter uppercase mb-3">Received.</h4>
              <p className="text-neutral-400 font-light max-w-md leading-relaxed">
                Thank you. Your submission reached the studio — we&apos;ll be in touch if it&apos;s a fit.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 font-mono text-[10px] tracking-[0.25em] uppercase text-white border-b border-white/30 hover:border-white pb-1 transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 block mb-3">Name</label>
                  <input
                    name="name" type="text" required placeholder="Your name"
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-lg text-white font-light placeholder:text-neutral-600 focus:outline-none focus:border-white/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 block mb-3">Email</label>
                  <input
                    name="email" type="email" required placeholder="you@email.com"
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-lg text-white font-light placeholder:text-neutral-600 focus:outline-none focus:border-white/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 block mb-3">Link to your work</label>
                <input
                  name="link" type="url" required placeholder="Drive · WeTransfer · SoundCloud · YouTube …"
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-lg text-white font-light placeholder:text-neutral-600 focus:outline-none focus:border-white/60 transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 block mb-3">Message <span className="text-white/25">(optional)</span></label>
                <textarea
                  name="message" rows={3} placeholder="Tell us about the project."
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-lg text-white font-light placeholder:text-neutral-600 focus:outline-none focus:border-white/60 transition-colors resize-none"
                />
              </div>

              {error && <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-red-400">{error}</p>}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-4 inline-flex items-center gap-3 bg-white text-black font-bold text-xs tracking-[0.3em] uppercase px-10 py-5 hover:bg-neutral-200 transition-colors disabled:opacity-40"
              >
                <Send size={14} />
                {status === 'sending' ? 'Sending…' : 'Send Submission'}
              </button>

              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-neutral-600 leading-relaxed pt-2">
                By submitting, you agree to our{' '}
                <a href="/terms.html" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white border-b border-neutral-700 hover:border-white transition-colors">Terms of Use</a>
                {' '}and{' '}
                <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white border-b border-neutral-700 hover:border-white transition-colors">Privacy Policy</a>.
              </p>
            </form>
          )}
        </Reveal>

      </div>
    </section>
  );
};
