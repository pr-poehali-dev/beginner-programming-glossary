import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Term {
  id: string;
  title: string;
  category: string;
  description: string;
  example: string;
  language: string;
  popularity: number;
}

const terms: Term[] = [
  { id: '1', title: 'API', category: 'Веб', description: 'Application Programming Interface — набор правил и протоколов для взаимодействия между программами.', example: 'fetch("https://api.example.com/users")\n  .then(res => res.json())\n  .then(data => console.log(data));', language: 'javascript', popularity: 95 },
  { id: '2', title: 'Переменная', category: 'Основы', description: 'Именованный контейнер для хранения данных в программе.', example: 'let userName = "Иван";\nconst age = 25;\nvar isActive = true;', language: 'javascript', popularity: 100 },
  { id: '3', title: 'Функция', category: 'Основы', description: 'Блок кода, который можно многократно вызывать.', example: 'function greet(name) {\n  return `Привет, ${name}!`;\n}\nconsole.log(greet("Мир"));', language: 'javascript', popularity: 98 },
  { id: '4', title: 'Массив', category: 'Структуры данных', description: 'Упорядоченная коллекция элементов.', example: 'const fruits = ["яблоко", "банан"];\nfruits.push("апельсин");', language: 'javascript', popularity: 92 },
  { id: '5', title: 'Цикл', category: 'Основы', description: 'Конструкция для многократного выполнения блока кода.', example: 'for (let i = 0; i < 5; i++) {\n  console.log(i);\n}', language: 'javascript', popularity: 94 },
  { id: '6', title: 'Объект', category: 'Структуры данных', description: 'Коллекция пар ключ-значение.', example: 'const user = {\n  name: "Анна",\n  age: 28\n};', language: 'javascript', popularity: 96 },
  { id: '7', title: 'Promise', category: 'Асинхронность', description: 'Объект для работы с асинхронными операциями.', example: 'const promise = new Promise((resolve) => {\n  setTimeout(() => resolve("Готово"), 1000);\n});', language: 'javascript', popularity: 88 },
  { id: '8', title: 'Класс', category: 'ООП', description: 'Шаблон для создания объектов.', example: 'class Person {\n  constructor(name) {\n    this.name = name;\n  }\n}', language: 'javascript', popularity: 85 },
  { id: '9', title: 'JSON', category: 'Веб', description: 'Текстовый формат для обмена данными.', example: 'const data = {name: "Товар"};\nJSON.stringify(data);', language: 'javascript', popularity: 90 },
  { id: '10', title: 'Callback', category: 'Асинхронность', description: 'Функция, передаваемая как аргумент.', example: 'function fetchData(callback) {\n  callback({data: "OK"});\n}', language: 'javascript', popularity: 87 },
  { id: '11', title: 'Async/Await', category: 'Асинхронность', description: 'Синтаксис для упрощения работы с Promise.', example: 'async function getData() {\n  const data = await fetch(url);\n  return data.json();\n}', language: 'javascript', popularity: 89 },
  { id: '12', title: 'Замыкание', category: 'Основы', description: 'Функция с доступом к внешней области видимости.', example: 'function outer() {\n  let count = 0;\n  return () => ++count;\n}', language: 'javascript', popularity: 78 },
  { id: '13', title: 'Деструктуризация', category: 'Основы', description: 'Синтаксис извлечения данных из массивов/объектов.', example: 'const {name, age} = user;\nconst [first, second] = array;', language: 'javascript', popularity: 86 },
  { id: '14', title: 'Spread оператор', category: 'Основы', description: 'Раскрывает элементы массива или объекта.', example: 'const arr2 = [...arr1, 4, 5];\nconst obj2 = {...obj1, new: "value"};', language: 'javascript', popularity: 84 },
  { id: '15', title: 'Map', category: 'Структуры данных', description: 'Коллекция пар ключ-значение любого типа.', example: 'const map = new Map();\nmap.set("key", "value");\nmap.get("key");', language: 'javascript', popularity: 75 },
  { id: '16', title: 'Set', category: 'Структуры данных', description: 'Коллекция уникальных значений.', example: 'const set = new Set([1, 2, 3, 3]);\nset.add(4);\nset.has(2);', language: 'javascript', popularity: 72 },
  { id: '17', title: 'Filter', category: 'Основы', description: 'Метод фильтрации массива по условию.', example: 'const adults = users.filter(u => u.age >= 18);', language: 'javascript', popularity: 88 },
  { id: '18', title: 'Map метод', category: 'Основы', description: 'Метод трансформации элементов массива.', example: 'const names = users.map(u => u.name);', language: 'javascript', popularity: 90 },
  { id: '19', title: 'Reduce', category: 'Основы', description: 'Метод свёртки массива в одно значение.', example: 'const sum = nums.reduce((acc, n) => acc + n, 0);', language: 'javascript', popularity: 76 },
  { id: '20', title: 'REST API', category: 'Веб', description: 'Архитектурный стиль для веб-сервисов.', example: 'GET /api/users\nPOST /api/users\nDELETE /api/users/1', language: 'http', popularity: 93 },
  { id: '21', title: 'HTTP методы', category: 'Веб', description: 'GET, POST, PUT, DELETE для операций с данными.', example: 'fetch(url, {method: "POST", body: data});', language: 'javascript', popularity: 91 },
  { id: '22', title: 'Cookie', category: 'Веб', description: 'Небольшие данные, хранящиеся в браузере.', example: 'document.cookie = "user=John; max-age=3600";', language: 'javascript', popularity: 82 },
  { id: '23', title: 'LocalStorage', category: 'Веб', description: 'Хранилище данных в браузере без срока действия.', example: 'localStorage.setItem("key", "value");\nconst val = localStorage.getItem("key");', language: 'javascript', popularity: 85 },
  { id: '24', title: 'SessionStorage', category: 'Веб', description: 'Временное хранилище на время сеанса.', example: 'sessionStorage.setItem("temp", "data");', language: 'javascript', popularity: 74 },
  { id: '25', title: 'CORS', category: 'Веб', description: 'Механизм безопасности для кросс-доменных запросов.', example: 'Access-Control-Allow-Origin: *', language: 'http', popularity: 80 },
  { id: '26', title: 'WebSocket', category: 'Веб', description: 'Протокол двусторонней связи в реальном времени.', example: 'const ws = new WebSocket("ws://example.com");\nws.onmessage = e => console.log(e.data);', language: 'javascript', popularity: 77 },
  { id: '27', title: 'Event Loop', category: 'Основы', description: 'Механизм выполнения асинхронного кода в JS.', example: 'console.log(1);\nsetTimeout(() => console.log(2), 0);\nconsole.log(3);', language: 'javascript', popularity: 71 },
  { id: '28', title: 'This', category: 'Основы', description: 'Контекст выполнения функции.', example: 'const obj = {\n  name: "Test",\n  greet() { console.log(this.name); }\n};', language: 'javascript', popularity: 79 },
  { id: '29', title: 'Arrow Function', category: 'Основы', description: 'Краткий синтаксис функций без своего this.', example: 'const add = (a, b) => a + b;\nconst square = x => x * x;', language: 'javascript', popularity: 87 },
  { id: '30', title: 'Модуль', category: 'Основы', description: 'Изолированный блок кода с экспортом/импортом.', example: 'export const name = "Test";\nimport { name } from "./module";', language: 'javascript', popularity: 83 },
  { id: '31', title: 'NPM', category: 'Инструменты', description: 'Менеджер пакетов для Node.js.', example: 'npm install lodash\nnpm run build', language: 'bash', popularity: 92 },
  { id: '32', title: 'Webpack', category: 'Инструменты', description: 'Сборщик модулей для веб-приложений.', example: 'module.exports = {\n  entry: "./src/index.js"\n};', language: 'javascript', popularity: 81 },
  { id: '33', title: 'Babel', category: 'Инструменты', description: 'Транспайлер современного JS в старый.', example: 'const arrow = () => {};\n// => function() {}', language: 'javascript', popularity: 78 },
  { id: '34', title: 'Git', category: 'Git', description: 'Система контроля версий кода.', example: 'git init\ngit add .\ngit commit -m "Initial"', language: 'bash', popularity: 95 },
  { id: '35', title: 'Git Clone', category: 'Git', description: 'Копирование удалённого репозитория.', example: 'git clone https://github.com/user/repo.git', language: 'bash', popularity: 89 },
  { id: '36', title: 'Git Branch', category: 'Git', description: 'Создание отдельной ветки разработки.', example: 'git branch feature\ngit checkout feature', language: 'bash', popularity: 86 },
  { id: '37', title: 'Git Merge', category: 'Git', description: 'Объединение изменений из разных веток.', example: 'git checkout main\ngit merge feature', language: 'bash', popularity: 84 },
  { id: '38', title: 'Pull Request', category: 'Git', description: 'Запрос на слияние изменений в основную ветку.', example: 'GitHub: Create Pull Request\nReview → Approve → Merge', language: 'text', popularity: 88 },
  { id: '39', title: 'SQL', category: 'Базы данных', description: 'Язык запросов к реляционным БД.', example: 'SELECT * FROM users WHERE age > 18;', language: 'sql', popularity: 93 },
  { id: '40', title: 'SELECT', category: 'Базы данных', description: 'Выборка данных из таблицы.', example: 'SELECT name, email FROM users;', language: 'sql', popularity: 91 },
  { id: '41', title: 'INSERT', category: 'Базы данных', description: 'Добавление новых записей в таблицу.', example: 'INSERT INTO users (name, age)\nVALUES ("Иван", 25);', language: 'sql', popularity: 88 },
  { id: '42', title: 'UPDATE', category: 'Базы данных', description: 'Обновление существующих записей.', example: 'UPDATE users SET age = 26\nWHERE name = "Иван";', language: 'sql', popularity: 86 },
  { id: '43', title: 'DELETE', category: 'Базы данных', description: 'Удаление записей из таблицы.', example: 'DELETE FROM users WHERE id = 5;', language: 'sql', popularity: 85 },
  { id: '44', title: 'JOIN', category: 'Базы данных', description: 'Объединение данных из нескольких таблиц.', example: 'SELECT * FROM users\nJOIN orders ON users.id = orders.user_id;', language: 'sql', popularity: 82 },
  { id: '45', title: 'INDEX', category: 'Базы данных', description: 'Ускоритель поиска данных в таблице.', example: 'CREATE INDEX idx_email ON users(email);', language: 'sql', popularity: 76 },
  { id: '46', title: 'NoSQL', category: 'Базы данных', description: 'Нереляционные базы данных.', example: 'db.users.insertOne({name: "Иван", age: 25});', language: 'javascript', popularity: 80 },
  { id: '47', title: 'MongoDB', category: 'Базы данных', description: 'Документо-ориентированная NoSQL БД.', example: 'db.collection.find({age: {$gt: 18}});', language: 'javascript', popularity: 83 },
  { id: '48', title: 'React', category: 'React', description: 'Библиотека для создания UI.', example: 'function App() {\n  return <div>Hello React</div>;\n}', language: 'jsx', popularity: 94 },
  { id: '49', title: 'Component', category: 'React', description: 'Независимый переиспользуемый блок UI.', example: 'function Button({text}) {\n  return <button>{text}</button>;\n}', language: 'jsx', popularity: 92 },
  { id: '50', title: 'Props', category: 'React', description: 'Свойства, передаваемые в компонент.', example: '<Button text="Нажми" color="blue" />', language: 'jsx', popularity: 90 },
  { id: '51', title: 'State', category: 'React', description: 'Внутреннее состояние компонента.', example: 'const [count, setCount] = useState(0);', language: 'jsx', popularity: 93 },
  { id: '52', title: 'useEffect', category: 'React', description: 'Хук для побочных эффектов.', example: 'useEffect(() => {\n  fetchData();\n}, []);', language: 'jsx', popularity: 89 },
  { id: '53', title: 'useState', category: 'React', description: 'Хук для управления состоянием.', example: 'const [name, setName] = useState("Иван");', language: 'jsx', popularity: 91 },
  { id: '54', title: 'useContext', category: 'React', description: 'Хук для доступа к контексту.', example: 'const theme = useContext(ThemeContext);', language: 'jsx', popularity: 81 },
  { id: '55', title: 'useRef', category: 'React', description: 'Хук для ссылки на DOM-элемент.', example: 'const inputRef = useRef();\ninputRef.current.focus();', language: 'jsx', popularity: 79 },
  { id: '56', title: 'useMemo', category: 'React', description: 'Хук мемоизации вычислений.', example: 'const total = useMemo(() => calc(data), [data]);', language: 'jsx', popularity: 77 },
  { id: '57', title: 'useCallback', category: 'React', description: 'Хук мемоизации функций.', example: 'const handler = useCallback(() => {}, []);', language: 'jsx', popularity: 75 },
  { id: '58', title: 'JSX', category: 'React', description: 'Синтаксис HTML в JavaScript.', example: 'const element = <h1>Привет, {name}!</h1>;', language: 'jsx', popularity: 88 },
  { id: '59', title: 'Virtual DOM', category: 'React', description: 'Виртуальное представление DOM для оптимизации.', example: 'React сравнивает Virtual DOM с реальным\nи обновляет только изменения', language: 'text', popularity: 73 },
  { id: '60', title: 'TypeScript', category: 'TypeScript', description: 'Типизированный надмножество JavaScript.', example: 'function greet(name: string): string {\n  return `Hello, ${name}`;\n}', language: 'typescript', popularity: 87 },
  { id: '61', title: 'Interface', category: 'TypeScript', description: 'Описание структуры объекта.', example: 'interface User {\n  name: string;\n  age: number;\n}', language: 'typescript', popularity: 85 },
  { id: '62', title: 'Type', category: 'TypeScript', description: 'Определение пользовательского типа.', example: 'type ID = string | number;\ntype Status = "active" | "inactive";', language: 'typescript', popularity: 84 },
  { id: '63', title: 'Generic', category: 'TypeScript', description: 'Обобщённые типы для переиспользования.', example: 'function wrap<T>(value: T): T[] {\n  return [value];\n}', language: 'typescript', popularity: 78 },
  { id: '64', title: 'Enum', category: 'TypeScript', description: 'Набор именованных констант.', example: 'enum Color { Red, Green, Blue }\nconst c: Color = Color.Green;', language: 'typescript', popularity: 76 },
  { id: '65', title: 'Union Type', category: 'TypeScript', description: 'Тип, который может быть одним из нескольких.', example: 'let id: string | number;\nid = "abc";\nid = 123;', language: 'typescript', popularity: 82 },
  { id: '66', title: 'Any', category: 'TypeScript', description: 'Отключение проверки типов.', example: 'let data: any = "text";\ndata = 123;\ndata = {};', language: 'typescript', popularity: 71 },
  { id: '67', title: 'Null/Undefined', category: 'Основы', description: 'Отсутствие значения в JavaScript.', example: 'let empty = null;\nlet notDefined = undefined;', language: 'javascript', popularity: 80 },
  { id: '68', title: 'Тернарный оператор', category: 'Основы', description: 'Сокращённая форма if-else.', example: 'const result = age >= 18 ? "Взрослый" : "Ребёнок";', language: 'javascript', popularity: 86 },
  { id: '69', title: 'Template Literal', category: 'Основы', description: 'Шаблонные строки с интерполяцией.', example: 'const msg = `Привет, ${name}! Тебе ${age} лет.`;', language: 'javascript', popularity: 89 },
  { id: '70', title: 'Regexp', category: 'Основы', description: 'Регулярные выражения для поиска в тексте.', example: 'const pattern = /\\d{3}-\\d{2}/;\npattern.test("123-45");', language: 'javascript', popularity: 74 },
  { id: '71', title: 'Try/Catch', category: 'Основы', description: 'Обработка ошибок в коде.', example: 'try {\n  riskyOperation();\n} catch (error) {\n  console.error(error);\n}', language: 'javascript', popularity: 83 },
  { id: '72', title: 'Throw', category: 'Основы', description: 'Генерация исключения.', example: 'if (!user) {\n  throw new Error("Пользователь не найден");\n}', language: 'javascript', popularity: 77 },
  { id: '73', title: 'Debugging', category: 'Инструменты', description: 'Поиск и исправление ошибок.', example: 'console.log(variable);\ndebugger;\nconsole.table(array);', language: 'javascript', popularity: 85 },
  { id: '74', title: 'Console', category: 'Инструменты', description: 'Вывод информации в консоль браузера.', example: 'console.log("Сообщение");\nconsole.error("Ошибка");\nconsole.warn("Предупреждение");', language: 'javascript', popularity: 91 },
  { id: '75', title: 'DevTools', category: 'Инструменты', description: 'Инструменты разработчика в браузере.', example: 'F12 → Elements, Console, Network, Sources', language: 'text', popularity: 88 },
  { id: '76', title: 'ESLint', category: 'Инструменты', description: 'Линтер для проверки качества кода.', example: 'eslint --fix src/**/*.js', language: 'bash', popularity: 80 },
  { id: '77', title: 'Prettier', category: 'Инструменты', description: 'Автоформатирование кода.', example: 'prettier --write "src/**/*.{js,jsx,ts,tsx}"', language: 'bash', popularity: 82 },
  { id: '78', title: 'Unit Test', category: 'Тестирование', description: 'Тестирование отдельных функций.', example: 'test("adds 1 + 2 to equal 3", () => {\n  expect(add(1, 2)).toBe(3);\n});', language: 'javascript', popularity: 79 },
  { id: '79', title: 'Jest', category: 'Тестирование', description: 'Фреймворк для тестирования JS.', example: 'describe("Calculator", () => {\n  it("should add numbers", () => {});\n});', language: 'javascript', popularity: 81 },
  { id: '80', title: 'Mock', category: 'Тестирование', description: 'Имитация зависимостей в тестах.', example: 'const mockFn = jest.fn();\nmockFn.mockReturnValue(42);', language: 'javascript', popularity: 72 },
  { id: '81', title: 'CSS', category: 'Веб', description: 'Каскадные таблицы стилей для оформления.', example: '.button {\n  color: blue;\n  padding: 10px;\n}', language: 'css', popularity: 94 },
  { id: '82', title: 'Flexbox', category: 'Веб', description: 'Модель гибкой раскладки элементов.', example: '.container {\n  display: flex;\n  justify-content: center;\n}', language: 'css', popularity: 90 },
  { id: '83', title: 'Grid', category: 'Веб', description: 'Система сеток для сложных раскладок.', example: '.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}', language: 'css', popularity: 86 },
  { id: '84', title: 'Media Query', category: 'Веб', description: 'Адаптивные стили под разные экраны.', example: '@media (max-width: 768px) {\n  .menu { display: none; }\n}', language: 'css', popularity: 88 },
  { id: '85', title: 'HTML', category: 'Веб', description: 'Язык разметки веб-страниц.', example: '<div class="container">\n  <h1>Заголовок</h1>\n  <p>Текст</p>\n</div>', language: 'html', popularity: 96 },
  { id: '86', title: 'DOM', category: 'Веб', description: 'Объектная модель документа в браузере.', example: 'document.getElementById("app");\ndocument.querySelector(".class");', language: 'javascript', popularity: 87 },
  { id: '87', title: 'Event', category: 'Веб', description: 'Событие взаимодействия пользователя.', example: 'button.addEventListener("click", () => {\n  console.log("Clicked!");\n});', language: 'javascript', popularity: 89 },
  { id: '88', title: 'Fetch', category: 'Веб', description: 'Современный API для HTTP-запросов.', example: 'fetch("/api/data")\n  .then(res => res.json())\n  .then(data => console.log(data));', language: 'javascript', popularity: 92 },
  { id: '89', title: 'Axios', category: 'Веб', description: 'Популярная библиотека для HTTP-запросов.', example: 'axios.get("/api/users")\n  .then(res => console.log(res.data));', language: 'javascript', popularity: 84 },
  { id: '90', title: 'CRUD', category: 'Веб', description: 'Create, Read, Update, Delete операции.', example: 'POST /users — создать\nGET /users — получить\nPUT /users/1 — обновить\nDELETE /users/1 — удалить', language: 'text', popularity: 85 },
  { id: '91', title: 'Authentication', category: 'Веб', description: 'Проверка подлинности пользователя.', example: 'fetch("/login", {\n  method: "POST",\n  body: JSON.stringify({email, password})\n});', language: 'javascript', popularity: 86 },
  { id: '92', title: 'JWT', category: 'Веб', description: 'JSON Web Token для авторизации.', example: 'Authorization: Bearer eyJhbGc...', language: 'text', popularity: 83 },
  { id: '93', title: 'Middleware', category: 'Веб', description: 'Промежуточный обработчик запросов.', example: 'app.use((req, res, next) => {\n  console.log(req.url);\n  next();\n});', language: 'javascript', popularity: 78 },
  { id: '94', title: 'Router', category: 'Веб', description: 'Маршрутизация URL к обработчикам.', example: 'app.get("/users", getUsers);\napp.post("/users", createUser);', language: 'javascript', popularity: 84 },
  { id: '95', title: 'Environment', category: 'Инструменты', description: 'Переменные окружения для конфигурации.', example: 'const apiKey = process.env.API_KEY;\nconst dbUrl = process.env.DATABASE_URL;', language: 'javascript', popularity: 81 },
  { id: '96', title: 'Package.json', category: 'Инструменты', description: 'Файл конфигурации Node.js проекта.', example: '{\n  "name": "my-app",\n  "version": "1.0.0",\n  "dependencies": {}\n}', language: 'json', popularity: 89 },
  { id: '97', title: 'Boolean', category: 'Основы', description: 'Логический тип: true или false.', example: 'const isActive = true;\nconst hasAccess = false;\nif (isActive) { }', language: 'javascript', popularity: 93 },
  { id: '98', title: 'String', category: 'Основы', description: 'Текстовый тип данных.', example: 'const name = "Иван";\nconst message = \'Привет\';\nname.toUpperCase();', language: 'javascript', popularity: 95 },
  { id: '99', title: 'Number', category: 'Основы', description: 'Числовой тип данных.', example: 'const age = 25;\nconst price = 99.99;\nMath.round(price);', language: 'javascript', popularity: 94 },
  { id: '100', title: 'Import/Export', category: 'Основы', description: 'Импорт и экспорт модулей.', example: 'export const name = "Test";\nexport default App;\nimport App from "./App";', language: 'javascript', popularity: 88 }
];

