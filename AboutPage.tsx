import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Microchip, CheckCircle2, Calendar } from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="w-full bg-black text-white pt-28 pb-20 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto flex flex-col gap-4"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xs font-semibold uppercase tracking-widest text-[#e8702a]"
          >
            Our Heritage & Philosophy
          </motion.span>
          <h1 className="text-4xl sm:text-5xl font-playfair italic font-semibold text-white leading-tight">
            Where Clinical Science Meets High Aesthetic Artistry
          </h1>
          <p className="text-sm text-white/70 leading-relaxed">
            WESS_SAID was founded with a singular vision: to deliver transformative aesthetic outcomes backed by rigourous dermatological science, high-tech non-invasive protocols, and personalized care.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="bg-gray-950 border border-white/10 rounded-3xl p-8 flex flex-col gap-4 hover:border-[#e8702a]/50 hover:shadow-2xl hover:shadow-[#e8702a]/10 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#e8702a]/20 border border-[#e8702a]/40 text-[#e8702a] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-playfair italic font-semibold text-white group-hover:text-[#e8702a] transition-colors">
              Physician-Led Safety
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Every procedure is designed and supervised by board-certified dermatologists and plastic surgeons using FDA-cleared energy devices and pure biocompatible injectables.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="bg-gray-950 border border-white/10 rounded-3xl p-8 flex flex-col gap-4 hover:border-[#e8702a]/50 hover:shadow-2xl hover:shadow-[#e8702a]/10 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#e8702a]/20 border border-[#e8702a]/40 text-[#e8702a] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Microchip className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-playfair italic font-semibold text-white group-hover:text-[#e8702a] transition-colors">
              Subdermal Analysis
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              We employ cross-polarized light imaging and deep collagen density mapping to analyze your skin’s biological architecture prior to formulating treatment roadmaps.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="bg-gray-950 border border-white/10 rounded-3xl p-8 flex flex-col gap-4 hover:border-[#e8702a]/50 hover:shadow-2xl hover:shadow-[#e8702a]/10 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#e8702a]/20 border border-[#e8702a]/40 text-[#e8702a] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-playfair italic font-semibold text-white group-hover:text-[#e8702a] transition-colors">
              Expressive Harmony
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              We reject over-filled or frozen aesthetic standards. Our micro-dosing philosophy preserves authentic facial emotion while restoring youthful contours.
            </p>
          </motion.div>
        </motion.div>

        {/* Facility Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gray-950 border border-white/10 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
        >
          <div className="p-8 sm:p-12 flex flex-col justify-center gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#e8702a]">
              State-of-the-Art Sanctuary
            </span>
            <h2 className="text-3xl font-playfair italic font-semibold text-white">
              Designed for Privacy, Comfort & Clinical Precision
            </h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Located in Beverly Hills, our clinic offers private entrance suites, HEPA air purification systems, and ultra-quiet treatment rooms crafted with warm travertine stone and acoustic damping.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs text-white/80">
              {[
                "Private VIP Suites",
                "Sterile Operating Grade",
                "Valet Parking Service",
                "Complimentary Refreshment Lounge",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#e8702a]" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenBooking}
              className="mt-2 w-fit bg-[#e8702a] hover:bg-[#d2611f] text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-[#e8702a]/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule VIP Visit</span>
            </motion.button>
          </div>
          <div className="h-80 lg:h-auto min-h-[350px] relative overflow-hidden group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
              alt="Sanctuary Facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
