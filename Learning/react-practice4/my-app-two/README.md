# React Practice 4 — my-app-two

Навчальний React-застосунок на TypeScript і Vite, який завантажує список користувачів із [JSONPlaceholder](https://jsonplaceholder.typicode.com/). Проєкт демонструє роботу з асинхронними даними в React 19, `Suspense`, `use()` та `Error Boundary`.

## Що реалізовано

- отримання користувачів через `GET /users`;
- штучна затримка запиту на 2 секунди, щоб показати loader;
- відображення імен та email користувачів;
- fallback-компонент для стану завантаження;
- обробка помилок через `react-error-boundary`;
- кнопка **Simulate Error** для перевірки помилки API;
- повторний запит після помилки через кнопку **Спробувати знову**;
- адаптивні стилі зі світлою та темною темами.

## Технології

- React 19;
- TypeScript;
- Vite;
- `react-error-boundary`;
- JSONPlaceholder REST API;
- Oxlint.

## Запуск

Потрібен Node.js та npm.

```bash
npm install
npm run dev
```

Після запуску відкрийте адресу, яку покаже Vite у терміналі.

## Доступні команди

```bash
npm run dev       # запуск dev-сервера
npm run build     # перевірка TypeScript і production-збірка
npm run lint      # перевірка коду Oxlint
npm run preview   # перегляд production-збірки
```

## Структура проєкту

```text
my-app-two/
├── public/                    # статичні файли
├── src/
│   ├── api/
│   │   └── api.ts             # запит користувачів і симуляція помилки
│   ├── assets/                # зображення та SVG
│   ├── components/
│   │   ├── App.tsx            # кореневий компонент застосунку
│   │   ├── AppErrorBoundary.tsx
│   │   ├── ErrorFallback.tsx  # UI помилки та повторний запит
│   │   ├── Loader.tsx         # fallback для Suspense
│   │   ├── Root.tsx           # керування promise і станами
│   │   └── UserList.tsx       # список користувачів
│   ├── helpers/
│   │   └── delay.ts           # асинхронна затримка
│   ├── types/
│   │   └── user.interface.ts  # тип даних користувача
│   ├── App.css                # стилі компонентів
│   ├── index.css              # глобальні стилі та теми
│   └── main.tsx               # точка входу React
├── index.html
├── package.json
├── tsconfig*.json
└── vite.config.ts
```

## Як працює завантаження

`Root` створює promise запиту й передає його до `UserList`. Компонент читає promise за допомогою `use()`, а `Suspense` показує `Loader`, поки дані ще завантажуються. Якщо запит завершується помилкою, `AppErrorBoundary` відображає `ErrorFallback`. Повторна спроба створює новий promise із коректним endpoint.
