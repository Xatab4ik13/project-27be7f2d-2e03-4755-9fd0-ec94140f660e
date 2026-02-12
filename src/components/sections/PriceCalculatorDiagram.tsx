import { 
  Search, Filter, SortAsc, Tag, Grid3X3
} from "lucide-react";

export const SearchFiltersDiagram = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-secondary/30 rounded-xl p-5 border border-border">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Search className="w-5 h-5 text-primary" />
            Живой поиск
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Подсказки по названию</li>
            <li>• Поиск по категории</li>
            <li>• Поиск по артикулу (SKU)</li>
            <li>• Мгновенные результаты</li>
          </ul>
        </div>

        <div className="bg-secondary/30 rounded-xl p-5 border border-border">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Filter className="w-5 h-5 text-primary" />
            Фильтры
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• По породе дерева</li>
            <li>• По размерам (Д/Ш/В)</li>
            <li>• По покрытию/цвету</li>
            <li>• По цене и наличию</li>
          </ul>
        </div>

        <div className="bg-secondary/30 rounded-xl p-5 border border-border">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <SortAsc className="w-5 h-5 text-primary" />
            Сортировка
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• По новизне</li>
            <li>• По цене (↑/↓)</li>
            <li>• По материалу</li>
            <li>• По рейтингу</li>
          </ul>
        </div>
      </div>

      {/* Категории */}
      <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <Grid3X3 className="w-5 h-5 text-primary" />
          Структура каталога
        </h4>
        <p className="text-sm text-muted-foreground">
          До <strong>50 категорий/подкатегорий</strong>. Страницы категорий с фильтрами. 
          SEO-индексация ключевых комбинаций фильтров (опционально).
        </p>
      </div>
    </div>
  );
};
