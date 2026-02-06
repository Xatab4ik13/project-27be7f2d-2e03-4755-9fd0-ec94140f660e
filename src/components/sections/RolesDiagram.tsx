import { 
  Users, Ruler, Wrench, Briefcase, Shield,
  CheckCircle, UserCheck, Store
} from "lucide-react";
import { DiagramBox } from "../diagrams/DiagramBox";

export const RolesDiagram = () => {
  const roles = [
    {
      title: "Контрагент (магазин)",
      count: "~30",
      icon: Store,
      variant: "blue" as const,
      description: "Регистрируется сам, требует подтверждения админом",
      access: [
        "Создание заявок на замер/монтаж",
        "Просмотр только своих заявок",
        "Статусы и даты назначений",
        "Получение фото после выполнения",
        "SMS/WhatsApp уведомления"
      ]
    },
    {
      title: "Замерщик",
      count: "~8",
      icon: Ruler,
      variant: "warning" as const,
      description: "Учётная запись создаётся админом",
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
      count: "~35",
      icon: Wrench,
      variant: "success" as const,
      description: "Учётная запись создаётся админом",
      access: [
        "Назначенные монтажи",
        "Фото с замера",
        "Загрузка фото после монтажа",
        "Комментарии по работе",
        "Отметка «Монтаж выполнен»"
      ]
    },
    {
      title: "Администратор",
      count: "1–2",
      icon: Shield,
      variant: "orange" as const,
      description: "Работает в Битрикс24 CRM",
      access: [
        "Подтверждение регистрации контрагентов",
        "Назначение замерщиков и бригад",
        "Все заявки и статусы",
        "Управление пользователями",
        "Настройка системы и справочников"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Пояснение логики */}
      <div className="bg-primary/10 border border-primary/30 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <UserCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <div className="font-medium text-foreground mb-1">Как это работает</div>
            <p className="text-sm text-muted-foreground">
              <strong>Обычные клиенты</strong> оставляют заявку на сайте без регистрации. 
              <strong> Контрагенты</strong> (магазины-партнёры) регистрируются сами, но их регистрация 
              требует подтверждения администратором. После подтверждения контрагент получает доступ 
              к личному кабинету. <strong>Администратор и менеджеры</strong> работают в Битрикс24 CRM, 
              а не на сайте.
            </p>
          </div>
        </div>
      </div>

      {/* Роли */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {roles.map((role, index) => (
          <div 
            key={index}
            className="bg-secondary/30 border border-border rounded-xl p-5"
          >
            <div className="flex items-center gap-3 mb-2">
              <DiagramBox variant={role.variant} icon={role.icon} className="!py-2 !px-3">
                {role.title}
              </DiagramBox>
              <div className="text-2xl font-bold text-primary">{role.count}</div>
            </div>
            <div className="text-xs text-muted-foreground mb-3 italic">
              {role.description}
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

      {/* Где работают */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-secondary/30 border border-border rounded-xl p-4 text-center">
          <div className="text-lg font-semibold text-foreground mb-2">🌐 Сайт</div>
          <div className="text-sm text-muted-foreground">
            Контрагенты, замерщики, бригады — личные кабинеты
          </div>
        </div>
        <div className="bg-accent/30 border border-accent/50 rounded-xl p-4 text-center">
          <div className="text-lg font-semibold text-accent-foreground mb-2">📊 Битрикс24 CRM</div>
          <div className="text-sm text-muted-foreground">
            Администратор и менеджеры — внутренняя работа
          </div>
        </div>
      </div>
    </div>
  );
};
