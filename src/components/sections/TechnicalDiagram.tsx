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
      items: ["WordPress 6.7+, WooCommerce 8.6–9.x", "MySQL 8.0+ / MariaDB 10.6+", "PHP 8.3, Nginx 1.20+", "Кастомная блок-тема (Gutenberg)"]
    },
    {
      icon: Shield,
      title: "Безопасность",
      items: ["HTTPS, SSL", "reCAPTCHA", "Защита от брутфорса", "Онлайн-чеки (54-ФЗ)"]
    },
    {
      icon: Cloud,
      title: "Хостинг и CDN",
      items: ["Selectel / Reg.ru", "CDN Qrator Labs", "OPcache, Redis (опц.)", "Ежедневный бэкап"]
    },
    {
      icon: Gauge,
      title: "Производительность",
      items: ["LCP ≤ 2.5s, CLS ≤ 0.1", "PageSpeed Mobile 75+", "Lazy-load, WebP", "Core Web Vitals — зелёная зона"]
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
