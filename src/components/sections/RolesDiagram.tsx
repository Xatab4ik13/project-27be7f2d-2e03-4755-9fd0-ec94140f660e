import { 
  Smartphone, Box, Eye, RotateCcw, Sparkles,
  ShoppingBag, ShoppingCart
} from "lucide-react";
import { DiagramSection } from "../diagrams/DiagramSection";

export const ARDiagram = () => {
  return (
    <div className="space-y-6">
      <div className="bg-primary/10 border border-primary/30 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Smartphone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <div className="font-medium text-foreground mb-1">Как работает AR</div>
            <p className="text-sm text-muted-foreground">
              Покупатель нажимает кнопку «Посмотреть в AR» на карточке товара. 
              На <strong>Android</strong> открывается Google Scene Viewer (GLB/GLTF), 
              на <strong>iOS</strong> — AR Quick Look (USDZ). Изделие отображается в реальном 
              интерьере через камеру телефона.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DiagramSection title="Требования к 3D-моделям">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Box size={14} className="text-primary mt-0.5 shrink-0" />
              <span>Форматы: GLB/GLTF (Android/Web) + USDZ (iOS)</span>
            </li>
            <li className="flex items-start gap-2">
              <Box size={14} className="text-primary mt-0.5 shrink-0" />
              <span>Поликаунт: 20–80k tris, текстуры PBR 1–2K</span>
            </li>
            <li className="flex items-start gap-2">
              <Box size={14} className="text-primary mt-0.5 shrink-0" />
              <span>GLB до 5–10 МБ, USDZ до 15 МБ</span>
            </li>
            <li className="flex items-start gap-2">
              <Box size={14} className="text-primary mt-0.5 shrink-0" />
              <span>Масштаб в мм, центр в (0,0,0)</span>
            </li>
          </ul>
        </DiagramSection>

        <DiagramSection title="AR UI и аналитика">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Eye size={14} className="text-primary mt-0.5 shrink-0" />
              <span>Кнопка «Посмотреть в AR» + 3D viewer на странице</span>
            </li>
            <li className="flex items-start gap-2">
              <RotateCcw size={14} className="text-primary mt-0.5 shrink-0" />
              <span>Fallback на 3D viewer и галерею</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles size={14} className="text-primary mt-0.5 shrink-0" />
              <span>События: click_AR, AR_start, AR_exit в GA4/Метрике</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles size={14} className="text-primary mt-0.5 shrink-0" />
              <span>KPI: AR-взаимодействия ≥5% от сеансов</span>
            </li>
          </ul>
        </DiagramSection>
      </div>

      <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
        <h4 className="font-semibold text-foreground mb-4 text-center">Путь покупателя</h4>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-lg border border-border">
            <ShoppingBag size={16} className="text-primary" />
            <span className="text-sm">Карточка товара</span>
          </div>
          <span className="text-muted-foreground">→</span>
          <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-lg border border-border">
            <Smartphone size={16} className="text-primary" />
            <span className="text-sm">Кнопка AR</span>
          </div>
          <span className="text-muted-foreground">→</span>
          <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-lg border border-border">
            <Eye size={16} className="text-primary" />
            <span className="text-sm">Просмотр в интерьере</span>
          </div>
          <span className="text-muted-foreground">→</span>
          <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-lg border border-border">
            <ShoppingCart size={16} className="text-primary" />
            <span className="text-sm">В корзину</span>
          </div>
        </div>
      </div>
    </div>
  );
};
