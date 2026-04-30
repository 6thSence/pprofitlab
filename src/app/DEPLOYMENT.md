# 🚀 Руководство по развертыванию Profit Lab

## Вариант 1: Экспорт кода и локальная сборка

### Шаг 1: Экспорт проекта из Figma Make
1. Скачайте все файлы проекта из Figma Make
2. Сохраните их в локальную папку (например, `profit-lab`)

### Шаг 2: Установка зависимостей
```bash
# Перейдите в папку проекта
cd profit-lab

# Установите Node.js зависимости (требуется Node.js 18+)
npm install
```

### Шаг 3: Локальная проверка
```bash
# Запустите проект локально для проверки
npm run dev

# Откройте http://localhost:5173 в браузере
```

### Шаг 4: Сборка для продакшена
```bash
# Соберите оптимизированную версию сайта
npm run build
```

После выполнения команды будет создана папка `dist/` со всеми скомпилированными файлами.

### Шаг 5: Загрузка на хостинг

#### Для обычного хостинга (Shared Hosting):
1. Откройте папку `dist/`
2. Загрузите ВСЕ файлы из этой папки на ваш хостинг через:
   - FTP/SFTP (FileZilla, WinSCP)
   - Панель управления хостингом (cPanel, ISPManager)
3. Загружайте в корневую папку сайта (обычно `public_html/`, `www/`, или `htdocs/`)

#### Важно для хостинга:
Создайте файл `.htaccess` в корне сайта для правильной работы роутинга:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Вариант 2: Платформы с автоматическим деплоем

### Netlify (Рекомендуется - БЕСПЛАТНО)
1. Зарегистрируйтесь на https://netlify.com
2. Перетащите папку `dist/` в Netlify Drop
3. Готово! Получите бесплатный домен или подключите свой

**Или через Git:**
```bash
# Создайте Git репозиторий
git init
git add .
git commit -m "Initial commit"

# Загрузите на GitHub
# Подключите репозиторий к Netlify
# Build command: npm run build
# Publish directory: dist
```

### Vercel (Также бесплатно)
1. Зарегистрируйтесь на https://vercel.com
2. Импортируйте проект из Git или загрузите код
3. Vercel автоматически определит настройки Vite
4. Деплой!

### Cloudflare Pages (Бесплатно)
1. Зарегистрируйтесь на https://pages.cloudflare.com
2. Подключите Git репозиторий
3. Build command: `npm run build`
4. Output directory: `dist`

---

## Вариант 3: VPS/Выделенный сервер (Ubuntu/Debian)

```bash
# Установите Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Клонируйте проект
git clone <your-repo-url>
cd profit-lab

# Установите зависимости
npm install

# Соберите проект
npm run build

# Установите веб-сервер (например, Nginx)
sudo apt install nginx

# Скопируйте файлы в папку Nginx
sudo cp -r dist/* /var/www/html/

# Или настройте конфиг Nginx для SPA
sudo nano /etc/nginx/sites-available/default
```

**Конфиг Nginx для SPA:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Кэширование статики
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## Подключение собственного домена

### Netlify/Vercel/Cloudflare:
1. Добавьте домен в настройках платформы
2. Обновите DNS записи у вашего регистратора доменов:
   - Для Netlify: CNAME запись на `your-site.netlify.app`
   - Для Vercel: CNAME запись на `cname.vercel-dns.com`
   - Для Cloudflare: следуйте инструкциям в панели

### Обычный хостинг:
1. Привяжите домен в панели управления хостингом
2. Дождитесь распространения DNS (до 24-48 часов)

---

## SSL сертификат (HTTPS)

- **Netlify/Vercel/Cloudflare**: Автоматический бесплатный SSL
- **Обычный хостинг**: Обычно предоставляется в панели управления (Let's Encrypt)
- **VPS/Nginx**: Установите Certbot:
  ```bash
  sudo apt install certbot python3-certbot-nginx
  sudo certbot --nginx -d your-domain.com
  ```

---

## Проверка перед деплоем

✅ Все изображения загружаются корректно  
✅ Формы отправляются (или настроены заглушки)  
✅ Мобильная версия работает корректно  
✅ Все CTA кнопки кликабельны  
✅ Модальные окна открываются и закрываются  
✅ Нет ошибок в консоли браузера  

---

## Быстрый старт (если нужен готовый результат)

**Самый простой способ:**
1. `npm install` → установка зависимостей
2. `npm run build` → сборка проекта
3. Загрузите содержимое папки `dist/` на хостинг
4. Добавьте `.htaccess` (см. выше)
5. Готово! ✨

---

## Поддержка и обновления

Для внесения изменений:
1. Отредактируйте нужные файлы
2. Запустите `npm run build`
3. Загрузите обновленные файлы из `dist/` на хостинг

---

## Нужна помощь?

- Проверьте логи сборки: `npm run build --verbose`
- Проверьте логи браузера: F12 → Console
- Убедитесь, что Node.js версии 18 или выше: `node --version`
