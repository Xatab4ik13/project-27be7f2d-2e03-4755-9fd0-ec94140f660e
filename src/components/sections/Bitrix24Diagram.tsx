import { 
  Globe, ArrowLeftRight, Database, 
  FileText, Image, Bell, RefreshCw
} from "lucide-react";
import { DiagramBox } from "../diagrams/DiagramBox";
import { DiagramSection } from "../diagrams/DiagramSection";
import { Arrow } from "../diagrams/Arrow";

export const Bitrix24Diagram = () => {
  return (
    <div className="space-y-6">
      {/* Two-way sync header */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <DiagramBox variant="blue" icon={Globe} className="text-lg">
          Сайт
        </DiagramBox>
        <div className="flex items-center gap-2">
          <ArrowLeftRight className="text-primary" size={32} />
          <span className="text-sm text-muted-foreground">Двусторонний обмен</span>
        </div>
        <DiagramBox variant="orange" icon={Database} className="text-lg">
          Битрикс24
        </DiagramBox>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Site → CRM */}
        <DiagramSection title="Сайт → CRM">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FileText size={14} className="text-primary" />
              <span className="text-muted-foreground">Создание заявки</span>
            </li>
            <li className="flex items-center gap-2">
              <Image size={14} className="text-primary" />
              <span className="text-muted-foreground">Фото проёмов</span>
            </li>
            <li className="flex items-center gap-2">
              <FileText size={14} className="text-primary" />
              <span className="text-muted-foreground">Данные клиента</span>
            </li>
            <li className="flex items-center gap-2">
              <RefreshCw size={14} className="text-primary" />
              <span className="text-muted-foreground">Фото после монтажа</span>
            </li>
          </ul>
        </DiagramSection>

        {/* CRM → Site */}
        <DiagramSection title="CRM → Сайт (Webhook)">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <RefreshCw size={14} className="text-primary" />
              <span className="text-muted-foreground">Обновление статуса</span>
            </li>
            <li className="flex items-center gap-2">
              <FileText size={14} className="text-primary" />
              <span className="text-muted-foreground">Назначение замерщика</span>
            </li>
            <li className="flex items-center gap-2">
              <FileText size={14} className="text-primary" />
              <span className="text-muted-foreground">Назначение бригады</span>
            </li>
            <li className="flex items-center gap-2">
              <Bell size={14} className="text-primary" />
              <span className="text-muted-foreground">Комментарии менеджера</span>
            </li>
          </ul>
        </DiagramSection>

        {/* Data in CRM */}
        <DiagramSection title="Поля в сделке CRM">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-muted-foreground">• Город (Москва/Питер)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-muted-foreground">• ID заявки сайта</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-muted-foreground">• Партнёр / Замерщик / Бригада</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-muted-foreground">• Фото замера и монтажа</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-muted-foreground">• Размеры и комментарии</span>
            </li>
          </ul>
        </DiagramSection>
      </div>
    </div>
  );
};
