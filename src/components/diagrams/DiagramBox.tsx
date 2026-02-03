import { LucideIcon } from "lucide-react";

interface DiagramBoxProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "danger" | "purple" | "blue" | "orange";
  icon?: LucideIcon;
  className?: string;
}

const variantStyles = {
  default: "bg-secondary/50 border-border text-foreground",
  primary: "bg-primary/20 border-primary/50 text-primary",
  success: "bg-emerald-500/20 border-emerald-500/50 text-emerald-400",
  warning: "bg-amber-500/20 border-amber-500/50 text-amber-400",
  danger: "bg-red-500/20 border-red-500/50 text-red-400",
  purple: "bg-purple-500/20 border-purple-500/50 text-purple-400",
  blue: "bg-blue-500/20 border-blue-500/50 text-blue-400",
  orange: "bg-orange-500/20 border-orange-500/50 text-orange-400",
};

export const DiagramBox = ({ children, variant = "default", icon: Icon, className = "" }: DiagramBoxProps) => {
  return (
    <div className={`px-3 py-2 rounded-md border text-sm font-medium inline-flex items-center gap-2 ${variantStyles[variant]} ${className}`}>
      {Icon && <Icon size={14} />}
      {children}
    </div>
  );
};
