import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  external?: boolean;
  accentVar: string; // e.g. "--apps-primary"
  bgVar: string;     // e.g. "--apps-bg"
  badge?: string;
  className?: string;
}

const BentoCard = ({
  title,
  description,
  icon,
  href,
  external,
  accentVar,
  bgVar,
  badge,
  className = "",
}: BentoCardProps) => {
  const inner = (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 p-5 transition-shadow hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 ${className}`}
      style={{ backgroundColor: `hsl(var(${bgVar}))` }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: `hsl(var(${accentVar}))` }}
        >
          {icon}
        </div>
        <div className="flex items-center gap-2">
          {badge && (
            <span
              className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: `hsl(var(${accentVar}))` }}
            >
              {badge}
            </span>
          )}
          {external && (
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3
          className="text-sm font-semibold transition-colors"
          style={{ color: `hsl(var(${accentVar}))` }}
        >
          {title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground whitespace-pre-line">
          {description}
        </p>
      </div>
    </motion.div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    );
  }

  return (
    <Link to={href} className="block h-full">
      {inner}
    </Link>
  );
};

export default BentoCard;
