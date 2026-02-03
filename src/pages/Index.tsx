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
  Database,
  User,
  FileSpreadsheet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionCard } from "@/components/SectionCard";
import { AdminPanelDiagram } from "@/components/sections/AdminPanelDiagram";
import { GIISDiagram } from "@/components/sections/GIISDiagram";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { DBFLoadingDiagram } from "@/components/sections/DBFLoadingDiagram";
import { CustomerJourneyDiagram } from "@/components/sections/CustomerJourneyDiagram";
import { ComparisonTable } from "@/components/diagrams/ComparisonTable";
import { DatabaseTable } from "@/components/DatabaseTable";
import { TimelineItem } from "@/components/TimelineItem";

const Index = () => {
  const handleSavePDF = () => {
    window.print();
  };

  const comparisonRows = [
    { before: "Ввод товаров руками", after: "Загрузка DBF → товары на сайте" },
    { before: "Расчёт цен в Excel", after: "Авто-расчёт себестоимости и цены" },
    { before: "Гашение УИН по одному", after: "Пакетное гашение УИН ночью" },
    { before: "Отслеживание заказов в блокноте", after: "Дашборд со всеми заказами" },
    { before: "Звонки клиентам о статусе", after: "SMS-уведомления автоматически" },
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
        
        {/* Сравнение До/После */}
        <SectionCard title="Сравнение: До и После" icon={GitCompare}>
          <ComparisonTable rows={comparisonRows} />
        </SectionCard>

        {/* Путь покупателя */}
        <SectionCard title="Путь покупателя" icon={ShoppingCart}>
          <CustomerJourneyDiagram />
        </SectionCard>

        {/* Панель управления */}
        <SectionCard title="Панель управления Ольги" icon={LayoutDashboard}>
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

        {/* База данных */}
        <SectionCard title="База данных" icon={Database}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DatabaseTable
              name="products"
              fields={["UIN", "название", "металл", "проба", "вес", "камни", "цена"]}
            />
            <DatabaseTable
              name="orders"
              fields={["номер", "клиент", "сумма", "статус", "трекинг"]}
            />
            <DatabaseTable
              name="stone_batches"
              fields={["партия", "караты", "цена за карат"]}
            />
            <DatabaseTable
              name="metal_batches"
              fields={["партия", "металл", "проба", "вес", "цена за грамм"]}
            />
            <DatabaseTable
              name="giis_events"
              fields={["UIN", "тип операции", "дата", "статус отправки"]}
            />
          </div>
        </SectionCard>

        {/* Сроки разработки */}
        <SectionCard title="Сроки разработки" icon={Calendar}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <TimelineItem
                week="Неделя 1"
                title="Интернет-магазин"
                description="Каталог, корзина, заказы"
              />
              <TimelineItem
                week="Неделя 2"
                title="Панель управления"
                description="Заказы, товары, загрузка DBF"
              />
              <TimelineItem
                week="Неделя 3"
                title="Учёт и интеграции"
                description="Учёт металла и камней, T-Bank/СДЭК"
              />
              <TimelineItem
                week="Неделя 4"
                title="ГИИС и тестирование"
                description="Очередь ГИИС, экспорт в 1С, тестирование"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-secondary/30 border border-border rounded-xl p-8 text-center">
                <div className="text-5xl font-serif font-bold gold-gradient-text mb-2">
                  3-4
                </div>
                <div className="text-xl text-foreground font-semibold">
                  недели
                </div>
                <div className="text-muted-foreground mt-2">
                  до запуска MVP
                </div>
              </div>
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
