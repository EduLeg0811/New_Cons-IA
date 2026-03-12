import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 py-8 mt-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-3 text-center">
        <p className="text-xs text-muted-foreground">
          ©2026 Cons-IA.org
        </p>
        <a
          href="mailto:legadologia@gmail.com"
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail className="h-3.5 w-3.5" />
          <span>Contato</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
