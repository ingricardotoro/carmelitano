import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ModalitiesSection from '@/components/sections/ModalitiesSection'
import EnrollmentSection from '@/components/sections/EnrollmentSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ModalitiesSection />
      <EnrollmentSection />
      <ContactSection />
      <Footer />
    </main>
  )
}