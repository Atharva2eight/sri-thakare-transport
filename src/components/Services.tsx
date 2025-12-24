import { Truck, Package, MapPin, Clock, ShieldCheck, Banknote } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Full Truckload (FTL)",
      description: "Dedicated trucks for large shipments. Vehicles from 1 Ton to 12 Tons capacity available.",
    },
    {
      icon: Package,
      title: "Part Truckload (PTL)",
      description: "Cost-effective solution for smaller shipments sharing space with other cargo.",
    },
    {
      icon: MapPin,
      title: "Pan-India Delivery",
      description: "From Maharashtra to anywhere in India. No destination too far for us.",
    },
    {
      icon: Clock,
      title: "Daily Services",
      description: "Regular scheduled departures from Akola, Nagpur, Bhiwandi, and Pune.",
    },
    {
      icon: ShieldCheck,
      title: "ODC Transport",
      description: "Over Dimensional Cargo handling with specialized vehicles and expertise.",
    },
    {
      icon: Banknote,
      title: "Competitive Rates",
      description: "Transparent pricing with no hidden charges. Value for your money.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-background text-muted-foreground text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Comprehensive Transport Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From small packages to heavy cargo, we have the right solution for your transportation needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-background rounded-xl border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-4 bg-muted rounded-xl w-fit mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="h-7 w-7 text-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
