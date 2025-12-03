import Header from "@/components/Header";
import ContentSections from "@/components/ContentSections";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header scrollToSection={scrollToSection} />
      <ContentSections scrollToSection={scrollToSection} />
      <ContactForm />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;
