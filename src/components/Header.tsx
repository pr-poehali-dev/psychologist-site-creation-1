import { Button } from "@/components/ui/button";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="text-2xl font-semibold tracking-tight">Елена Кукатова</div>
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection("hero")} className="text-sm font-medium transition-colors hover:text-primary">
            Главная
          </button>
          <button onClick={() => scrollToSection("about")} className="text-sm font-medium transition-colors hover:text-primary">
            О специалисте
          </button>
          <button onClick={() => scrollToSection("method")} className="text-sm font-medium transition-colors hover:text-primary">
            Метод
          </button>
          <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium transition-colors hover:text-primary">
            Отзывы
          </button>
          <button onClick={() => scrollToSection("certificates")} className="text-sm font-medium transition-colors hover:text-primary">
            Сертификаты
          </button>
          <button onClick={() => scrollToSection("blog")} className="text-sm font-medium transition-colors hover:text-primary">
            Блог
          </button>
          <Button onClick={() => scrollToSection("contact")} size="sm">
            Записаться
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;