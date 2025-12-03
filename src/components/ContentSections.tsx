import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface ContentSectionsProps {
  scrollToSection: (id: string) => void;
}

const ContentSections = ({ scrollToSection }: ContentSectionsProps) => {
  return (
    <>
      <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4" variant="secondary">
                Психолог-коуч • Член Федерации коучей РФ
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Елена Кукатова
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Практики, тесты, коучинг — мягко, но глубоко. Помогаю справиться с тревогой, выгоранием и найти себя
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection("contact")} className="group">
                  Записаться на консультацию
                  <Icon name="ArrowRight" className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("method")}>
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/3c01ec57-f56c-4df5-bd6b-044bfa09eb50/files/7954f340-f4f7-49f8-b95a-7f48df6204b3.jpg"
                alt="Профессиональный психолог"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Елена Кукатова</h2>
            <p className="text-lg text-muted-foreground">
              Психолог-коуч, член Федерации коучей РФ. Работаю с тревогой, выгоранием и помогаю в поиске себя
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Award" className="text-primary" size={24} />
                </div>
                <CardTitle>Психолог-коуч</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Профессиональный психолог и коуч с практическим подходом к работе с клиентами
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in border-none shadow-lg hover:shadow-xl transition-shadow" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <CardTitle>Член Федерации коучей РФ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Официальный член Федерации профессиональных коучей России
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in border-none shadow-lg hover:shadow-xl transition-shadow" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Sparkles" className="text-primary" size={24} />
                </div>
                <CardTitle>Авторский подход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Работа через практики и тесты — мягко, но глубоко погружаясь в суть запроса
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="method" className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Целостность в деталях</h2>
            <p className="text-lg text-muted-foreground">
              Авторский подход к работе с внутренними конфликтами и поиском себя
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/3c01ec57-f56c-4df5-bd6b-044bfa09eb50/files/1660ace0-8500-44d0-89d4-bcb35da34b4b.jpg"
                alt="Метод Код целостности"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Специализация</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="text-primary" size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Тревога</h4>
                      <p className="text-sm text-muted-foreground">
                        Работаю с тревожными состояниями, помогаю обрести внутреннюю устойчивость
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="text-primary" size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Выгорание</h4>
                      <p className="text-sm text-muted-foreground">
                        Помогаю восстановить ресурсы и найти баланс в жизни
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="text-primary" size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Поиск себя</h4>
                      <p className="text-sm text-muted-foreground">
                        Через практики и тесты помогаю обрести внутреннюю целостность
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <Button size="lg" onClick={() => scrollToSection("contact")}>
                  Записаться на консультацию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">
              Истории изменений людей, прошедших этот путь
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна М.",
                text: "Работа с психологом помогла мне справиться с сильной тревогой. Метод «Код целостности» открыл новое понимание себя. Благодарна за профессионализм и чуткость.",
                rating: 5,
              },
              {
                name: "Дмитрий К.",
                text: "После нескольких месяцев выгорания нашел путь к восстановлению. Консультации помогли понять корень проблемы и выстроить здоровые границы.",
                rating: 5,
              },
              {
                name: "Елена П.",
                text: "Долго искала своё призвание. Через метод «Код целостности» смогла разобраться в себе и найти направление. Теперь чувствую внутреннюю гармонию.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="animate-fade-in border-none shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <div className="flex gap-1 mt-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Сертификаты и дипломы</h2>
            <p className="text-lg text-muted-foreground">
              Подтверждение профессиональной квалификации
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Диплом психолога", org: "МГУ им. М.В. Ломоносова", year: "2015" },
              { title: "Сертификат коуча", org: "Международная федерация коучинга", year: "2018" },
              { title: "Повышение квалификации", org: "Институт практической психологии", year: "2020" },
              { title: "Член Федерации коучей РФ", org: "Федерация профессиональных коучов", year: "2021" },
            ].map((cert, index) => (
              <Card key={index} className="animate-fade-in border-none shadow-lg hover:shadow-xl transition-shadow text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Award" className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription>{cert.org}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{cert.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Блог</h2>
            <p className="text-lg text-muted-foreground">
              Статьи о психологии, саморазвитии и внутренней гармонии
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Как распознать выгорание",
                description: "Основные признаки эмоционального выгорания и первые шаги к восстановлению",
                date: "15 ноября 2024",
              },
              {
                title: "Тревога: друг или враг?",
                description: "Разбираемся в природе тревожности и учимся работать с этим состоянием",
                date: "8 ноября 2024",
              },
              {
                title: "Метод «Код целостности»",
                description: "Подробнее о моей авторской методике и её принципах работы",
                date: "1 ноября 2024",
              },
            ].map((post, index) => (
              <Card key={index} className="animate-fade-in border-none shadow-lg hover:shadow-xl transition-all cursor-pointer group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.date}
                  </Badge>
                  <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSections;