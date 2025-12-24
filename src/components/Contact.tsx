import { Phone, Mail, MapPin, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: User,
      label: "Proprietor",
      value: "Yogesh B. Thakare",
      href: null,
    },
    {
      icon: Phone,
      label: "Mobile Number",
      value: "8830618787",
      href: "tel:8830618787",
    },
    {
      icon: Mail,
      label: "Email Address",
      value: "thakare.yogesh@yahoo.co.in",
      href: "mailto:thakare.yogesh@yahoo.co.in",
    },
    {
      icon: MapPin,
      label: "Service Areas",
      value: "Akola, Nagpur, Bhiwandi, Pune",
      href: null,
    },
    {
      icon: Clock,
      label: "Availability",
      value: "Daily Services",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-muted text-muted-foreground text-sm font-medium rounded-full mb-4">
              Contact Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Get in Touch With Us
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
              Have a shipment to send? Need a quote? We're here to help. 
              Contact us directly and we'll get back to you promptly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="tel:8830618787" className="flex-1">
                <Button size="lg" className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Phone className="h-5 w-5" />
                  Call: 8830618787
                </Button>
              </a>
              <a href="mailto:thakare.yogesh@yahoo.co.in" className="flex-1">
                <Button size="lg" variant="outline" className="w-full gap-2">
                  <Mail className="h-5 w-5" />
                  Send Email
                </Button>
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Click on the phone number or email to contact us directly from your device.
            </p>
          </div>

          {/* Right Content - Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`p-5 rounded-xl border border-border ${
                  info.href
                    ? "bg-card hover:shadow-card cursor-pointer transition-all"
                    : "bg-muted"
                }`}
              >
                {info.href ? (
                  <a href={info.href} className="flex items-start gap-4">
                    <div className="p-3 bg-primary rounded-lg flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="font-display font-semibold text-lg text-foreground">
                        {info.value}
                      </p>
                      <p className="text-xs text-accent mt-1">Click to {info.label.includes("Email") ? "send email" : "call"}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary rounded-lg flex-shrink-0">
                      <info.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="font-display font-semibold text-lg text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
