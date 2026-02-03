import {
  Gem,
  Download,
  LayoutDashboard,
  Workflow,
  Server,
  Factory,
  GitCompare,
  ShoppingCart,
  Calendar,
  Users,
  User,
  FileSpreadsheet,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionCard } from "@/components/SectionCard";
import { AdminPanelDiagram } from "@/components/sections/AdminPanelDiagram";
import { GIISDiagram } from "@/components/sections/GIISDiagram";
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
    "Загрузка DBF → товары сразу на сайте",
    "Авто-расчёт себестоимости и цены",
    "Пакетное гашение УИН ночью",
    "Дашборд со всеми заказами в реальном времени",
    "SMS-уведомления клиентам автоматически",
    "Интеграция с СДЭК: печать накладных в один клик",
    "Экспорт данных в 1С для бухгалтерии",
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
            <span className="text-foreground">с ERP-системой</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-6">
            Автоматизация продаж, учёта и отчётности ГИИС ДМДК
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
        
        {/* Преимущества автоматизации */}
        <SectionCard title="Преимущества автоматизации" icon={GitCompare}>
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

        {/* Автоматизация ГИИС ДМДК */}
        <SectionCard title="Автоматизация ГИИС ДМДК" icon={Workflow}>
          <GIISDiagram />
        </SectionCard>

        {/* Загрузка товаров от заводов */}
        <SectionCard title="Загрузка товаров от заводов" icon={Factory}>
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
                week="Дни 1-3"
                title="Интернет-магазин"
                description="Каталог, корзина, оформление заказов"
              />
              <TimelineItem
                week="Дни 4-6"
                title="Панель управления"
                description="Заказы, товары, загрузка DBF"
              />
              <TimelineItem
                week="Дни 7-8"
                title="Учёт и интеграции"
                description="Учёт металла и камней, платежи, СДЭК"
              />
              <TimelineItem
                week="Дни 9-10"
                title="ГИИС и тестирование"
                description="Очередь ГИИС, экспорт в 1С, тестирование"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-secondary/30 border border-border rounded-xl p-8 text-center">
                <div className="text-5xl font-serif font-bold gold-gradient-text mb-2">
                  10
                </div>
                <div className="text-xl text-foreground font-semibold">
                  дней
                </div>
                <div className="text-muted-foreground mt-2">
                  до запуска MVP
                </div>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Стоимость работы */}
        <SectionCard title="Стоимость работы" icon={FileSpreadsheet}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-secondary/30 rounded-lg p-5 border border-border/50 text-center">
              <div className="text-sm text-muted-foreground mb-2">Дни 1-3</div>
              <div className="text-2xl font-bold gold-gradient-text">60 000 ₽</div>
              <div className="text-sm text-foreground mt-2">Интернет-магазин</div>
            </div>
            <div className="bg-secondary/30 rounded-lg p-5 border border-border/50 text-center">
              <div className="text-sm text-muted-foreground mb-2">Дни 4-6</div>
              <div className="text-2xl font-bold gold-gradient-text">60 000 ₽</div>
              <div className="text-sm text-foreground mt-2">Панель управления</div>
            </div>
            <div className="bg-secondary/30 rounded-lg p-5 border border-border/50 text-center">
              <div className="text-sm text-muted-foreground mb-2">Дни 7-8</div>
              <div className="text-2xl font-bold gold-gradient-text">40 000 ₽</div>
              <div className="text-sm text-foreground mt-2">Учёт и интеграции</div>
            </div>
            <div className="bg-secondary/30 rounded-lg p-5 border border-border/50 text-center">
              <div className="text-sm text-muted-foreground mb-2">Дни 9-10</div>
              <div className="text-2xl font-bold gold-gradient-text">40 000 ₽</div>
              <div className="text-sm text-foreground mt-2">ГИИС и тесты</div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="inline-block bg-primary/10 border border-primary/20 rounded-xl px-8 py-4">
              <div className="text-sm text-muted-foreground mb-1">Итого</div>
              <div className="text-3xl font-bold gold-gradient-text">200 000 ₽</div>
            </div>
          </div>
        </SectionCard>

        {/* Распределение задач */}
        <SectionCard title="Распределение задач" icon={Users}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-secondary/30 rounded-lg p-5 border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Server className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Разработчик</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Весь код (frontend, backend, интеграции)
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
                Контент, фото товаров, доступы к API
              </p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-5 border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <FileSpreadsheet className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">1С-программист</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Скрипт импорта XML (2-4 часа работы)
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
          <span className="font-serif text-foreground">Ювелирный интернет-магазин с ERP</span>
        </div>
        <p className="text-sm">Полная автоматизация бизнес-процессов</p>
      </footer>
    </div>
  );
};

export default Index;