const Dictionary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const filteredTerms = useMemo(() => {
    let filtered = terms;
    
    if (searchQuery) {
      filtered = filtered.filter(term => 
        term.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (activeTab !== 'all') {
      filtered = filtered.filter(term => term.category === activeTab);
    }

    return filtered;
  }, [searchQuery, activeTab]);

  const categories = useMemo(() => {
    return Array.from(new Set(terms.map(term => term.category)));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 animate-fade-in">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Database" className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                КодБаза
              </span>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Главная</Link>
              <Link to="/dictionary" className="text-sm font-medium text-primary">Словарь</Link>
              <Link to="/lessons" className="text-sm font-medium hover:text-primary transition-colors">Уроки</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Словарь терминов
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              100 основных терминов программирования с примерами и объяснениями
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-8 animate-scale-in">
            <div className="relative">
              <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск термина..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base bg-card/50 backdrop-blur-sm border-primary/20 focus:border-primary"
              />
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="flex flex-wrap justify-center mb-8 gap-2 bg-card/50 backdrop-blur-sm">
              <TabsTrigger value="all" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary">
                Все
              </TabsTrigger>
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeTab}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTerms.map((term, index) => (
                  <Card 
                    key={term.id} 
                    className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-card/80 backdrop-blur-sm animate-scale-in"
                    style={{ animationDelay: `${index * 0.02}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-gradient-to-r from-primary/20 to-secondary/20">
                          {term.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {term.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {term.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted/50 rounded-lg p-4 overflow-x-auto">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">
                            {term.language}
                          </span>
                          <Icon name="Copy" className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                        </div>
                        <pre className="text-xs text-foreground/90">
                          <code>{term.example}</code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredTerms.length === 0 && (
                <div className="text-center py-20">
                  <Icon name="SearchX" className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Ничего не найдено</h3>
                  <p className="text-muted-foreground">Попробуйте изменить поисковый запрос</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dictionary;