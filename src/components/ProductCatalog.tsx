import { useState } from "react";
import { motion } from "framer-motion";
import { products, categories } from "@/data/products";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState("Todas");

  const filtered =
    activeCategory === "Todas"
      ? products.slice(0, 8)
      : products.filter((p) => p.category === activeCategory).slice(0, 8);

  return (
    <section id="coleção" className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="mt-3 font-display text-3xl font-light text-foreground md:text-5xl">
            Peças Selecionadas
          </h2>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "border border-primary bg-primary/10 text-primary"
                  : "border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            to="/loja"
            className="inline-flex items-center gap-2 border border-primary/30 px-8 py-3 text-xs font-medium uppercase tracking-widest text-primary transition-all hover:border-primary hover:bg-primary/5"
          >
            Ver Todos os Produtos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
