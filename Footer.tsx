import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Instagram, Facebook, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { PageRoute } from '../types';
import { ClinicInfo } from '../data/clinicData';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange, onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !/\S+@\S+\.\S+/.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address');
      return;
    }
    setNewsletterError('');
    setNewsletterSubmitted(true);
  };

  return (
    <footer className="bg-gray-950 text-white border-t border-white/10 pt-16 pb-12 px-5 sm:px-8 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#e8702a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Col 1 & 2: Brand & Story */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
                </svg>
              </div>
              <span className="text-2xl font-playfair italic font-semibold text-white">
                WESS_SAID
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm mt-1">
              WESS_SAID is a premier physician-led medical institute offering advanced facial rejuvenation, non-invasive dermal remodeling, and bespoke clinical skincare.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a
                href={ClinicInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 hover:bg-[#e8702a] hover:border-[#e8702a] transition-all flex items-center justify-center text-white/80 hover:text-white"
                title="WhatsApp Concierge"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={ClinicInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 hover:bg-[#e8702a] hover:border-[#e8702a] transition-all flex items-center justify-center text-white/80 hover:text-white"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={ClinicInfo.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 hover:bg-[#e8702a] hover:border-[#e8702a] transition-all flex items-center justify-center text-white/80 hover:text-white"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={ClinicInfo.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 hover:bg-[#e8702a] hover:border-[#e8702a] transition-all flex items-center justify-center text-white/80 hover:text-white"
                title="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#e8702a]">
              Navigation
            </h4>
            <div className="flex flex-col gap-2 text-xs text-white/70">
              <button
                onClick={() => onRouteChange('home')}
                className="text-left hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => onRouteChange('about')}
                className="text-left hover:text-white transition-colors"
              >
                About Clinic
              </button>
              <button
                onClick={() => onRouteChange('treatments')}
                className="text-left hover:text-white transition-colors"
              >
                Treatments & Services
              </button>
              <button
                onClick={() => onRouteChange('gallery')}
                className="text-left hover:text-white transition-colors"
              >
                Before & After Gallery
              </button>
              <button
                onClick={() => onRouteChange('specialists')}
                className="text-left hover:text-white transition-colors"
              >
                Our Specialists
              </button>
              <button
                onClick={() => onRouteChange('pricing')}
                className="text-left hover:text-white transition-colors"
              >
                Pricing & Packages
              </button>
              <button
                onClick={() => onRouteChange('testimonials')}
                className="text-left hover:text-white transition-colors"
              >
                Patient Reviews
              </button>
              <button
                onClick={() => onRouteChange('faq')}
                className="text-left hover:text-white transition-colors"
              >
                Frequently Asked Questions
              </button>
            </div>
          </div>

          {/* Col 4: Opening Hours */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#e8702a]">
              Clinic Hours
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-white/70">
              {ClinicInfo.hours.map((h, idx) => (
                <div key={idx} className="flex flex-col border-b border-white/5 pb-2">
                  <span className="text-white/90 font-medium">{h.days}</span>
                  <span className="text-white/50">{h.time}</span>
                </div>
              ))}
            </div>
            <button
              onClick={onOpenBooking}
              className="mt-2 text-xs text-[#e8702a] font-semibold underline underline-offset-4 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Schedule After-Hours VIP Appointment</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Col 5: Newsletter & Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#e8702a]">
              Aesthetic Journal
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Subscribe for private invitations to luxury treatment unveilings and dermatological research notes.
            </p>

            {newsletterSubmitted ? (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you. You are subscribed to our private journal.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-full px-4 py-2.5 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#e8702a]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 bg-[#e8702a] hover:bg-[#d2611f] text-white px-4 rounded-full text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Join
                  </button>
                </div>
                {newsletterError && <p className="text-[10px] text-red-400 pl-2">{newsletterError}</p>}
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} WESS_SAID. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => alert('Rennova Medical Privacy Policy: Fully HIPAA Compliant & Encrypted.')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => alert('Rennova Terms of Medical Service.')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => alert('Cookie Settings Updated.')}
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
