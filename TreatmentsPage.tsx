import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, Clock, Shield, Calendar, Info } from 'lucide-react';
import { TREATMENTS } from '../data/clinicData';
import { Treatment } from '../types';

interface TreatmentsPageProps {
  onOpenBooking: (treatmentId: string) => void;
  onOpenTreatmentModal: (treatment: Treatment) => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({
  onOpenBooking,
  onOpenTreatmentModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Facial Aesthetics',
    'Skin Rejuvenation',
    'Body Contouring',
    'Laser & Anti-Aging',
  ];

  const filteredTreatments = TREATMENTS.filter((t) => {
    const matchesCategory =
      selectedCategory === 'All' || t.category === selectedCategory;
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.suitableFor.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
            Clinical Treatment Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-playfair italic font-semibold text-white leading-tight">
            Tailored Dermal & Sculpting Therapies
          </h1>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Every procedure at WESS_SAID is executed with medical-grade precision and customized to your unique dermal architecture.
          </p>
        </motion.div>

        {/* Filter Bar & Search */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-950 p-3 sm:p-4 rounded-3xl border border-white/10 shadow-xl"
        >
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none relative">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer z-10 ${
                  selectedCategory === cat ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="activeTreatmentCategory"
                    className="absolute inset-0 bg-[#e8702a] rounded-full -z-10 shadow-md shadow-[#e8702a]/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments or concerns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/15 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#e8702a] transition-all"
            />
          </div>
        </motion.div>

        {/* Treatment Grid */}
        <AnimatePresence mode="popLayout">
          {filteredTreatments.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-16 bg-gray-950 rounded-3xl border border-white/10"
            >
              <p className="text-sm text-white/60">No treatments matched your filter criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs text-[#e8702a] underline cursor-pointer"
              >
                Reset Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredTreatments.map((t, index) => (
                <motion.div
                  layout
                  key={t.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="bg-gray-950 border border-white/10 hover:border-[#e8702a]/60 rounded-3xl overflow-hidden group transition-all duration-300 shadow-2xl flex flex-col justify-between hover:shadow-[#e8702a]/10"
                >
                  <div>
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={t.image}
                        alt={t.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
                      <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-[10px] text-white uppercase tracking-wider font-semibold px-3 py-1 rounded-full border border-white/15">
                        {t.category}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col gap-3">
                      <h3 className="text-xl font-playfair italic font-semibold text-white group-hover:text-[#e8702a] transition-colors">
                        {t.title}
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed line-clamp-3">
                        {t.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {t.suitableFor.slice(0, 3).map((item, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full text-white/60"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-xs text-white/50 pt-3 border-t border-white/10 mt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#e8702a]" /> {t.duration}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Shield className="w-3.5 h-3.5 text-[#e8702a]" /> {t.recoveryTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex items-center justify-between gap-3">
                    <span className="text-base font-mono text-[#e8702a] font-bold">
                      {t.price}
                    </span>
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onOpenTreatmentModal(t)}
                        className="text-xs text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-full transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onOpenBooking(t.id)}
                        className="text-xs font-semibold text-white bg-[#e8702a] hover:bg-[#d2611f] px-4 py-2 rounded-full transition-colors cursor-pointer flex items-center gap-1 shadow-md shadow-[#e8702a]/20"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
