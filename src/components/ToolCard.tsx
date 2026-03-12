import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ToolCardProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  external?: boolean;
  accentClass?: string;
  badge?: string;
}

const ToolCard = ({ title, icon, href, external, accentClass = "bg-primary", badge }: ToolCardProps) => {
  const content = (
    <div className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-primary/30">
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${accentClass}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
          {title}
        </h3>
      </div>
      {external && (
        <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
      {badge && (
        <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
          {badge}
        </span>
      )}
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className="block">
      {content}
    </Link>
  );
};

export default ToolCard;
