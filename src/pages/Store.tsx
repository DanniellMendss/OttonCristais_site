import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { motion } from "framer-motion";
import { Grid, List } from "lucide-react";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);

const Store = () => {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered =
    activeCategory === "Todas"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-card/30">
        <div className="container text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-medium uppercase tracking-[0.3em] text-primary"
          >
            Nossa Coleção
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 font-display text-4xl font-light text-foreground md:text-5xl"
          >
            Loja Otton Cristais
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground"
          >
            Descubra nossa curadoria exclusiva de pedras preciosas e cristais lapidados
            com excelência dos melhores garimpos do mundo.
          </motion.p>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="sticky top-16 z-40 border-y border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container">
          <div className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort & View */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
              >
                <option value="featured">Destaques</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
                <option value="name">Nome</option>
              </select>

              <div className="flex border border-border">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 text-muted-foreground transition-colors ${
                    viewMode === "grid" ? "bg-primary/10 text-primary" : "hover:text-foreground"
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 text-muted-foreground transition-colors ${
                    viewMode === "list" ? "bg-primary/10 text-primary" : "hover:text-foreground"
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container">
          <div className="mb-6 text-sm text-muted-foreground">
            Mostrando {sorted.length} produto{sorted.length !== 1 ? "s" : ""}
          </div>

          {sorted.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">
                Nenhum produto encontrado nesta categoria.
              </p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {sorted.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sorted.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-6 border border-border/50 bg-card/30 p-6 rounded-lg"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-32 w-32 object-cover object-center rounded-lg border border-border/50"
                  />
                  <div className="flex-1">
                    <div className="mb-2 flex items-start justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {product.category}
                        </p>
                        <h3 className="font-display text-xl font-medium text-foreground">
                          {product.name}
                        </h3>
                      </div>
                      {product.badge && (
                        <span className="bg-primary px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-primary-foreground">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{product.origin}</span>
                      <span>·</span>
                      <span>{product.carats}ct</span>
                      <span>·</span>
                      <span>{product.cut}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium text-primary">
                      {formatPrice(product.price)}
                    </p>
                    {product.originalPrice && (
                      <p className="text-xs text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Store;
