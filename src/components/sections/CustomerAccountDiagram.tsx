import { 
  LogIn, UserCircle, Package, Heart, MapPin, 
  Settings, Eye, RotateCcw, Bell, CreditCard
} from "lucide-react";
import { DiagramBox } from "../diagrams/DiagramBox";
import { DiagramSection } from "../diagrams/DiagramSection";
import { Arrow } from "../diagrams/Arrow";

export const CustomerAccountDiagram = () => {
  return (
    <div className="space-y-6">
      {/* Вход */}
      <div className="flex items-center gap-3 justify-center flex-wrap">
        <DiagramBox variant="success" icon={LogIn}>Регистрация / Вход</DiagramBox>
        <Arrow />
        <DiagramBox variant="purple" icon={UserCircle}>Личный кабинет</DiagramBox>
      </div>

      {/* Разделы личного кабинета */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* История заказов */}
        <DiagramSection title="История заказов">
          <div className="flex flex-col items-center gap-2">
            <DiagramBox variant="orange" icon={Package}>Мои заказы</DiagramBox>
            <div className="flex gap-2 flex-wrap justify-center">
              <DiagramBox icon={Eye}>Детали заказа</DiagramBox>
              <DiagramBox icon={RotateCcw}>Повторить заказ</DiagramBox>
            </div>
          </div>
        </DiagramSection>

        {/* Избранное */}
        <DiagramSection title="Избранное">
          <div className="flex flex-col items-center gap-2">
            <DiagramBox variant="danger" icon={Heart}>Список желаний</DiagramBox>
            <DiagramBox>Добавить в корзину</DiagramBox>
          </div>
        </DiagramSection>

        {/* Адреса доставки */}
        <DiagramSection title="Адреса доставки">
          <div className="flex flex-col items-center gap-2">
            <DiagramBox variant="blue" icon={MapPin}>Сохранённые адреса</DiagramBox>
            <DiagramBox>Добавить новый адрес</DiagramBox>
          </div>
        </DiagramSection>

        {/* Уведомления */}
        <DiagramSection title="Уведомления">
          <div className="flex flex-col items-center gap-2">
            <DiagramBox icon={Bell}>SMS и Email</DiagramBox>
            <DiagramBox>Статусы заказов</DiagramBox>
          </div>
        </DiagramSection>

        {/* Способы оплаты */}
        <DiagramSection title="Способы оплаты">
          <div className="flex flex-col items-center gap-2">
            <DiagramBox variant="warning" icon={CreditCard}>Сохранённые карты</DiagramBox>
            <DiagramBox>Быстрая оплата</DiagramBox>
          </div>
        </DiagramSection>

        {/* Настройки профиля */}
        <DiagramSection title="Настройки">
          <div className="flex flex-col items-center gap-2">
            <DiagramBox icon={Settings}>Профиль</DiagramBox>
            <DiagramBox>Изменить пароль</DiagramBox>
          </div>
        </DiagramSection>
      </div>
    </div>
  );
};
