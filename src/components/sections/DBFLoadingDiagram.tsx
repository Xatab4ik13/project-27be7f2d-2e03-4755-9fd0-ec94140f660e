import { 
  Factory, FileSpreadsheet, Send, Upload, Sparkles,
  Diamond, CheckCircle, AlertTriangle, Edit,
  Scale, Gem, Wrench, Calculator, DollarSign, Image, Globe
} from "lucide-react";
import { DiagramBox } from "../diagrams/DiagramBox";
import { DiagramSection } from "../diagrams/DiagramSection";
import { Arrow } from "../diagrams/Arrow";

export const DBFLoadingDiagram = () => {
  return (
    <div className="space-y-6">
      {/* Верхний ряд */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* ЗАВОД */}
        <DiagramSection title="🏭 Завод">
          <div className="flex flex-col items-center gap-2">
            <DiagramBox variant="orange" icon={Factory}>Готовые изделия</DiagramBox>
            <Arrow direction="down" />
            <DiagramBox icon={FileSpreadsheet}>DBF-файл с данными</DiagramBox>
            <Arrow direction="down" />
            <DiagramBox icon={Send}>Отправка Админу</DiagramBox>
          </div>
        </DiagramSection>

        {/* ЗАГРУЗКА */}
        <DiagramSection title="📥 Загрузка">
          <div className="flex flex-col items-center gap-2">
            <DiagramBox variant="orange" icon={Upload}>Админ загружает DBF</DiagramBox>
            <Arrow direction="down" />
            <DiagramBox variant="purple" icon={Sparkles}>Автоматический парсинг</DiagramBox>
          </div>
        </DiagramSection>

        {/* ОБРАБОТКА */}
        <DiagramSection title="⚙️ Обработка">
          <div className="flex flex-col items-center gap-2">
            <DiagramBox icon={Diamond}>Валидация данных</DiagramBox>
            <div className="flex gap-4 mt-2">
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-muted-foreground">Всё ОК</span>
                <DiagramBox variant="success" icon={CheckCircle}>Создание товаров</DiagramBox>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-muted-foreground">Ошибки</span>
                <DiagramBox variant="warning" icon={AlertTriangle}>Список ошибок</DiagramBox>
                <Arrow direction="down" />
                <DiagramBox icon={Edit}>Ручное исправление</DiagramBox>
              </div>
            </div>
          </div>
        </DiagramSection>
      </div>

      {/* РАСЧЁТ СЕБЕСТОИМОСТИ */}
      <DiagramSection title="💰 Расчёт себестоимости">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <DiagramBox icon={Scale}>Вес металла × цена за грамм</DiagramBox>
          <span className="text-muted-foreground">+</span>
          <DiagramBox variant="purple" icon={Gem}>Камни × цена за карат</DiagramBox>
          <span className="text-muted-foreground">+</span>
          <DiagramBox icon={Wrench}>Работа завода</DiagramBox>
          <Arrow />
          <DiagramBox variant="orange" icon={Calculator}>Итоговая себестоимость</DiagramBox>
        </div>
      </DiagramSection>

      {/* ПУБЛИКАЦИЯ */}
      <DiagramSection title="🌐 Публикация">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <DiagramBox icon={DollarSign}>Расчёт розничной цены</DiagramBox>
          <Arrow />
          <DiagramBox icon={Image}>Добавление фото</DiagramBox>
          <Arrow />
          <DiagramBox variant="success" icon={Globe}>Публикация на сайт</DiagramBox>
        </div>
      </DiagramSection>
    </div>
  );
};
