import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCTAClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">Erika Henson</div>
                <div className="text-xs text-muted-foreground">Solutions</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#resources" className="text-muted-foreground hover:text-primary transition-colors">
                Resources
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => handleCTAClick('https://salescentri.com/get-started/free-trial')}
            >
              Free Trial
            </Button>
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => handleCTAClick('https://salescentri.com/get-started/book-demo')}
            >
              Book Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}>
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border mt-4">
            <a href="#home" className="block px-3 py-2 text-foreground font-medium">
              Home
            </a>
            <a href="#features" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              Features
            </a>
            <a href="#pricing" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              Pricing
            </a>
            <a href="#about" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              About
            </a>
            <a href="#resources" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              Resources
            </a>
            <a href="#contact" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              Contact
            </a>
            <div className="pt-4 pb-2 space-y-3">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleCTAClick('https://salescentri.com/get-started/free-trial')}
              >
                Free Trial
              </Button>
              <Button 
                variant="cta" 
                className="w-full"
                onClick={() => handleCTAClick('https://salescentri.com/get-started/book-demo')}
              >
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;