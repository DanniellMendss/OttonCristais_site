import { motion } from "framer-motion";
import { Shield, Truck, Award, Gem } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Autenticidade Certificada",
    description: "Cada pedra acompanha certificado gemológico internacional.",
  },
  {
    icon: Shield,
    title: "Garantia Vitalícia",
    description: "Proteção completa e verificação de qualidade permanente.",
  },
  {
    icon: Truck,
    title: "Envio Seguro",
    description: "Transporte segurado e embalagem premium com rastreio.",
  },
  {
    icon: Award,
    title: "Curadoria Expert",
    description: "Seleção feita por gemologistas com décadas de experiência.",
  },
];

const Features = () => {
  return (
    <section className="border-y border-border/50 bg-card/50 py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <feature.icon className="mx-auto mb-4 h-6 w-6 text-primary" />
              <h3 className="mb-2 font-display text-lg font-medium text-foreground">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
