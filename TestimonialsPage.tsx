import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data/clinicData';
import { Star, CheckCircle, Plus, X } from 'lucide-react';

interface TestimonialsPageProps {
  onOpenBooking: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenBooking }) => {
  const [reviewsList, setReviewsList] = useState(TESTIMONIALS);
  const [modalOpen, setModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    treatment: 'WESS_SAID Signature Glow Facial',
    rating: 5,
    comment: '',
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const reviewToAdd = {
      id: 'test-' + Date.now(),
      patientName: newReview.name,
      treatmentName: newReview.treatment,
      rating: newReview.rating,
      comment: newReview.comment,
      date: 'Just Now',
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    };

    setReviewsList([reviewToAdd, ...reviewsList]);
    setModalOpen(false);
    setNewReview({ name: '', treatment: 'WESS_SAID Signature Glow Facial', rating: 5, comment: '' });
  };

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
            Verified Patient Experiences
          </span>
          <h1 className="text-4xl sm:text-5xl font-playfair italic font-semibold text-white leading-tight">
            Real Stories, Authentic Radiance
          </h1>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Read first-hand accounts from patients who have entrusted their skin health and aesthetic journeys to WESS_SAID.
          </p>
          <div className="flex justify-center pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setModalOpen(true)}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Plus className="w-4 h-4 text-[#e8702a]" />
              <span>Share Your Patient Experience</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {reviewsList.map((t, index) => (
              <motion.div
                layout
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="bg-gray-950 border border-white/10 rounded-3xl p-6 flex flex-col justify-between gap-6 hover:border-[#e8702a]/50 transition-all duration-300 shadow-xl hover:shadow-[#e8702a]/10 group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    {t.verified && (
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-medium">
                        <CheckCircle className="w-3 h-3" /> Verified Patient
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img
                    src={t.avatar}
                    alt={t.patientName}
                    className="w-11 h-11 rounded-full object-cover border border-white/20 group-hover:border-[#e8702a] transition-colors"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-[#e8702a] transition-colors">
                      {t.patientName}
                    </p>
                    <p className="text-xs text-[#e8702a]">{t.treatmentName}</p>
                    <p className="text-[10px] text-white/40 mt-0.5">{t.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Review Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-gray-950 border border-white/15 rounded-3xl p-6 max-w-md w-full text-white shadow-2xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-playfair italic text-xl font-semibold">Write a Review</h3>
                <button
                  onClick={() => setModalOpen(false)}
                  className="text-white/60 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleAddReview} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#e8702a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-1">Procedure Received</label>
                  <input
                    type="text"
                    required
                    value={newReview.treatment}
                    onChange={(e) => setNewReview({ ...newReview, treatment: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#e8702a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-1">Star Rating</label>
                  <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    className="w-full bg-gray-900 border border-white/20 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#e8702a]"
                  >
                    <option value={5}>5 Stars ★★★★★</option>
                    <option value={4}>4 Stars ★★★★☆</option>
                    <option value={3}>3 Stars ★★★☆☆</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-1">Your Review</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe your treatment experience and results..."
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#e8702a]"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="mt-2 bg-[#e8702a] text-white text-sm font-semibold py-3 rounded-full hover:bg-[#d2611f] transition-colors cursor-pointer shadow-md shadow-[#e8702a]/20"
                >
                  Submit Patient Review
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
