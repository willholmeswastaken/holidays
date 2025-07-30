import { Card } from "@/components/ui/card"

export function MapView() {
  return (
    <Card className="h-[600px] overflow-hidden">
      <div className="relative h-full w-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="text-4xl">🗺️</div>
          <p className="text-muted-foreground">Interactive map would be integrated here</p>
          <p className="text-sm text-muted-foreground">Your holiday locations will appear as pins on the map</p>
        </div>

        {/* Sample holiday marker */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-primary text-primary-foreground rounded-full p-2 shadow-lg animate-pulse">📍</div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-lg p-3 min-w-[200px]">
            <div className="flex gap-3">
              <img
                src="/placeholder.svg?height=60&width=60"
                alt="Trip to Spain"
                className="w-15 h-15 rounded object-cover"
              />
              <div>
                <h4 className="font-semibold text-sm">Trip to Spain</h4>
                <p className="text-xs text-muted-foreground">Spain</p>
                <p className="text-xs text-muted-foreground">July 29, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
