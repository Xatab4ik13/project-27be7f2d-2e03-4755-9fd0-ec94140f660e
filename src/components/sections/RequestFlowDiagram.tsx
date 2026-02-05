import { 
  FileText, Send, Ruler, Camera, Wrench, 
  CheckCircle, Users, ArrowRight
} from "lucide-react";
import { DiagramBox } from "../diagrams/DiagramBox";
import { Arrow } from "../diagrams/Arrow";

export const RequestFlowDiagram = () => {
  return (
    <div className="space-y-6">
      {/* Main flow */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <DiagramBox variant="blue" icon={FileText}>
          Заявка от партнёра
        </DiagramBox>
        <Arrow />
        <DiagramBox variant="orange" icon={Send}>
          Отправка в Битрикс24
        </DiagramBox>
        <Arrow />
        <DiagramBox variant="purple" icon={Users}>
          Назначение менеджера
        </DiagramBox>
      </div>

      <div className="flex justify-center">
        <ArrowRight className="text-muted-foreground rotate-90" size={24} />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <DiagramBox variant="warning" icon={Ruler}>
          Назначение замерщика
        </DiagramBox>
        <Arrow />
        <DiagramBox icon={Camera}>
          Замер + фото проёмов
        </DiagramBox>
        <Arrow />
        <DiagramBox variant="success" icon={CheckCircle}>
          Замер выполнен
        </DiagramBox>
      </div>

      <div className="flex justify-center">
        <ArrowRight className="text-muted-foreground rotate-90" size={24} />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <DiagramBox variant="success" icon={Wrench}>
          Назначение бригады
        </DiagramBox>
        <Arrow />
        <DiagramBox icon={Camera}>
          Монтаж + фото работ
        </DiagramBox>
        <Arrow />
        <DiagramBox variant="success" icon={CheckCircle}>
          Монтаж выполнен
        </DiagramBox>
      </div>

      {/* Regions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 text-center">
          <div className="text-lg font-semibold text-primary mb-2">🏙️ Москва</div>
          <div className="text-sm text-muted-foreground">
            Своя команда замерщиков и бригад
          </div>
        </div>
        <div className="bg-accent/30 border border-accent/50 rounded-xl p-4 text-center">
          <div className="text-lg font-semibold text-accent-foreground mb-2">🌉 Санкт-Петербург</div>
          <div className="text-sm text-muted-foreground">
            Своя команда замерщиков и бригад
          </div>
        </div>
      </div>
    </div>
  );
};
