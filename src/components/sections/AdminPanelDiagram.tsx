import { 
  LogIn, LayoutDashboard, ShoppingCart, 
  FolderOpen, Truck, CheckCircle, Printer, 
  Users, Eye, Upload, Edit, Globe, Package,
  Settings, BarChart3
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
        {/* Работа с заказами */}
        <DiagramSection title="Управление заказами">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            <DiagramBox variant="orange" icon={ShoppingCart}>Заказы</DiagramBox>
            <Arrow />
            <DiagramBox>Новые заказы</DiagramBox>
            <Arrow />
            <DiagramBox icon={CheckCircle}>Подтвердить</DiagramBox>
            <Arrow />
            <DiagramBox icon={Printer}>Печать накладной СДЭК</DiagramBox>
            <Arrow />
            <DiagramBox icon={Truck}>Передать курьеру</DiagramBox>
            <Arrow />
            <DiagramBox icon={Eye}>Отслеживание</DiagramBox>
          </div>
        </DiagramSection>

        {/* Управление товарами */}
        <DiagramSection title="Управление товарами">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            <DiagramBox variant="success" icon={FolderOpen}>Каталог</DiagramBox>
            <Arrow />
            <DiagramBox icon={Upload}>Загрузка из 1С</DiagramBox>
            <Arrow />
            <DiagramBox icon={Edit}>Редактирование</DiagramBox>
            <Arrow />
            <DiagramBox variant="success" icon={Globe}>Публикация на сайт</DiagramBox>
          </div>
        </DiagramSection>

        {/* Клиенты */}
        <DiagramSection title="Клиенты">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            <DiagramBox variant="blue" icon={Users}>База клиентов</DiagramBox>
            <Arrow />
            <DiagramBox icon={Package}>История заказов</DiagramBox>
            <Arrow />
            <DiagramBox icon={Eye}>Детали клиента</DiagramBox>
          </div>
        </DiagramSection>

        {/* Настройки и аналитика */}
        <DiagramSection title="Настройки и аналитика">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            <DiagramBox icon={Settings}>Настройки магазина</DiagramBox>
            <DiagramBox variant="purple" icon={BarChart3}>Статистика продаж</DiagramBox>
          </div>
        </DiagramSection>
      </div>
    </div>
  );
};
