import { motion } from "framer-motion";
import logoImg from "@/assets/crypto-sisig-logo.png";

const FloatingCoin = ({ delay, x, y }: { delay: number; x: string; y: string }) => (
  <motion.div
    className="absolute text-gold text-2xl pointer-events-none"
    style={{ left: x, top: y }}
    animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0], opacity: [0.4, 0.8, 0.4] }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    ₿
  </motion.div>
);

const HeroSection = () => {
  return (
    <header role="banner" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg animate-grid-move opacity-40" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      {/* Floating coins */}
      <FloatingCoin delay={0} x="10%" y="20%" />
      <FloatingCoin delay={1} x="85%" y="15%" />
      <FloatingCoin delay={2} x="75%" y="70%" />
      <FloatingCoin delay={0.5} x="15%" y="75%" />
      <FloatingCoin delay={1.5} x="50%" y="10%" />
      <FloatingCoin delay={3} x="90%" y="50%" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={logoImg}
            alt="Janus' Crypto Sisig Logo"
            className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full border-2 border-gold/30 glow-gold"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body"
        >
          From single cravings to bulk celebrations — we serve flavor at block-level scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-fire text-foreground font-display font-bold text-lg rounded-lg border-2 border-gold/50 glow-red hover:scale-105 hover:glow-gold transition-all duration-300 animate-pulse-glow">
            Order Single Meal
          </button>
          <button className="px-8 py-4 bg-emerald text-foreground font-display font-bold text-lg rounded-lg border-2 border-gold/50 glow-green hover:scale-105 hover:glow-gold transition-all duration-300">
            Bulk / Event Orders
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;
