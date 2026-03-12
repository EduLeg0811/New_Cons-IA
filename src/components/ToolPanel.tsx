interface ToolPanelProps {
  title: string;
  subtitle: string;
  accentColor: string;
  children: React.ReactNode;
}

const ToolPanel = ({ title, subtitle, accentColor, children }: ToolPanelProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-1">
          <div className={`h-2 w-2 rounded-full ${accentColor}`} />
          <h2 className="text-lg font-bold text-foreground">{title}</h2>
        </div>
        <p className="text-sm text-muted-foreground pl-5">{subtitle}</p>
      </div>
      <div className="flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
};

export default ToolPanel;
