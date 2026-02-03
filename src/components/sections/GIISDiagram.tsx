import { 
  ShoppingCart, RotateCcw, FileText, Moon, FileCode, 
  Import, KeyRound, Send, Server, Receipt, Globe,
  CheckCircle, AlertTriangle
} from "lucide-react";
import { DiagramBox } from "../diagrams/DiagramBox";
import { DiagramSection } from "../diagrams/DiagramSection";
import { Arrow } from "../diagrams/Arrow";

export const GIISDiagram = () => {
  return (
    <div className="space-y-6">
      {/* Main flow */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* WEB-СИСТЕМА */}
        <DiagramSection title="🌐 Web-система">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <DiagramBox variant="success" icon={ShoppingCart}>Продажа</DiagramBox>
              <Arrow />
              <DiagramBox>Событие: ВЫВОД, УИН</DiagramBox>
            </div>
            <div className="flex items-center gap-2">
              <DiagramBox variant="warning" icon={RotateCcw}>Возврат</DiagramBox>
              <Arrow />
              <DiagramBox>Событие: ВЫВОД, УИН</DiagramBox>
            </div>
            <div className="flex justify-center mt-4">
              <DiagramBox variant="default" icon={FileText}>Очередь событий</DiagramBox>
            </div>
          </div>
        </DiagramSection>

        {/* НОЧНОЙ ПРОЦЕСС */}
        <DiagramSection title="🌙 Ночной процесс">
          <div className="flex flex-col items-center gap-2">
            <DiagramBox>Формирование пакета</DiagramBox>
            <Arrow direction="down" />
            <DiagramBox variant="blue" icon={FileCode}>XML-файл</DiagramBox>
          </div>
        </DiagramSection>

        {/* 1С */}
        <DiagramSection title="📊 1С">
          <div className="flex flex-col items-center gap-2">
            <DiagramBox icon={Import}>Импорт</DiagramBox>
            <Arrow direction="down" />
            <DiagramBox variant="purple" icon={KeyRound}>Подпись ЭЦП</DiagramBox>
            <Arrow direction="down" />
            <DiagramBox icon={Send}>Отправка в ГИИС</DiagramBox>
          </div>
        </DiagramSection>

        {/* ГИИС ДМДК */}
        <DiagramSection title="🏛️ ГИИС ДМДК">
          <div className="flex flex-col items-center gap-2">
            <DiagramBox icon={Server}>Обработка</DiagramBox>
            <Arrow direction="down" />
            <DiagramBox icon={Receipt}>Квитанция</DiagramBox>
            <Arrow direction="down" />
            <DiagramBox icon={Globe}>Результат в WEB</DiagramBox>
          </div>
        </DiagramSection>

        {/* Результаты */}
        <DiagramSection title="Результат">
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground">Успех</span>
              <DiagramBox variant="success" icon={CheckCircle}>УИН погашен</DiagramBox>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground">Ошибка</span>
              <DiagramBox variant="danger" icon={AlertTriangle}>Требует внимания</DiagramBox>
            </div>
          </div>
        </DiagramSection>
      </div>
    </div>
  );
};
