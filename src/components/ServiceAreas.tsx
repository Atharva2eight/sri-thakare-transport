import { MapPin, ArrowRight } from "lucide-react";

const ServiceAreas = () => {
  const origins = ["Akola", "Nagpur", "Bhiwandi", "Pune"];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-background text-muted-foreground text-sm font-medium rounded-full mb-4">
            Service Areas
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            From Maharashtra to All India
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Daily services from major Maharashtra cities connecting you to every corner of India.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            {/* Origins */}
            <div className="w-full md:w-auto">
              <h3 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                Pickup Locations
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {origins.map((city, index) => (
                  <div
                    key={index}
                    className="p-4 bg-background rounded-xl border border-border text-center hover:shadow-soft transition-shadow"
                  >
                    <p className="font-display font-semibold text-lg text-foreground">{city}</p>
                    <p className="text-xs text-muted-foreground mt-1">Daily Service</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center py-4 md:py-0">
              <div className="flex items-center gap-2 text-primary rotate-90 md:rotate-0">
                <div className="w-12 md:w-16 h-0.5 bg-primary" />
                <ArrowRight className="h-6 w-6 md:h-8 md:w-8" />
              </div>
            </div>

            {/* Destination */}
            <div className="w-full md:w-auto md:flex-1 md:max-w-sm">
              <div className="p-8 bg-primary rounded-2xl text-center">
                <h3 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mb-2">
                  Anywhere in India
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  Pan-India delivery network covering all states and union territories
                </p>
              </div>
            </div>
          </div>

          {/* Maharashtra Highlight */}
          <div className="mt-12 p-6 bg-background rounded-xl border border-border text-center">
            <p className="font-display font-semibold text-lg text-foreground mb-2">
              Daily Services All Maharashtra
            </p>
            <p className="text-muted-foreground text-sm">
              Comprehensive coverage across all districts with regular scheduled services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
