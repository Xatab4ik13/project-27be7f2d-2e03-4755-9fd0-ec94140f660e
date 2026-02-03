interface DiagramSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const DiagramSection = ({ title, children, className = "" }: DiagramSectionProps) => {
  return (
    <div className={`bg-secondary/20 border border-border/50 rounded-lg p-4 ${className}`}>
      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3 text-center">
        {title}
      </div>
      {children}
    </div>
  );
};
