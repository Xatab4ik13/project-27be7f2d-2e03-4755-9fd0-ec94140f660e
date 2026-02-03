import { Check } from "lucide-react";

interface BenefitsListProps {
  benefits: string[];
}

export const BenefitsList = ({ benefits }: BenefitsListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {benefits.map((benefit, index) => (
        <div 
          key={index} 
          className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-3"
        >
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <Check size={14} className="text-emerald-400" />
          </div>
          <span className="text-sm text-foreground">{benefit}</span>
        </div>
      ))}
    </div>
  );
};
