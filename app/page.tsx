import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-8 max-w-2xl mx-auto px-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome to Holidays App
          </h1>
          <p className="text-xl text-gray-600">
            Plan, organize, and share your holidays with ease. Keep track of
            your travel adventures and create beautiful memories.
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Plan Trips</h3>
              <p>
                Create detailed holiday plans with dates, locations, and
                activities
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Share Memories
              </h3>
              <p>
                Upload photos and share your adventures with friends and family
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Track History
              </h3>
              <p>
                Keep a record of all your past holidays and travel experiences
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <SignInButton>
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </SignInButton>
          <p className="text-sm text-gray-500">
            Sign in to start managing your holidays
          </p>
        </div>
      </div>
    </div>
  );
}
