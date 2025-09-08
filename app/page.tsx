import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Your Journey,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                  {" "}
                  Forever
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Transform your travel memories into timeless stories. Plan
                adventures, capture moments, and relive your journeys with
                elegance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <SignInButton forceRedirectUrl="/app">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Journey
                </Button>
              </SignInButton>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Free forever</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span>Unlimited memories</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground">10K+</div>
              <div className="text-muted-foreground mt-2">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">50K+</div>
              <div className="text-muted-foreground mt-2">Memories Shared</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">100+</div>
              <div className="text-muted-foreground mt-2">
                Countries Visited
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">4.9★</div>
              <div className="text-muted-foreground mt-2">User Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything you need to cherish your journeys
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From planning your next adventure to preserving memories of past
              ones, we&apos;ve got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl">Intelligent Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Plan your perfect holiday with smart suggestions, weather
                  forecasts, and personalized recommendations based on your
                  preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl">Memory Preservation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Capture and organize your photos, videos, and stories in
                  beautiful, searchable collections that grow with you.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl">Social Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Share your adventures with loved ones through beautiful,
                  interactive stories and private family groups.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl">Travel Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Discover insights about your travel patterns, favorite
                  destinations, and create meaningful statistics from your
                  journeys.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl">Location Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Interactive maps, location tagging, and smart recommendations
                  based on where you&apos;ve been and want to go.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
                  <svg
                    className="w-6 h-6 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl">Secure & Private</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your memories are yours. Enterprise-grade security with
                  private collections and end-to-end encryption.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Your journey in three simple steps
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started in minutes and never forget another adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Plan Your Adventure
              </h3>
              <p className="text-muted-foreground">
                Create detailed itineraries with dates, locations, and
                activities. Get personalized recommendations and weather
                insights.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Capture & Share
              </h3>
              <p className="text-muted-foreground">
                Document your experiences with photos, notes, and stories. Share
                the highlights with friends and family instantly.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Relive Forever
              </h3>
              <p className="text-muted-foreground">
                Browse your travel history, rediscover favorite moments, and get
                inspired for your next journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Loved by travelers worldwide
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our community says about preserving their travel
              memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &ldquo;This app has completely changed how I remember my
                  travels. Every adventure is now beautifully preserved and easy
                  to revisit.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Sarah Chen
                    </div>
                    <div className="text-gray-600 text-sm">
                      Adventure Photographer
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &ldquo;The perfect companion for our family trips. We can all
                  contribute to our shared memories and relive them
                  anytime.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Marcus Rodriguez
                    </div>
                    <div className="text-gray-600 text-sm">Family Traveler</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &ldquo;As a frequent business traveler, this app helps me keep
                  track of all my trips and create beautiful photo journals
                  automatically.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    A
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Alex Thompson
                    </div>
                    <div className="text-gray-600 text-sm">
                      Business Consultant
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to preserve your travel memories?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of travelers who are creating timeless stories of
            their adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignInButton forceRedirectUrl="/app">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Free Journey
              </Button>
            </SignInButton>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600"
            >
              Learn More
            </Button>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            No credit card required • Free forever • Unlimited memories
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-background text-foreground py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Holidays App</h3>
              <p className="text-muted-foreground mb-4">
                Transform your travel memories into timeless stories. Plan
                adventures, capture moments, and relive your journeys with
                elegance.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-sm">📘</span>
                </div>
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-sm">🐦</span>
                </div>
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-sm">📷</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Updates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; 2024 Holidays App. All rights reserved. Made with ❤️ for
              travelers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
