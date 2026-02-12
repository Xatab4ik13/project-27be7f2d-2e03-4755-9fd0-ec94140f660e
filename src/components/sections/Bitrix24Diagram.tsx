import { 
  CreditCard, Truck, MessageSquare, BarChart3,
  Mail, ShoppingBag, Smartphone, Receipt
} from "lucide-react";
import { DiagramSection } from "../diagrams/DiagramSection";

export const IntegrationsDiagram = () => {
  const integrations = [
    {
      title: "Оплата",
      icon: CreditCard,
      items: ["YooKassa / CloudPayments", "Банковские карты", "Онлайн-чеки (54-ФЗ)", "Промокоды и купоны"]
    },
    {
      title: "Доставка",
      icon: Truck,
      items: ["СДЭК, Boxberry, ПЭК", "Деловые Линии, Почта России", "Яндекс Доставка", "Калькулятор стоимости/сроков", "Самовывоз"]
    },
    {
      title: "CRM",
      icon: BarChart3,
      items: ["amoCRM / Bitrix24 / HubSpot", "Лиды, сделки, статусы", "Сквозная аналитика (опц.)"]
    },
    {
      title: "Уведомления",
      icon: Mail,
      items: ["Email (UniSender)", "SMS (SMSC / Bytehand)", "Telegram-бот", "WhatsApp Business API"]
    },
    {
      title: "Маркетплейсы (опц.)",
      icon: ShoppingBag,
      items: ["Выгрузка фидов", "Яндекс.Маркет", "Ozon, Wildberries"]
    },
    {
      title: "Бухгалтерия (опц.)",
      icon: Receipt,
      items: ["1С / МойСклад", "Контур Маркет", "Синхронизация остатков"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {integrations.map((item, index) => (
        <DiagramSection key={index} title={item.title}>
          <div className="flex items-center gap-2 mb-3">
            <item.icon size={20} className="text-primary" />
          </div>
          <ul className="space-y-1">
            {item.items.map((text, idx) => (
              <li key={idx} className="text-sm text-muted-foreground">
                • {text}
              </li>
            ))}
          </ul>
        </DiagramSection>
      ))}
    </div>
  );
};
