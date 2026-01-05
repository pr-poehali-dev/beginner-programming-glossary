import { useState, useMemo } from 'react';
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
  {
    id: '1',
    title: 'API',
    category: 'Веб',
    description: 'Application Programming Interface — набор правил и протоколов для взаимодействия между программами. Позволяет разным приложениям обмениваться данными.',
    example: 'fetch("https://api.example.com/users")\n  .then(res => res.json())\n  .then(data => console.log(data));',
    language: 'javascript',
    popularity: 95
  },
  {
    id: '2',
    title: 'Переменная',
    category: 'Основы',
    description: 'Именованный контейнер для хранения данных в программе. Может содержать числа, текст, объекты и другие типы данных.',
    example: 'let userName = "Иван";\nconst age = 25;\nvar isActive = true;',
    language: 'javascript',
    popularity: 100
  },
  {
    id: '3',
    title: 'Функция',
    category: 'Основы',
    description: 'Блок кода, который можно многократно вызывать. Принимает параметры и может возвращать результат.',
    example: 'function greet(name) {\n  return `Привет, ${name}!`;\n}\n\nconsole.log(greet("Мир"));',
    language: 'javascript',
    popularity: 98
  },
  {
    id: '4',
    title: 'Массив',
    category: 'Структуры данных',
    description: 'Упорядоченная коллекция элементов. Позволяет хранить множество значений в одной переменной.',
    example: 'const fruits = ["яблоко", "банан", "груша"];\nconsole.log(fruits[0]); // "яблоко"\nfruits.push("апельсин");',
    language: 'javascript',
    popularity: 92
  },
  {
    id: '5',
    title: 'Цикл',
    category: 'Основы',
    description: 'Конструкция для многократного выполнения блока кода. Используется для обработки коллекций и повторяющихся операций.',
    example: 'for (let i = 0; i < 5; i++) {\n  console.log(`Итерация ${i}`);\n}\n\nfruits.forEach(fruit => console.log(fruit));',
    language: 'javascript',
    popularity: 94
  },
  {
    id: '6',
    title: 'Объект',
    category: 'Структуры данных',
    description: 'Коллекция пар ключ-значение. Основная структура данных в JavaScript для представления сложных сущностей.',
    example: 'const user = {\n  name: "Анна",\n  age: 28,\n  isAdmin: false\n};\n\nconsole.log(user.name);',
    language: 'javascript',
    popularity: 96
  },
  {
    id: '7',
    title: 'Promise',
    category: 'Асинхронность',
    description: 'Объект для работы с асинхронными операциями. Представляет результат, который будет доступен в будущем.',
    example: 'const promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve("Готово!"), 1000);\n});\n\npromise.then(result => console.log(result));',
    language: 'javascript',
    popularity: 88
  },
  {
    id: '8',
    title: 'Класс',
    category: 'ООП',
    description: 'Шаблон для создания объектов. Определяет свойства и методы, которые будут у всех экземпляров класса.',
    example: 'class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  \n  greet() {\n    return `Привет, я ${this.name}`;\n  }\n}',
    language: 'javascript',
    popularity: 85
  },
  {
    id: '9',
    title: 'JSON',
    category: 'Веб',
    description: 'JavaScript Object Notation — текстовый формат для обмена данными между программами. Легко читается людьми и машинами.',
    example: 'const data = {\n  "name": "Товар",\n  "price": 1000,\n  "inStock": true\n};\n\nconst jsonString = JSON.stringify(data);\nconst parsed = JSON.parse(jsonString);',
    language: 'javascript',
    popularity: 90
  },
  {
    id: '10',
    title: 'Callback',
    category: 'Асинхронность',
    description: 'Функция, передаваемая в другую функцию как аргумент для последующего вызова. Часто используется для обработки асинхронных операций.',
    example: 'function fetchData(callback) {\n  setTimeout(() => {\n    callback({ data: "Результат" });\n  }, 1000);\n}\n\nfetchData(result => console.log(result));',
    language: 'javascript',
    popularity: 87
  }
];

const Index = () => {
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

  const popularTerms = useMemo(() => {
    return [...terms].sort((a, b) => b.popularity - a.popularity).slice(0, 6);
  }, []);

  const categories = useMemo(() => {
    return Array.from(new Set(terms.map(term => term.category)));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2 animate-fade-in">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Code2" className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DevDictionary
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#dictionary" className="text-sm font-medium hover:text-primary transition-colors">Словарь</a>
              <a href="#popular" className="text-sm font-medium hover:text-primary transition-colors">Популярные</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О проекте</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Словарь программиста
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Более 100 терминов с примерами кода для начинающих разработчиков
              </p>
            </div>

            <div className="max-w-2xl mx-auto mb-16 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Поиск термина..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg bg-card/50 backdrop-blur-sm border-primary/20 focus:border-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: 'BookOpen', title: '100+ терминов', desc: 'Постоянно пополняется' },
                { icon: 'Code', title: 'Примеры кода', desc: 'Для каждого термина' },
                { icon: 'Zap', title: 'Быстрый поиск', desc: 'Мгновенная фильтрация' }
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 mx-auto">
                      <Icon name={item.icon as any} className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-center">{item.title}</CardTitle>
                    <CardDescription className="text-center">{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="popular" className="py-20 px-4 bg-card/20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Популярные термины
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularTerms.map((term, index) => (
                <Card 
                  key={term.id} 
                  className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-secondary/20">
                        {term.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-accent">
                        <Icon name="TrendingUp" className="w-4 h-4" />
                        <span className="text-sm font-semibold">{term.popularity}%</span>
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{term.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{term.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-xs text-foreground/80">
                        <code>{term.example}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="dictionary" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Все термины
            </h2>
            
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
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-gradient-to-r from-primary/20 to-secondary/20">
                            {term.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                          {term.title}
                        </CardTitle>
                        <CardDescription className="text-base">
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
                          <pre className="text-sm text-foreground/90">
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
        </section>

        <section id="about" className="py-20 px-4 bg-card/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              О проекте
            </h2>
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
              <CardContent className="pt-6">
                <div className="space-y-6 text-lg">
                  <p className="leading-relaxed">
                    <strong className="text-primary">DevDictionary</strong> — это современный онлайн-словарь для начинающих программистов, 
                    созданный для того, чтобы сделать обучение программированию более доступным и понятным.
                  </p>
                  <p className="leading-relaxed">
                    Каждый термин сопровождается понятным объяснением и реальным примером кода, 
                    что помогает не только понять теорию, но и увидеть применение на практике.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Icon name="Target" className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Наша цель</h3>
                        <p className="text-sm text-muted-foreground">
                          Помочь каждому начинающему разработчику быстро освоить основные концепции программирования
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Icon name="Users" className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Для кого</h3>
                        <p className="text-sm text-muted-foreground">
                          Начинающие программисты, студенты и все, кто делает первые шаги в разработке
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 py-8 px-4 bg-card/20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Code2" className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DevDictionary
            </span>
          </div>
          <p className="text-muted-foreground">
            © 2024 DevDictionary. Создано для начинающих разработчиков
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
