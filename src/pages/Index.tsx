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
import { OrderSection } from "@/components/OrderSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

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
      <OrderSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
