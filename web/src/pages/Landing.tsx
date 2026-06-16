import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, Download, Lock, Zap, Globe, Headphones } from "lucide-react";
import { Link } from "wouter";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488367304/PscmKkJeD4EWYQ6pP4Xypu/shulker-hero-bg-ff2D9nM2rK77H6t6HnTpJ7.webp";
const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488367304/PscmKkJeD4EWYQ6pP4Xypu/shulker-logo-Suh546yWtj6fdV4htTetNB.webp";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={LOGO} alt="Shulker" className="w-8 h-8" />
            <span className="text-lg font-bold text-primary">Shulker</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/app">
              <Button variant="default" size="sm">
                Launch App
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background z-10" />

        <div className="container relative z-20 flex flex-col items-center text-center">
          <div className="mb-8 animate-fade-in">
            <img src={LOGO} alt="Shulker" className="w-20 h-20 mx-auto mb-6" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight animate-fade-in" style={{ animationDelay: "100ms" }}>
            Your Music,<br />Your Way
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "200ms" }}>
            Discover, stream, and download music with complete control. No compromises. No limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Link href="/app">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Get Started
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Shulker?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Your Privacy, Protected",
                description: "Your data stays yours. No tracking, no ads, no corporate surveillance.",
              },
              {
                icon: Download,
                title: "Download & Own",
                description: "Download your favorite tracks and keep them forever. No subscriptions required.",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Stream and download at blazing speeds with our optimized infrastructure.",
              },
              {
                icon: Globe,
                title: "Access Anywhere",
                description: "Stream from YouTube Music, Spotify, and your personal library seamlessly.",
              },
              {
                icon: Headphones,
                title: "High Quality Audio",
                description: "Enjoy crystal-clear audio in multiple formats and bitrates.",
              },
              {
                icon: Music,
                title: "Full Control",
                description: "Organize playlists, create collections, and manage your music library your way.",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-lg transition-shadow duration-300 bg-background border-border hover:border-accent"
              >
                <feature.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Reclaim Your Music?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of music lovers who've switched to Shulker for a better streaming experience.
          </p>
          <Link href="/app">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Launch Shulker Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={LOGO} alt="Shulker" className="w-6 h-6" />
                <span className="font-bold">Shulker</span>
              </div>
              <p className="text-sm text-muted-foreground">Your music, your way.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">About</a></li>
                <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition">License</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Shulker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
