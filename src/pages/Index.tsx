import {
  Gem,
  ShoppingCart,
  User,
  FileText,
  Database,
  Calendar,
  Users,
  Download,
  Server,
  CreditCard,
  Truck,
  FileSpreadsheet,
  Factory,
  Link,
  Scale,
  Package,
  Upload,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionCard } from "@/components/SectionCard";
import { FlowDiagram } from "@/components/FlowDiagram";
import { DatabaseTable } from "@/components/DatabaseTable";
import { TimelineItem } from "@/components/TimelineItem";
import { TechBadge } from "@/components/TechBadge";

const Index = () => {
  const handleSavePDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-16 md:py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 animate-glow">
              <Gem className="w-10 h-10 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-center mb-6">
            <span className="gold-gradient-text">Ювелирный интернет-магазин</span>
            <br />
            <span className="text-foreground">с ERP-системой</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            Автоматизация продаж, учёта и отчётности ГИИС ДМДК
          </p>
          
          <div className="flex justify-center">
            <Button
              onClick={handleSavePDF}
              className="no-print bg-primary hover:bg-gold-dark text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Сохранить как PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 pb-16 space-y-8">
        {/* Путь покупателя */}
        <SectionCard title="Путь покупателя" icon={ShoppingCart}>
          <FlowDiagram
            steps={[
              "Каталог",
              "Фильтры (металл/камни/цена)",
              "Карточка товара",
              "Корзина",
              "Оформление заказа",
              "Оплата T-Bank",
              "Трекинг СДЭК",
              "Получение",
            ]}
          />
        </SectionCard>

        {/* Работа администратора */}
        <SectionCard title="Работа администратора" icon={User}>
          <FlowDiagram
            steps={[
              "Новый заказ",
              "Проверка оплаты",
              "Резерв товара",
              "Печать накладной",
              "Отправка СДЭК",
              "Автоматическое событие в ГИИС",
            ]}
          />
        </SectionCard>

        {/* Автоматизация ГИИС ДМДК */}
        <SectionCard title="Автоматизация ГИИС ДМДК" icon={FileText}>
          <FlowDiagram
            steps={[
              "Продажа/Возврат на сайте",
              "Запись в очередь событий",
              "Ночной экспорт XML",
              "Загрузка в 1С",
              "Подпись ЭЦП",
              "Отправка в ГИИС",
            ]}
          />
        </SectionCard>

        {/* Учёт металла и камней */}
        <SectionCard title="Учёт металла и камней" icon={Scale}>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Учёт металла
              </h3>
              <FlowDiagram
                steps={[
                  "Приход партии металла (вес, проба, цена за грамм)",
                  "Привязка к изделиям",
                  "Автоматический расчёт себестоимости",
                ]}
              />
            </div>
            <div className="border-t border-border/50 pt-6">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Gem className="w-5 h-5 text-primary" />
                Учёт камней
              </h3>
              <FlowDiagram
                steps={[
                  "Приход партии камней (караты, цена за карат)",
                  "Привязка к изделиям",
                  "Формирование розничной цены",
                ]}
              />
            </div>
          </div>
        </SectionCard>

        {/* Загрузка товаров от заводов */}
        <SectionCard title="Загрузка товаров от заводов" icon={Factory}>
          <FlowDiagram
            steps={[
              "DBF файл от завода",
              "Парсинг данных",
              "Создание карточек товаров",
              "Расчёт цены (металл + камни + работа + наценка)",
              "Публикация в каталог",
            ]}
          />
        </SectionCard>

        {/* Техническая архитектура */}
        <SectionCard title="Техническая архитектура" icon={Server}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TechBadge
              icon={Server}
              label="Frontend"
              description="React (Lovable)"
            />
            <TechBadge
              icon={Database}
              label="Backend"
              description="Node.js + PostgreSQL (TimeWeb)"
            />
            <TechBadge
              icon={CreditCard}
              label="Платежи"
              description="T-Bank"
            />
            <TechBadge
              icon={Truck}
              label="Доставка"
              description="СДЭК API"
            />
            <TechBadge
              icon={FileSpreadsheet}
              label="Отчётность"
              description="1С + ГИИС ДМДК"
            />
          </div>
        </SectionCard>

        {/* Интеграции */}
        <SectionCard title="Интеграции" icon={Link}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl border border-border/50">
              <CreditCard className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">T-Bank</h4>
                <p className="text-sm text-muted-foreground">Онлайн-оплата картами</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl border border-border/50">
              <Truck className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">СДЭК</h4>
                <p className="text-sm text-muted-foreground">Расчёт стоимости и трекинг</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl border border-border/50">
              <FileSpreadsheet className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">1С</h4>
                <p className="text-sm text-muted-foreground">Экспорт данных для ГИИС</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl border border-border/50">
              <Upload className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Заводы</h4>
                <p className="text-sm text-muted-foreground">Импорт DBF-файлов</p>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* База данных */}
        <SectionCard title="База данных" icon={Database}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DatabaseTable
              name="products"
              fields={[
                "UIN",
                "название",
                "металл",
                "проба",
                "вес",
                "камни",
                "цена",
              ]}
            />
            <DatabaseTable
              name="orders"
              fields={[
                "номер",
                "клиент",
                "сумма",
                "статус",
                "трекинг",
              ]}
            />
            <DatabaseTable
              name="stone_batches"
              fields={[
                "партия",
                "караты",
                "цена за карат",
              ]}
            />
            <DatabaseTable
              name="metal_batches"
              fields={[
                "партия",
                "металл",
                "проба",
                "вес",
                "цена за грамм",
              ]}
            />
            <DatabaseTable
              name="giis_events"
              fields={[
                "UIN",
                "тип операции",
                "дата",
                "статус отправки",
              ]}
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
              <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-8 text-center">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Lovable AI</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Весь код (frontend, backend, интеграции)
              </p>
            </div>
            <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Заказчик</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Контент, фото товаров, доступы к API
              </p>
            </div>
            <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <FileSpreadsheet className="w-6 h-6 text-primary" />
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
        <div className="text-center pt-8 no-print">
          <Button
            onClick={handleSavePDF}
            className="bg-primary hover:bg-gold-dark text-primary-foreground font-semibold px-12 py-6 text-lg rounded-xl"
          >
            <Download className="w-5 h-5 mr-2" />
            Сохранить как PDF
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Gem className="w-5 h-5 text-primary" />
          <span className="font-serif text-foreground">Ювелирный интернет-магазин</span>
        </div>
        <p className="text-sm">Полная автоматизация бизнес-процессов</p>
      </footer>
    </div>
  );
};

export default Index;
