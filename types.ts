export type PageRoute =
  | 'home'
  | 'about'
  | 'treatments'
  | 'gallery'
  | 'specialists'
  | 'pricing'
  | 'testimonials'
  | 'faq'
  | 'blog'
  | 'contact'
  | 'booking';

export interface Treatment {
  id: string;
  title: string;
  category: 'Facial Aesthetics' | 'Skin Rejuvenation' | 'Body Contouring' | 'Laser & Anti-Aging';
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  duration: string;
  recoveryTime: string;
  price: string;
  featured?: boolean;
  image: string;
  suitableFor: string[];
}

export interface Specialist {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  credentials: string[];
  bio: string;
  image: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
  };
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  treatmentName: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  sessionsCount: number;
}

export interface Testimonial {
  id: string;
  patientName: string;
  age?: number;
  treatmentName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Treatments' | 'Safety & Recovery' | 'Pricing & Booking';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  image: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  treatmentId: string;
  specialistId: string;
  date: string;
  timeSlot: string;
  notes: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}
