import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative"
    >
      {/* Image */}
      <Link to={`/produto/${product.id}`} className="relative block aspect-square overflow-hidden rounded-lg bg-card border border-border/50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-3 top-3 bg-primary px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-primary-foreground">
            {product.badge}
          </span>
        )}

        {/* Quick Add */}
        <button
          onClick={() => addItem(product)}
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground opacity-0 shadow-lg transition-all duration-300 hover:bg-primary/90 group-hover:opacity-100"
          aria-label={`Adicionar ${product.name} ao carrinho`}
        >
          <ShoppingBag className="h-4 w-4" />
        </button>
      </Link>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {product.origin} · {product.carats}ct · {product.cut}
        </p>
        <h3 className="font-display text-lg font-medium text-foreground">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-primary">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
