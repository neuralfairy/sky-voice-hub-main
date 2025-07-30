import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Globe, 
  Shield, 
  Zap, 
  BarChart3, 
  Headphones, 
  Settings,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const FeaturesSection = () => {
  const handleCTAClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with customers in 150+ countries with crystal-clear voice quality and local presence.",
      benefits: ["Local phone numbers", "Global carrier network", "Multi-language support"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance with international standards.",
      benefits: ["SOC 2 certified", "GDPR compliant", "24/7 monitoring"]
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second call connection times with our optimized global infrastructure and smart routing.",
      benefits: ["99.9% uptime", "Real-time analytics", "Auto-failover"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights into your communication patterns with comprehensive reporting and AI-powered analytics.",
      benefits: ["Call quality metrics", "Usage analytics", "ROI tracking"]
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      description: "Our dedicated support team ensures your communications never miss a beat with proactive monitoring.",
      benefits: ["Live chat support", "Phone support", "Dedicated account manager"]
    },
    {
      icon: Settings,
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing CRM, sales tools, and business applications via our robust APIs.",
      benefits: ["REST APIs", "Webhooks", "Pre-built integrations"]
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need for
            <span className="block text-primary">Global Cloud Telephony</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our iGCT platform provides enterprise-grade features designed to scale with your business 
            and deliver exceptional communication experiences worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-0 shadow-secondary hover:shadow-primary transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
              </div>
              
              <div className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-secondary">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Communications?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our iGCT platform to scale their global reach 
            and improve customer communications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => handleCTAClick('https://salescentri.com/get-started/free-trial')}
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="professional" 
              size="xl"
              onClick={() => handleCTAClick('https://salescentri.com/solutions/use-case-navigator/demo')}
            >
              View Interactive Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;