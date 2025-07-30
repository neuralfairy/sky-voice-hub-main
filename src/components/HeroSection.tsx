import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, Globe, Phone, Shield } from "lucide-react";

const HeroSection = () => {
  const handleCTAClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Trusted by 500+ Businesses</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Scale Your Global
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Cloud Telephony
              </span>
              with iGCT Solutions
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Transform your business communications with our enterprise-grade Global Cloud Telephony platform. 
              Connect with customers worldwide through reliable, scalable voice solutions.
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Global Coverage</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Easy Integration</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => handleCTAClick('https://salescentri.com/get-started/book-demo')}
                className="shadow-hero"
              >
                Book Free Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => handleCTAClick('https://salescentri.com/solutions/use-case-navigator/demo')}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/60 text-sm mb-4">Trusted by leading companies worldwide</p>
              <div className="flex items-center gap-8 opacity-60">
                <div className="text-white font-semibold">Fortune 500</div>
                <div className="text-white font-semibold">Enterprise</div>
                <div className="text-white font-semibold">Global Reach</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-hero">
              {/* Dashboard Preview */}
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">iGCT Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Active</span>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">Global Calls</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-900">15.2K</div>
                    <div className="text-xs text-blue-600">+12% this month</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Success Rate</span>
                    </div>
                    <div className="text-2xl font-bold text-green-900">99.9%</div>
                    <div className="text-xs text-green-600">Uptime</div>
                  </div>
                </div>
                
                {/* Progress bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Call Quality</span>
                      <span className="text-gray-800">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Network Coverage</span>
                      <span className="text-gray-800">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;