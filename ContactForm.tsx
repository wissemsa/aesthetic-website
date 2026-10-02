import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from 'lucide-react';
import { ContactFormData } from '../types';
import { TREATMENTS, ClinicInfo } from '../data/clinicData';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    treatment: TREATMENTS[0].title,
    preferredDate: '',
    preferredTime: 'Morning',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
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
    if (!formData.message.trim()) errs.message = 'Please include a message or inquiry';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="w-full">
      {submitted ? (
        <div className="bg-white/5 border border-emerald-500/30 rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center gap-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-playfair italic font-semibold text-white">
            Message Received
          </h3>
          <p className="text-sm text-white/80 max-w-md leading-relaxed">
            Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our medical concierge team will reach out to you within 2 hours at <span className="text-white">{formData.phone}</span>.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                treatment: TREATMENTS[0].title,
                preferredDate: '',
                preferredTime: 'Morning',
                message: '',
              });
            }}
            className="mt-4 bg-white text-gray-900 font-semibold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Victoria Montgomery"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none ${
                  errors.name ? 'border-red-500' : 'border-white/20 focus:border-[#e8702a]'
                }`}
              />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="victoria@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none ${
                  errors.email ? 'border-red-500' : 'border-white/20 focus:border-[#e8702a]'
                }`}
              />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 019-2834"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none ${
                  errors.phone ? 'border-red-500' : 'border-white/20 focus:border-[#e8702a]'
                }`}
              />
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                Treatment of Interest
              </label>
              <select
                value={formData.treatment}
                onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e8702a]"
              >
                {TREATMENTS.map((t) => (
                  <option key={t.id} value={t.title} className="bg-gray-900 text-white">
                    {t.title}
                  </option>
                ))}
                <option value="General Consultation" className="bg-gray-900 text-white">
                  General Aesthetic Consultation
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
              Your Message or Concern *
            </label>
            <textarea
              rows={4}
              placeholder="Describe your aesthetic goals or any questions about our procedures..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full bg-black/40 border rounded-xl p-4 text-white text-sm focus:outline-none ${
                errors.message ? 'border-red-500' : 'border-white/20 focus:border-[#e8702a]'
              }`}
            />
            {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-[#e8702a] hover:bg-[#d2611f] text-white font-semibold text-sm py-3.5 px-8 rounded-full transition-all hover:scale-[1.01] active:scale-95 shadow-lg hover:shadow-[#e8702a]/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <span>Sending Inquiry...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Direct Inquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
