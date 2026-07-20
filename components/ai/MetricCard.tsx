"use client";

import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
}

export default function MetricCard({
  title,
  value,
  subtitle,
}: MetricCardProps) {
  return (
    <Card className="transition hover:shadow-lg">
      <CardContent className="p-5">
        <p className="text-sm text-muted-foreground">
          {title}
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          {value}
        </h2>

        {subtitle && (
          <p className="mt-1 text-xs text-muted-foreground">
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  );
}