import { 
  Home, ShoppingBag, Image, BookOpen, 
  Phone, FileText, User, ShoppingCart, Truck, Search, Star, CreditCard
} from "lucide-react";
import { DiagramSection } from "../diagrams/DiagramSection";

export const SiteStructureDiagram = () => {
  const publicPages = [
    { icon: Home, title: "Главная", desc: "Презентация, акции" },
    { icon: ShoppingBag, title: "Каталог", desc: "Категории, фильтры, AR" },
    { icon: Image, title: "Галерея", desc: "Фото изделий" },
    { icon: BookOpen, title: "Блог", desc: "Статьи, уход за деревом" },
    { icon: FileText, title: "О компании", desc: "История, производство" },
    { icon: Truck, title: "Доставка и оплата", desc: "Способы, сроки" },
    { icon: Phone, title: "Контакты", desc: "Адрес, телефон" },
    { icon: FileText, title: "Политики", desc: "Конфиденциальность, оферта" },
  ];

  const shopPages = [
    { icon: ShoppingBag, title: "Карточка товара", desc: "Фото, 3D/AR, характеристики, отзывы" },
    { icon: ShoppingCart, title: "Корзина", desc: "Гостевой и авторизованный заказ" },
    { icon: CreditCard, title: "Оформление заказа", desc: "Оплата, доставка, промокоды" },
    { icon: User, title: "Личный кабинет", desc: "Заказы, избранное, адреса" },
  ];

  const features = [
    "До 500 изделий из дерева",
    "AR-просмотр на мобильных (GLB/USDZ)",
    "Вариативные товары (размер/цвет/покрытие)",
    "Живой поиск с подсказками",
    "Фильтры по атрибутам и цене",
    "Кросселы и апселлы"
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

      <DiagramSection title="Магазин">
        <div className="space-y-2">
          {shopPages.map((page, index) => (
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
      </DiagramSection>

      <DiagramSection title="Ключевые возможности каталога">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li 
              key={index}
              className="flex items-center gap-2 bg-secondary/40 rounded-lg px-3 py-2"
            >
              <Star size={14} className="text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </DiagramSection>
    </div>
  );
};
