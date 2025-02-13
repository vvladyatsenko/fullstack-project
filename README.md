# Full Weather Fullstack Project

## Огляд

Цей проект є повностековим застосунком, який надає інформацію про погоду для різних міст. Проект складається з бекенду, побудованого на Node.js та Express, та фронтенду, побудованого на React.

## Налаштування

1. Склонуйте репозиторій:
    ```bash
    git clone https://github.com/vvladyatsenko/fullstack-project
    ```

2. Встановіть залежності для бекенду (використовуйте `npm install` або `yarn install`):
    ```bash
    cd backend
    npm install
    # або
    yarn install
    ```

3. Створіть файл `.env` (ВЖЕ СТВОРЕНО!) у директорії `backend` та додайте ваші конфігураційні змінні:
    ```env
    NODE_CONFIG_DIR=./backend/src/config
    JWT_SECRET=your_generated_secret_key
    PORT=5000
    MONGODB_URI=mongodb+srv://test:H9IPR2IYvikK4B2g@cluster0.evvyzqs.mongodb.net/testDB?retryWrites=true&w=majority&appName=Cluster0
    DB_NAME=testDB
    ```

4. Запустіть сервер бекенду:
    ```bash
    npm start
    # або
    yarn start
    ```

5. Встановіть залежності для фронтенду (використовуйте `npm install` або `yarn install`):
    ```bash
    cd ../client
    npm install
    # або
    yarn install
    ```

6. Запустіть фронтенд:
    ```bash
    npm start
    # або
    yarn start
    ```

## Використання

1. Відкрийте браузер і перейдіть на адресу `http://localhost:3000`.
2. Використовуйте форму реєстрації для створення нового облікового запису.
3. Після успішної реєстрації, увійдіть в систему за допомогою форми входу.
4. Виберіть місто для отримання актуальної інформації про погоду.
5. Сервер backend `http://localhost:5000`

## Тест юзери

1. Username: test1; Password: test;
2. Username: test2; Password: test;

## Додаткові зауваження

- Проект використовує `axios` для запитів до API.
- Для керування станом використовується `React Context API`.
- Стилізація здійснюється за допомогою `SCSS`.
- Використовується `Redux` для керування глобальним станом.
- `React Router` для керування маршрутизацією на фронтенді.
- `Moment.js` для роботи з датами та часом.
- `React Modal` для відображення модальних вікон.
- `Express.js` для створення сервера.
- `Mongoose` для роботи з MongoDB.
- `Passport.js` для автентифікації.
- `JSON Web Token (JWT)` для керування токенами автентифікації.

## Структура Проекту

```plaintext
full-weather-fullstack-project
├── backend
│ ├── node_modules
│ ├── public
│ ├── src
│ │ ├── config
│ │ ├── models
│ │ ├── routes
│ │ │ ├── aggregation.js
│ │ │ ├── auth.js
│ │ │ ├── crud.js
│ │ │ ├── cursor.js
│ │ │ ├── protected.js
│ │ │ └── users.js
│ │ └── app.js
│ ├── .env
│ ├── .gitignore
│ ├── package-lock.json
│ └── package.json
├── client
│ ├── node_modules
│ ├── public
│ ├── src
│ │ ├── axios
│ │ ├── context
│ │ ├── hooks
│ │ ├── model
│ │ ├── pages
│ │ ├── provider
│ │ ├── services
│ │ ├── shared
│ │ ├── store
│ │ ├── styles
│ │ ├── App.tsx
│ │ ├── index.tsx
│ │ └── react-app-env.d.ts
│ ├── .env
│ ├── .gitignore
│ ├── package-lock.json
│ └── package.json
└── README.md
