import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import BulkOrderSection from "@/components/BulkOrderSection";
import OrderProcess from "@/components/OrderProcess";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ProductShowcase />
      <BulkOrderSection />
      <OrderProcess />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
