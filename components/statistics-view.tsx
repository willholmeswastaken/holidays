import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, Camera, Globe } from "lucide-react"

export function StatisticsView() {
  const stats = [
    {
      title: "Total Holidays",
      value: "12",
      icon: Calendar,
      description: "Adventures recorded",
    },
    {
      title: "Countries Visited",
      value: "8",
      icon: Globe,
      description: "Around the world",
    },
    {
      title: "Cities Explored",
      value: "24",
      icon: MapPin,
      description: "Urban adventures",
    },
    {
      title: "Photos Captured",
      value: "347",
      icon: Camera,
      description: "Memories preserved",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <div className="text-sm">Added "Trip to Spain" - 2 days ago</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                <div className="text-sm">Updated "Paris Adventure" - 1 week ago</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                <div className="text-sm">Added "Tokyo Experience" - 2 weeks ago</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Destinations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Europe</span>
                <span className="text-sm font-medium">5 trips</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Asia</span>
                <span className="text-sm font-medium">4 trips</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">North America</span>
                <span className="text-sm font-medium">3 trips</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
