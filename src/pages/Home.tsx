import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 animate-fade-in">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
                <Icon name="Database" className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                КодБаза
              </span>
            </Link>
            <div className="flex items-center gap-6">
              <a href="#home" className="text-sm font-medium text-primary">Главная</a>
              <Link to="/dictionary" className="text-sm font-medium hover:text-primary transition-colors">Словарь</Link>
              <Link to="/lessons" className="text-sm font-medium hover:text-primary transition-colors">Уроки</Link>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О проекте</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto text-center animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Словарь программиста
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Изучайте программирование с понятными объяснениями, примерами кода и интерактивными уроками
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-16">
                <Link to="/dictionary">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6">
                    <Icon name="BookOpen" className="w-5 h-5 mr-2" />
                    Открыть словарь
                  </Button>
                </Link>
                <Link to="/lessons">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">
                    <Icon name="GraduationCap" className="w-5 h-5 mr-2" />
                    Начать обучение
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card 
                  className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:scale-105 animate-fade-in"
                  style={{ animationDelay: '0.1s' }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 mx-auto">
                      <Icon name="BookOpen" className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-center text-xl">100+ терминов</CardTitle>
                    <CardDescription className="text-center">
                      Полный справочник по JavaScript, React, TypeScript и веб-разработке
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card 
                  className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:scale-105 animate-fade-in"
                  style={{ animationDelay: '0.2s' }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 mx-auto">
                      <Icon name="Code" className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-center text-xl">Примеры кода</CardTitle>
                    <CardDescription className="text-center">
                      Реальные примеры с подробными объяснениями для каждого термина
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card 
                  className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:scale-105 animate-fade-in"
                  style={{ animationDelay: '0.3s' }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 mx-auto">
                      <Icon name="GraduationCap" className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-center text-xl">Интерактивные уроки</CardTitle>
                    <CardDescription className="text-center">
                      Пошаговые уроки с тестами для практического закрепления знаний
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-card/20">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                О проекте
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Помогаем начинающим разработчикам быстрее войти в профессию
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card/80 backdrop-blur-sm border-primary/20 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-primary">Наша цель</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Сделать программирование доступным для каждого. Мы верим, что правильное объяснение 
                        и структурированная подача материала помогают быстрее освоить даже самые сложные концепции.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-primary/20 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-primary">Для кого</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Начинающие программисты, студенты IT-специальностей, люди, меняющие карьеру, 
                        и все, кто делает первые шаги в веб-разработке и хочет систематизировать знания.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-primary/20 animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="Lightbulb" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-primary">Зачем это нужно</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Программирование полно терминов и концепций. Словарь помогает быстро найти объяснение 
                        непонятному термину, а уроки — закрепить знания на практике. Это экономит время 
                        и делает обучение эффективнее.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-primary/20 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="Rocket" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-primary">Чем мы отличаемся</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Мы не просто даём определения — мы показываем реальные примеры кода, объясняем 
                        применение на практике и предлагаем интерактивные уроки. Всё в одном месте, 
                        без необходимости искать информацию по разным источникам.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <CardContent className="pt-8 pb-8">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto">
                    <Icon name="Heart" className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Наша миссия</h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Мы создаём <strong className="text-primary">КодБаза</strong> с любовью к образованию и верой в то, 
                    что каждый человек может стать разработчиком, если у него есть правильные инструменты для обучения. 
                    Наш проект полностью бесплатный и создан сообществом для сообщества.
                  </p>
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      🚀 Присоединяйтесь к тысячам разработчиков, которые начали свой путь вместе с нами
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Терминов в словаре</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <div className="text-muted-foreground">Интерактивных уроков</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Бесплатно навсегда</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 py-8 px-4 bg-card/20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Database" className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              КодБаза
            </span>
          </div>
          <p className="text-muted-foreground">
            © 2026 КодБаза. Создано для начинающих разработчиков с ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;