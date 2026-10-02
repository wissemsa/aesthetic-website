import React from 'react';
import { X, Clock, Calendar, CheckCircle, Shield, AlertCircle, Sparkles } from 'lucide-react';
import { Treatment } from '../types';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBook: (treatmentId: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onBook,
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-gray-950 border border-white/15 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-white relative">
        <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-t-3xl">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-black/50 backdrop-blur-md hover:bg-black/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1 bg-[#e8702a] text-white rounded-full">
              {treatment.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-playfair italic font-semibold text-white mt-2">
              {treatment.title}
            </h2>
          </div>
        </div>

        <div className="p-6 flex flex-col gap-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-white/5 border border-white/10 p-3 rounded-2xl flex flex-col items-center text-center">
              <Clock className="w-4 h-4 text-[#e8702a] mb-1" />
              <span className="text-[10px] text-white/50 uppercase tracking-wider">Duration</span>
              <span className="text-xs font-semibold text-white">{treatment.duration}</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-3 rounded-2xl flex flex-col items-center text-center">
              <Shield className="w-4 h-4 text-[#e8702a] mb-1" />
              <span className="text-[10px] text-white/50 uppercase tracking-wider">Recovery</span>
              <span className="text-xs font-semibold text-white">{treatment.recoveryTime}</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-3 rounded-2xl flex flex-col items-center text-center col-span-2 sm:col-span-1">
              <Sparkles className="w-4 h-4 text-[#e8702a] mb-1" />
              <span className="text-[10px] text-white/50 uppercase tracking-wider">Pricing</span>
              <span className="text-xs font-semibold text-[#e8702a]">{treatment.price}</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
              Clinical Overview
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">{treatment.fullDescription}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
              Key Clinical Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {treatment.benefits.map((b, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
              Indicated For
            </h3>
            <div className="flex flex-wrap gap-2">
              {treatment.suitableFor.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/10 border border-white/15 text-white/80 rounded-full text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-lg font-mono text-[#e8702a] font-bold">{treatment.price}</span>
            <button
              onClick={() => {
                onClose();
                onBook(treatment.id);
              }}
              className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book This Treatment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
