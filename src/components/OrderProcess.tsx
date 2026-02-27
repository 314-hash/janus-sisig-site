import { motion } from "framer-motion";

const steps = [
  { num: 1, label: "Choose Order Type", icon: "🍽️" },
  { num: 2, label: "Confirm Quantity", icon: "📝" },
  { num: 3, label: "Delivery Details", icon: "📍" },
  { num: 4, label: "Receive & Enjoy", icon: "🎉" },
];

const OrderProcess = () => {
  return (
    <section aria-labelledby="process-heading" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="process-heading"
          className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-gold text-glow-gold"
        >
          Simple as Sending a Transaction.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-lg mb-16 font-body"
        >
          Four blocks to flavor confirmation.
        </motion.p>

        <div className="relative max-w-3xl mx-auto">
          {/* Progress line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:hidden" />
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-border" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative flex md:flex-col items-center gap-4 md:text-center"
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-emerald border-2 border-gold/50 flex items-center justify-center text-2xl shrink-0 glow-gold"
                  whileInView={{
                    boxShadow: [
                      "0 0 10px hsl(42 96% 64% / 0.2)",
                      "0 0 25px hsl(42 96% 64% / 0.5)",
                      "0 0 10px hsl(42 96% 64% / 0.2)",
                    ],
                  }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                >
                  {step.icon}
                </motion.div>
                <div>
                  <p className="text-gold-dim font-display text-xs tracking-widest mb-1">BLOCK {step.num}</p>
                  <p className="font-display text-sm font-bold text-foreground">{step.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;
