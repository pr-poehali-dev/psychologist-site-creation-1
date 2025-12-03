import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="border-t border-border py-12 bg-muted/30">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@psycholog.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Навигация</h3>
            <div className="space-y-2">
              <button onClick={() => scrollToSection("about")} className="block text-muted-foreground hover:text-primary transition-colors">
                О специалисте
              </button>
              <button onClick={() => scrollToSection("method")} className="block text-muted-foreground hover:text-primary transition-colors">
                Метод
              </button>
              <button onClick={() => scrollToSection("blog")} className="block text-muted-foreground hover:text-primary transition-colors">
                Блог
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Социальные сети</h3>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2024 Психолог • Коуч. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
