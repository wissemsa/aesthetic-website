import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { PageRoute, Treatment, BeforeAfterItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';
import { BookingModal } from './components/BookingModal';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { LightboxModal } from './components/LightboxModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { GalleryPage } from './pages/GalleryPage';
import { SpecialistsPage } from './pages/SpecialistsPage';
import { PricingPage } from './pages/PricingPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FAQPage } from './pages/FAQPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

const VALID_ROUTES: PageRoute[] = [
  'home',
  'about',
  'treatments',
  'gallery',
  'specialists',
  'pricing',
  'testimonials',
  'faq',
  'blog',
  'contact',
];

const getRouteFromHash = (): PageRoute => {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.replace('#', '');
  return VALID_ROUTES.includes(hash as PageRoute) ? (hash as PageRoute) : 'home';
};

export function App() {
  const [activeRoute, setActiveRoute] = useState<PageRoute>(getRouteFromHash);

  // Modals state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTreatmentId, setBookingTreatmentId] = useState<string | undefined>(undefined);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<BeforeAfterItem | null>(null);

  // Handle Hash/URL routing and browser Back/Forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const route = getRouteFromHash();
      setActiveRoute(route);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    // Initial URL sync if hash is missing
    if (!window.location.hash && activeRoute === 'home') {
      window.history.replaceState(null, '', '#home');
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, [activeRoute]);

  const handleRouteChange = (route: PageRoute) => {
    if (route === activeRoute) return;
    window.location.hash = route;
    setActiveRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (treatmentId?: string) => {
    setBookingTreatmentId(treatmentId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#e8702a] selection:text-white flex flex-col justify-between overflow-x-hidden">
      {/* Fixed Sticky Luxury Navbar */}
      <Navbar
        activeRoute={activeRoute}
        onRouteChange={handleRouteChange}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page View with PageTransition */}
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <PageTransition pageKey={activeRoute}>
            {activeRoute === 'home' && (
              <HomePage
                onOpenBooking={handleOpenBooking}
                onOpenTreatmentModal={(treatment) => setSelectedTreatment(treatment)}
                onOpenLightbox={(item) => setSelectedLightboxItem(item)}
                onRouteChange={handleRouteChange}
              />
            )}

            {activeRoute === 'about' && (
              <AboutPage onOpenBooking={() => handleOpenBooking()} />
            )}

            {activeRoute === 'treatments' && (
              <TreatmentsPage
                onOpenBooking={(id) => handleOpenBooking(id)}
                onOpenTreatmentModal={(treatment) => setSelectedTreatment(treatment)}
              />
            )}

            {activeRoute === 'gallery' && (
              <GalleryPage
                onOpenLightbox={(item) => setSelectedLightboxItem(item)}
                onOpenBooking={() => handleOpenBooking()}
              />
            )}

            {activeRoute === 'specialists' && (
              <SpecialistsPage onOpenBooking={() => handleOpenBooking()} />
            )}

            {activeRoute === 'pricing' && (
              <PricingPage onOpenBooking={(id) => handleOpenBooking(id)} />
            )}

            {activeRoute === 'testimonials' && (
              <TestimonialsPage onOpenBooking={() => handleOpenBooking()} />
            )}

            {activeRoute === 'faq' && (
              <FAQPage onOpenBooking={() => handleOpenBooking()} />
            )}

            {activeRoute === 'blog' && (
              <BlogPage onOpenBooking={() => handleOpenBooking()} />
            )}

            {activeRoute === 'contact' && (
              <ContactPage onOpenBooking={() => handleOpenBooking()} />
            )}
          </PageTransition>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onRouteChange={handleRouteChange}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Booking Wizard Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedTreatmentId={bookingTreatmentId}
      />

      {/* Treatment Details Modal */}
      <TreatmentDetailModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onBook={(id) => handleOpenBooking(id)}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedLightboxItem}
        onClose={() => setSelectedLightboxItem(null)}
        onBook={() => handleOpenBooking()}
      />
    </div>
  );
}

export default App;
