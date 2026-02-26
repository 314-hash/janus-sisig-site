import { motion } from "framer-motion";
import singleOrderImg from "@/assets/single-order.png";
import duoOrderImg from "@/assets/duo-order.png";
import bulkOrderImg from "@/assets/bulk-order.png";
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Single Order Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-card rounded-xl p-8 neon-border hover:glow-gold transition-all duration-500 group"
          >
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
              <img src={singleOrderImg} alt="Single order sisig" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-2xl font-bold text-fire mb-3">Single Order</h3>
            <p className="text-muted-foreground text-lg font-body">
              Perfect for personal cravings, lunch, dinner, midnight grind.
            </p>
          </motion.div>

          {/* Duo Order Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative bg-card rounded-xl p-8 neon-border hover:glow-gold transition-all duration-500 group"
          >
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
              <img src={duoOrderImg} alt="Duo order sisig" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-2xl font-bold text-gold mb-3">Duo Order</h3>
            <p className="text-muted-foreground text-lg font-body">
              Share the sizzle — perfect for date nights, bro meals, or partner grind sessions.
            </p>
          </motion.div>

          {/* Bulk Order Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-card rounded-xl p-8 neon-border hover:glow-gold transition-all duration-500 group"
          >
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
              <img src={bulkOrderImg} alt="Bulk order sisig" className="w-full h-full object-cover" />
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
