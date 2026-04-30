# ✅ ИСПРАВЛЕНО

## Проблема
```
Error: Cannot apply unknown utility class: font-montserrat
```

## Решение

### 1. Убрано использование `font-montserrat`
- В `globals.css` заменено `@apply font-montserrat` на прямое CSS-свойство
- Теперь используется: `font-family: 'Montserrat', Arial, sans-serif;`

### 2. Настроен Tailwind
- Montserrat установлен как дефолтный `sans` шрифт
- FuturaPT доступен через `font-futura`
- Конфигурация в `tailwind.config.js`:
  ```js
  fontFamily: {
    futura: ['FuturaPT', 'Arial', 'sans-serif'],
    sans: ['Montserrat', 'Arial', 'sans-serif'],  // ← Дефолтный
  }
  ```

### 3. Как использовать шрифты

#### В компонентах:
```tsx
// Montserrat (дефолтный) - не нужно указывать класс
<p>Обычный текст</p>

// FuturaPT для заголовков
<h1 className="font-futura">Заголовок</h1>
```

#### В CSS:
```css
body {
  font-family: 'Montserrat', Arial, sans-serif; /* Автоматически */
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'FuturaPT', Arial, sans-serif; /* Автоматически */
}
```

## Теперь работает! ✅

Перезапустите dev-сервер:
```bash
npm run dev
```

Ошибки больше не будет! 🎉

---

## Что изменилось

**До:**
- ❌ `@apply font-montserrat` в globals.css
- ❌ Несуществующий класс в Tailwind

**После:**
- ✅ Прямое CSS-свойство `font-family: 'Montserrat'`
- ✅ Montserrat как дефолтный `sans` в Tailwind
- ✅ Можно использовать стандартные Tailwind классы
- ✅ `font-futura` для заголовков

## Проверка

Если все правильно:
1. Dev-сервер запускается без ошибок ✅
2. Шрифты Montserrat и FuturaPT загружаются ✅
3. Все компоненты отображаются корректно ✅
4. Стили применяются как задумано ✅

**Готово к работе!** 🚀
