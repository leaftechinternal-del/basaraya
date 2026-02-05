import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductSection } from "@/components/ProductSection";
import { USPSection } from "@/components/USPSection";
import { CertificationSection } from "@/components/CertificationSection";
import { OrderSection } from "@/components/OrderSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <USPSection />
      <CertificationSection />
      <OrderSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
