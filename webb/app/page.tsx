import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSlider } from "@/components/hero-slider"
import { BrandsSection } from "@/components/brands-section"
import { ServiceCards } from "@/components/service-cards"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ServicesSection } from "@/components/services-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <BrandsSection />
      <ServiceCards />
      <WhyChooseUs />
      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
