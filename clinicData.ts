import { Treatment, Specialist, BeforeAfterItem, Testimonial, FAQItem, BlogPost } from '../types';

export const ClinicInfo = {
  name: "WESS_SAID",
  tagline: "Aesthetics that goes beyond beauty",
  phone: "+21653328275",
  whatsapp: "https://wa.me/21653328275",
  email: "concierge@wesssaid.com",
  address: "450 Beverly Hills Medical Plaza, Suite 800, Los Angeles, CA 90210",
  hours: [
    { days: "Monday - Friday", time: "8:00 AM - 7:00 PM" },
    { days: "Saturday", time: "9:00 AM - 5:00 PM" },
    { days: "Sunday", time: "By Special Appointment" }
  ],
  instagram: "https://instagram.com/rennovaclinic",
  facebook: "https://facebook.com/rennovaclinic",
  mapsUrl: "https://maps.google.com/?q=Beverly+Hills+Medical+Plaza"
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'rennova-glow-facial',
    title: 'Rennova Signature Glow Facial',
    category: 'Facial Aesthetics',
    shortDescription: 'Deep dermal cleansing combined with custom enzymatic exfoliation and hyaluronic infusion.',
    fullDescription: 'Our signature clinical facial addresses skin congestion, dullness, and dehydration at the cellular level. Using medical-grade serums customized to your skin profile, this treatment restores natural radiance without downtime.',
    benefits: ['Immediate radiant glow', 'Refined pore structure', 'Deep cellular hydration', 'Boosted collagen response'],
    duration: '60 mins',
    recoveryTime: 'None (Immediate return to activities)',
    price: '$280',
    featured: true,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    suitableFor: ['Dull skin', 'Uneven texture', 'Dehydration', 'Congested pores']
  },
  {
    id: 'dermal-restoration',
    title: 'Volumetric Dermal Contouring',
    category: 'Facial Aesthetics',
    shortDescription: 'Precision hyaluronic matrix placement to restore lost midface volume and redefine jawlines.',
    fullDescription: 'Using ultra-pure biocompatible hyaluronic acid gels, our senior injectors sculpt natural cheek contours, smooth nasolabial folds, and harmonize facial proportions with artful micro-injections.',
    benefits: ['Natural volume restoration', 'Symmetrical jawline definition', 'Long-lasting structural support', 'Minimally invasive'],
    duration: '45 mins',
    recoveryTime: '1 - 2 days (Mild swelling possible)',
    price: '$750 / syringe',
    featured: true,
    image: 'https://images.unsplash.com/photo-1512290900673-70020041132e?auto=format&fit=crop&w=800&q=80',
    suitableFor: ['Volume loss', 'Deep folds', 'Asymmetry', 'Loss of jawline contour']
  },
  {
    id: 'botulinum-toxin',
    title: 'Micro-Expression Relaxation (Botox/Xeomin)',
    category: 'Facial Aesthetics',
    shortDescription: 'Targeted neuromodulator micro-dosing for a refreshed, un-frozen natural smooth appearance.',
    fullDescription: 'We specialize in subtle, micro-dose neuromodulator application that relaxes dynamic dynamic lines around forehead, crow’s feet, and frown lines while maintaining authentic facial expression and emotion.',
    benefits: ['Smoothed forehead lines', 'Softened frown & eye wrinkles', 'Prevents deep line formation', 'Natural expressive movement'],
    duration: '30 mins',
    recoveryTime: 'Immediate',
    price: '$18 / unit',
    featured: false,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    suitableFor: ['Crow’s feet', 'Forehead creases', 'Glabellar lines', 'Nefertiti lift']
  },
  {
    id: 'fractional-rf-microneedling',
    title: 'Fractional RF Micro-Remodeling',
    category: 'Skin Rejuvenation',
    shortDescription: 'Radiofrequency micro-needling designed to stimulate deep structural elastin and collagen fibers.',
    fullDescription: 'Combining insulated gold micro-needles with thermal radiofrequency energy, this advanced therapy tightens lax skin, smooths acne scars, and drastically improves overall skin elasticity.',
    benefits: ['Deep dermal collagen synthesis', 'Scar reduction', 'Skin tightening & firming', 'Refined skin grain'],
    duration: '75 mins',
    recoveryTime: '2 - 3 days mild erythema',
    price: '$850',
    featured: true,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80',
    suitableFor: ['Laxity', 'Acne scarring', 'Fine lines', 'Enlarged pores']
  },
  {
    id: 'ipl-photorejuvenation',
    title: 'Advanced IPL Pigment & Vascular Laser',
    category: 'Laser & Anti-Aging',
    shortDescription: 'Targeted light therapy targeting sun spots, rosacea, spider veins, and hyperpigmentation.',
    fullDescription: 'Broad-spectrum light pulses break down unwanted brown pigmentation and coagulate broken facial capillaries, leaving behind a clear, uniform tone and reduced redness.',
    benefits: ['Erases sun spots & freckles', 'Calms facial redness & rosacea', 'Unifies skin tone', 'Stimulates superficial collagen'],
    duration: '45 mins',
    recoveryTime: '1 - 2 days (Minor dark spots flaking off)',
    price: '$450',
    featured: true,
    image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=800&q=80',
    suitableFor: ['Rosacea', 'Sun damage', 'Age spots', 'Capillary redness']
  },
  {
    id: 'body-sculpt-cryo',
    title: 'Body Sculpting & Cryo-Lipolysis',
    category: 'Body Contouring',
    shortDescription: 'Non-invasive targeted fat reduction and muscle stimulation for refined body silhouette.',
    fullDescription: 'Using dual-action cryo-cooling and high-intensity electromagnetic pulses, we target stubborn localized fat deposits while toning underlying muscle tissue without surgery.',
    benefits: ['Targeted fat cell elimination', 'Enhanced muscle definition', 'Zero downtime or incisions', 'Permanent fat cell reduction'],
    duration: '60 mins',
    recoveryTime: 'None',
    price: '$1,200 / area',
    featured: false,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    suitableFor: ['Stubborn localized fat', 'Abdominal definition', 'Thigh tightening']
  }
];

