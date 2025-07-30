import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Star } from "lucide-react";

const PricingSection = () => {
  const handleCTAClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses getting started with cloud telephony",
      features: [
        "Up to 1,000 minutes/month",
        "5 local phone numbers",
        "Basic call routing",
        "Email support",
        "Standard integrations",
        "Basic analytics"
      ],
      cta: "Start Free Trial",
      ctaUrl: "https://salescentri.com/get-started/free-trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses with advanced communication needs",
      features: [
        "Up to 5,000 minutes/month",
        "15 local + toll-free numbers",
        "Advanced call routing",
        "Priority phone support",
        "Premium integrations",
        "Advanced analytics",
        "Call recording",
        "Multi-language support"
      ],
      cta: "Start Free Trial",
      ctaUrl: "https://salescentri.com/get-started/free-trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations with custom requirements",
      features: [
        "Unlimited minutes",
        "Unlimited phone numbers",
        "Custom call routing",
        "Dedicated account manager",
        "Custom integrations",
        "Enterprise analytics",
        "SLA guarantees",
        "White-label options"
      ],
      cta: "Contact Sales",
      ctaUrl: "https://salescentri.com/contact/sales-inquiry",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose the Perfect Plan
            <span className="block text-primary">for Your Business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Scale your global communications with flexible pricing that grows with your business. 
            All plans include our core iGCT features with no hidden fees.
          </p>
          
          {/* Pricing Toggle */}
          <div className="inline-flex items-center bg-muted rounded-lg p-1">
            <button className="px-4 py-2 rounded-md bg-background text-foreground font-medium shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 rounded-md text-muted-foreground">
              Annual <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full ml-2">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 ${
                plan.popular 
                  ? 'bg-gradient-primary text-white border-primary shadow-hero scale-105' 
                  : 'bg-gradient-card border-border shadow-secondary hover:shadow-primary'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-primary px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`${plan.popular ? 'text-white/90' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                      plan.popular ? 'text-white' : 'text-primary'
                    }`} />
                    <span className={`${plan.popular ? 'text-white' : 'text-foreground'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.popular ? "hero" : "cta"}
                size="lg"
                className={`w-full ${
                  plan.popular 
                    ? 'bg-white text-primary hover:bg-white/90' 
                    : ''
                }`}
                onClick={() => handleCTAClick(plan.ctaUrl)}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>

        {/* ROI Calculator CTA */}
        <div className="text-center bg-gradient-secondary rounded-2xl p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Calculate Your ROI with iGCT
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how much you can save and the revenue impact of implementing our 
            Global Cloud Telephony solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => handleCTAClick('https://salescentri.com/solutions/use-case-navigator/recommendations')}
            >
              Calculate ROI
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="professional" 
              size="xl"
              onClick={() => handleCTAClick('https://salescentri.com/contact/sales-inquiry/request-quote')}
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;