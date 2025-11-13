import { Button } from "@/components/ui/button";
import { Home, Mail } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={() => setLocation("/")}
            className="text-lg px-8 py-6"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.location.href = "mailto:tzc38w@gmail.com?subject=Question about NestedLearning.pl"}
            className="text-lg px-8 py-6"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Us
          </Button>
        </div>

        <div className="mt-12 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
          <p className="text-muted-foreground mb-2">
            Interested in <span className="gradient-text font-bold">NestedLearning.pl</span>?
          </p>
          <p className="text-sm text-muted-foreground">
            This premium domain is available for purchase. Contact us for details.
          </p>
        </div>
      </div>
    </div>
  );
}