export const SPECIALISTS: Specialist[] = [
  {
    id: 'dr-elena-vance',
    name: 'Dr. Elena Vance, MD',
    title: 'Medical Director & Chief Dermatologist',
    specialty: 'Board-Certified Aesthetic Dermatologist',
    experience: '16+ Years Experience',
    credentials: ['Harvard Medical School MD', 'American Board of Dermatology', 'Fellow of ASLMS'],
    bio: 'Dr. Vance is internationally recognized for her conservative, artful approach to facial rejuvenation and non-surgical facial restoration.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    socials: {
      instagram: 'https://instagram.com/drelenavance',
      linkedin: 'https://linkedin.com/in/drelenavance'
    }
  },
  {
    id: 'dr-marcus-thorne',
    name: 'Dr. Marcus Thorne, MD',
    title: 'Facial Plastic & Reconstructive Surgeon',
    specialty: 'Minimally Invasive Facial Aesthetics',
    experience: '14+ Years Experience',
    credentials: ['Johns Hopkins MD', 'AAACD Certified', 'Pioneer in Micro-Dosing Laser Protocols'],
    bio: 'Specializing in structural facial harmony and advanced laser therapies, Dr. Thorne brings mathematical precision to every contouring treatment.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    socials: {
      instagram: 'https://instagram.com/drmarcusthorne',
      linkedin: 'https://linkedin.com/in/drmarcusthorne'
    }
  },
  {
    id: 'sophia-chen-np',
    name: 'Sophia Chen, MS, AGNP-C',
    title: 'Senior Aesthetic Nurse Practitioner',
    specialty: 'Advanced Dermal Fillers & Biostimulators',
    experience: '10+ Years Experience',
    credentials: ['UCLA Master of Nursing', 'Certified Master Injector', 'Galderma Key Opinion Leader'],
    bio: 'Sophia is renowned for her master level precision in lip symmetry, tear-trough restoration, and biostimulatory collagen treatments.',
    image: 'https://images.unsplash.com/photo-1594824813571-24a699857af1?auto=format&fit=crop&w=800&q=80',
    socials: {
      instagram: 'https://instagram.com/sophiachen_np'
    }
  }
];

