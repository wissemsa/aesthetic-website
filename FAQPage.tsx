import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/clinicData';
import { Search, MessageCircle, Calendar } from 'lucide-react';
import { ClinicInfo } from '../data/clinicData';

interface FAQPageProps {
  onOpenBooking: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenBooking }) => {
  const [activeFaq, setActiveFaq] = useState<string | null>(FAQ_ITEMS[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General', 'Treatments', 'Safety & Recovery', 'Pricing & Booking'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full bg-black text-white pt-28 pb-20 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto flex flex-col gap-3"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#e8702a]">
            Patient Knowledge Base
          </span>
          <h1 className="text-4xl sm:text-5xl font-playfair italic font-semibold text-white leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Find immediate answers regarding procedure preparation, recovery timelines, medical credentials, and scheduling.
          </p>
        </motion.div>

        {/* Filter & Search */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-950 p-3 sm:p-4 rounded-3xl border border-white/10 shadow-xl"
        >
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none relative">
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
                    layoutId="activeFaqCategory"
                    className="absolute inset-0 bg-[#e8702a] rounded-full -z-10 shadow-md shadow-[#e8702a]/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/15 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#e8702a] transition-all"
            />
          </div>
        </motion.div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length === 0 ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-10 text-xs text-white/50"
              >
                No questions found matching your search.
              </motion.p>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = activeFaq === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="bg-gray-950 border border-white/10 rounded-2xl overflow-hidden transition-colors hover:border-white/20"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                      className="w-full text-left p-5 text-sm sm:text-base font-semibold text-white flex items-center justify-between gap-4 cursor-pointer hover:text-[#e8702a] transition-colors"
                    >
                      <span>{faq.question}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-xl font-mono text-[#e8702a] shrink-0"
                      >
                        {isOpen ? '−' : '+'}
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-white/75 leading-relaxed border-t border-white/5 pt-3">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>

        {/* Support Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xl"
        >
          <div>
            <h3 className="text-lg font-playfair italic font-semibold text-white">
              Have a Specific Unanswered Medical Question?
            </h3>
            <p className="text-xs text-white/60 mt-1">
              Our clinical concierge team is ready to answer your questions directly via WhatsApp or Phone.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={ClinicInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-600/20"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenBooking}
              className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer shadow-md shadow-[#e8702a]/20"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
