import { 
  Globe, Search, Eye, ShoppingCart, Plus, CreditCard, 
  Truck, Package, MessageSquare, CheckCircle, RotateCcw
} from "lucide-react";
import { DiagramBox } from "../diagrams/DiagramBox";
import { Arrow } from "../diagrams/Arrow";

export const CustomerJourneyDiagram = () => {
  return (
    <div className="space-y-6">
      {/* Основной путь */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <DiagramBox variant="success" icon={Globe}>Главная страница</DiagramBox>
        <Arrow />
        <DiagramBox icon={Search}>Каталог товаров</DiagramBox>
        <Arrow />
        <div className="bg-secondary/30 border border-border/50 rounded-lg p-3">
          <div className="text-xs text-muted-foreground mb-2 text-center">Фильтры</div>
          <div className="flex flex-wrap gap-2 justify-center">
            <DiagramBox>Металл</DiagramBox>
            <DiagramBox>Золото / Серебро</DiagramBox>
            <DiagramBox>Проба</DiagramBox>
            <DiagramBox>Камни</DiagramBox>
            <DiagramBox>Бриллианты / Изумруды</DiagramBox>
            <DiagramBox>Цена</DiagramBox>
            <DiagramBox>от ... до ...</DiagramBox>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Arrow />
        <DiagramBox icon={Eye}>Карточка товара</DiagramBox>
        <Arrow />
        <DiagramBox icon={Plus}>Добавить в корзину</DiagramBox>
        <Arrow />
        <DiagramBox variant="blue" icon={ShoppingCart}>Корзина</DiagramBox>
        <Arrow />
        <DiagramBox icon={CreditCard}>Оформление заказа</DiagramBox>
        <Arrow />
        <DiagramBox variant="warning" icon={CreditCard}>Оплата онлайн</DiagramBox>
      </div>

      {/* После оплаты */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">После оплаты</span>
          <div className="flex flex-wrap items-center gap-2 justify-center">
            <DiagramBox icon={Truck}>SMS уведомление</DiagramBox>
            <Arrow />
            <DiagramBox icon={Package}>Отслеживание СДЭК</DiagramBox>
            <Arrow />
            <DiagramBox variant="success" icon={CheckCircle}>Получение товара</DiagramBox>
          </div>
        </div>
      </div>

      {/* Ошибка */}
      <div className="flex justify-center">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Ошибка</span>
          <Arrow />
          <DiagramBox variant="danger" icon={RotateCcw}>Повторить оплату</DiagramBox>
        </div>
      </div>
    </div>
  );
};
