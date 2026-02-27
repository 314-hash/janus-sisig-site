import HeroSection from "@/components/HeroSection";
import ScrollFrameAnimation from "@/components/ScrollFrameAnimation";
import ProductShowcase from "@/components/ProductShowcase";
import BulkOrderSection from "@/components/BulkOrderSection";
import OrderProcess from "@/components/OrderProcess";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ScrollFrameAnimation />
      <ProductShowcase />
      <BulkOrderSection />
      <OrderProcess />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
