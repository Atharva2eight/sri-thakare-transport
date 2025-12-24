import { useState } from "react";
import { Menu, X, Phone, Mail, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#fleet", label: "Our Fleet" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-lg">
              <Truck className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-sm md:text-base text-foreground leading-tight">
                SRI THAKARE
              </h1>
              <p className="text-[10px] md:text-xs text-muted-foreground font-medium -mt-0.5">
                TRANSPORT
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:8830618787">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">8830618787</span>
              </Button>
            </a>
            <a href="mailto:thakare.yogesh@yahoo.co.in">
              <Button size="sm" className="gap-2">
                <Mail className="h-4 w-4" />
                <span className="hidden lg:inline">Email Us</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <a href="tel:8830618787" className="w-full">
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    8830618787
                  </Button>
                </a>
                <a href="mailto:thakare.yogesh@yahoo.co.in" className="w-full">
                  <Button className="w-full gap-2">
                    <Mail className="h-4 w-4" />
                    Email Us
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
