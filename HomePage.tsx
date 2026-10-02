import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeroSection } from '../components/HeroSection';
import { TREATMENTS, SPECIALISTS, BEFORE_AFTER_GALLERY, TESTIMONIALS, FAQ_ITEMS } from '../data/clinicData';
import { Treatment, BeforeAfterItem, PageRoute } from '../types';
import { Sparkles, Star, ArrowRight, Calendar } from 'lucide-react';

interface HomePageProps {
  onOpenBooking: (treatmentId?: string) => void;
  onOpenTreatmentModal: (treatment: Treatment) => void;
  onOpenLightbox: (item: BeforeAfterItem) => void;
  onRouteChange: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onOpenTreatmentModal,
  onOpenLightbox,
  onRouteChange,
}) => {
  const [activeFaq, setActiveFaq] = useState<string | null>(FAQ_ITEMS[0].id);

  return (
    <div className="w-full bg-black text-white">
      {/* 1. Hero Section (UNTOUCHED VISUAL REVEAL) */}
      <HeroSection
        onOpenBooking={() => onOpenBooking()}
        onRouteChange={onRouteChange}
      />

      {/* 2. Highlights Metrics Banner */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-gray-950 border-y border-white/10 py-10 px-5 sm:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-playfair italic font-semibold text-[#e8702a]">
              16+
            </span>
            <span className="text-xs text-white/70 uppercase tracking-widest mt-1">
              Years Clinical Excellence
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-playfair italic font-semibold text-[#e8702a]">
              12,500+
            </span>
            <span className="text-xs text-white/70 uppercase tracking-widest mt-1">
              Patients Rejuvenated
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-playfair italic font-semibold text-[#e8702a]">
              100%
            </span>
            <span className="text-xs text-white/70 uppercase tracking-widest mt-1">
              Physician Lead Care
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-playfair italic font-semibold text-[#e8702a]">
              4.9 ★
            </span>
            <span className="text-xs text-white/70 uppercase tracking-widest mt-1">
              Patient Satisfaction Rate
            </span>
          </div>
        </div>
      </motion.section>

      {/* 3. Featured Treatments */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="py-20 px-5 sm:px-8 max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#e8702a] flex items-center gap-1.5 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Signature Services</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-playfair italic font-semibold text-white">
              Targeted Dermal Therapies
            </h2>
          </div>
          <button
            onClick={() => onRouteChange('treatments')}
            className="text-sm font-medium text-[#e8702a] hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>View All Treatments ({TREATMENTS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.filter((t) => t.featured).map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-gray-950 border border-white/10 hover:border-[#e8702a]/50 rounded-3xl overflow-hidden group transition-colors shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-[10px] text-white uppercase tracking-wider font-semibold px-3 py-1 rounded-full border border-white/15">
                    {treatment.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <h3 className="text-xl font-playfair italic font-semibold text-white group-hover:text-[#e8702a] transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed line-clamp-2">
                    {treatment.shortDescription}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-white/50 pt-2 border-t border-white/10">
                    <span>⏱ {treatment.duration}</span>
                    <span>• {treatment.recoveryTime}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <span className="text-sm font-mono text-[#e8702a] font-bold">
                  {treatment.price}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenTreatmentModal(treatment)}
                    className="text-xs text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-full transition-colors cursor-pointer"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onOpenBooking(treatment.id)}
                    className="text-xs font-semibold text-white bg-[#e8702a] hover:bg-[#d2611f] px-4 py-2 rounded-full transition-colors cursor-pointer"
                  >
                    Book
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 4. Specialist Spotlight */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-gray-950 py-20 px-5 sm:px-8 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#e8702a] mb-2">
              Medical Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-playfair italic font-semibold text-white">
              Board-Certified Practitioners
            </h2>
            <p className="text-xs sm:text-sm text-white/70 mt-3 leading-relaxed">
              Our clinic is directed by seasoned dermatologists and plastic surgeons committed to mathematical facial symmetry and safe, natural outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SPECIALISTS.map((s, index) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-black/60 border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center gap-4 hover:border-white/25 transition-colors"
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-28 h-28 rounded-full object-cover border-2 border-[#e8702a]"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{s.name}</h3>
                  <p className="text-xs text-[#e8702a] font-medium">{s.title}</p>
                  <p className="text-[11px] text-white/50 mt-1">{s.experience}</p>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">{s.bio}</p>
                <button
                  onClick={() => onOpenBooking()}
                  className="mt-2 text-xs font-semibold text-white bg-white/10 hover:bg-[#e8702a] px-5 py-2 rounded-full transition-all cursor-pointer"
                >
                  Book Consultation
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. Interactive Before & After Spotlight */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="py-20 px-5 sm:px-8 max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#e8702a] mb-2 block">
              Proven Clinical Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-playfair italic font-semibold text-white">
              Before & After Transformations
            </h2>
          </div>
          <button
            onClick={() => onRouteChange('gallery')}
            className="text-sm font-medium text-[#e8702a] hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>View Full Gallery ({BEFORE_AFTER_GALLERY.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BEFORE_AFTER_GALLERY.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => onOpenLightbox(item)}
              className="bg-gray-950 border border-white/10 rounded-3xl p-4 hover:border-[#e8702a] transition-colors cursor-pointer group flex flex-col gap-3"
            >
              <div className="grid grid-cols-2 gap-2 h-48 rounded-2xl overflow-hidden relative">
                <img
                  src={item.beforeImage}
                  alt="Before"
                  className="w-full h-full object-cover"
                />
                <img
                  src={item.afterImage}
                  alt="After"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors flex items-center justify-center">
                  <span className="bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20 group-hover:scale-105 transition-transform">
                    Interactive Comparison ↔
                  </span>
                </div>
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-[#e8702a] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-white/60 line-clamp-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 6. Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-gray-950 py-20 px-5 sm:px-8 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#e8702a] mb-2 block">
              Patient Voices
            </span>
            <h2 className="text-3xl sm:text-4xl font-playfair italic font-semibold text-white">
              Words From Our Patients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/60 border border-white/10 rounded-3xl p-6 flex flex-col justify-between gap-4"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img
                    src={t.avatar}
                    alt={t.patientName}
                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <p className="text-xs font-semibold text-white">{t.patientName}</p>
                    <p className="text-[10px] text-[#e8702a]">{t.treatmentName}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 7. FAQ Preview */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="py-20 px-5 sm:px-8 max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#e8702a] mb-2 block">
            Questions Answered
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair italic font-semibold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-gray-950 border border-white/10 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                  className="w-full text-left p-5 text-sm font-semibold text-white flex items-center justify-between gap-4 cursor-pointer hover:text-[#e8702a] transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-lg text-[#e8702a]">{isOpen ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 pt-0 text-xs text-white/70 leading-relaxed border-t border-white/5 pt-3"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* 8. Callout Banner */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-gray-950 via-[#e8702a]/20 to-gray-950 border-y border-white/15 py-16 px-5 sm:px-8 text-center"
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-5">
          <span className="w-12 h-12 rounded-full bg-[#e8702a]/20 border border-[#e8702a]/40 flex items-center justify-center text-[#e8702a]">
            <Sparkles className="w-6 h-6" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair italic font-semibold text-white">
            Begin Your Personalized Aesthetic Journey
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl">
            Schedule a private, one-on-one consultation with our senior medical team to receive a comprehensive skin matrix evaluation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onOpenBooking()}
            className="mt-2 bg-[#e8702a] hover:bg-[#d2611f] text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-colors shadow-xl hover:shadow-[#e8702a]/30 cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Consultation</span>
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

