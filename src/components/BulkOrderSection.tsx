import { motion } from "framer-motion";

const features = [
  { icon: "⚡", title: "Fast Preparation", desc: "Cooked to perfection, served at lightning speed." },
  { icon: "🔥", title: "Always Fresh & Hot", desc: "Sizzling hot straight from the pan to your plate." },
  { icon: "🚚", title: "Reliable Delivery", desc: "On-time, every time. No failed transactions." },
];

const BulkOrderSection = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gold text-glow-gold"
        >
          Scale Your Flavor Like a Blockchain.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-lg mb-16 font-body"
        >
          Enterprise-grade sisig for any occasion.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 text-center neon-border hover:border-fire/50 hover:glow-red hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-5xl mb-4 block">{f.icon}</span>
              <h3 className="font-display text-xl font-bold text-accent mb-3">{f.title}</h3>
              <p className="text-muted-foreground font-body">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BulkOrderSection;
