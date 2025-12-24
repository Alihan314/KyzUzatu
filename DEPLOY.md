# Инструкция по деплою на Vercel

## Шаг 1: Загрузка на GitHub

### Вариант A: Использовать GitHub Desktop или веб-интерфейс
1. Откройте https://github.com/Alihan314/KyzUzatu
2. Нажмите "uploading an existing file"
3. Загрузите все файлы из папки проекта

### Вариант B: Использовать Personal Access Token
1. Создайте Personal Access Token на GitHub:
   - Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate new token (classic)
   - Выберите scope: `repo`
   - Скопируйте токен

2. Выполните команды:
```bash
git remote set-url origin https://github.com/Alihan314/KyzUzatu.git
git push -u origin main
```
При запросе username введите: `Alihan314`
При запросе password введите: ваш Personal Access Token

## Шаг 2: Деплой на Vercel

1. Зайдите на https://vercel.com
2. Войдите через GitHub
3. Нажмите "New Project"
4. Выберите репозиторий `KyzUzatu`
5. Vercel автоматически определит настройки Next.js
6. Нажмите "Deploy"
7. Через несколько минут сайт будет доступен по ссылке вида: `https://kyz-uzatu.vercel.app`

### Настройки для Vercel (обычно определяются автоматически):
- Framework Preset: Next.js
- Root Directory: ./
- Build Command: `npm run build` (или оставьте пустым)
- Output Directory: .next
- Install Command: `npm install`

Готово! Сайт будет доступен по ссылке от Vercel.

