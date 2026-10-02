import React, { useState } from 'react';
import { X, ZoomIn, Calendar, Sparkles } from 'lucide-react';
import { BeforeAfterItem } from '../types';

interface LightboxModalProps {
  item: BeforeAfterItem | null;
  onClose: () => void;
  onBook: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onBook }) => {
  const [sliderPos, setSliderPos] = useState<number>(50);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-gray-950 border border-white/15 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl text-white relative flex flex-col">
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#e8702a] font-semibold">
              {item.category} • {item.treatmentName}
            </span>
            <h2 className="text-xl sm:text-2xl font-playfair italic font-semibold text-white">
              {item.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-6">
          {/* Interactive Comparison Slider */}
          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden select-none border border-white/20">
            {/* After Image (Background) */}
            <img
              src={item.afterImage}
              alt="After treatment"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full z-10 border border-white/20">
              AFTER ({item.sessionsCount} {item.sessionsCount === 1 ? 'session' : 'sessions'})
            </span>

            {/* Before Image (Clipped Overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={item.beforeImage}
                alt="Before treatment"
                className="absolute top-0 left-0 h-full w-none max-w-none object-cover"
                style={{ width: '100%', height: '100%', minWidth: '100%' }}
              />
              <span className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                BEFORE
              </span>
            </div>

            {/* Drag Handle Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize z-20 flex items-center justify-center"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center font-bold text-xs shadow-lg border border-gray-300">
                ↔
              </div>
            </div>

            {/* Interactive Range Input overlay */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
            <div className="max-w-xl">
              <p className="text-xs text-white/60 mb-1">Clinical Case Details:</p>
              <p className="text-sm text-white/90 leading-relaxed">{item.description}</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onBook();
              }}
              className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs font-semibold px-6 py-3 rounded-full transition-all shrink-0 flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Similar Treatment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
