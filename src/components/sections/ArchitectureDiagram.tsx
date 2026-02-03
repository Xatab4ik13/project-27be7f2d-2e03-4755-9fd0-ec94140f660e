import { 
  ShoppingCart, Lock, Server, Database, 
  CreditCard, Truck, MessageSquare, FileSpreadsheet
} from "lucide-react";
import { DiagramBox } from "../diagrams/DiagramBox";
import { DiagramSection } from "../diagrams/DiagramSection";

export const ArchitectureDiagram = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* ФРОНТЕНД */}
      <DiagramSection title="🎨 Фронтенд">
        <div className="space-y-3">
          <DiagramBox variant="purple" icon={ShoppingCart} className="w-full justify-center">
            Интернет-магазин<br/>
            <span className="text-xs opacity-70">React + Tailwind</span>
          </DiagramBox>
          <DiagramBox variant="orange" icon={Lock} className="w-full justify-center">
            Админ-панель<br/>
            <span className="text-xs opacity-70">React + Tailwind</span>
          </DiagramBox>
        </div>
      </DiagramSection>

      {/* БЭКЕНД */}
      <DiagramSection title="⚙️ Бэкенд (TimeWeb VPS)">
        <div className="space-y-3">
          <DiagramBox variant="blue" icon={Server} className="w-full justify-center">Node.js API</DiagramBox>
          <DiagramBox variant="orange" icon={Database} className="w-full justify-center">PostgreSQL</DiagramBox>
        </div>
      </DiagramSection>

      {/* ИНТЕГРАЦИИ */}
      <DiagramSection title="🔗 Интеграции">
        <div className="grid grid-cols-2 gap-2">
          <DiagramBox variant="warning" icon={CreditCard}>Платежная система</DiagramBox>
          <DiagramBox icon={Truck}>СДЭК API</DiagramBox>
          <DiagramBox icon={MessageSquare}>SMS-уведомления</DiagramBox>
          <DiagramBox variant="blue" icon={FileSpreadsheet}>1С</DiagramBox>
        </div>
      </DiagramSection>
    </div>
  );
};
