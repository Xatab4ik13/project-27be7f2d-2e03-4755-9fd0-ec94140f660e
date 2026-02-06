import { 
  Home, Wrench, Image, MessageSquare, 
  Phone, FileText, LogIn, Calculator, Store
} from "lucide-react";
import { DiagramSection } from "../diagrams/DiagramSection";

export const SiteStructureDiagram = () => {
  const publicPages = [
    { icon: Home, title: "Главная", desc: "Презентация компании" },
    { icon: Wrench, title: "Услуги", desc: "Виды работ и цены" },
    { icon: Calculator, title: "Калькулятор", desc: "Расчёт стоимости" },
    { icon: Image, title: "Портфолио", desc: "Галерея работ" },
    { icon: MessageSquare, title: "Отзывы", desc: "Отзывы клиентов" },
    { icon: Phone, title: "Контакты", desc: "Адреса, телефоны" },
    { icon: FileText, title: "Заявка", desc: "Форма для клиентов" },
    { icon: LogIn, title: "Вход", desc: "Для контрагентов" },
  ];

  const cabinetPages = [
    { icon: Store, title: "Кабинет контрагента", desc: "Заявки, статусы, файлы" },
    { icon: Wrench, title: "Кабинет замерщика", desc: "Назначенные замеры" },
    { icon: Wrench, title: "Кабинет бригады", desc: "Назначенные монтажи" },
  ];

  const services = [
    "Установка межкомнатных дверей",
    "Установка входных дверей",
    "Установка порталов и перегородок",
    "Врезка замков",
    "Регулировка дверей",
    "Демонтаж старых дверей"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <DiagramSection title="Публичные страницы">
        <div className="grid grid-cols-2 gap-2">
          {publicPages.map((page, index) => (
            <div 
              key={index}
              className="bg-secondary/40 rounded-lg p-3 text-center"
            >
              <page.icon size={20} className="mx-auto text-primary mb-1" />
              <div className="text-sm font-medium text-foreground">{page.title}</div>
              <div className="text-xs text-muted-foreground">{page.desc}</div>
            </div>
          ))}
        </div>
      </DiagramSection>

      <DiagramSection title="Личные кабинеты (на сайте)">
        <div className="space-y-2">
          {cabinetPages.map((page, index) => (
            <div 
              key={index}
              className="bg-primary/10 border border-primary/20 rounded-lg p-3"
            >
              <div className="flex items-center gap-2">
                <page.icon size={18} className="text-primary flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-foreground">{page.title}</div>
                  <div className="text-xs text-muted-foreground">{page.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-xs text-muted-foreground text-center italic">
          Админ и менеджеры работают в Битрикс24
        </div>
      </DiagramSection>

      <DiagramSection title="Услуги компании">
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li 
              key={index}
              className="flex items-center gap-2 bg-secondary/40 rounded-lg px-3 py-2"
            >
              <Wrench size={14} className="text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">{service}</span>
            </li>
          ))}
        </ul>
      </DiagramSection>
    </div>
  );
};
