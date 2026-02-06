import { 
  FileText, Send, Ruler, Camera, Wrench, 
  CheckCircle, Users, ArrowRight, UserPlus, Globe
} from "lucide-react";
import { DiagramBox } from "../diagrams/DiagramBox";
import { Arrow } from "../diagrams/Arrow";

export const RequestFlowDiagram = () => {
  return (
    <div className="space-y-8">
      {/* Два источника заявок */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-secondary/30 border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/20">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground">Обычный клиент</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Приходит через поиск (Яндекс, Google), заполняет форму заявки на сайте. 
            Личный кабинет не нужен.
          </p>
          <div className="text-xs text-muted-foreground bg-secondary/50 rounded-lg px-3 py-2">
            Заявка → Битрикс24 → Обработка менеджером
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/20">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground">Контрагент (магазин)</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Регистрируется на сайте, ждёт подтверждения админа. После — создаёт заявки 
            из личного кабинета, видит статусы и получает файлы.
          </p>
          <div className="text-xs text-muted-foreground bg-primary/20 rounded-lg px-3 py-2">
            Регистрация → Подтверждение → Личный кабинет → Заявки
          </div>
        </div>
      </div>

      {/* Путь заявки */}
      <div className="bg-secondary/20 border border-border rounded-xl p-5">
        <h4 className="font-semibold text-foreground mb-4 text-center">Путь заявки в системе</h4>
        
        <div className="flex flex-wrap items-center justify-center gap-3">
          <DiagramBox variant="blue" icon={FileText}>
            Заявка
          </DiagramBox>
          <Arrow />
          <DiagramBox variant="orange" icon={Send}>
            Битрикс24
          </DiagramBox>
          <Arrow />
          <DiagramBox variant="purple" icon={Users}>
            Менеджер назначает
          </DiagramBox>
        </div>

        <div className="flex justify-center my-4">
          <ArrowRight className="text-muted-foreground rotate-90" size={24} />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <DiagramBox variant="warning" icon={Ruler}>
            Замерщик
          </DiagramBox>
          <Arrow />
          <DiagramBox icon={Camera}>
            Фото + размеры
          </DiagramBox>
          <Arrow />
          <DiagramBox variant="success" icon={CheckCircle}>
            Замер выполнен
          </DiagramBox>
        </div>

        <div className="flex justify-center my-4">
          <ArrowRight className="text-muted-foreground rotate-90" size={24} />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <DiagramBox variant="success" icon={Wrench}>
            Бригада
          </DiagramBox>
          <Arrow />
          <DiagramBox icon={Camera}>
            Фото после монтажа
          </DiagramBox>
          <Arrow />
          <DiagramBox variant="success" icon={CheckCircle}>
            Готово
          </DiagramBox>
        </div>
      </div>

      {/* Что видит контрагент */}
      <div className="bg-secondary/30 border border-border rounded-xl p-5">
        <h4 className="font-semibold text-foreground mb-3">Что видит контрагент в личном кабинете</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
          <div className="bg-secondary/50 rounded-lg p-3 text-center">
            📋 Список своих заявок
          </div>
          <div className="bg-secondary/50 rounded-lg p-3 text-center">
            📅 Назначенные даты замера/монтажа
          </div>
          <div className="bg-secondary/50 rounded-lg p-3 text-center">
            📸 Фото и файлы после выполнения
          </div>
        </div>
        <div className="text-xs text-muted-foreground mt-3 text-center italic">
          Контрагент видит только свои заявки, чужие не видит
        </div>
      </div>

      {/* Регионы */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 text-center">
          <div className="text-lg font-semibold text-primary mb-2">🏙️ Москва</div>
          <div className="text-sm text-muted-foreground">
            Своя команда замерщиков и бригад
          </div>
        </div>
        <div className="bg-accent/30 border border-accent/50 rounded-xl p-4 text-center">
          <div className="text-lg font-semibold text-accent-foreground mb-2">🌉 Санкт-Петербург</div>
          <div className="text-sm text-muted-foreground">
            Своя команда замерщиков и бригад
          </div>
        </div>
      </div>
    </div>
  );
};
