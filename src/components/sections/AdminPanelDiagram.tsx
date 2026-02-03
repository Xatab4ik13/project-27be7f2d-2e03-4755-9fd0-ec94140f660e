import { 
  LogIn, LayoutDashboard, Package, FileText, ShoppingCart, 
  FolderOpen, Gem, CircleDot, Truck, CheckCircle, Printer, 
  Users, Eye, Upload, Sparkles, Edit, Globe
} from "lucide-react";
import { DiagramBox } from "../diagrams/DiagramBox";
import { DiagramSection } from "../diagrams/DiagramSection";
import { Arrow } from "../diagrams/Arrow";

export const AdminPanelDiagram = () => {
  return (
    <div className="space-y-6">
      {/* Entry point */}
      <div className="flex items-center gap-3 justify-center flex-wrap">
        <DiagramBox variant="success" icon={LogIn}>Вход в систему</DiagramBox>
        <Arrow />
        <DiagramBox variant="orange" icon={LayoutDashboard}>Главный дашборд</DiagramBox>
      </div>

      {/* Main branches */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Учёт материалов */}
        <DiagramSection title="Учёт материалов">
          <div className="space-y-3">
            <div className="flex justify-center">
              <DiagramBox variant="purple" icon={Package}>Материалы</DiagramBox>
            </div>
            <div className="flex flex-col items-center gap-2 pl-8">
              <DiagramBox icon={Gem}>Камни по партиям</DiagramBox>
              <DiagramBox icon={CircleDot}>Металл 999/925</DiagramBox>
              <DiagramBox icon={Truck}>Отправки на заводы</DiagramBox>
            </div>
          </div>
        </DiagramSection>

        {/* ГИИС ДМДК */}
        <DiagramSection title="ГИИС ДМДК">
          <div className="space-y-3">
            <div className="flex justify-center">
              <DiagramBox variant="blue" icon={FileText}>ГИИС ДМДК</DiagramBox>
            </div>
            <div className="flex justify-center">
              <DiagramBox icon={FileText}>Отчёты</DiagramBox>
            </div>
          </div>
        </DiagramSection>

        {/* Работа с заказами */}
        <DiagramSection title="Работа с заказами">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            <DiagramBox variant="orange" icon={ShoppingCart}>Заказы</DiagramBox>
            <Arrow />
            <DiagramBox>Новые заказы</DiagramBox>
            <Arrow />
            <DiagramBox icon={CheckCircle}>Подтвердить</DiagramBox>
            <Arrow />
            <DiagramBox icon={Printer}>Печать накладной СДЭК</DiagramBox>
            <Arrow />
            <DiagramBox icon={Users}>Передать курьеру</DiagramBox>
            <Arrow />
            <DiagramBox icon={Eye}>Отслеживание</DiagramBox>
          </div>
        </DiagramSection>

        {/* Управление товарами */}
        <DiagramSection title="Управление товарами">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            <DiagramBox variant="success" icon={FolderOpen}>Каталог</DiagramBox>
            <Arrow />
            <DiagramBox icon={Upload}>Загрузка DBF от завода</DiagramBox>
            <Arrow />
            <DiagramBox icon={Sparkles}>Авто парсинг</DiagramBox>
            <Arrow />
            <DiagramBox icon={Edit}>Проверка / редактирование</DiagramBox>
            <Arrow />
            <DiagramBox variant="success" icon={Globe}>Публикация на сайт</DiagramBox>
          </div>
        </DiagramSection>
      </div>
    </div>
  );
};
