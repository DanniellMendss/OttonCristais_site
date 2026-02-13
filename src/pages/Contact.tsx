import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "contato@ottoncristais.com.br" },
  { icon: Phone, label: "Telefone", value: "+55 (11) 9999-0000" },
  { icon: MapPin, label: "Endereço", value: "Rua Augusta, 2000 — São Paulo, SP" },
  { icon: Clock, label: "Horário", value: "Seg–Sex: 9h–18h | Sáb: 10h–14h" },
];

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pb-16 pt-32 md:pt-40">
        <div className="container text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-medium uppercase tracking-[0.3em] text-primary"
          >
            Fale Conosco
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto mt-4 max-w-3xl font-display text-4xl font-light text-foreground md:text-6xl"
          >
            Entre em{" "}
            <span className="text-gradient-gold italic">contato</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            Tem alguma dúvida ou deseja saber mais sobre nossas peças? Nossa
            equipe está pronta para atendê-lo.
          </motion.p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <h2 className="font-display text-2xl font-light text-foreground">
                Informações
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {sent ? (
                <div className="flex h-full items-center justify-center rounded border border-border/50 bg-card/30 p-12 text-center">
                  <div>
                    <Mail className="mx-auto mb-4 h-8 w-8 text-primary" />
                    <h3 className="font-display text-xl text-foreground">
                      Mensagem enviada!
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Retornaremos em até 24 horas úteis.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                        Nome
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border border-border/50 bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full border border-border/50 bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                      Assunto
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-border/50 bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      placeholder="Sobre o que deseja falar?"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                      Mensagem
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full resize-none border border-border/50 bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      placeholder="Escreva sua mensagem..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full border border-primary bg-primary/10 px-8 py-3 text-xs font-medium uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Contact;
