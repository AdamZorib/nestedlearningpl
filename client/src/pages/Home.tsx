import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Sparkles, Brain, TrendingUp, Zap, Globe, CheckCircle2 } from "lucide-react";

export default function Home() {
  const handleContact = () => {
    window.location.href = "mailto:tzc38w@gmail.com?subject=Interest in NestedLearning.pl Domain";
  };

  return (
    <div className="min-h-screen gradient-bg">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="/hero-bg.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Premium Domain for Sale
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="gradient-text">NestedLearning</span>
              <span className="text-foreground">.pl</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              A powerful, memorable domain name perfect for AI-powered educational platforms, 
              learning management systems, and innovative EdTech startups in Poland and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={handleContact}
                className="text-lg px-8 py-6 glow group"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Contact to Purchase
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50 backdrop-blur-sm border-y border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">🇵🇱 .pl</div>
              <p className="text-muted-foreground">Polish TLD - Growing EU Market</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">2 Words</div>
              <p className="text-muted-foreground">Memorable & Brandable</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">AI + EdTech</div>
              <p className="text-muted-foreground">Perfect Industry Match</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="gradient-text">NestedLearning.pl</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              This domain combines cutting-edge AI terminology with educational excellence, 
              creating instant brand recognition in the booming EdTech sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI-Native Branding</h3>
              <p className="text-muted-foreground leading-relaxed">
                "Nested" evokes neural networks, deep learning architectures, and hierarchical AI systems - 
                perfect for modern educational technology platforms.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Strategic Location</h3>
              <p className="text-muted-foreground leading-relaxed">
                Poland's .pl domain provides credibility in the rapidly growing Central European market, 
                while remaining globally accessible and recognizable.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Market Timing</h3>
              <p className="text-muted-foreground leading-relaxed">
                EdTech investment is surging, with AI-powered learning platforms attracting billions. 
                Secure this premium domain before the market peaks.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Memorable & Unique</h3>
              <p className="text-muted-foreground leading-relaxed">
                Easy to spell, pronounce, and remember. The compound word structure creates 
                instant brand recall and professional credibility.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">SEO Advantage</h3>
              <p className="text-muted-foreground leading-relaxed">
                Contains high-value keywords for educational technology and AI learning, 
                providing natural search engine optimization benefits from day one.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Versatile Use Cases</h3>
              <p className="text-muted-foreground leading-relaxed">
                Perfect for LMS platforms, online course marketplaces, AI tutoring systems, 
                corporate training solutions, or educational SaaS products.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Perfect For</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              This domain is ideal for various AI and education-focused ventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "AI-Powered Learning Management Systems",
              "Adaptive Educational Platforms",
              "Corporate Training & Development Tools",
              "Online Course Marketplaces",
              "Personalized Tutoring Applications",
              "Educational Data Analytics Platforms",
              "Skill Assessment & Certification Systems",
              "Language Learning AI Applications"
            ].map((useCase, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build the Future of Learning?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Don't miss this opportunity to own a premium domain that perfectly captures 
              the intersection of AI and education. Contact us today to discuss acquisition.
            </p>
            
            <Card className="p-8 bg-card/90 backdrop-blur-sm border-2 border-primary/20 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Get in Touch</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Serious inquiries only. Email us to discuss pricing and transfer details.
              </p>
              <Button 
                size="lg" 
                onClick={handleContact}
                className="w-full text-lg py-6 glow"
              >
                tzc38w@gmail.com
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/30 backdrop-blur-sm">
        <div className="container">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">© 2024 NestedLearning.pl - Premium Domain for Sale</p>
            <p className="text-sm">All inquiries: tzc38w@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
