import { 
  FileSpreadsheet, Upload, Sparkles, RefreshCw,
  CheckCircle, Edit, Image, Globe, ArrowLeftRight
} from "lucide-react";
import { DiagramBox } from "../diagrams/DiagramBox";
import { DiagramSection } from "../diagrams/DiagramSection";
import { Arrow } from "../diagrams/Arrow";

export const DBFLoadingDiagram = () => {
  return (
    <div className="space-y-6">
      {/* Импорт товаров */}
      <DiagramSection title="📥 Импорт товаров из 1С">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <DiagramBox variant="blue" icon={FileSpreadsheet}>Выгрузка из 1С</DiagramBox>
          <Arrow />
          <DiagramBox variant="orange" icon={Upload}>Загрузка в админ-панель</DiagramBox>
          <Arrow />
          <DiagramBox variant="purple" icon={Sparkles}>Автоматический парсинг</DiagramBox>
          <Arrow />
          <DiagramBox icon={Edit}>Проверка данных</DiagramBox>
          <Arrow />
          <DiagramBox variant="success" icon={CheckCircle}>Товары созданы</DiagramBox>
        </div>
      </DiagramSection>

      {/* Публикация */}
      <DiagramSection title="🌐 Публикация на сайт">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <DiagramBox icon={Image}>Добавление фото</DiagramBox>
          <Arrow />
          <DiagramBox icon={Edit}>Описание и цены</DiagramBox>
          <Arrow />
          <DiagramBox variant="success" icon={Globe}>Публикация на сайт</DiagramBox>
        </div>
      </DiagramSection>

      {/* Синхронизация заказов */}
      <DiagramSection title="🔄 Синхронизация заказов">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <DiagramBox variant="orange">Новый заказ на сайте</DiagramBox>
          <Arrow />
          <DiagramBox icon={ArrowLeftRight}>Автоматическая передача</DiagramBox>
          <Arrow />
          <DiagramBox variant="blue" icon={FileSpreadsheet}>Заказ в 1С</DiagramBox>
          <Arrow />
          <DiagramBox icon={RefreshCw}>Обновление статусов</DiagramBox>
        </div>
      </DiagramSection>
    </div>
  );
};
