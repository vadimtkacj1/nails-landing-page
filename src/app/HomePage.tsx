'use client';
import Header from '@/components/common/Header';
import HeroSection from './HeroSection';
import BookingSection from './BookingSection';
import ServicesSection from './ServicesSection';
import StorySection from './StorySection';
import ProductsSection from './ProductsSection';
import TreatmentsSection from './TreatmentsSection';
import GallerySection from './GallerySection';
import NewsSection from './NewsSection';
import ContactSection from './ContactSection';
import Footer from '@/components/common/Footer';

export default function HomePage() {
  return (
    <div className="w-full bg-[#fcf8ef]">
      <Header />
      <main>
        <HeroSection />
        <BookingSection />
        <ServicesSection />
        <StorySection />
        <ProductsSection />
        <TreatmentsSection />
        <NewsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}