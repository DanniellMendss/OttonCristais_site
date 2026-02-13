import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { motion } from "framer-motion";
import { Diamond, Award, Globe, Shield } from "lucide-react";

const values = [
  {
    icon: Diamond,
    title: "Excelência",
    description:
      "Cada pedra é selecionada pessoalmente por nossos gemologistas, garantindo qualidade incomparável.",
  },
  {
    icon: Globe,
    title: "Origem Ética",
    description:
      "Trabalhamos exclusivamente com fornecedores certificados e práticas de mineração responsáveis.",
  },
  {
    icon: Award,
    title: "Certificação",
    description:
      "Todas as peças acompanham certificados gemológicos internacionais de autenticidade.",
  },
  {
    icon: Shield,
    title: "Confiança",
    description:
      "Mais de 8 anos no mercado com milhares de clientes satisfeitos em todo o Brasil.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pb-16 pt-32 md:pt-40">
        <div className="container text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-medium uppercase tracking-[0.3em] text-primary"
          >
            Nossa História
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto mt-4 max-w-3xl font-display text-4xl font-light text-foreground md:text-6xl"
          >
            A arte de selecionar{" "}
            <span className="text-gradient-gold italic">tesouros</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            Desde 2018, a Otton Cristais é referência em pedras preciosas e cristais
            lapidados no Brasil, unindo tradição gemológica e curadoria de
            excelência.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="border-y border-border/50 bg-card/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              A Otton Cristais nasceu da paixão de seus fundadores pelo universo das
              gemas. Com formação em gemologia e anos de experiência em garimpos
              ao redor do mundo, nossa equipe percorreu Brasil, Colômbia, Sri
              Lanka e Myanmar em busca das pedras mais extraordinárias.
            </p>
            <p>
              Cada peça do nosso acervo é selecionada pessoalmente, passando por
              rigorosos critérios de qualidade, cor, clareza e lapidação. Não
              somos apenas uma loja — somos curadores de tesouros naturais,
              conectando pessoas a fragmentos únicos da história da Terra.
            </p>
            <p>
              Nosso compromisso vai além da beleza: trabalhamos exclusivamente
              com fornecedores que seguem práticas éticas e sustentáveis de
              mineração, garantindo que cada aquisição seja também um ato de
              responsabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Nossos Pilares
            </p>
            <h2 className="mt-3 font-display text-3xl font-light text-foreground md:text-4xl">
              O que nos diferencia
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <v.icon className="mx-auto mb-4 h-6 w-6 text-primary" />
                <h3 className="mb-2 font-display text-lg font-medium text-foreground">
                  {v.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default About;
