# Структура проекта

```
primerkyzuzatu/
├── package.json                 # Зависимости проекта
├── tsconfig.json                # Конфигурация TypeScript
├── tailwind.config.ts           # Конфигурация Tailwind CSS
├── postcss.config.js            # Конфигурация PostCSS
├── next.config.js               # Конфигурация Next.js
├── .gitignore                   # Git ignore файл
├── README.md                    # Документация
│
├── public/
│   ├── images/                  # Изображения (hero.jpg, gallery-*.jpg)
│   └── music.mp3                # Музыкальный трек
│
└── src/
    ├── app/
    │   ├── layout.tsx           # Корневой layout
    │   ├── page.tsx             # Главная страница
    │   ├── globals.css          # Глобальные стили
    │   └── api/
    │       └── rsvp/
    │           └── route.ts     # API endpoint для RSVP
    │
    ├── components/
    │   ├── LanguageToggle.tsx   # Переключатель языка (KZ/RU)
    │   ├── MusicToggle.tsx      # Кнопка play/pause музыки
    │   ├── Hero.tsx             # Секция Hero с фото и заголовком
    │   ├── Invitation.tsx       # Пригласительная карточка
    │   ├── Gallery.tsx           # Галерея фото со слайдером
    │   ├── Phrase.tsx            # Фраза-приглашение
    │   ├── Countdown.tsx         # Таймер обратного отсчета
    │   ├── Calendar.tsx          # Календарь с выделенным днем
    │   ├── Location.tsx          # Место проведения с картой
    │   └── RSVPForm.tsx          # Форма подтверждения участия
    │
    └── config/
        └── site.ts              # Конфигурация сайта (тексты, дата, адрес)
```

## Основные компоненты

### Конфигурация (`src/config/site.ts`)
- Все тексты на KZ и RU
- Дата свадьбы
- Адрес и координаты
- Настройки музыки
- Режим RSVP (mailto или API)

### Компоненты

1. **LanguageToggle** - Фиксированный переключатель языка вверху справа
2. **MusicToggle** - Фиксированная кнопка музыки внизу справа
3. **Hero** - Полноэкранная секция с фото и каллиграфическим текстом
4. **Invitation** - Карточка с пригласительным текстом
5. **Gallery** - Слайдер фото с точками навигации
6. **Phrase** - Текстовая фраза-приглашение
7. **Countdown** - Таймер обратного отсчета до свадьбы
8. **Calendar** - Календарь месяца свадьбы с выделенным днем
9. **Location** - Информация о месте с кнопкой открытия карты
10. **RSVPForm** - Форма подтверждения участия

## Технологии

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next/image

## Запуск

```bash
npm install
npm run dev
```

