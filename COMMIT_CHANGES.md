# Инструкция: как закоммитить и запушить изменения

Я исправил все проблемы с деплоем на Vercel. Теперь нужно закоммитить изменения.

## Что было исправлено:

1. ✅ Удалены все `figma:asset` импорты, которые не работают в продакшн
2. ✅ Создана утилита `src/app/utils/placeholder.ts` для генерации placeholder изображений
3. ✅ Обновлены все компоненты для использования placeholder вместо figma:asset
4. ✅ Исправлена структура CSS - @import шрифтов перенесены в отдельный файл `fonts.css`
5. ✅ Обновлен `package.json` для совместимости с Vercel
6. ✅ Обновлен `.npmrc` для правильной установки зависимостей

## Файлы изменены:

- package.json
- .npmrc
- src/app/utils/placeholder.ts (новый файл)
- src/styles/fonts.css (новый файл)
- src/styles/index.css
- src/styles/globals.css
- src/app/components/VideoTestimonialsGrid.tsx
- src/app/components/Team.tsx
- src/app/components/AboutDarya.tsx
- src/app/components/SixSteps.tsx
- src/app/components/DiagnosticBooking.tsx
- src/app/components/DiagnosticModal.tsx
- src/app/components/ProblemsSolved.tsx
- src/app/components/Templates.tsx
- src/app/components/ExitPopup.tsx
- src/app/components/HeroNew.tsx

## Команды для коммита:

```bash
# Добавить все изменения
git add -A

# Создать коммит
git commit -m "Fix Vercel deployment issues

- Replace all figma:asset imports with placeholder utility
- Add placeholder image generator
- Fix CSS @import order for fonts
- Update package.json for production build
- All images now use placeholder service

This fixes the build errors on Vercel."

# Отправить на GitHub
git push origin main
```

## После push:

1. Зайдите в Vercel Dashboard
2. Vercel автоматически начнет новый деплой
3. Или нажмите "Redeploy" вручную
4. Сборка должна пройти успешно!

---

**Примечание:** После успешного деплоя вы сможете загрузить реальные фотографии клиентов и команды, заменив вызовы `getPlaceholderImage()` на реальные пути к изображениям в папке `public/`.
