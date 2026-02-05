import { 
  Home, Wrench, Image, MessageSquare, 
  Phone, FileText, LogIn
} from "lucide-react";
import { DiagramBox } from "../diagrams/DiagramBox";
import { DiagramSection } from "../diagrams/DiagramSection";

export const SiteStructureDiagram = () => {
  const publicPages = [
    { icon: Home, title: "Главная", desc: "Презентация компании" },
    { icon: Wrench, title: "Услуги", desc: "Установка, врезка замков, демонтаж" },
    { icon: Image, title: "Портфолио", desc: "Галерея выполненных работ" },
    { icon: MessageSquare, title: "Отзывы", desc: "Отзывы клиентов" },
    { icon: Phone, title: "Контакты", desc: "Адреса, телефоны, карта" },
    { icon: FileText, title: "Заявка", desc: "Форма заявки на замер" },
    { icon: LogIn, title: "Авторизация", desc: "Вход для партнёров" },
  ];

  const services = [
    "Установка межкомнатных дверей",
    "Установка входных дверей",
    "Врезка замков",
    "Регулировка дверей",
    "Демонтаж старых дверей"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
