import { Check } from "lucide-react";

const Fleet = () => {
  const vehicles = [
    {
      capacity: "1 Ton",
      type: "Light Commercial",
      features: ["Small goods", "Quick delivery", "City transport"],
    },
    {
      capacity: "2-4 Tons",
      type: "Medium Trucks",
      features: ["Regular cargo", "Inter-city", "Bulk goods"],
    },
    {
      capacity: "6-8 Tons",
      type: "Heavy Trucks",
      features: ["Industrial goods", "Large shipments", "Long distance"],
    },
    {
      capacity: "10-12 Tons",
      type: "Extra Heavy",
      features: ["Maximum capacity", "Heavy machinery", "ODC cargo"],
    },
  ];

  return (
    <section id="fleet" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-muted text-muted-foreground text-sm font-medium rounded-full mb-4">
            Our Fleet
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Right Vehicle for Every Load
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We maintain a diverse fleet to handle cargo of all sizes, from 1 Ton to 12 Tons, 
            including ODC (Over Dimensional Cargo) vehicles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl border border-border bg-card hover:shadow-card transition-all duration-300"
            >
              <div className="p-6 md:p-8">
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-1">{vehicle.type}</p>
                  <p className="font-display font-bold text-4xl md:text-5xl text-foreground">
                    {vehicle.capacity}
                  </p>
                </div>
                <ul className="space-y-3">
                  {vehicle.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* ODC Section */}
        <div className="mt-12 p-6 md:p-8 bg-primary rounded-2xl text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
            ODC Vehicles Available
          </h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            For Over Dimensional Cargo that requires special handling and transportation, 
            we have dedicated ODC vehicles with experienced operators.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
