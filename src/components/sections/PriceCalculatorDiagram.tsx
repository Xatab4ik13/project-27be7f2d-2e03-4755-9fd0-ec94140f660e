import { Calculator, MapPin, FileText, Printer, DoorOpen, Wrench, Settings } from "lucide-react";

export const PriceCalculatorDiagram = () => {
  const services = [
    { name: "Установка межкомнатной двери", moscow: "от 3 500 ₽", spb: "от 3 200 ₽" },
    { name: "Установка входной двери", moscow: "от 5 000 ₽", spb: "от 4 500 ₽" },
    { name: "Врезка замка", moscow: "от 1 500 ₽", spb: "от 1 300 ₽" },
    { name: "Регулировка двери", moscow: "от 800 ₽", spb: "от 700 ₽" },
    { name: "Демонтаж старой двери", moscow: "от 500 ₽", spb: "от 400 ₽" },
  ];

  return (
    <div className="space-y-6">
      {/* Прайс-лист по регионам */}
      <div>
        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Прайс-лист по регионам
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Услуга</th>
                <th className="text-center py-3 px-4 font-medium text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Москва
                  </span>
                </th>
                <th className="text-center py-3 px-4 font-medium text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    Санкт-Петербург
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index} className="border-b border-border/50 hover:bg-secondary/20">
                  <td className="py-3 px-4 text-foreground">{service.name}</td>
                  <td className="py-3 px-4 text-center font-medium text-primary">{service.moscow}</td>
                  <td className="py-3 px-4 text-center font-medium text-accent">{service.spb}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
              <span>Выбор города (Москва/Питер)</span>
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
            Генерация сметы
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
