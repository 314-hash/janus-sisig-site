const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-emerald-light/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-6">
          {["𝕏", "📘", "📸", "💬"].map((icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-muted-foreground hover:text-gold hover:glow-gold transition-all duration-300 hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </div>
        <p className="text-muted-foreground font-body text-sm">
          Building businesses from traditional to blockchain.
        </p>
        <p className="text-muted-foreground/50 font-body text-xs mt-2">
          © 2026 Janus' Crypto Sisig. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
