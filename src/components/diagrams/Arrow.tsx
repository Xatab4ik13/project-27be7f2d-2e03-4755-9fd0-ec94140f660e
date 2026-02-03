import { ArrowRight, ArrowDown } from "lucide-react";

interface ArrowProps {
  direction?: "right" | "down";
  label?: string;
  className?: string;
}

export const Arrow = ({ direction = "right", label, className = "" }: ArrowProps) => {
  const Icon = direction === "right" ? ArrowRight : ArrowDown;
  
  return (
    <div className={`flex items-center gap-1 text-muted-foreground ${className}`}>
      {label && <span className="text-xs">{label}</span>}
      <Icon size={16} />
    </div>
  );
};
