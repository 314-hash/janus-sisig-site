import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section aria-labelledby="cta-heading" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald/10 to-background" />
      <div className="relative container mx-auto px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="cta-heading"
          className="font-display text-4xl md:text-6xl font-black text-foreground mb-6"
        >
          Ready to <span className="text-fire text-glow-red">Stake</span> Your{" "}
          <span className="text-gold text-glow-gold">Hunger</span>?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <button className="px-10 py-5 bg-fire text-foreground font-display font-bold text-xl rounded-lg border-2 border-gold/50 hover:scale-105 hover:glow-gold transition-all duration-300 animate-pulse-glow">
            Order Now
          </button>
          <button className="px-10 py-5 bg-transparent text-gold font-display font-bold text-xl rounded-lg border-2 border-gold/50 hover:bg-gold/10 hover:scale-105 transition-all duration-300 group">
            <span className="relative">
              Request Bulk Quote
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
