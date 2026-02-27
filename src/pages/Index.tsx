import HeroSection from "@/components/HeroSection";
import ScrollFrameBackground from "@/components/ScrollFrameAnimation";
import ProductShowcase from "@/components/ProductShowcase";
import BulkOrderSection from "@/components/BulkOrderSection";
import OrderProcess from "@/components/OrderProcess";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <ScrollFrameBackground />
      <div className="fixed inset-0 pointer-events-none bg-background/60" style={{ zIndex: 0 }} aria-hidden="true" />
      <div className="relative" style={{ zIndex: 1 }}>
        <HeroSection />
        <ProductShowcase />
        <BulkOrderSection />
        <OrderProcess />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
