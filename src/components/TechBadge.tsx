import { LucideIcon } from "lucide-react";

interface TechBadgeProps {
  icon: LucideIcon;
  label: string;
  description?: string;
}

export const TechBadge = ({ icon: Icon, label, description }: TechBadgeProps) => {
  return (
    <div className="flex items-center gap-3 bg-secondary/50 rounded-xl p-4 border border-border/50">
      <div className="p-2 rounded-lg bg-primary/10">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <div className="font-medium text-foreground">{label}</div>
        {description && (
          <div className="text-sm text-muted-foreground">{description}</div>
        )}
      </div>
    </div>
  );
};
