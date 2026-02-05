import { Calculator, MapPin, FileText, Printer, DoorOpen, Wrench, Settings, ListChecks } from "lucide-react";

export const PriceCalculatorDiagram = () => {
  return (
    <div className="space-y-6">
      {/* Описание страницы прайс-листа */}
      <div className="bg-secondary/30 rounded-xl p-5 border border-border">
        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <ListChecks className="w-5 h-5 text-primary" />
          Страница цен с разделением по регионам
        </h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span>Отдельные прайс-листы для Москвы и Санкт-Петербурга</span>
          </li>
          <li className="flex items-start gap-2">
            <DoorOpen className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span>Цены на все виды услуг: установка, врезка замков, демонтаж и т.д.</span>
          </li>
          <li className="flex items-start gap-2">
            <Settings className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span>Управление ценами через админ-панель</span>
          </li>
        </ul>
      </div>

      {/* Калькулятор сметы */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-secondary/30 rounded-xl p-5 border border-border">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            Интерактивный калькулятор
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <DoorOpen className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>Выбор типа двери (межкомнатная/входная)</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>Выбор города (Москва/Питер) — цены подстраиваются автоматически</span>
            </li>
            <li className="flex items-start gap-2">
              <Settings className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>Количество дверей и дополнительные услуги</span>
            </li>
            <li className="flex items-start gap-2">
              <Wrench className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>Опции: врезка замка, демонтаж, доборы, наличники</span>
            </li>
          </ul>
        </div>

        <div className="bg-secondary/30 rounded-xl p-5 border border-border">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Генерация печатной сметы
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary shrink-0">1</span>
              <span>Автоматический расчёт итоговой стоимости</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary shrink-0">2</span>
              <span>Детализация по каждой позиции</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary shrink-0">3</span>
              <span>Логотип и контакты компании в шапке</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary shrink-0">4</span>
              <span>Кнопка "Скачать PDF" / "Распечатать"</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Визуализация процесса */}
      <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
        <h4 className="font-semibold text-foreground mb-4 text-center">Путь клиента</h4>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-lg border border-border">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">Выбор города</span>
          </div>
          <span className="text-muted-foreground">→</span>
          <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-lg border border-border">
            <DoorOpen className="w-4 h-4 text-primary" />
            <span className="text-sm">Выбор услуг</span>
          </div>
          <span className="text-muted-foreground">→</span>
          <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-lg border border-border">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm">Расчёт сметы</span>
          </div>
          <span className="text-muted-foreground">→</span>
          <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-lg border border-border">
            <Printer className="w-4 h-4 text-primary" />
            <span className="text-sm">Печать / PDF</span>
          </div>
        </div>
      </div>
    </div>
  );
};
