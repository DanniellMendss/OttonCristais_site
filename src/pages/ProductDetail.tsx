import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Gem, MapPin, Scissors } from "lucide-react";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container flex min-h-[60vh] items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-display text-3xl text-foreground">Produto não encontrado</h1>
            <Link
              to="/loja"
              className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar à loja
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const details = [
    { icon: Gem, label: "Quilates", value: `${product.carats}ct` },
    { icon: MapPin, label: "Origem", value: product.origin },
    { icon: Scissors, label: "Lapidação", value: product.cut },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pb-20 pt-28 md:pt-32">
        <div className="container">
          {/* Back */}
          <Link
            to="/loja"
            className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Voltar à loja
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square overflow-hidden rounded-lg bg-card border border-border/50"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
              {product.badge && (
                <span className="absolute left-4 top-4 bg-primary px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-primary-foreground">
                  {product.badge}
                </span>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-primary">
                {product.category}
              </p>
              <h1 className="mt-3 font-display text-4xl font-light text-foreground md:text-5xl">
                {product.name}
              </h1>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-display text-2xl text-primary md:text-3xl">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              {/* Details */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-y border-border/50 py-6">
                {details.map((d) => (
                  <div key={d.label} className="text-center">
                    <d.icon className="mx-auto mb-2 h-4 w-4 text-primary" />
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {d.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">{d.value}</p>
                  </div>
                ))}
              </div>

              {/* Add to cart */}
              <button
                onClick={() => addItem(product)}
                className="mt-8 flex items-center justify-center gap-3 border border-primary bg-primary/10 px-8 py-4 text-xs font-medium uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <ShoppingBag className="h-4 w-4" />
                Adicionar ao Carrinho
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default ProductDetail;
