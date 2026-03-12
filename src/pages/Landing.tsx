import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, LayoutGrid, Sparkles } from "lucide-react";
import { categories } from "@/data/modules";
import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroBusca from "@/assets/hero-busca.png";
import heroBiblio from "@/assets/hero-biblio.png";
import heroBots from "@/assets/hero-bots.png";
import heroApps from "@/assets/hero-apps.png";
import heroLinks from "@/assets/hero-links.png";
import bookPageFlip from "@/assets/Book_Page_Flip.mp4";
import heroChatbot from "@/assets/hero_chatbot.mp4";

const heroImages: Record<string, string> = {
  busca: heroBusca,
  biblio: heroBiblio,
  bots: heroBots,
  apps: heroApps,
  links: heroLinks,
};

/* ── rotating words for the hero ── */
const rotatingWords = [
  "pesquisar",
  "consultar",
  "procurar",
  "encontrar",
  "localizar", 
  "aprender",
  "explorar",
  "descobrir",
  "escrever",
  "conversar",
  "discutir",
  "refletir",
  "aplicar",
  "utilizar",
  "organizar",
  
];

const RotatingWord = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex relative h-[1.15em] overflow-hidden align-bottom">
      {/* invisible word to reserve width */}
      <span className="invisible">{rotatingWords.reduce((a, b) => (a.length >= b.length ? a : b))}</span>
      {rotatingWords.map((word, i) => (
        <motion.span
          key={word}
          className="absolute inset-0 bg-gradient-to-r from-primary via-[hsl(265_50%_55%)] to-[hsl(340_50%_52%)] bg-clip-text text-transparent"
          initial={false}
          animate={{
            y: i === index ? "0%" : i === (index - 1 + rotatingWords.length) % rotatingWords.length ? "-110%" : "110%",
            opacity: i === index ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

/* ── animated reveal section ── */
const RevealSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {children}
    </motion.div>
  );
};

/* ── category card component ── */
const CategoryCard = ({
  cat,
  index,
  isReversed,
}: {
  cat: (typeof categories)[0];
  index: number;
  isReversed: boolean;
}) => {
  const Icon = cat.landingIcon;
  const img = heroImages[cat.key];
  const isVideoCard = cat.key === "busca" || cat.key === "bots";
  const videoSrc = cat.key === "busca" ? bookPageFlip : heroChatbot;

  return (
    <RevealSection>
      <Link
        to={`/cat/${cat.key}`}
        className={`group relative flex flex-col ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        } items-stretch gap-0 rounded-3xl border border-border/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/[.06] dark:hover:shadow-black/30 hover:-translate-y-1 bg-card`}
      >
        {/* Image section */}
        <div
          className="relative w-full md:w-1/2 h-48 sm:h-56 md:h-auto md:min-h-[280px] overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: `hsl(var(${cat.bgVar}))` }}
        >
          {isVideoCard ? (
            <motion.video
              src={videoSrc}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ) : (
            <motion.img
              src={img}
              alt={cat.landingLabel}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          )}
        </div>

        {/* Content section */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-5 sm:p-7 md:p-8 px-[32px] py-[32px]">
          <div className="mb-3">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold text-white"
              style={{ backgroundColor: `hsl(var(${cat.accentVar}) / .85)` }}
            >
              <Icon className="h-3 w-3" />
              {cat.title}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-snug mb-3">{cat.landingLabel}</h2>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">{cat.landingDescription}</p>

          {/* Module pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {cat.items.map((item) =>
              item.external ? (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-full px-3 py-1 text-[11px] font-medium border border-border/60 text-muted-foreground bg-background/60 hover:border-foreground/30 hover:text-foreground transition-colors"
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  key={item.title}
                  to={item.href}
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-full px-3 py-1 text-[11px] font-medium border border-border/60 text-muted-foreground bg-background/60 hover:border-foreground/30 hover:text-foreground transition-colors"
                >
                  {item.title}
                </Link>
              ),
            )}
          </div>

          {/* CTA */}
          <div
            className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
            style={{ color: `hsl(var(${cat.accentVar}))` }}
          >
            Explorar
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </RevealSection>
  );
};

/* ── main landing ── */
const Landing = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  const totalModules = categories.reduce((s, c) => s + c.items.length, 0);

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Navbar />

      {/* ═══════ HERO ═══════ */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative mx-auto w-full max-w-5xl px-5 pt-24 pb-20 sm:pt-32 sm:pb-28 text-center"
      >
        {/* Decorative grid */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          {totalModules} ferramentas de IA disponíveis
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08] mb-6"
        >
          O que você quer
          <br />
          <RotatingWord /> ?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed mb-10"
        >
          Explore ferramentas de IA para estudo e pesquisa da Conscienciologia.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[11px] text-muted-foreground/60 uppercase tracking-widest">Explore abaixo</span>
          <motion.div
            className="w-5 h-8 rounded-full border-2 border-muted-foreground/20 flex items-start justify-center pt-1.5"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1 h-1.5 rounded-full bg-muted-foreground/40" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ═══════ CATEGORY SECTIONS ═══════ */}
      <main className="mx-auto w-full max-w-5xl px-5 sm:px-8 pb-20 flex flex-col gap-8">
        {categories.map((cat, i) => (
          <CategoryCard key={cat.key} cat={cat} index={i} isReversed={i % 2 === 1} />
        ))}

        {/* ── Todos os Módulos ── to="/todos"*/}
        <RevealSection>
          <Link
            to="https://cons-ia.org/"
            className="group relative flex items-center gap-6 rounded-3xl border border-border/30 bg-card p-7 sm:p-9 transition-all duration-500 hover:shadow-2xl hover:shadow-black/[.06] dark:hover:shadow-black/30 hover:-translate-y-1 overflow-hidden"
          >
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%, transparent 75%, hsl(var(--primary)) 75%)`,
                backgroundSize: "20px 20px",
              }}
            />

            <motion.div
              className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary"
              whileHover={{ rotate: -8, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <LayoutGrid className="h-6 w-6 text-primary-foreground" />
            </motion.div>

            <div className="relative flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl font-bold text-foreground mb-1">Todos os Módulos</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Veja todos os {totalModules} aplicativos, bots, buscas e referências em uma única página.
              </p>
            </div>

            <ArrowRight className="relative h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        </RevealSection>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