export const BEFORE_AFTER_GALLERY: BeforeAfterItem[] = [
  {
    id: 'ba-rosacea-tone',
    title: 'Rosacea Calming & Erythema Reduction',
    category: 'Skin Rejuvenation',
    treatmentName: 'IPL Light Therapy & Calming Infusion',
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    description: 'Patient presented with severe facial redness and capillary inflammation. After 3 targeted IPL sessions, skin tone achieved clear, calm equilibrium.',
    sessionsCount: 3
  },
  {
    id: 'ba-jawline-contour',
    title: 'Midface Volume & Jawline Definition',
    category: 'Facial Aesthetics',
    treatmentName: 'Volumetric Hyaluronic Contouring',
    beforeImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    description: 'Restoration of lost cheek structure and subtle definition along the mandibular border for a youthful, lifted profile.',
    sessionsCount: 1
  },
  {
    id: 'ba-texture-microneedle',
    title: 'Dermal Texture & Scar Remodeling',
    category: 'Skin Rejuvenation',
    treatmentName: 'Fractional RF Micro-Remodeling',
    beforeImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
    description: 'Significant smoothing of post-acne texture irregularities and enlarged pores following a tailored 2-session RF regimen.',
    sessionsCount: 2
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    patientName: 'Victoria Montgomery',
    age: 38,
    treatmentName: 'Volumetric Contouring & IPL',
    rating: 5,
    comment: 'The level of care at WESS_SAID is unmatched. Dr. Vance took time to examine my skin under cross-polarized light before recommending anything. The results are subtle, completely natural, and I feel revitalized.',
    date: 'August 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-2',
    patientName: 'Julian Thorne',
    age: 44,
    treatmentName: 'Micro-Expression Relaxation',
    rating: 5,
    comment: 'As an executive, I wanted to look rested without looking fake or frozen. Sophia Chen mastered the exact touch. My forehead looks smooth, yet my colleagues just think I got a long vacation!',
    date: 'July 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-3',
    patientName: 'Claire DuBois',
    age: 31,
    treatmentName: 'Rennova Signature Glow Facial',
    rating: 5,
    comment: 'I book the Signature Glow facial before every major event or photo shoot. My skin glows for weeks afterward and makeup glides on like silk. Truly a 5-star luxury experience.',
    date: 'August 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What sets Rennova Aesthetic Clinic apart from traditional medspas?',
    answer: 'Rennova operates as a physician-led medical aesthetic institute. Every patient undergoes an in-depth digital skin analysis and consultation with a board-certified dermatologist or master nurse practitioner. We focus on natural harmony, high-tech non-invasive protocols, and personalized skin health.'
  },
  {
    id: 'faq-2',
    category: 'Treatments',
    question: 'How do I know which treatment is right for my specific skin concerns?',
    answer: 'During your initial consultation, we utilize high-resolution imaging and cross-polarized light diagnostics to assess skin thickness, vascular patterns, and collagen density. We then build a bespoke treatment roadmap aligned with your aesthetic goals and schedule.'
  },
  {
    id: 'faq-3',
    category: 'Safety & Recovery',
    question: 'Is there downtime associated with injectables and RF laser treatments?',
    answer: 'Most of our treatments are engineered with minimal to zero downtime. Micro-dose injectables carry zero downtime. Fractional RF and laser treatments may cause mild pinkness for 24-48 hours, which easily resolves with our complimentary post-care cooling matrix.'
  },
  {
    id: 'faq-4',
    category: 'Pricing & Booking',
    question: 'How far in advance should I book my consultation or event prep?',
    answer: 'We recommend scheduling consultations 2 to 3 weeks in advance. For special events (weddings, galas, broadcasts), we advise starting a treatment plan 6 to 8 weeks prior for optimal dermal remodeling and peak glow.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-dermal-matrix',
    title: 'Understanding Dermal Matrix Preservation in Your 30s & 40s',
    excerpt: 'How biostimulators and micro-focused energy maintain structural collagen before deep laxity begins.',
    content: 'Collagen degradation accelerates by approximately 1% per year after age 25. Modern aesthetic dermatology prioritizes proactive matrix preservation—stimulating your fibroblast cells through micro-needling and biostimulatory gels rather than waiting for structural volume loss.',
    category: 'Skin Science',
    author: 'Dr. Elena Vance, MD',
    readTime: '5 min read',
    date: 'August 2, 2026',
    image: 'https://images.unsplash.com/photo-1512290900673-70020041132e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-rosacea-guide',
    title: 'The Modern Clinical Roadmap for Calming Persistent Facial Erythema',
    excerpt: 'Combining targeted light wavelengths with anti-inflammatory topicals to soothe sensitive skin.',
    content: 'Facial redness and rosacea stem from hypersensitive micro-vascular networks near the epidermis. Advanced IPL wavelengths gently target hyper-reactive capillary networks without damaging surrounding dermal tissue, returning balance to sensitive skin profiles.',
    category: 'Clinical Dermatology',
    author: 'Sophia Chen, AGNP-C',
    readTime: '4 min read',
    date: 'July 24, 2026',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80'
  }
];
