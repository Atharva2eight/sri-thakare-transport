import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromiseCarousel from "@/components/PromiseCarousel";
import About from "@/components/About";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import ServiceAreas from "@/components/ServiceAreas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PromiseCarousel />
        <About />
        <Services />
        <Fleet />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
