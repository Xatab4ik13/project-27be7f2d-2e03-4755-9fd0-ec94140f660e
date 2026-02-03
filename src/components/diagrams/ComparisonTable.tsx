import { X, Check, ArrowRight } from "lucide-react";

interface ComparisonRow {
  before: string;
  after: string;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
}

export const ComparisonTable = ({ rows }: ComparisonTableProps) => {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-center">
        <div className="flex items-center gap-2 text-red-400 font-medium">
          <X size={16} />
          СЕЙЧАС (вручную)
        </div>
        <div></div>
        <div className="flex items-center gap-2 text-emerald-400 font-medium">
          <Check size={16} />
          ПОСЛЕ (автоматически)
        </div>
      </div>
      
      {rows.map((row, index) => (
        <div key={index} className="grid grid-cols-[1fr,auto,1fr] gap-4 items-center">
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg px-4 py-3 text-sm text-center">
            {row.before}
          </div>
          <ArrowRight size={20} className="text-muted-foreground" />
          <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg px-4 py-3 text-sm text-center">
            {row.after}
          </div>
        </div>
      ))}
    </div>
  );
};
