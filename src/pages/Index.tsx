import {
  Gem,
  Download,
  LayoutDashboard,
  Server,
  Factory,
  GitCompare,
  ShoppingCart,
  Calendar,
  Users,
  User,
  FileSpreadsheet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionCard } from "@/components/SectionCard";
import { AdminPanelDiagram } from "@/components/sections/AdminPanelDiagram";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { DBFLoadingDiagram } from "@/components/sections/DBFLoadingDiagram";
import { CustomerJourneyDiagram } from "@/components/sections/CustomerJourneyDiagram";
import { BenefitsList } from "@/components/diagrams/BenefitsList";
import { TimelineItem } from "@/components/TimelineItem";

const Index = () => {
  const handleSavePDF = () => {
    window.print();
  };

  const benefits = [
    "Полноценный каталог с фильтрами и поиском",
    "Корзина и оформление заказов онлайн",
    "Оплата картой через платёжную систему",
    "Автоматические SMS-уведомления клиентам",
    "Интеграция с СДЭК: печать накладных в один клик",
    "Синхронизация товаров и заказов с 1С",
    "Удобная админ-панель для управления магазином",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="py-12 md:py-16 px-4 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
              <Gem className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-center mb-4">
            <span className="gold-gradient-text">Ювелирный интернет-магазин</span>
            <br />
            <span className="text-foreground">с интеграцией 1С</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-6">
            Современный интернет-магазин с админ-панелью и автоматической синхронизацией с 1С
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
        
        {/* Преимущества */}
        <SectionCard title="Что входит в проект" icon={GitCompare}>
          <BenefitsList benefits={benefits} />
        </SectionCard>

        {/* Путь покупателя */}
        <SectionCard title="Путь покупателя" icon={ShoppingCart}>
          <CustomerJourneyDiagram />
        </SectionCard>

        {/* Панель управления */}
        <SectionCard title="Панель управления Админа" icon={LayoutDashboard}>
          <AdminPanelDiagram />
        </SectionCard>

        {/* Загрузка товаров */}
        <SectionCard title="Загрузка товаров и синхронизация с 1С" icon={Factory}>
          <DBFLoadingDiagram />
        </SectionCard>

        {/* Техническая архитектура */}
        <SectionCard title="Техническая архитектура" icon={Server}>
          <ArchitectureDiagram />
        </SectionCard>

        {/* Сроки разработки */}
        <SectionCard title="Сроки разработки" icon={Calendar}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <TimelineItem
                week="Дни 1-2"
                title="Интернет-магазин"
                description="Каталог, фильтры, карточки товаров, корзина"
              />
              <TimelineItem
                week="Дни 3-4"
                title="Оформление и оплата"
                description="Оформление заказов, интеграция платежей"
              />
              <TimelineItem
                week="Дни 5-6"
                title="Админ-панель"
                description="Управление товарами, заказами, клиентами"
              />
              <TimelineItem
                week="День 7"
                title="Интеграции и тестирование"
                description="СДЭК, SMS, синхронизация с 1С, тестирование"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-secondary/30 border border-border rounded-xl p-8 text-center">
                <div className="text-5xl font-serif font-bold gold-gradient-text mb-2">
                  7
                </div>
                <div className="text-xl text-foreground font-semibold">
                  дней
                </div>
                <div className="text-muted-foreground mt-2">
                  до запуска
                </div>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Стоимость работы */}
        <SectionCard title="Стоимость работы" icon={FileSpreadsheet}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-secondary/30 rounded-lg p-5 border border-border/50 text-center">
              <div className="text-sm text-muted-foreground mb-2">Дни 1-2</div>
              <div className="text-2xl font-bold gold-gradient-text">35 000 ₽</div>
              <div className="text-sm text-foreground mt-2">Интернет-магазин</div>
            </div>
            <div className="bg-secondary/30 rounded-lg p-5 border border-border/50 text-center">
              <div className="text-sm text-muted-foreground mb-2">Дни 3-4</div>
              <div className="text-2xl font-bold gold-gradient-text">35 000 ₽</div>
              <div className="text-sm text-foreground mt-2">Оформление и оплата</div>
            </div>
            <div className="bg-secondary/30 rounded-lg p-5 border border-border/50 text-center">
              <div className="text-sm text-muted-foreground mb-2">Дни 5-6</div>
              <div className="text-2xl font-bold gold-gradient-text">35 000 ₽</div>
              <div className="text-sm text-foreground mt-2">Админ-панель</div>
            </div>
            <div className="bg-secondary/30 rounded-lg p-5 border border-border/50 text-center">
              <div className="text-sm text-muted-foreground mb-2">День 7</div>
              <div className="text-2xl font-bold gold-gradient-text">15 000 ₽</div>
              <div className="text-sm text-foreground mt-2">Интеграции и тесты</div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="inline-block bg-primary/10 border border-primary/20 rounded-xl px-8 py-4">
              <div className="text-sm text-muted-foreground mb-1">Итого</div>
              <div className="text-3xl font-bold gold-gradient-text">120 000 ₽</div>
            </div>
          </div>
        </SectionCard>

        {/* Распределение задач */}
        <SectionCard title="Распределение задач" icon={Users}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-secondary/30 rounded-lg p-5 border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Server className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Разработчик</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Интернет-магазин, админ-панель, все интеграции (платежи, СДЭК, SMS, 1С)
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
                Контент, фото товаров, доступы к API платёжной системы и 1С
              </p>
            </div>
          </div>
        </SectionCard>

        {/* Footer CTA */}
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

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Gem className="w-4 h-4 text-primary" />
          <span className="font-serif text-foreground">Ювелирный интернет-магазин</span>
        </div>
        <p className="text-sm">Современные продажи с удобным управлением</p>
      </footer>
    </div>
  );
};

export default Index;
