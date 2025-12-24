import { User, Award, Clock, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Clock,
      title: "Daily Services",
      description: "Regular scheduled services across Maharashtra ensuring timely pickups and deliveries.",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your cargo is protected with proper handling and secure transportation methods.",
    },
    {
      icon: Award,
      title: "Experienced Team",
      description: "Professional drivers and staff with years of logistics experience.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-muted text-muted-foreground text-sm font-medium rounded-full mb-4">
              About Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Your Trusted Transport Partner in Maharashtra
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
              Sri Thakare Transport has been serving businesses and individuals with reliable 
              goods transportation services. Based in Maharashtra, we connect major cities 
              like Akola, Nagpur, Bhiwandi, and Pune to destinations across India.
            </p>
            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
              Our commitment to punctuality, safety, and customer satisfaction has made us 
              a preferred choice for countless clients who trust us with their valuable cargo.
            </p>

            {/* Owner Info */}
            <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
              <div className="p-3 bg-primary rounded-full">
                <User className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Proprietor</p>
                <p className="font-display font-semibold text-lg text-foreground">
                  Yogesh B. Thakare
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl border border-border hover:shadow-card transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 p-3 bg-muted rounded-lg group-hover:bg-primary transition-colors">
                    <feature.icon className="h-6 w-6 text-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
