import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BEFORE_AFTER_GALLERY } from '../data/clinicData';
import { BeforeAfterItem } from '../types';
import { Sparkles, Calendar, Eye } from 'lucide-react';

interface GalleryPageProps {
  onOpenLightbox: (item: BeforeAfterItem) => void;
  onOpenBooking: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onOpenLightbox,
  onOpenBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Facial Aesthetics', 'Skin Rejuvenation', 'Laser & Anti-Aging'];

  const filteredItems = BEFORE_AFTER_GALLERY.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

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
            Clinical Evidence & Case Studies
          </span>
          <h1 className="text-4xl sm:text-5xl font-playfair italic font-semibold text-white leading-tight">
            Before & After Clinical Transformations
          </h1>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Unretouched high-resolution medical photography documenting the subtle, harmonious transformations achieved at WESS_SAID.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center gap-2 overflow-x-auto pb-2 relative"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-5 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer z-10 ${
                selectedCategory === cat ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {selectedCategory === cat && (
                <motion.div
                  layoutId="activeGalleryCategory"
                  className="absolute inset-0 bg-[#e8702a] rounded-full -z-10 shadow-md shadow-[#e8702a]/30"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="bg-gray-950 border border-white/10 hover:border-[#e8702a]/60 rounded-3xl p-5 transition-all duration-300 flex flex-col gap-4 shadow-xl hover:shadow-[#e8702a]/10"
              >
                <div
                  onClick={() => onOpenLightbox(item)}
                  className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group"
                >
                  <div className="grid grid-cols-2 gap-1.5 h-full">
                    <div className="relative h-full overflow-hidden">
                      <img
                        src={item.beforeImage}
                        alt="Before"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/70 text-[10px] text-white px-2.5 py-0.5 rounded-full border border-white/20 font-semibold">
                        BEFORE
                      </span>
                    </div>
                    <div className="relative h-full overflow-hidden">
                      <img
                        src={item.afterImage}
                        alt="After"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute bottom-2 right-2 bg-black/70 text-[10px] text-white px-2.5 py-0.5 rounded-full border border-white/20 font-semibold">
                        AFTER
                      </span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="bg-black/80 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 group-hover:scale-108 transition-transform duration-300">
                      <Eye className="w-3.5 h-3.5 text-[#e8702a]" />
                      <span>Open Interactive Comparison</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-[#e8702a] uppercase tracking-wider font-semibold">
                    {item.treatmentName}
                  </span>
                  <h3 className="text-lg font-playfair italic font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                  <span>Protocol: {item.sessionsCount} Sessions</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpenBooking}
                    className="text-[#e8702a] font-semibold hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>Inquire</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
