import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: "up" | "down";
  isActive?: boolean;
}

export function StatCard({
  title,
  value,
  change,
  trend,
  isActive,
}: StatCardProps) {
  return (
    <div
      className={`text-center p-4 border-b-2 ${isActive ? "border-blue-500" : "border-transparent"}`}
    >
      <div className="text-sm text-muted-foreground mb-1">{title}</div>
      <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
      {change && (
        <div
          className={`text-xs flex items-center justify-center gap-1 ${
            trend === "up" ? "text-blue-500" : "text-muted-foreground"
          }`}
        >
          {trend === "up" ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
          {change}
        </div>
      )}
    </div>
  );
}

export function StatsSection() {
  return (
    <Card className="mb-6">
      <CardContent className="p-0">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold text-foreground">Key metrics</h3>
          <select className="text-sm border border-border rounded px-2 py-1 text-muted-foreground bg-background">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
        <div className="grid grid-cols-5 divide-x">
          <StatCard
            title="Total holidays"
            value="12"
            change="+2 (↑)"
            trend="up"
            isActive
          />
          <StatCard
            title="Countries visited"
            value="8"
            change="+1 (↑)"
            trend="up"
          />
          <StatCard
            title="Cities explored"
            value="24"
            change="+3 (↑)"
            trend="up"
          />
          <StatCard
            title="Photos uploaded"
            value="347"
            change="+15 (↑)"
            trend="up"
          />
          <StatCard title="Memories created" value="89" change="0 (→)" />
        </div>
      </CardContent>
    </Card>
  );
}
