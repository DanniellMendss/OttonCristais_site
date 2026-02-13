import heroImage from "@/assets/hero-gems.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pedras preciosas e cristais lapidados"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto max-w-4xl font-display text-5xl font-light leading-tight text-foreground md:text-7xl lg:text-8xl"
        >
          Pedras que contam{" "}
          <span className="italic text-black dark:text-gradient-gold">histórias</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-muted-foreground md:text-base"
        >
          Descubra nossa curadoria de pedras preciosas e cristais lapidados, 
          selecionados com excelência dos melhores garimpos do mundo.
        </motion.p>
        <motion.a
          href="#coleção"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 inline-flex items-center gap-2 border border-primary/30 px-8 py-3 text-xs font-medium uppercase tracking-widest text-black dark:text-primary transition-all hover:border-primary hover:bg-primary/5"
        >
          Explorar Coleção
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
