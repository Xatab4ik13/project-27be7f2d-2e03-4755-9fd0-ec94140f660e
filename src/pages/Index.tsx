import {
  DoorOpen,
  Download,
  Globe,
  Users,
  ArrowLeftRight,
  Server,
  Calendar,
  FileSpreadsheet,
  Wrench,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionCard } from "@/components/SectionCard";
import { RolesDiagram } from "@/components/sections/RolesDiagram";
import { RequestFlowDiagram } from "@/components/sections/RequestFlowDiagram";
import { Bitrix24Diagram } from "@/components/sections/Bitrix24Diagram";
import { SiteStructureDiagram } from "@/components/sections/SiteStructureDiagram";
import { TechnicalDiagram } from "@/components/sections/TechnicalDiagram";
import { BenefitsList } from "@/components/diagrams/BenefitsList";

const Index = () => {
  const handleSavePDF = () => {
    window.print();
  };

  const benefits = [
    "Многостраничный сайт компании",
    "5 типов личных кабинетов по ролям",
    "Двусторонняя интеграция с Битрикс24",
    "Разделение на Москву и Санкт-Петербург",
    "Полный цикл: заявка → замер → монтаж",
    "Загрузка фото и документов на каждом этапе",
    "SMS/WhatsApp уведомления",
    "Мобильная адаптация всех кабинетов",
    "Логи действий и история статусов",
    "Облачное хранилище для файлов",
    "Админ-панель для управления системой",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="py-12 md:py-16 px-4 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
              <DoorOpen className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-center mb-4">
            <span className="text-primary">Сервис установки дверей</span>
            <br />
            <span className="text-foreground">Москва и Санкт-Петербург</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-6">
            Многостраничный сайт с личными кабинетами, интеграцией Битрикс24, 
            разделением по регионам и полным циклом работы
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
        
        {/* Что входит в проект */}
        <SectionCard title="Что входит в проект" icon={Wrench}>
          <BenefitsList benefits={benefits} />
        </SectionCard>

        {/* Структура сайта */}
        <SectionCard title="Структура сайта" icon={Globe}>
          <SiteStructureDiagram />
        </SectionCard>

        {/* Роли пользователей */}
        <SectionCard title="Личные кабинеты по ролям" icon={Users}>
          <RolesDiagram />
        </SectionCard>

        {/* Путь заявки */}
        <SectionCard title="Путь заявки" icon={ArrowLeftRight}>
          <RequestFlowDiagram />
        </SectionCard>

        {/* Интеграция с Битрикс24 */}
        <SectionCard title="Интеграция с Битрикс24" icon={ArrowLeftRight}>
          <Bitrix24Diagram />
        </SectionCard>

        {/* Техническая реализация */}
        <SectionCard title="Техническая реализация" icon={Server}>
          <TechnicalDiagram />
        </SectionCard>

        {/* Этапы разработки */}
        <SectionCard title="Этапы разработки" icon={Calendar}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Этап 1 */}
            <div className="bg-secondary/30 border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Дизайн и вёрстка</h3>
                  <span className="text-sm text-muted-foreground">3 дня</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Дизайн-макеты публичной части</li>
                <li>• Дизайн личных кабинетов</li>
                <li>• Адаптивная вёрстка (мобильная версия)</li>
                <li>• Главная, услуги, портфолио, контакты</li>
                <li>• Формы заявок</li>
              </ul>
            </div>

            {/* Этап 2 */}
            <div className="bg-secondary/30 border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Функционал кабинетов</h3>
                  <span className="text-sm text-muted-foreground">4 дня</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Авторизация и роли пользователей</li>
                <li>• Кабинет партнёра (заявки, фото)</li>
                <li>• Кабинет замерщика</li>
                <li>• Кабинет бригады монтажников</li>
                <li>• Кабинет менеджера</li>
                <li>• Админ-панель</li>
              </ul>
            </div>

            {/* Этап 3 */}
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
                <li>• Интеграция с Битрикс24 (двусторонняя)</li>
                <li>• SMS/WhatsApp уведомления</li>
                <li>• Облачное хранилище для фото</li>
                <li>• Тестирование всех ролей</li>
                <li>• Деплой и запуск</li>
              </ul>
            </div>
          </div>

          {/* Итого дней */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary/30 rounded-xl p-6 border border-border text-center">
              <div className="text-sm text-muted-foreground mb-2">Без договора</div>
              <div className="text-4xl font-bold text-primary mb-2">70 000 ₽</div>
              <div className="text-sm text-muted-foreground">
                Оплата по факту выполнения этапов
              </div>
            </div>
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/30 text-center">
              <div className="text-sm text-muted-foreground mb-2">С договором (+12%)</div>
              <div className="text-4xl font-bold text-primary mb-2">78 400 ₽</div>
              <div className="text-sm text-muted-foreground">
                Официальное оформление, гарантии
              </div>
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
                Дизайн, вёрстка, все личные кабинеты, интеграция Битрикс24, 
                уведомления, хранилище файлов, деплой
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
                Контент (тексты, фото портфолио), доступы к Битрикс24, 
                тексты SMS-уведомлений, список пользователей для регистрации
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
          <DoorOpen className="w-4 h-4 text-primary" />
          <span className="font-serif text-foreground">Сервис установки дверей</span>
        </div>
        <p className="text-sm">Москва • Санкт-Петербург</p>
      </footer>
    </div>
  );
};

export default Index;
