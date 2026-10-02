import React from 'react';
import { motion } from 'motion/react';
import { TREATMENTS } from '../data/clinicData';
import { Sparkles, Check, Calendar, Download, ShieldCheck } from 'lucide-react';

interface PricingPageProps {
  onOpenBooking: (treatmentId?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenBooking }) => {
  const packages = [
    {
      title: 'The Signature Glow Tier',
      tagline: 'Ideal for quarterly skin maintenance & event preparation.',
      price: '$850',
      value: '$1,150 Value',
      popular: false,
      features: [
        '2x WESS_SAID Signature Glow Facials',
        '1x IPL Photorejuvenation Session',
        'Cross-Polarized Digital Skin Matrix Analysis',
        'Complimentary Clinical Skincare Starter Kit',
      ],
    },
    {
      title: 'The Youth Remodeling Tier',
      tagline: 'Deep collagen stimulation & volumetric midface restoration.',
      price: '$1,950',
      value: '$2,500 Value',
      popular: true,
      features: [
        '1x Volumetric Dermal Gel Syringe',
        '2x Fractional RF Micro-Needling Sessions',
        'Micro-Dose Expression Relaxation (20 Units)',
        'Post-Care Cooling Matrix Hydration Mask',
        'Priority Concierge Booking Access',
      ],
    },
    {
      title: 'Total Dermal Harmony Tier',
      tagline: 'Comprehensive annual facial & neck rejuvenation regimen.',
      price: '$3,800',
      value: '$5,200 Value',
      popular: false,
      features: [
        '2x Volumetric Dermal Gel Syringes',
        '3x Fractional RF Micro-Needling Sessions',
        'Full-Face Neuromodulator Micro-Dosing',
        '2x IPL Vascular & Pigment Treatments',
        'Dedicated Senior Dermatologist Care Lead',
      ],
    },
  ];

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
            Transparent Investment Schedule
          </span>
          <h1 className="text-4xl sm:text-5xl font-playfair italic font-semibold text-white leading-tight">
            Curated Treatment Packages & Price Guide
          </h1>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            All procedures include comprehensive pre-treatment imaging, medical supervision, and post-care cooling matrix protocols.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`rounded-3xl p-8 flex flex-col justify-between gap-6 relative transition-colors duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#e8702a]/20 via-gray-950 to-gray-950 border-2 border-[#e8702a] shadow-2xl shadow-[#e8702a]/20 scale-[1.02]'
                  : 'bg-gray-950 border border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#e8702a] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                  Most Requested
                </span>
              )}

              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-playfair italic font-semibold text-white">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-white/60 mt-1">{pkg.tagline}</p>
                </div>

                <div className="flex items-baseline gap-2 pt-2 border-t border-white/10">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-white">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-emerald-400 line-through">{pkg.value}</span>
                </div>

                <div className="flex flex-col gap-2.5 pt-4">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-white/80">
                      <Check className="w-4 h-4 text-[#e8702a] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenBooking()}
                className={`w-full text-xs font-semibold py-3.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  pkg.popular
                    ? 'bg-[#e8702a] hover:bg-[#d2611f] text-white shadow-lg shadow-[#e8702a]/30'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Select {pkg.title.split(' ')[1]} Tier</span>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Individual Itemized Price List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-950 border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col gap-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-2xl font-playfair italic font-semibold text-white">
                Individual Service Price List
              </h3>
              <p className="text-xs text-white/60 mt-0.5">Itemized ala-carte treatments</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => alert('Downloading official WESS_SAID Price Guide PDF...')}
              className="text-xs text-white/80 hover:text-white bg-white/5 border border-white/15 px-4 py-2 rounded-full flex items-center gap-2 w-fit cursor-pointer hover:bg-white/10 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#e8702a]" />
              <span>Download PDF Price Guide</span>
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TREATMENTS.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-4 bg-black/50 border border-white/5 hover:border-[#e8702a]/40 rounded-2xl flex items-center justify-between gap-4 transition-colors group"
              >
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-[#e8702a] transition-colors">
                    {t.title}
                  </p>
                  <p className="text-xs text-white/50">{t.category} • {t.duration}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-mono text-sm font-bold text-[#e8702a]">{t.price}</span>
                  <button
                    onClick={() => onOpenBooking(t.id)}
                    className="block text-[10px] text-white/70 hover:text-white underline mt-0.5 cursor-pointer"
                  >
                    Book
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
