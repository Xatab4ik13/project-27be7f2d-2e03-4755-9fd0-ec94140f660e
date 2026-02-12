import { 
  Shield, Cloud, Bell, Lock, 
  Database, Activity, Save, Gauge, Search
} from "lucide-react";
import { DiagramSection } from "../diagrams/DiagramSection";

export const TechnicalDiagram = () => {
  const techFeatures = [
    {
      icon: Database,
      title: "Стек",
      items: ["React 18, TypeScript, Tailwind CSS", "PostgreSQL (Supabase)", "Node.js, Edge Functions", "Vite, SPA-архитектура"]
    },
    {
      icon: Shield,
      title: "Безопасность",
      items: ["HTTPS, SSL", "JWT-авторизация, RLS-политики", "Защита API, rate limiting", "Онлайн-чеки (54-ФЗ)"]
    },
    {
      icon: Cloud,
      title: "Хостинг",
      items: ["Фронтенд — Timeweb Cloud", "Бэкенд — VPS Timeweb", "Nginx reverse proxy", "Ежедневный бэкап БД"]
    },
    {
      icon: Gauge,
      title: "Производительность",
      items: ["LCP ≤ 2.5s, CLS ≤ 0.1", "PageSpeed Mobile 80+", "Lazy-load, WebP, code splitting", "Core Web Vitals — зелёная зона"]
    },
    {
      icon: Search,
      title: "SEO",
      items: ["ЧПУ, каноникал, sitemap", "Микроразметка (Product, Article)", "JSON-LD, Open Graph", "Контент-план на 3 мес."]
    },
    {
      icon: Activity,
      title: "Аналитика",
      items: ["GA4, Яндекс Метрика, GTM", "E-commerce events", "AR-аналитика кликов", "UTM, сквозная аналитика"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {techFeatures.map((feature, index) => (
        <DiagramSection key={index} title={feature.title}>
          <div className="flex items-center gap-2 mb-3">
            <feature.icon size={20} className="text-primary" />
          </div>
          <ul className="space-y-1">
            {feature.items.map((item, idx) => (
              <li key={idx} className="text-sm text-muted-foreground">
                • {item}
              </li>
            ))}
          </ul>
        </DiagramSection>
      ))}
    </div>
  );
};
