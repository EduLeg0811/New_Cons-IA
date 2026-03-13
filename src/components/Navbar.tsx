import { Moon, Sun, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { toggleTheme, initTheme } from "@/lib/theme";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    initTheme();
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const handleToggle = () => {
    toggleTheme();
    setIsDark(!isDark);
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-background/60 backdrop-blur-2xl transition-[border-color,box-shadow] duration-500 border-b ${
        scrolled
          ? "border-border/40 shadow-sm shadow-black/[.03] dark:shadow-black/20"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Link to="https://cons-ia.org/external.html" className="group flex items-center gap-2.5">
          <motion.div
            whileHover={{ rotate: -8, scale: 1.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <img
              src="/icon.png"
              alt="Cons-IA"
              className="h-8 w-8 object-contain"
            />
          </motion.div>
          <span className="text-[15px] font-bold tracking-tight text-foreground">
            Cons-IA
          </span>
        </Link>

        {/* Center title */}
        <div className="hidden sm:flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Toolbox de IA da Conscienciologia
          </span>
        </div>

        {/* Theme toggle */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={handleToggle}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border/40 bg-card/50 text-muted-foreground transition-colors hover:text-foreground hover:border-border"
          title="Alternar tema"
        >
          <motion.div
            key={isDark ? "sun" : "moon"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {isDark ? (
              <Sun className="h-3.5 w-3.5" />
            ) : (
              <Moon className="h-3.5 w-3.5" />
            )}
          </motion.div>
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
