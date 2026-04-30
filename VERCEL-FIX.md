# 🔧 Инструкция по исправлению деплоя на Vercel

## Что было исправлено:

1. ✅ Удалены дублированные зависимости из `package.json`
2. ✅ Исправлен `.npmrc` для совместимости с Vercel
3. ✅ Добавлены `react` и `react-dom` в основные зависимости

## Что нужно сделать:

### Шаг 1: Закоммитьте изменения

```bash
git add package.json .npmrc
git commit -m "Fix package.json for Vercel deployment"
git push origin main
```

### Шаг 2: Переразверните на Vercel

После push на GitHub:
1. Зайдите в Vercel Dashboard
2. Найдите ваш проект **pprofitlab**
3. Нажмите **"Redeploy"** или просто подождите - Vercel автоматически подхватит изменения

### Настройки Vercel (проверьте):

- **Framework Preset**: Vite
- **Build Command**: `pnpm run build` или `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install` (можно оставить пустым)

## Альтернатива: использовать npm вместо pnpm

Если проблемы с pnpm продолжаются, можете переключиться на npm:

1. Удалите `pnpm-lock.yaml` и `pnpm-workspace.yaml`
2. В Vercel измените **Install Command** на: `npm install`
3. **Build Command**: `npm run build`

---

## ⚡ Быстрое решение прямо сейчас:

Если хотите быстро задеплоить без ожидания:

### Вариант А: Netlify (проще для отладки)
1. Зайдите на [netlify.com](https://netlify.com)
2. Перетащите папку `dist` (если она есть) в поле загрузки
3. Или подключите GitHub репозиторий с настройками:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Вариант Б: GitHub Pages
Добавьте в `package.json` в секцию `scripts`:

```json
"deploy": "vite build && gh-pages -d dist"
```

Установите gh-pages:
```bash
npm install -D gh-pages
```

Запустите деплой:
```bash
npm run deploy
```

---

**Если нужна дополнительная помощь, дайте знать!**
