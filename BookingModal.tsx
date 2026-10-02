import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, User, Check, Sparkles, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { TREATMENTS, SPECIALISTS, ClinicInfo } from '../data/clinicData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTreatmentId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedTreatmentId,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    treatmentId: preselectedTreatmentId || TREATMENTS[0].id,
    specialistId: SPECIALISTS[0].id,
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    timeSlot: '10:00 AM',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '12:00 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
  ];

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 7) {
      errs.phone = 'Please enter a valid phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const randomRef = 'REN-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomRef);
      setStep(4);
    }, 1200);
  };

  const selectedTreatment = TREATMENTS.find((t) => t.id === formData.treatmentId) || TREATMENTS[0];
  const selectedSpecialist = SPECIALISTS.find((s) => s.id === formData.specialistId) || SPECIALISTS[0];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-gray-950 border border-white/15 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-white relative flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 bg-gray-950/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#e8702a]/20 border border-[#e8702a]/40 flex items-center justify-center text-[#e8702a]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-playfair italic text-lg sm:text-xl font-semibold text-white">
                Book Consultation
              </h3>
              <p className="text-xs text-white/60">Rennova Aesthetic Clinic Concierge</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard Steps Indicator */}
        {step < 4 && (
          <div className="px-6 py-3 bg-white/5 border-b border-white/10 flex items-center justify-between text-xs font-medium text-white/60">
            <div className={`flex items-center gap-1.5 ${step === 1 ? 'text-[#e8702a] font-semibold' : ''}`}>
              <span className="w-5 h-5 rounded-full border flex items-center justify-center text-[10px]">1</span>
              <span>Treatment</span>
            </div>
            <span className="text-white/20">→</span>
            <div className={`flex items-center gap-1.5 ${step === 2 ? 'text-[#e8702a] font-semibold' : ''}`}>
              <span className="w-5 h-5 rounded-full border flex items-center justify-center text-[10px]">2</span>
              <span>Date & Time</span>
            </div>
            <span className="text-white/20">→</span>
            <div className={`flex items-center gap-1.5 ${step === 3 ? 'text-[#e8702a] font-semibold' : ''}`}>
              <span className="w-5 h-5 rounded-full border flex items-center justify-center text-[10px]">3</span>
              <span>Your Details</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 flex-1">
          {step === 1 && (
            <div className="flex flex-col gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                  1. Select Treatment
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TREATMENTS.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, treatmentId: t.id })}
                      className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        formData.treatmentId === t.id
                          ? 'bg-[#e8702a]/15 border-[#e8702a] text-white shadow-md'
                          : 'bg-white/5 border-white/10 hover:border-white/30 text-white/80'
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <span className="font-semibold text-sm">{t.title}</span>
                          <span className="text-xs font-mono text-[#e8702a] shrink-0">{t.price}</span>
                        </div>
                        <p className="text-xs text-white/60 mt-1 line-clamp-2">{t.shortDescription}</p>
                      </div>
                      <div className="mt-3 flex items-center gap-3 text-[11px] text-white/50">
                        <span>⏱ {t.duration}</span>
                        <span>• {t.category}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                  2. Select Practitioner
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {SPECIALISTS.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, specialistId: s.id })}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-2 ${
                        formData.specialistId === s.id
                          ? 'bg-[#e8702a]/15 border-[#e8702a] text-white'
                          : 'bg-white/5 border-white/10 hover:border-white/30 text-white/80'
                      }`}
                    >
                      <img
                        src={s.image}
                        alt={s.name}
                        className="w-12 h-12 rounded-full object-cover border border-white/20"
                      />
                      <div>
                        <p className="text-xs font-semibold">{s.name}</p>
                        <p className="text-[10px] text-white/60 line-clamp-1">{s.title}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Next: Choose Date & Time</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                  Select Preferred Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e8702a]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                  Select Time Slot
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeSlot: slot })}
                      className={`py-3 px-4 rounded-xl border text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        formData.timeSlot === slot
                          ? 'bg-[#e8702a] border-[#e8702a] text-white font-semibold'
                          : 'bg-white/5 border-white/10 hover:border-white/30 text-white/80'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>{slot}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#e8702a] shrink-0" />
                <p className="text-xs text-white/70 leading-relaxed">
                  Selected: <span className="text-white font-semibold">{selectedTreatment.title}</span> with{' '}
                  <span className="text-white font-semibold">{selectedSpecialist.name}</span> on{' '}
                  <span className="text-white font-semibold">{formData.date}</span> at{' '}
                  <span className="text-white font-semibold">{formData.timeSlot}</span>.
                </p>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-white/60 hover:text-white text-sm px-4 py-2"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Next: Patient Info</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Victoria Montgomery"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full bg-white/5 border rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none ${
                    errors.fullName ? 'border-red-500' : 'border-white/20 focus:border-[#e8702a]'
                  }`}
                />
                {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="victoria@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none ${
                      errors.email ? 'border-red-500' : 'border-white/20 focus:border-[#e8702a]'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none ${
                      errors.phone ? 'border-red-500' : 'border-white/20 focus:border-[#e8702a]'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1">
                  Specific Skin Concerns / Doctor Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about any sensitivities, past procedures, or specific aesthetic goals..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-[#e8702a]"
                />
              </div>

              <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white/60">
                🔒 Privacy Guarantee: Your personal medical details are strictly encrypted according to HIPAA guidelines.
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-white/60 hover:text-white text-sm px-4 py-2"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-semibold px-8 py-3 rounded-full transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Confirming...</span>
                  ) : (
                    <>
                      <span>Confirm Consultation</span>
                      <Check className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div className="flex flex-col items-center text-center py-6 gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center animate-bounce">
                <Check className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-playfair italic font-semibold text-white">
                Consultation Confirmed
              </h3>

              <p className="text-sm text-white/80 max-w-md">
                Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Your appointment has been successfully scheduled with our medical concierge team.
              </p>

              <div className="w-full bg-white/5 border border-white/15 rounded-2xl p-5 my-2 text-left flex flex-col gap-2.5 text-xs text-white/80">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/50">Booking Reference:</span>
                  <span className="font-mono text-[#e8702a] font-bold">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Treatment:</span>
                  <span className="font-semibold text-white">{selectedTreatment.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Specialist:</span>
                  <span className="font-semibold text-white">{selectedSpecialist.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Date & Time:</span>
                  <span className="font-semibold text-white">{formData.date} at {formData.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Location:</span>
                  <span className="text-white">{ClinicInfo.address}</span>
                </div>
              </div>

              <p className="text-xs text-white/60">
                A confirmation SMS and calendar invitation have been dispatched to <span className="text-white">{formData.email}</span>.
              </p>

              <button
                onClick={onClose}
                className="mt-4 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
