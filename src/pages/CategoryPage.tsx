import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BentoCard from "@/components/BentoCard";
import SectionHeader from "@/components/SectionHeader";
import { categories } from "@/data/modules";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 1 + i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const CategoryPage = () => {
  const { categoryKey } = useParams<{ categoryKey: string }>();
  const category = categories.find((c) => c.key === categoryKey);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Categoria não encontrada.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar ao início
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <SectionHeader
            title={category.title}
            subtitle={category.subtitle}
            accentVar={category.accentVar}
          />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                <BentoCard
                  title={item.title}
                  description={item.description}
                  icon={<Icon className="h-4.5 w-4.5" />}
                  href={item.href}
                  external={item.external}
                  badge={item.badge}
                  accentVar={category.accentVar}
                  bgVar={category.bgVar}
                />
              </motion.div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
