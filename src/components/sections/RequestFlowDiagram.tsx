import { 
  Search, ShoppingCart, CreditCard, Truck, 
  CheckCircle, Package, Star, ArrowRight
} from "lucide-react";
import { DiagramBox } from "../diagrams/DiagramBox";
import { Arrow } from "../diagrams/Arrow";

export const OrderFlowDiagram = () => {
  return (
    <div className="space-y-6">
      {/* Путь заказа */}
      <div className="bg-secondary/20 border border-border rounded-xl p-5">
        <h4 className="font-semibold text-foreground mb-4 text-center">Путь заказа</h4>
        
        <div className="flex flex-wrap items-center justify-center gap-3">
          <DiagramBox variant="blue" icon={Search}>
            Поиск / Каталог
          </DiagramBox>
          <Arrow />
          <DiagramBox variant="primary" icon={Package}>
            Карточка товара
          </DiagramBox>
          <Arrow />
          <DiagramBox variant="warning" icon={ShoppingCart}>
            Корзина
          </DiagramBox>
        </div>

        <div className="flex justify-center my-4">
          <ArrowRight className="text-muted-foreground rotate-90" size={24} />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <DiagramBox variant="orange" icon={CreditCard}>
            Оплата
          </DiagramBox>
          <Arrow />
          <DiagramBox variant="purple" icon={Truck}>
            Доставка
          </DiagramBox>
          <Arrow />
          <DiagramBox variant="success" icon={CheckCircle}>
            Получен
          </DiagramBox>
        </div>
      </div>

      {/* Карточка товара */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-secondary/30 border border-border rounded-xl p-5">
          <h4 className="font-semibold text-foreground mb-3">Карточка товара</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Фото 5–8 шт., зум, лайтбокс, 360° спин</li>
            <li>• 3D-модель и кнопка «Посмотреть в AR»</li>
            <li>• Описание товара (текст, характеристики, состав)</li>
            <li>• Атрибуты: порода, размеры, покрытие, вес</li>
            <li>• Вариации (размер/цвет/покрытие)</li>
            <li>• Кросселы: «С этим покупают», «Похожие»</li>
            <li>• Отзывы, рейтинг, Q&A</li>
          </ul>
        </div>

        <div className="bg-secondary/30 border border-border rounded-xl p-5">
          <h4 className="font-semibold text-foreground mb-3">Корзина и оформление</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Гостевой заказ и через аккаунт</li>
            <li>• Оплата: YooKassa / CloudPayments</li>
            <li>• Доставка: СДЭК, Boxberry, ПЭК и др.</li>
            <li>• Калькулятор стоимости/сроков доставки</li>
            <li>• Промокоды, купоны, сертификаты (опц.)</li>
            <li>• Уведомления о статусе (email/SMS)</li>
          </ul>
        </div>
      </div>

      {/* Личный кабинет */}
      <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <Star size={18} className="text-primary" />
          Личный кабинет покупателя
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm text-muted-foreground">
          <div className="bg-background/50 rounded-lg p-3 text-center">
            📋 История заказов и повторы
          </div>
          <div className="bg-background/50 rounded-lg p-3 text-center">
            ❤️ Избранное и сохранённые адреса
          </div>
          <div className="bg-background/50 rounded-lg p-3 text-center">
            📦 Отслеживание доставки
          </div>
          <div className="bg-background/50 rounded-lg p-3 text-center">
            📄 Формы услуг (заполнение и скачивание)
          </div>
        </div>
      </div>
    </div>
  );
};
