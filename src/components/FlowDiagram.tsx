import { ArrowRight } from "lucide-react";

interface FlowDiagramProps {
  steps: string[];
  vertical?: boolean;
}

export const FlowDiagram = ({ steps, vertical = false }: FlowDiagramProps) => {
  return (
    <div className={`flex ${vertical ? 'flex-col' : 'flex-wrap'} items-center gap-2 md:gap-3`}>
      {steps.map((step, index) => (
        <div key={index} className={`flex items-center gap-2 md:gap-3 ${vertical ? 'w-full justify-start' : ''}`}>
          <div className="flow-step text-center min-w-fit">
            {step}
          </div>
          {index < steps.length - 1 && (
            <ArrowRight className={`flow-arrow flex-shrink-0 ${vertical ? 'rotate-90' : ''}`} size={20} />
          )}
        </div>
      ))}
    </div>
  );
};
