import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { categories } from "@/data/modules";
import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import heroBiblioVideo from "@/assets/hero-biblio.mp4";
import heroAppsVideo from "@/assets/hero-apps.mp4";
import heroLinksVideo from "@/assets/hero-links.mp4";
import bookPageFlip from "@/assets/Book_Page_Flip.mp4";
import heroChatbot from "@/assets/hero_chatbot.mp4";

const rotatingWords = [
  "pesquisar",
  "consultar",
  "entender",
  "conversar",
  "estudar",
  "aprender",
  "perguntar",
  "aprofundar",
  "explorar",
  "expandir",
  "escrever",
  "revisar",
  "investigar",
  "classificar",
  "estruturar",
  "articular",
  "categorizar",
  "discutir",
  "elaborar",
  "descobrir",
  "procurar",
  "examinar",
  "encontrar",
  "refletir",
  "organizar",
  "desenvolver",
  "comparar",
  "conceituar",
  "localizar",
  "compreender",
  "analisar",
  "produzir",
  "relacionar",
  "refinar",
  "avaliar",
  "interpretar",
  "formular",
  "argumentar",
  "sistematizar",
  "exemplificar",
  "justificar",
  "modelar",
  "demonstrar",
  "aperfeiçoar",
  "conectar",
  "validar",
  "aplicar",
  "confirmar",
  "testar",
  "verificar",
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
    <span className="inline-flex relative left-1 top-[0.1em] w-[13ch] justify-end text-right h-[1.28em] overflow-hidden align-bottom">
      <span className="invisible w-full text-right">{rotatingWords.reduce((a, b) => (a.length >= b.length ? a : b))}</span>
      {rotatingWords.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
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

const CategoryCard = ({
  cat,
  index,
  isReversed,
}: {
  cat: (typeof categories)[0];
  index: number;
  isReversed: boolean;
}) => {
  const navigate = useNavigate();
  const Icon = cat.landingIcon;
  const videoByKey: Record<string, string> = {
    busca: bookPageFlip,
    biblio: heroBiblioVideo,
    bots: heroChatbot,
    apps: heroAppsVideo,
    links: heroLinksVideo,
  };
  const videoClassByKey: Partial<Record<string, string>> = {
    apps: "scale-[1.2]",
    links: "scale-[1.22]",
  };
  const hoverScaleByKey: Partial<Record<string, number>> = {
    apps: 1.24,
    links: 1.26,
  };
  const videoSrc = videoByKey[cat.key];
  const videoScaleClass = videoClassByKey[cat.key] ?? "scale-[1.08]";
  const hoverScale = hoverScaleByKey[cat.key] ?? 1.12;

  return (
    <RevealSection>
      <div
        role="link"
        tabIndex={0}
        onClick={() => navigate(`/cat/${cat.key}`)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            navigate(`/cat/${cat.key}`);
          }
        }}
        className={`group relative flex flex-col ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        } items-stretch gap-0 rounded-3xl border border-border/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/[.06] dark:hover:shadow-black/30 hover:-translate-y-1 bg-card`}
      >
        <div
          className="relative w-full md:w-1/2 h-48 sm:h-56 md:h-auto md:min-h-[280px] overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: `hsl(var(${cat.bgVar}))` }}
        >
          <motion.video
            src={videoSrc}
            className={`absolute inset-0 h-full w-full object-cover object-center ${videoScaleClass}`}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            whileHover={{ scale: hoverScale }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>

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

          <div className="flex flex-wrap gap-2 mb-6">
            {cat.items.map((item) => (
              <Tooltip key={item.title} delayDuration={1000}>
                <TooltipTrigger asChild>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="rounded-full border px-3 py-1 text-[11px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                      style={{
                        borderColor: `hsl(var(${cat.accentVar}) / 0.4)`,
                        backgroundColor: `hsl(var(${cat.accentVar}) / 0.1)`,
                        color: `hsl(var(${cat.accentVar}))`,
                        boxShadow: `0 0 0 0 hsl(var(${cat.accentVar}) / 0)`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `hsl(var(${cat.accentVar}) / 0.75)`;
                        e.currentTarget.style.backgroundColor = `hsl(var(${cat.accentVar}) / 0.18)`;
                        e.currentTarget.style.boxShadow = `0 10px 24px -14px hsl(var(${cat.accentVar}) / 0.7)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `hsl(var(${cat.accentVar}) / 0.4)`;
                        e.currentTarget.style.backgroundColor = `hsl(var(${cat.accentVar}) / 0.1)`;
                        e.currentTarget.style.boxShadow = `0 0 0 0 hsl(var(${cat.accentVar}) / 0)`;
                      }}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={(e) => e.stopPropagation()}
                      className="rounded-full border px-3 py-1 text-[11px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                      style={{
                        borderColor: `hsl(var(${cat.accentVar}) / 0.4)`,
                        backgroundColor: `hsl(var(${cat.accentVar}) / 0.1)`,
                        color: `hsl(var(${cat.accentVar}))`,
                        boxShadow: `0 0 0 0 hsl(var(${cat.accentVar}) / 0)`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `hsl(var(${cat.accentVar}) / 0.75)`;
                        e.currentTarget.style.backgroundColor = `hsl(var(${cat.accentVar}) / 0.18)`;
                        e.currentTarget.style.boxShadow = `0 10px 24px -14px hsl(var(${cat.accentVar}) / 0.7)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `hsl(var(${cat.accentVar}) / 0.4)`;
                        e.currentTarget.style.backgroundColor = `hsl(var(${cat.accentVar}) / 0.1)`;
                        e.currentTarget.style.boxShadow = `0 0 0 0 hsl(var(${cat.accentVar}) / 0)`;
                      }}
                    >
                      {item.title}
                    </Link>
                  )}
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="max-w-64 border-border/60 bg-card/95 text-xs leading-relaxed text-foreground backdrop-blur-sm"
                >
                  {item.description}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          <div
            className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
            style={{ color: `hsl(var(${cat.accentVar}))` }}
          >
            Explorar
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </RevealSection>
  );
};

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

      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative mx-auto w-full max-w-5xl px-5 pt-5 pb-10 sm:pt-8 sm:pb-14 text-center"
      >
        <div
          className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.2] mb-6"
        >
          <span className="inline-flex flex-col items-stretch">
            <span className="text-2xl sm:text-3xl md:text-4xl mb-5">Olá Conscienciólogo!</span>
            <span>O que você quer</span>
            <span className="relative left-[-1.5ch] inline-flex items-baseline justify-end whitespace-nowrap">
              <RotatingWord />
              <span className="relative top-[0.1em] ml-[0.15em]">?</span>
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed mb-10"
        >
          <span>Explore </span>
          <span className="font-extrabold text-primary">{totalModules - 4}</span>
          <span> ferramentas de IA para estudo e pesquisa da Conscienciologia.</span>
        </motion.p>

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

      <main className="mx-auto w-full max-w-5xl px-5 sm:px-8 pb-20 flex flex-col gap-8">
        {categories.map((cat, i) => (
          <CategoryCard key={cat.key} cat={cat} index={i} isReversed={i % 2 === 1} />
        ))}

        <RevealSection>
          <Link
            to="https://cons-ia.org/external.html"
            className="group relative flex items-center gap-6 rounded-3xl border border-border/30 bg-card p-7 sm:p-9 transition-all duration-500 hover:shadow-2xl hover:shadow-black/[.06] dark:hover:shadow-black/30 hover:-translate-y-1 overflow-hidden"
          >
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
                Veja todos os aplicativos, bots, buscas e referências em uma única página.
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
