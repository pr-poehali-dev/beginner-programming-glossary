import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface Lesson {
  id: string;
  title: string;
  category: string;
  duration: string;
  difficulty: 'Начальный' | 'Средний' | 'Продвинутый';
  description: string;
  steps: {
    title: string;
    content: string;
    code: string;
    explanation: string;
  }[];
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
  };
}

const lessons: Lesson[] = [
  {
    id: '1',
    title: 'Работа с переменными',
    category: 'Основы',
    duration: '10 мин',
    difficulty: 'Начальный',
    description: 'Научитесь объявлять и использовать переменные в JavaScript. Разберём разницу между let, const и var.',
    steps: [
      {
        title: 'Шаг 1: Объявление переменных',
        content: 'В JavaScript есть три способа объявить переменную: var, let и const. Современный стандарт рекомендует использовать let и const.',
        code: 'let userName = "Иван";\nconst age = 25;\nvar oldWay = "не рекомендуется";',
        explanation: 'let — для переменных, которые будут изменяться. const — для констант, которые не изменятся.'
      },
      {
        title: 'Шаг 2: Изменение значений',
        content: 'Переменные, объявленные через let, можно изменять. Константы const изменить нельзя.',
        code: 'let count = 0;\ncount = count + 1; // Работает\n\nconst PI = 3.14;\n// PI = 3.15; // Ошибка!',
        explanation: 'Попытка изменить const приведёт к ошибке. Используйте const по умолчанию, let — только когда нужно изменение.'
      },
      {
        title: 'Шаг 3: Типы данных',
        content: 'JavaScript — динамически типизированный язык. Переменная может хранить любой тип данных.',
        code: 'let value = 42;        // число\nvalue = "текст";      // строка\nvalue = true;         // булево\nvalue = null;         // null',
        explanation: 'Тип переменной определяется автоматически при присваивании значения.'
      }
    ],
    quiz: {
      question: 'Какой способ объявления переменной следует использовать для значения, которое не будет изменяться?',
      options: ['var', 'let', 'const', 'variable'],
      correctAnswer: 2
    }
  },
  {
    id: '2',
    title: 'Создание функций',
    category: 'Основы',
    duration: '15 мин',
    difficulty: 'Начальный',
    description: 'Освойте создание функций: обычные функции, стрелочные функции, параметры и возврат значений.',
    steps: [
      {
        title: 'Шаг 1: Обычная функция',
        content: 'Классический способ создания функции с ключевым словом function.',
        code: 'function greet(name) {\n  return "Привет, " + name + "!";\n}\n\nconst message = greet("Мария");\nconsole.log(message); // "Привет, Мария!"',
        explanation: 'Функция принимает параметр name и возвращает строку приветствия.'
      },
      {
        title: 'Шаг 2: Стрелочная функция',
        content: 'Современный краткий синтаксис для создания функций.',
        code: 'const add = (a, b) => {\n  return a + b;\n};\n\n// Ещё короче:\nconst multiply = (a, b) => a * b;\n\nconsole.log(add(2, 3));      // 5\nconsole.log(multiply(4, 5)); // 20',
        explanation: 'Если функция возвращает одно выражение, фигурные скобки и return можно опустить.'
      },
      {
        title: 'Шаг 3: Параметры по умолчанию',
        content: 'Можно задать значения параметров по умолчанию.',
        code: 'const greet = (name = "Гость", time = "день") => {\n  return `Добрый ${time}, ${name}!`;\n};\n\nconsole.log(greet());              // "Добрый день, Гость!"\nconsole.log(greet("Анна", "вечер")); // "Добрый вечер, Анна!"',
        explanation: 'Если аргумент не передан, используется значение по умолчанию.'
      }
    ],
    quiz: {
      question: 'Что вернёт функция: const double = x => x * 2; double(5);',
      options: ['5', '10', '25', 'undefined'],
      correctAnswer: 1
    }
  },
  {
    id: '3',
    title: 'Работа с массивами',
    category: 'Структуры данных',
    duration: '20 мин',
    difficulty: 'Средний',
    description: 'Изучите методы массивов: map, filter, reduce и другие для эффективной работы с данными.',
    steps: [
      {
        title: 'Шаг 1: Метод map',
        content: 'map создаёт новый массив, применяя функцию к каждому элементу.',
        code: 'const numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);\n\nconsole.log(doubled); // [2, 4, 6, 8, 10]\n\nconst users = [{name: "Иван"}, {name: "Мария"}];\nconst names = users.map(u => u.name);\nconsole.log(names); // ["Иван", "Мария"]',
        explanation: 'map не изменяет исходный массив, а создаёт новый с преобразованными значениями.'
      },
      {
        title: 'Шаг 2: Метод filter',
        content: 'filter создаёт новый массив с элементами, прошедшими проверку.',
        code: 'const numbers = [1, 2, 3, 4, 5, 6];\nconst evenNumbers = numbers.filter(n => n % 2 === 0);\n\nconsole.log(evenNumbers); // [2, 4, 6]\n\nconst users = [\n  {name: "Иван", age: 17},\n  {name: "Мария", age: 25}\n];\nconst adults = users.filter(u => u.age >= 18);\nconsole.log(adults); // [{name: "Мария", age: 25}]',
        explanation: 'filter оставляет только элементы, для которых функция вернула true.'
      },
      {
        title: 'Шаг 3: Метод reduce',
        content: 'reduce сворачивает массив в одно значение.',
        code: 'const numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((acc, n) => acc + n, 0);\n\nconsole.log(sum); // 15\n\nconst cart = [\n  {product: "Книга", price: 500},\n  {product: "Ручка", price: 50}\n];\nconst total = cart.reduce((acc, item) => acc + item.price, 0);\nconsole.log(total); // 550',
        explanation: 'reduce принимает функцию и начальное значение (0). acc — аккумулятор, n — текущий элемент.'
      }
    ],
    quiz: {
      question: 'Что вернёт: [1, 2, 3].filter(x => x > 1).map(x => x * 2);',
      options: ['[2, 4, 6]', '[4, 6]', '[2, 3]', '[1, 2, 3]'],
      correctAnswer: 1
    }
  },
  {
    id: '4',
    title: 'Async/Await и Promise',
    category: 'Асинхронность',
    duration: '25 мин',
    difficulty: 'Средний',
    description: 'Разберитесь с асинхронным кодом: Promise, async/await, обработка ошибок.',
    steps: [
      {
        title: 'Шаг 1: Что такое Promise',
        content: 'Promise — объект, представляющий результат асинхронной операции.',
        code: 'const promise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    const success = true;\n    if (success) {\n      resolve("Данные загружены!");\n    } else {\n      reject("Ошибка загрузки");\n    }\n  }, 1000);\n});\n\npromise\n  .then(result => console.log(result))\n  .catch(error => console.error(error));',
        explanation: 'Promise может быть в трёх состояниях: pending (ожидание), fulfilled (успех), rejected (ошибка).'
      },
      {
        title: 'Шаг 2: Async/Await',
        content: 'Современный синтаксис для работы с асинхронным кодом.',
        code: 'async function loadUser() {\n  try {\n    const response = await fetch("/api/user");\n    const data = await response.json();\n    console.log(data);\n    return data;\n  } catch (error) {\n    console.error("Ошибка:", error);\n  }\n}\n\nloadUser();',
        explanation: 'await приостанавливает выполнение функции до получения результата Promise. async делает функцию асинхронной.'
      },
      {
        title: 'Шаг 3: Параллельные запросы',
        content: 'Promise.all для выполнения нескольких запросов одновременно.',
        code: 'async function loadAll() {\n  const [users, posts, comments] = await Promise.all([\n    fetch("/api/users").then(r => r.json()),\n    fetch("/api/posts").then(r => r.json()),\n    fetch("/api/comments").then(r => r.json())\n  ]);\n  \n  console.log({users, posts, comments});\n}\n\nloadAll();',
        explanation: 'Promise.all ждёт выполнения всех Promise и возвращает массив результатов. Быстрее последовательного выполнения.'
      }
    ],
    quiz: {
      question: 'Что делает ключевое слово await?',
      options: ['Создаёт Promise', 'Ждёт выполнения Promise', 'Отменяет Promise', 'Ускоряет Promise'],
      correctAnswer: 1
    }
  },
  {
    id: '5',
    title: 'React Hooks: useState и useEffect',
    category: 'React',
    duration: '30 мин',
    difficulty: 'Продвинутый',
    description: 'Освойте основные хуки React для управления состоянием и побочными эффектами в компонентах.',
    steps: [
      {
        title: 'Шаг 1: useState для состояния',
        content: 'useState позволяет добавить состояние в функциональный компонент.',
        code: 'import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>Счёт: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        Увеличить\n      </button>\n    </div>\n  );\n}',
        explanation: 'useState возвращает массив: текущее значение и функцию для его обновления.'
      },
      {
        title: 'Шаг 2: useEffect для эффектов',
        content: 'useEffect выполняет код при монтировании и обновлении компонента.',
        code: 'import { useState, useEffect } from "react";\n\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  \n  useEffect(() => {\n    fetch(`/api/users/${userId}`)\n      .then(res => res.json())\n      .then(data => setUser(data));\n  }, [userId]);\n  \n  if (!user) return <div>Загрузка...</div>;\n  return <div>{user.name}</div>;\n}',
        explanation: 'Массив зависимостей [userId] указывает, когда перезапускать эффект. Пустой [] — только при монтировании.'
      },
      {
        title: 'Шаг 3: Очистка эффектов',
        content: 'useEffect может возвращать функцию очистки для отмены подписок.',
        code: 'useEffect(() => {\n  const timer = setInterval(() => {\n    console.log("Тик");\n  }, 1000);\n  \n  // Функция очистки\n  return () => {\n    clearInterval(timer);\n    console.log("Таймер остановлен");\n  };\n}, []);',
        explanation: 'Функция очистки вызывается перед размонтированием компонента или перед следующим эффектом.'
      }
    ],
    quiz: {
      question: 'Когда выполнится useEffect(() => {...}, [])?',
      options: ['При каждом рендере', 'Только при монтировании', 'Никогда', 'При размонтировании'],
      correctAnswer: 1
    }
  }
];

