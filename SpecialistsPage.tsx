import React from 'react';
import { motion } from 'motion/react';
import { SPECIALISTS } from '../data/clinicData';
import { CheckCircle2, Calendar, Instagram, Linkedin } from 'lucide-react';

interface SpecialistsPageProps {
  onOpenBooking: () => void;
}

export const SpecialistsPage: React.FC<SpecialistsPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="w-full bg-black text-white pt-28 pb-20 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto flex flex-col gap-3"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#e8702a]">
            Medical & Clinical Faculty
          </span>
          <h1 className="text-4xl sm:text-5xl font-playfair italic font-semibold text-white leading-tight">
            Meet Our Senior Aesthetic Specialists
          </h1>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Our team comprises board-certified dermatologists, facial plastic surgeons, and master nurse practitioners with decades of combined clinical expertise.
          </p>
        </motion.div>

        {/* Specialist Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SPECIALISTS.map((s, index) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="bg-gray-950 border border-white/10 hover:border-[#e8702a]/60 rounded-3xl p-8 flex flex-col justify-between gap-6 transition-colors duration-300 shadow-2xl hover:shadow-[#e8702a]/10 group"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="relative overflow-hidden rounded-full shrink-0">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={s.image}
                      alt={s.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-[#e8702a]"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#e8702a] transition-colors">
                      {s.name}
                    </h3>
                    <p className="text-xs text-[#e8702a] font-medium mt-0.5">{s.title}</p>
                    <p className="text-[11px] text-white/50">{s.experience}</p>
                  </div>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl group-hover:border-[#e8702a]/30 transition-colors">
                  <p className="text-[10px] text-white/50 uppercase tracking-widest font-semibold mb-1">
                    Specialization
                  </p>
                  <p className="text-xs font-medium text-white">{s.specialty}</p>
                </div>

                <p className="text-xs text-white/80 leading-relaxed">{s.bio}</p>

                <div>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest font-semibold mb-2">
                    Board Certifications & Credentials
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {s.credentials.map((cred, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {s.socials?.instagram && (
                    <a
                      href={s.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-white/5 text-white/60 hover:text-white hover:bg-white/15 transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {s.socials?.linkedin && (
                    <a
                      href={s.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-white/5 text-white/60 hover:text-white hover:bg-white/15 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onOpenBooking}
                  className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-[#e8702a]/20"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book With {s.name.split(' ')[1]}</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
