import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { Shield, Truck, Award, Gem } from "lucide-react";

const preFooterFeatures = [
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductCatalog />
      
      <section className="border-y border-border/50 bg-card/50 py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {preFooterFeatures.map((feature, index) => (
              <div key={feature.title} className="text-center">
                <feature.icon className="mx-auto mb-4 h-6 w-6 text-primary" />
                <h3 className="mb-2 font-display text-lg font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
