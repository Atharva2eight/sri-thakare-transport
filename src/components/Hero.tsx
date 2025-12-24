import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-truck.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Transport truck on highway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Trusted Transport Partner Since Years
            </span>
          </div>

          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-4 animate-slide-up">
            SRI THAKARE
            <span className="block text-accent-foreground/80">TRANSPORT</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-primary-foreground/90 mb-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            "Daily Services All Maharashtra"
          </p>

          <p className="text-base md:text-lg text-primary-foreground/70 max-w-xl mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Your reliable partner for goods transportation across India. From 1 Ton to 12 Tons, 
            we deliver with care, precision, and commitment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <a href="tel:8830618787">
              <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                <Phone className="h-5 w-5" />
                Call Now: 8830618787
              </Button>
            </a>
            <a href="#services">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 bg-background/20 backdrop-blur-sm border border-background/30 text-primary-foreground hover:bg-background/30 px-8"
              >
                Our Services
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "4+", label: "Service Locations" },
              { value: "All India", label: "Delivery Coverage" },
              { value: "1-12", label: "Tons Capacity" },
              { value: "Daily", label: "Service Frequency" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10">
                <p className="font-display font-bold text-2xl md:text-3xl text-primary-foreground">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-primary-foreground/70 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
