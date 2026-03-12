interface SectionHeaderProps {
  title: string;
  subtitle: string;
  accentVar: string;
}

const SectionHeader = ({ title, subtitle, accentVar }: SectionHeaderProps) => (
  <div className="mb-5">
    <div className="flex items-center gap-2.5 mb-1">
      <div
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: `hsl(var(${accentVar}))` }}
      />
      <h2 className="text-base font-bold text-foreground">{title}</h2>
    </div>
    <p className="text-xs text-muted-foreground pl-[18px]">{subtitle}</p>
  </div>
);

export default SectionHeader;
