import { Truck, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-foreground/10 rounded-lg">
                <Truck className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">SRI THAKARE TRANSPORT</h3>
                <p className="text-sm text-primary-foreground/70">"Daily Services All Maharashtra"</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-md mb-6">
              Your reliable partner for goods transportation across India. 
              We deliver with care, precision, and commitment – from 1 Ton to 12 Tons.
            </p>
            <p className="text-sm text-primary-foreground/70">
              Proprietor: <span className="text-primary-foreground font-medium">Yogesh B. Thakare</span>
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:8830618787"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>8830618787</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:thakare.yogesh@yahoo.co.in"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="break-all">thakare.yogesh@yahoo.co.in</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {["Akola", "Nagpur", "Bhiwandi", "Pune", "All India"].map((area, index) => (
                <li key={index} className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                  <MapPin className="h-3 w-3" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Sri Thakare Transport. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
