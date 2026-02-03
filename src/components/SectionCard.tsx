import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface SectionCardProps {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
}

export const SectionCard = ({ title, icon: Icon, children, className = "" }: SectionCardProps) => {
  return (
    <div className={`section-card ${className}`}>
      <div className="flex items-center gap-3 mb-5">
        {Icon && (
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        )}
        <h2 className="text-xl md:text-2xl font-serif font-semibold text-foreground">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
};
