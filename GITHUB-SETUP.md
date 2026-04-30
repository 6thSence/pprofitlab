# 🚀 Инструкция по загрузке Profit Lab на GitHub

Репозиторий подготовлен и готов к публикации! Следуйте этим шагам:

## Шаг 1: Создайте репозиторий на GitHub

1. Перейдите на [GitHub](https://github.com) и войдите в свой аккаунт
2. Нажмите на кнопку **"+"** в правом верхнем углу → **"New repository"**
3. Заполните данные:
   - **Repository name**: `profit-lab` (или любое другое имя)
   - **Description**: "Сайт-платформа Profit Lab — агентство полного цикла Дарьи Пушкарской"
   - **Visibility**: выберите **Public** (публичный) или **Private** (приватный)
   - ⚠️ **НЕ** отмечайте "Initialize this repository with a README" — репозиторий уже инициализирован локально
4. Нажмите **"Create repository"**

## Шаг 2: Подключите локальный репозиторий к GitHub

После создания репозитория GitHub покажет вам URL. Скопируйте его и выполните команды:

```bash
# Замените YOUR_USERNAME на ваш username, а REPOSITORY_NAME на имя репозитория
git remote add origin https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git

# Или если используете SSH:
git remote add origin git@github.com:YOUR_USERNAME/REPOSITORY_NAME.git
```

**Пример:**
```bash
git remote add origin https://github.com/pushkarskaya/profit-lab.git
```

## Шаг 3: Отправьте код на GitHub

```bash
git push -u origin main
```

При первой отправке GitHub может запросить аутентификацию:
- Введите ваш username
- Вместо пароля используйте **Personal Access Token** (создать можно в Settings → Developer settings → Personal access tokens)

## Готово! ✅

Ваш репозиторий теперь доступен по адресу:
`https://github.com/YOUR_USERNAME/REPOSITORY_NAME`

---

## 📊 Что уже сделано:

- ✅ Git репозиторий инициализирован
- ✅ Создан `.gitignore` для исключения node_modules и временных файлов
- ✅ Все файлы добавлены в коммит (123 файла, 20161 строк кода)
- ✅ Создан начальный коммит с полным описанием проекта
- ✅ Ветка переименована с `master` на `main` (современный стандарт)

## 📝 Дополнительные команды:

### Проверить статус репозитория:
```bash
git status
```

### Посмотреть историю коммитов:
```bash
git log --oneline
```

### Проверить подключенные remote:
```bash
git remote -v
```

### Если нужно изменить remote URL:
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/NEW_REPOSITORY.git
```

---

## 🎯 Следующие шаги после загрузки:

1. **Добавьте README.md** в корень проекта с описанием (опционально)
2. **Настройте GitHub Pages** или другой хостинг для деплоя
3. **Добавьте badges** (статус билда, лицензия и т.д.)
4. **Настройте GitHub Actions** для автоматического деплоя при пуше

---

**Нужна помощь?** Если возникнут вопросы при загрузке на GitHub, дайте знать!
