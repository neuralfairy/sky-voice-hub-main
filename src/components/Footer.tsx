import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold">Erika Henson</div>
                <div className="text-sm text-secondary-foreground/80">Solutions</div>
              </div>
            </div>
            <p className="text-secondary-foreground/80 mb-6">
              Leading provider of Global Cloud Telephony solutions, helping businesses 
              scale their communications worldwide with enterprise-grade reliability.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Phoenix, Arizona</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@erika-henson.com</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleLinkClick('https://salescentri.com/solutions/psa-suite')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  PSA Suite
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('https://salescentri.com/platforms/lead-management/voice-ai-agent')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Voice AI Agent
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('https://salescentri.com/solutions/by-industry/it')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  IT Industry
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('https://salescentri.com/solutions/by-industry/healthcare')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Healthcare
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('https://salescentri.com/solutions/by-use-case/sdr-teams')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  SDR Teams
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleLinkClick('https://salescentri.com/resources/case-studies')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('https://salescentri.com/resources/whitepapers-ebooks')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Whitepapers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('https://salescentri.com/resources/tutorials-webinars')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Tutorials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('https://salescentri.com/docs/user-guide')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  User Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('https://salescentri.com/docs/api-reference')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  API Reference
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleLinkClick('https://salescentri.com/company/about-us')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('https://salescentri.com/company/careers')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Careers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('https://salescentri.com/company/partners-affiliates')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Partners
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('https://salescentri.com/trust/security-privacy')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Security & Privacy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('https://salescentri.com/contact')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-secondary-foreground/80">
                Get the latest insights on cloud telephony and communication trends.
              </p>
            </div>
            <div className="flex gap-4">
              <Button 
                variant="cta"
                onClick={() => handleLinkClick('https://salescentri.com/get-started/free-trial')}
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline"
                onClick={() => handleLinkClick('https://salescentri.com/contact/partnerships/partner-inquiry')}
                className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
              >
                Partner With Us
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-secondary-foreground/80">
              © 2024 Erika Henson Solutions. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <button 
                onClick={() => handleLinkClick('https://salescentri.com/trust/security-privacy')}
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleLinkClick('https://salescentri.com/trust/compliance-certifications')}
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => handleLinkClick('https://salescentri.com?utm_source=Erika-HenSon.com&utm_medium=footer&utm_campaign=partner_network')}
                className="text-secondary-foreground/80 hover:text-primary transition-colors flex items-center gap-1"
              >
                Powered by Sales Intelligence Platform
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;