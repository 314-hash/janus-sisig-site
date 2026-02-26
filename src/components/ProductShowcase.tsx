import { motion } from "framer-motion";

const SteamEffect = () => (
  <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-3 pointer-events-none">
    {[0, 0.3, 0.6, 0.9].map((delay, i) => (
      <motion.div
        key={i}
        className="w-2 h-8 bg-foreground/20 rounded-full blur-sm"
        animate={{ y: [0, -40], opacity: [0, 0.5, 0], scaleX: [1, 1.5] }}
        transition={{ duration: 2, delay, repeat: Infinity, ease: "easeOut" }}
      />
    ))}
  </div>
);

const bulkItems = [
  "Parties", "Corporate events", "Crypto meetups",
  "Birthdays", "DAO gatherings", "Street festivals",
];

const ProductShowcase = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center mb-16 text-gold text-glow-gold"
        >
          🍳 Our Sizzling Offerings
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Single Order Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-card rounded-xl p-8 neon-border hover:glow-gold transition-all duration-500 group"
          >
            <div className="relative w-full h-48 mb-6 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
              <SteamEffect />
              <span className="text-6xl">🍳</span>
              <motion.span
                className="absolute bottom-2 right-2 text-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🌶️
              </motion.span>
            </div>
            <h3 className="font-display text-2xl font-bold text-fire mb-3">Single Order</h3>
            <p className="text-muted-foreground text-lg font-body">
              Perfect for personal cravings, lunch, dinner, midnight grind.
            </p>
          </motion.div>

          {/* Bulk Order Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-card rounded-xl p-8 neon-border hover:glow-gold transition-all duration-500 group"
          >
            <div className="relative w-full h-48 mb-6 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
              <SteamEffect />
              <span className="text-6xl">📦</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-accent mb-3">Bulk Orders</h3>
            <p className="text-muted-foreground text-lg font-body mb-4">Ideal for:</p>
            <ul className="grid grid-cols-2 gap-2">
              {bulkItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground font-body">
                  <span className="text-gold">✓</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
