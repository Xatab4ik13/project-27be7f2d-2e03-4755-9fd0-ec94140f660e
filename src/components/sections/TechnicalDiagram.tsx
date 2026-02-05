import { 
  Shield, Cloud, Bell, Lock, 
  Database, Activity, Save
} from "lucide-react";
import { DiagramSection } from "../diagrams/DiagramSection";

export const TechnicalDiagram = () => {
  const techFeatures = [
    {
      icon: Lock,
      title: "Безопасность",
      items: ["HTTPS", "Ограничение по ролям", "reCAPTCHA", "Логи действий"]
    },
    {
      icon: Cloud,
      title: "Хранение файлов",
      items: ["Облачное хранилище", "До 20 МБ на файл", "До 20 фото в заявке", "Автосжатие"]
    },
    {
      icon: Bell,
      title: "Уведомления",
      items: ["SMS партнёрам", "WhatsApp оповещения", "Напоминания клиентам", "Статусы заказов"]
    },
    {
      icon: Activity,
      title: "Производительность",
      items: ["Кеширование", "CDN для фото", "Lazy-load", "Оптимизация SQL"]
    },
    {
      icon: Save,
      title: "Резервирование",
      items: ["Ежедневный бэкап БД", "Бэкап файлов", "Хранение 30 дней", "Восстановление"]
    },
    {
      icon: Database,
      title: "Логи системы",
      items: ["Кто изменил статус", "Кто загрузил фото", "Время действий", "История заявки"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {techFeatures.map((feature, index) => (
        <DiagramSection key={index} title={feature.title}>
          <div className="flex items-center gap-2 mb-3">
            <feature.icon size={20} className="text-primary" />
          </div>
          <ul className="space-y-1">
            {feature.items.map((item, idx) => (
              <li key={idx} className="text-sm text-muted-foreground">
                • {item}
              </li>
            ))}
          </ul>
        </DiagramSection>
      ))}
    </div>
  );
};
