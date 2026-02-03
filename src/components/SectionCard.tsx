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
      <div className="flex items-center gap-3 mb-6">
        {Icon && (
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-serif font-semibold gold-gradient-text">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
};
