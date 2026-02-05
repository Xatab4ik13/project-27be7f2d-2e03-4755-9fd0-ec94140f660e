import { 
  Users, Ruler, Wrench, Briefcase, Shield,
  Eye, Upload, CheckCircle, FileText, Settings
} from "lucide-react";
import { DiagramBox } from "../diagrams/DiagramBox";
import { DiagramSection } from "../diagrams/DiagramSection";

export const RolesDiagram = () => {
  const roles = [
    {
      title: "Партнёр",
      count: "30",
      icon: Users,
      variant: "blue" as const,
      access: [
        "Просмотр своих заявок",
        "Создание новых заявок",
        "Фото с замера/монтажа",
        "Статусы и комментарии",
        "SMS/WhatsApp уведомления"
      ]
    },
    {
      title: "Замерщик",
      count: "8",
      icon: Ruler,
      variant: "warning" as const,
      access: [
        "Назначенные замеры",
        "Данные клиента и адрес",
        "Загрузка фото проёмов",
        "Размеры и комментарии",
        "Отметка «Замер выполнен»"
      ]
    },
    {
      title: "Бригада монтажников",
      count: "35",
      icon: Wrench,
      variant: "success" as const,
      access: [
        "Назначенные монтажи",
        "Фото с замера",
        "Загрузка фото после монтажа",
        "Комментарии по работе",
        "Отметка «Монтаж выполнен»"
      ]
    },
    {
      title: "Менеджер",
      count: "3",
      icon: Briefcase,
      variant: "purple" as const,
      access: [
        "Все заявки системы",
        "Назначение замерщика",
        "Назначение бригады",
        "Изменение статусов",
        "Прикрепление документов"
      ]
    },
    {
      title: "Администратор",
      count: "1",
      icon: Shield,
      variant: "orange" as const,
      access: [
        "Управление пользователями",
        "Настройка Битрикс24",
        "Просмотр логов обмена",
        "Справочники системы",
        "Полный доступ"
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {roles.map((role, index) => (
        <div 
          key={index}
          className="bg-secondary/30 border border-border rounded-xl p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <DiagramBox variant={role.variant} icon={role.icon} className="!py-2 !px-3">
              {role.title}
            </DiagramBox>
            <div className="text-2xl font-bold text-primary">{role.count}</div>
          </div>
          <ul className="space-y-2">
            {role.access.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