const Lessons = () => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const handleStartLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setCurrentStep(0);
    setQuizAnswer(null);
    setShowQuizResult(false);
  };

  const handleNextStep = () => {
    if (selectedLesson && currentStep < selectedLesson.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleQuizSubmit = () => {
    setShowQuizResult(true);
  };

  const handleBackToLessons = () => {
    setSelectedLesson(null);
    setCurrentStep(0);
    setQuizAnswer(null);
    setShowQuizResult(false);
  };

  const progress = selectedLesson 
    ? ((currentStep + 1) / (selectedLesson.steps.length + 1)) * 100 
    : 0;

  if (selectedLesson) {
    const isQuizStep = currentStep === selectedLesson.steps.length;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Database" className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  КодБаза
                </span>
              </Link>
              <Button variant="outline" onClick={handleBackToLessons}>
                <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
                К урокам
              </Button>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{selectedLesson.title}</h1>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-primary/20">{selectedLesson.category}</Badge>
                    <Badge variant="outline">{selectedLesson.difficulty}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" className="w-4 h-4" />
                      {selectedLesson.duration}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground mb-2">Прогресс урока</div>
                  <div className="text-2xl font-bold text-primary">{Math.round(progress)}%</div>
                </div>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <Card className="bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                {!isQuizStep ? (
                  <div className="space-y-6 animate-fade-in">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        {currentStep + 1}
                      </div>
                      <h2 className="text-2xl font-bold">{selectedLesson.steps[currentStep].title}</h2>
                    </div>

                    <p className="text-lg leading-relaxed">
                      {selectedLesson.steps[currentStep].content}
                    </p>

                    <div className="bg-muted/50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-primary flex items-center gap-2">
                          <Icon name="Code" className="w-4 h-4" />
                          Пример кода
                        </span>
                        <Button variant="ghost" size="sm">
                          <Icon name="Copy" className="w-4 h-4" />
                        </Button>
                      </div>
                      <pre className="text-sm text-foreground/90 overflow-x-auto">
                        <code>{selectedLesson.steps[currentStep].code}</code>
                      </pre>
                    </div>

                    <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Icon name="Lightbulb" className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-accent mb-1">Объяснение</div>
                          <p className="text-sm">{selectedLesson.steps[currentStep].explanation}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button 
                        variant="outline" 
                        onClick={handlePrevStep}
                        disabled={currentStep === 0}
                      >
                        <Icon name="ChevronLeft" className="w-4 h-4 mr-1" />
                        Назад
                      </Button>
                      <Button 
                        onClick={handleNextStep}
                        className="bg-gradient-to-r from-primary to-secondary"
                      >
                        {currentStep === selectedLesson.steps.length - 1 ? 'К тесту' : 'Далее'}
                        <Icon name="ChevronRight" className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 animate-fade-in">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                        <Icon name="GraduationCap" className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Проверка знаний</h2>
                      <p className="text-muted-foreground">Ответьте на вопрос, чтобы завершить урок</p>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-6 mb-6">
                      <p className="text-lg font-semibold mb-6">{selectedLesson.quiz.question}</p>
                      
                      <div className="space-y-3">
                        {selectedLesson.quiz.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => !showQuizResult && setQuizAnswer(index)}
                            disabled={showQuizResult}
                            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                              quizAnswer === index
                                ? showQuizResult
                                  ? index === selectedLesson.quiz.correctAnswer
                                    ? 'border-green-500 bg-green-500/10'
                                    : 'border-red-500 bg-red-500/10'
                                  : 'border-primary bg-primary/10'
                                : 'border-border hover:border-primary/50'
                            } ${showQuizResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                quizAnswer === index ? 'border-primary bg-primary text-white' : 'border-border'
                              }`}>
                                {quizAnswer === index && (
                                  showQuizResult ? (
                                    index === selectedLesson.quiz.correctAnswer ? (
                                      <Icon name="Check" className="w-4 h-4" />
                                    ) : (
                                      <Icon name="X" className="w-4 h-4" />
                                    )
                                  ) : (
                                    <div className="w-3 h-3 rounded-full bg-white" />
                                  )
                                )}
                              </div>
                              <span>{option}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {showQuizResult && (
                      <div className={`rounded-lg p-6 animate-scale-in ${
                        quizAnswer === selectedLesson.quiz.correctAnswer
                          ? 'bg-green-500/10 border border-green-500/30'
                          : 'bg-red-500/10 border border-red-500/30'
                      }`}>
                        <div className="flex items-start gap-3">
                          <Icon 
                            name={quizAnswer === selectedLesson.quiz.correctAnswer ? "CheckCircle" : "XCircle"} 
                            className={`w-6 h-6 mt-0.5 ${
                              quizAnswer === selectedLesson.quiz.correctAnswer ? 'text-green-500' : 'text-red-500'
                            }`}
                          />
                          <div>
                            <div className="font-semibold mb-1">
                              {quizAnswer === selectedLesson.quiz.correctAnswer 
                                ? '🎉 Правильно!' 
                                : '❌ Неправильно'}
                            </div>
                            <p className="text-sm">
                              {quizAnswer === selectedLesson.quiz.correctAnswer
                                ? 'Отличная работа! Вы успешно завершили урок.'
                                : `Правильный ответ: ${selectedLesson.quiz.options[selectedLesson.quiz.correctAnswer]}`}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between pt-4">
                      <Button 
                        variant="outline" 
                        onClick={handlePrevStep}
                      >
                        <Icon name="ChevronLeft" className="w-4 h-4 mr-1" />
                        К уроку
                      </Button>
                      {!showQuizResult ? (
                        <Button 
                          onClick={handleQuizSubmit}
                          disabled={quizAnswer === null}
                          className="bg-gradient-to-r from-primary to-secondary"
                        >
                          Проверить ответ
                        </Button>
                      ) : (
                        <Button 
                          onClick={handleBackToLessons}
                          className="bg-gradient-to-r from-primary to-secondary"
                        >
                          Завершить урок
                          <Icon name="Check" className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Database" className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                КодБаза
              </span>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Главная</Link>
              <Link to="/lessons" className="text-sm font-medium text-primary">Уроки</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
              <Icon name="GraduationCap" className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Мини-уроки
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Пошаговые уроки по самым популярным темам программирования с примерами кода и практическими заданиями
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {lessons.map((lesson, index) => (
              <Card 
                key={lesson.id}
                className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 bg-card/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-primary/20">{lesson.category}</Badge>
                        <Badge 
                          variant="outline"
                          className={
                            lesson.difficulty === 'Начальный' ? 'border-green-500 text-green-500' :
                            lesson.difficulty === 'Средний' ? 'border-yellow-500 text-yellow-500' :
                            'border-red-500 text-red-500'
                          }
                        >
                          {lesson.difficulty}
                        </Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Icon name="Clock" className="w-4 h-4" />
                          {lesson.duration}
                        </span>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors mb-2">
                        {lesson.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {lesson.description}
                      </CardDescription>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">{index + 1}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="BookOpen" className="w-4 h-4" />
                        <span>{lesson.steps.length} шагов</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="CheckCircle" className="w-4 h-4" />
                        <span>Тест в конце</span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleStartLesson(lesson)}
                      className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    >
                      Начать урок
                      <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Lessons;