import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const { toast } = useToast();

  const timeSlots = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"];

  const handleBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");

    if (!date || !selectedTime) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, выберите дату и время консультации",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Заявка отправлена!",
      description: `Спасибо, ${name}! Мы свяжемся с вами в ближайшее время.`,
    });
    
    e.currentTarget.reset();
    setDate(undefined);
    setSelectedTime("");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Записаться на консультацию</h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму, и я свяжусь с вами для подтверждения записи
            </p>
          </div>
          <Card className="border-none shadow-2xl animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" name="name" placeholder="Анна" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Выберите дату</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <Icon name="Calendar" className="mr-2" size={16} />
                        {date ? format(date, "d MMMM yyyy", { locale: ru }) : "Выберите дату"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        locale={ru}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label>Выберите время</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        onClick={() => setSelectedTime(time)}
                        className="w-full"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение (необязательно)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Расскажите кратко о вашем запросе..."
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
