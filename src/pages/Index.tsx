import {
  Download,
  Globe,
  ShoppingBag,
  ArrowLeftRight,
  Server,
  Calendar,
  FileSpreadsheet,
  Wrench,
  User,
  Search,
  Smartphone,
  TreePine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionCard } from "@/components/SectionCard";
import { ARDiagram } from "@/components/sections/RolesDiagram";
import { OrderFlowDiagram } from "@/components/sections/RequestFlowDiagram";
import { IntegrationsDiagram } from "@/components/sections/Bitrix24Diagram";
import { SiteStructureDiagram } from "@/components/sections/SiteStructureDiagram";
import { TechnicalDiagram } from "@/components/sections/TechnicalDiagram";
import { BenefitsList } from "@/components/diagrams/BenefitsList";
import { SearchFiltersDiagram } from "@/components/sections/PriceCalculatorDiagram";

const Index = () => {
  const handleSavePDF = () => {
    window.print();
  };

  const benefits = [
    "Интернет-магазин до 500 изделий из дерева",
    "AR-просмотр товаров на мобильных устройствах",
    "Вариативные товары (размер/цвет/покрытие)",
    "Живой поиск с подсказками и фильтрами",
    "Корзина, оформление заказа, промокоды",
    "Личный кабинет покупателя",
    "Блог с рубриками и SEO-оптимизацией",
    "Интеграция платёжных систем (YooKassa/CloudPayments)",
    "Доставка: СДЭК, Boxberry, ПЭК, Почта России и др.",
    "CRM-интеграция (amoCRM/Bitrix24/HubSpot)",
    "Уведомления: email, SMS, Telegram, WhatsApp",
    "GA4, Яндекс Метрика, GTM + AR-аналитика",
    "Раздел «Услуги» с описанием и скачиваемыми формами",
    "Форма обратной связи (телефон/email)",
    "Mobile-first адаптивная вёрстка",
    "SEO: микроразметка, JSON-LD, sitemap, контент-план",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="py-12 md:py-16 px-4 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
              <TreePine className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-center mb-4">
            <span className="text-primary">Интернет-магазин</span>
            <br />
            <span className="text-foreground">изделий из дерева с AR</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-6">
            До 500 изделий, 3D/AR-просмотр, блог, SEO-продвижение, 
            интеграции с платёжными системами и службами доставки
          </p>
          
          <div className="flex justify-center">
            <Button
              onClick={handleSavePDF}
              className="no-print bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-5 rounded-lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Сохранить как PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-8 space-y-6">
        
        <SectionCard title="Что входит в проект" icon={Wrench}>
          <BenefitsList benefits={benefits} />
        </SectionCard>

        <SectionCard title="Структура сайта" icon={Globe}>
          <SiteStructureDiagram />
        </SectionCard>

        <SectionCard title="Поиск и фильтры" icon={Search}>
          <SearchFiltersDiagram />
        </SectionCard>

        <SectionCard title="Каталог и оформление заказа" icon={ShoppingBag}>
          <OrderFlowDiagram />
        </SectionCard>

        <SectionCard title="AR-функционал" icon={Smartphone}>
          <ARDiagram />
        </SectionCard>

        <SectionCard title="Интеграции" icon={ArrowLeftRight}>
          <IntegrationsDiagram />
        </SectionCard>

        <SectionCard title="Техническая реализация" icon={Server}>
          <TechnicalDiagram />
        </SectionCard>

        {/* Этапы разработки */}
        <SectionCard title="Этапы разработки" icon={Calendar}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-secondary/30 border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Дизайн и фронтенд</h3>
                  <span className="text-sm text-muted-foreground">3 дня</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Дизайн-макеты (главная, каталог, карточка)</li>
                <li>• Адаптивная mobile-first вёрстка</li>
                <li>• Компоненты каталога и карточек товаров</li>
                <li>• Шаблоны блога и статических страниц</li>
              </ul>
            </div>

            <div className="bg-secondary/30 border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Бэкенд и функционал</h3>
                  <span className="text-sm text-muted-foreground">4 дня</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• База данных, API, авторизация</li>
                <li>• Каталог, корзина, оформление заказа</li>
                <li>• AR/3D интеграция (model-viewer)</li>
                <li>• Фильтры, поиск, сортировка</li>
                <li>• Личный кабинет покупателя</li>
              </ul>
            </div>

            <div className="bg-secondary/30 border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Интеграции и запуск</h3>
                  <span className="text-sm text-muted-foreground">3 дня</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Платёжные системы, доставка</li>
                <li>• Уведомления (email/SMS/Telegram)</li>
                <li>• SEO, аналитика, GTM</li>
                <li>• Деплой фронта и бэкенда</li>
                <li>• Тестирование и запуск</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <div className="bg-secondary/30 border border-border rounded-xl px-8 py-4 text-center">
              <div className="text-4xl font-serif font-bold text-primary mb-1">
                10 дней
              </div>
              <div className="text-muted-foreground">
                до полного запуска
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Стоимость работы */}
        <SectionCard title="Стоимость работы" icon={FileSpreadsheet}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-secondary/30 rounded-xl p-6 border border-border text-center">
              <div className="text-sm text-muted-foreground mb-2">Без договора</div>
              <div className="text-4xl font-bold text-primary">65 000 ₽</div>
            </div>
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/30 text-center">
              <div className="text-sm text-muted-foreground mb-2">С договором</div>
              <div className="text-4xl font-bold text-primary">75 000 ₽</div>
            </div>
          </div>

          <div className="bg-secondary/30 rounded-xl p-6 border border-border">
            <h4 className="font-semibold text-foreground mb-4 text-center">Схема оплаты</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-background/50 rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary mb-1">40%</div>
                <div className="text-sm text-muted-foreground">Предоплата перед началом работ</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary mb-1">40%</div>
                <div className="text-sm text-muted-foreground">После сдачи Этапа 1 (дизайн и вёрстка)</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary mb-1">20%</div>
                <div className="text-sm text-muted-foreground">После сдачи проекта (окончательный расчёт)</div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center p-4 bg-primary/10 rounded-xl border border-primary/30">
            <div className="text-primary font-medium">
              ✓ Бесплатная поддержка 30 дней после сдачи проекта
            </div>
          </div>
        </SectionCard>

        {/* Распределение задач */}
        <SectionCard title="Распределение задач" icon={User}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-secondary/30 rounded-lg p-5 border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Server className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Разработчик</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Дизайн, вёрстка, React-компоненты, бэкенд (PostgreSQL, API), 
                AR-интеграция, платежи, доставка, SEO, аналитика, деплой
              </p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-5 border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Заказчик</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Контент (тексты, фото товаров), 3D-модели изделий (GLB/USDZ), 
                доступы к CRM/платёжным системам, контент для блога
              </p>
            </div>
          </div>
        </SectionCard>

        {/* Образцы */}
        <SectionCard title="Референсы дизайна" icon={Globe}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://delaespada.com" target="_blank" rel="noopener noreferrer" 
              className="bg-secondary/30 rounded-lg p-5 border border-border/50 hover:border-primary/50 transition-colors">
              <div className="text-sm font-medium text-foreground mb-1">delaespada.com</div>
              <div className="text-xs text-muted-foreground">Премиальная мебель из дерева</div>
            </a>
            <a href="https://websitedemos.net/furniture-haven-04/" target="_blank" rel="noopener noreferrer"
              className="bg-secondary/30 rounded-lg p-5 border border-border/50 hover:border-primary/50 transition-colors">
              <div className="text-sm font-medium text-foreground mb-1">Furniture Haven</div>
              <div className="text-xs text-muted-foreground">Демо-шаблон мебельного магазина</div>
            </a>
          </div>
        </SectionCard>

        <div className="text-center pt-4 no-print">
          <Button
            onClick={handleSavePDF}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-10 py-5 rounded-lg"
          >
            <Download className="w-4 h-4 mr-2" />
            Сохранить как PDF
          </Button>
        </div>
      </main>

      <footer className="border-t border-border py-6 text-center text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-1">
          <TreePine className="w-4 h-4 text-primary" />
          <span className="font-serif text-foreground">Интернет-магазин изделий из дерева</span>
        </div>
        <p className="text-sm">React + PostgreSQL + AR</p>
      </footer>
    </div>
  );
};

export default Index;
