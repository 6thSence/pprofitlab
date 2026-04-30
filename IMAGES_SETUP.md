# 📸 Настройка изображений для сайта

## Текущее состояние

Сейчас все изображения используют **placeholder** (временные заглушки) через сервис `placehold.co`. Это сделано для успешного деплоя на Vercel.

## Как заменить placeholder на реальные фотографии

### Шаг 1: Подготовьте изображения

1. Соберите все фотографии клиентов, команды и других изображений
2. Оптимизируйте размер (рекомендуется WebP формат, размер до 500KB)
3. Используйте осмысленные имена файлов: `darya-pushkarskaya.jpg`, `team-marina.jpg` и т.д.

### Шаг 2: Разместите изображения

Создайте структуру папок в `public/`:

```
public/
  images/
    team/
      darya-pushkarskaya.jpg
      marina-ryabova.jpg
      nikita-dik.jpg
      ...
    clients/
      natalia-yuryeva.jpg
      anna-kuznetsova.jpg
      ...
    logos/
      skolkovo.png
      hse.png
      ...
```

### Шаг 3: Замените placeholder в компонентах

#### Вариант A: Прямые ссылки

Замените вызовы `getPlaceholderImage()` на прямые пути:

```tsx
// Было:
image: getPlaceholderImage('Марина Рябова')

// Станет:
image: '/images/team/marina-ryabova.jpg'
```

#### Вариант B: Используйте импорты (рекомендуется)

```tsx
// В начале файла
import marinaPhoto from '/images/team/marina-ryabova.jpg';

// В данных
image: marinaPhoto
```

### Примеры замены по компонентам:

#### Team.tsx
```tsx
const teamMembers = [
  {
    name: 'Марина Рябова',
    position: 'Финансовый директор',
    image: '/images/team/marina-ryabova.jpg', // вместо getPlaceholderImage
  },
  // ...
];
```

#### VideoTestimonialsGrid.tsx
```tsx
const testimonials = [
  {
    name: 'Вячеслав Дёмин',
    description: 'Со-владелец школы психологии',
    image: '/images/clients/viacheslav-demin.jpg',
  },
  // ...
];
```

#### AboutDarya.tsx
```tsx
// Фото Дарьи
<img src="/images/team/darya-pushkarskaya.jpg" alt="Дарья Пушкарская" />

// Логотипы
<img src="/images/logos/skolkovo.png" alt="Skolkovo" />
<img src="/images/logos/hse.png" alt="HSE" />
```

### Шаг 4: Тестирование

1. Запустите локально: `npm run dev`
2. Проверьте, что все изображения загружаются
3. Закоммитьте и запушьте изменения
4. Vercel автоматически задеплоит обновленную версию

## Оптимизация изображений

### Рекомендуемые размеры:

- **Фото команды**: 400x400px (квадрат)
- **Фото клиентов в отзывах**: 400x400px
- **Логотипы**: 200x100px (адаптивно)
- **Hero фото**: 800x800px

### Инструменты для оптимизации:

- [TinyPNG](https://tinypng.com/) - сжатие без потери качества
- [Squoosh](https://squoosh.app/) - конвертация в WebP
- [ImageOptim](https://imageoptim.com/) (Mac) - пакетная обработка

### WebP формат (лучшая производительность):

```tsx
<img 
  src="/images/team/marina.webp"
  alt="Марина Рябова"
/>
```

## Альтернатива: CDN для изображений

Если у вас много изображений, рассмотрите использование CDN:

- **Cloudinary** (бесплатно до 25GB)
- **ImgIX**
- **Uploadcare**

Пример с Cloudinary:
```tsx
image: 'https://res.cloudinary.com/your-cloud/image/upload/v1/team/marina.jpg'
```

---

## Удаление placeholder утилиты (опционально)

После замены всех placeholder можете удалить:
- `src/app/utils/placeholder.ts`
- Все импорты `import { getPlaceholderImage } from '../utils/placeholder'`

Но можете оставить для быстрого прототипирования новых разделов!

---

**Вопросы?** Дайте знать, если нужна помощь с загрузкой или оптимизацией изображений!
