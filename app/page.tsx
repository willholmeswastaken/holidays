import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Globe, MapPin, Camera, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">
              Holiday Maker
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How it Works
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <SignedOut>
              <SignInButton forceRedirectUrl="/app">
                <Button variant="ghost" className="text-muted-foreground">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href="/app">
                <Button variant="ghost" className="text-muted-foreground">
                  My Account
                </Button>
              </Link>
            </SignedIn>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  {"✨ Cherish Every Moment"}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Your holidays deserve to be
                  <span className="text-primary block">remembered forever</span>
                </h1>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-lg">
                  Create, organize, and revisit your most cherished travel
                  memories through beautiful photo collections and interactive
                  maps. Every journey tells a story worth preserving.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Start Your Memory Journey
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>Works Everywhere</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-accent/30 rounded-2xl p-8 backdrop-blur-sm">
                <Image
                  src="/site-preview.png"
                  alt="Holiday memories interface preview"
                  className="w-full h-auto rounded-lg shadow-lg"
                  width={400}
                  height={400}
                />
                <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-lg">
                  <Camera className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Everything you need to preserve your memories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our platform combines intuitive design with powerful features to
              help you create lasting digital keepsakes of your travels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Photo Collections</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Organize your holiday photos into beautiful, themed
                  collections that tell the story of each adventure.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Interactive Maps</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Explore your memories geographically with pins marking every
                  special location you&apos;ve visited.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Memory Timeline</h3>
                <p className="text-muted-foreground leading-relaxed">
                  View your holidays in chronological order and relive the
                  journey from start to finish.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Private & Secure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your memories are encrypted and stored securely. Share only
                  what you want, when you want.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Mobile Ready</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access your memories anywhere, anytime. Our responsive design
                  works perfectly on all devices.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Easy Sharing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Share your favorite holiday moments with family and friends
                  through beautiful, curated albums.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Three simple steps to preserve your memories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Getting started is easy. Create your first holiday memory
              collection in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold">Create Your Holiday</h3>
              <p className="text-muted-foreground leading-relaxed">
                Start by creating a new holiday entry with dates, location, and
                a memorable title for your trip.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold">Upload Your Photos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Add your favorite photos from the trip. Our system automatically
                organizes them by date and location.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold">Explore & Revisit</h3>
              <p className="text-muted-foreground leading-relaxed">
                Browse your memories in list view or explore them on an
                interactive map with location pins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Ready to start preserving your memories?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Join thousands of travelers who trust Holiday Maker to keep their
              most precious holiday moments safe and accessible forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Create Your First Memory
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border bg-transparent"
              >
                Learn More
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              {"✨ Free to start • No credit card required • Secure & private"}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-xl font-semibold">Holiday Maker</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Preserving your most cherished travel memories with modern
                technology and elegant design.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mobile App
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>
              © 2025 Holiday Maker. All rights reserved. Made with ❤️ for
              travelers worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
