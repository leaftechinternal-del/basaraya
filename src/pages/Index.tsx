import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
 import { CategorySection } from "@/components/CategorySection";
import { VisionMissionSection } from "@/components/VisionMissionSection";
import { ProductSection } from "@/components/ProductSection";
import { USPSection } from "@/components/USPSection";
import { CertificationSection } from "@/components/CertificationSection";
import { PartnershipSection } from "@/components/PartnershipSection";
import { MediaSection } from "@/components/MediaSection";
 import { GallerySection } from "@/components/GallerySection";
import { OrderSection } from "@/components/OrderSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
 import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
       <CategorySection />
      <VisionMissionSection />
      <ProductSection />
      <USPSection />
      <CertificationSection />
      <PartnershipSection />
      <MediaSection />
       <GallerySection />
      <OrderSection />
      <ContactSection />
      <Footer />
       <FloatingWhatsApp />
    </div>
  );
};

export default Index;
