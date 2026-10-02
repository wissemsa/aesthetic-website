import React from 'react';
import { motion } from 'motion/react';
import { ContactForm } from '../components/ContactForm';
import { ClinicInfo } from '../data/clinicData';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="w-full bg-black text-white pt-28 pb-20 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto flex flex-col gap-3"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#e8702a]">
            Concierge Direct Line
          </span>
          <h1 className="text-4xl sm:text-5xl font-playfair italic font-semibold text-white leading-tight">
            Connect With Our Medical Concierge
          </h1>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Whether inquiring about custom treatment roadmaps or scheduling a private consultation, our medical team is at your service.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Info Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-gray-950 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
              <h3 className="text-xl font-playfair italic font-semibold text-white border-b border-white/10 pb-3">
                Concierge Contact Details
              </h3>

              <div className="flex flex-col gap-4 text-xs sm:text-sm">
                <a
                  href={`tel:${ClinicInfo.phone}`}
                  className="flex items-start gap-3.5 text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#e8702a] group-hover:bg-[#e8702a]/10 transition-colors text-[#e8702a]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 uppercase tracking-wider block">Telephone</span>
                    <span className="font-semibold text-white group-hover:text-[#e8702a] transition-colors">
                      {ClinicInfo.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={ClinicInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3.5 text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 uppercase tracking-wider block">WhatsApp Concierge</span>
                    <span className="font-semibold text-emerald-400">Instant Chat Line</span>
                  </div>
                </a>

                <a
                  href={`mailto:${ClinicInfo.email}`}
                  className="flex items-start gap-3.5 text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#e8702a] group-hover:bg-[#e8702a]/10 transition-colors text-[#e8702a]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 uppercase tracking-wider block">Email Inquiries</span>
                    <span className="font-semibold text-white group-hover:text-[#e8702a] transition-colors">
                      {ClinicInfo.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 text-white/80">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#e8702a]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 uppercase tracking-wider block">Beverly Hills Sanctuary</span>
                    <span className="text-xs text-white/80 leading-relaxed">{ClinicInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Box */}
            <div className="bg-gray-950 border border-white/10 rounded-3xl p-6 flex flex-col gap-3 shadow-xl">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#e8702a] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Operating Hours</span>
              </h4>
              <div className="flex flex-col gap-2 text-xs text-white/70">
                {ClinicInfo.hours.map((h, idx) => (
                  <div key={idx} className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="text-white/90 font-medium">{h.days}</span>
                    <span className="text-white/50">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Form Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="bg-gray-950 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-playfair italic font-semibold text-white mb-2">
                Send Direct Message
              </h3>
              <p className="text-xs text-white/60 mb-6">
                Fill out the form below and a medical concierge representative will connect with you.
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>

        {/* Map Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-950 border border-white/10 rounded-3xl overflow-hidden p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#e8702a]">
              Location & Valet
            </span>
            <h3 className="text-2xl font-playfair italic font-semibold text-white mt-1">
              Beverly Hills Medical Plaza
            </h3>
            <p className="text-xs text-white/60 mt-1 max-w-xl">
              Private underground valet parking is available at the main plaza entrance. Private elevator access directly to Suite 800.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={ClinicInfo.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-6 py-3 rounded-full transition-colors flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
          >
            <MapPin className="w-4 h-4 text-[#e8702a]" />
            <span>Open in Google Maps</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
