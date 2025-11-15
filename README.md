🛒 Fullstack Shop App
Фулстек-проєкт з авторизацією, кошиком і продуктами. Побудовано на Express + Mongoose (backend) та React (frontend).

📁 Структура проєкту
project-root/
├── backend/              # Express + Mongoose API
│   ├── models/           # Mongoose-схеми (User, Product, CartItem)
│   ├── routes/           # API-маршрути
│   ├── controllers/      # Логіка обробки запитів
│   ├── middleware/       # JWT-захист
│   ├── .env              # Змінні середовища
│   ├── app.js            # Express-конфігурація
│   └── server.js         # Запуск сервера
├── frontend/             # React SPA
│   ├── src/
│   │   ├── features/     # auth, cart, products
│   │   ├── pages/        # LoginPage, RegisterPage, CartPage, ProfilePage
│   │   ├── routes/       # PrivateRoute.jsx
│   │   └── App.jsx
│   └── package.json
├── package.json          # Кореневий скрипт для запуску обох частин
└── README.md



🚀 Швидкий старт
1. Клонування репозиторію
git clone https://github.com/OleksandrGulak/71.git
cd 71


2. Налаштування backend
cd backend
npm install
cp .env.example .env
# або створіть .env вручну:
# PORT=5000
# MONGO_URI=mongodb://localhost:27017/shop
# JWT_SECRET=your_secret_key
npm run dev


3. Налаштування frontend
cd ../frontend
npm install
npm start


4. Або запуск обох одночасно
npm install --save-dev concurrently
# У кореневому package.json:
# "scripts": {
#   "dev": "concurrently \"npm run server\" \"npm run client\"",
#   "server": "cd backend && npm run dev",
#   "client": "cd frontend && npm start"
# }
npm run dev

🧩 Модуль авторизації (auth)
- Реалізовано через Redux Toolkit (authSlice)
- Підтримує login, logout, збереження токена
- Токен зберігається в localStorage
- Захищені маршрути через PrivateRoute

🧑‍💼 Профіль користувача
- Сторінка /profile отримує дані через GET /api/profile
- Форма редагування реалізована через Formik + Yup
- Валідація: email, ім’я, пароль

🧪 Валідація форм
- Усі форми (LoginPage, RegisterPage, ProfileForm) використовують:
- Formik для управління станом
- Yup для валідації

🧭 Маршрутизація
- Вся маршрутизація винесена в src/routes/router.jsx
- App.jsx імпортує AppRoutes для чистої структури


🔐 Авторизація
- POST /api/auth/register — реєстрація
- POST /api/auth/login — логін
- GET /api/profile — захищений маршрут (потрібен JWT)

🛒 Кошик
- GET /api/cart — отримати товари користувача
- POST /api/cart — додати/оновити товар { productId, quantity }
- DELETE /api/cart/:id — видалити товар з кошика

🧪 Тестування
- Усі API протестовані через React-інтерфейс
- Авторизація зберігає токен у localStorage
- Захищені маршрути (/cart, /profile) доступні лише з JWT

⚙️ Залежності
Backend:
- express
- mongoose
- dotenv
- bcrypt
- jsonwebtoken
- nodemon (dev)
Frontend:
- react
- react-router-dom
- react-toastify

📌 Примітки
- Для деплою можна використовувати Render (backend) + Vercel (frontend)
- Для продакшну бажано реалізувати збереження токена в httpOnly cookie
