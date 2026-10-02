import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS } from '../data/clinicData';
import { BlogPost } from '../types';
import { Calendar, X } from 'lucide-react';

interface BlogPageProps {
  onOpenBooking: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onOpenBooking }) => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

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
            Dermatological Research & Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-playfair italic font-semibold text-white leading-tight">
            The WESS_SAID Aesthetic Journal
          </h1>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Explorations in dermal biology, non-invasive collagen remodeling, and clinical skin longevity written by our senior medical faculty.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              onClick={() => setActiveArticle(article)}
              className="bg-gray-950 border border-white/10 rounded-3xl overflow-hidden hover:border-[#e8702a]/60 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-xl hover:shadow-[#e8702a]/10"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-[10px] text-white uppercase tracking-wider font-semibold px-3 py-1 rounded-full border border-white/15">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 sm:p-8 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-xs text-white/50">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-playfair italic font-semibold text-white group-hover:text-[#e8702a] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between text-xs text-[#e8702a] font-semibold border-t border-white/5 mt-2">
                <span>Read Full Article →</span>
                <span className="text-white/40 font-normal">{article.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-gray-950 border border-white/15 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-white relative flex flex-col gap-6 shadow-2xl"
            >
              <div className="flex justify-between items-start gap-4 border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#e8702a] font-semibold">
                    {activeArticle.category} • {activeArticle.readTime}
                  </span>
                  <h2 className="text-2xl font-playfair italic font-semibold text-white mt-1">
                    {activeArticle.title}
                  </h2>
                  <p className="text-xs text-white/50 mt-1">By {activeArticle.author} • {activeArticle.date}</p>
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="h-52 rounded-2xl overflow-hidden">
                <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover" />
              </div>

              <div className="text-sm text-white/80 leading-relaxed flex flex-col gap-4">
                <p>{activeArticle.content}</p>
                <p>
                  At WESS_SAID, our clinical team continuously evaluates peer-reviewed dermatological studies to optimize our treatment protocols, ensuring maximum efficacy and patient safety.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="text-xs text-white/60 hover:text-white cursor-pointer"
                >
                  Close Reader
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenBooking();
                  }}
                  className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 cursor-pointer shadow-md shadow-[#e8702a]/20"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Related Consultation</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
