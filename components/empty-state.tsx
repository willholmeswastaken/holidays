"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Calendar } from "lucide-react";
import Link from "next/link";

export function EmptyState() {
  return (
    <div className="flex items-center justify-center min-h-[400px] py-12">
      <Card className="max-w-md mx-auto p-8 text-center bg-gradient-to-br from-background to-muted/20 border-2 border-dashed border-muted-foreground/20">
        <div className="space-y-6">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Calendar className="w-8 h-8 text-primary" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">
              No holidays yet
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Start keeping track of your cherished moments by adding a holiday
            </p>
          </div>

          <Link href="/app/holidays/add">
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Add Your First Holiday
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
