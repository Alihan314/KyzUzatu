# Wedding Invite Website

Свадебный сайт-приглашение на Next.js 14.

## Установка

```bash
npm install
```

## Запуск

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Структура проекта

- `src/config/site.ts` - Конфигурация сайта (тексты, дата, адрес)
- `src/components/` - Компоненты сайта
- `src/app/` - Страницы и API routes
- `public/images/` - Изображения
- `public/music.mp3` - Музыкальный трек

## Настройка

Все настройки находятся в `src/config/site.ts`:
- Дата свадьбы
- Адрес и координаты
- Тексты на KZ и RU
- Режим RSVP (mailto или API)

## Добавление изображений

Поместите изображения в `public/images/`:
- `hero.jpg` - Главное фото
- `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg` - Фото галереи

## Добавление музыки

Поместите файл `music.mp3` в `public/`.

