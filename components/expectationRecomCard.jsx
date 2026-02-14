import * as React from "react";
import { Card, CardContent } from "./card";
import Typography from "./typoGraphy";
import { InfoBadge } from "./infoBadge";
import Link from "next/link";
import { cn } from "@/lib/utils";
export default function ExpectationRecommendCard({
  title,
  subtitle,
  suggestion,
  infoItems = [],
}) {
  return (
    <Card borderVariant="green" className="gap-4 p-3 sm:p-4">
      {/*Top Section */}
      <CardContent className="gap-1 p-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-7">
          <Typography
            variant="h5"
            weight="bold"
            color="black"
            className="whitespace-nowrap"
          >
            {title}
          </Typography>

          <Link href="#">
            <Typography
              variant="subtitle"
              color="yellow"
              className={cn(
                "whitespace-nowrap hover:text-yellow-600 transition-colors ",
              )}
            >
              {" "}
              Maintenance scheduling{" "}
            </Typography>
          </Link>
        </div>

        <Typography variant="subtitle" color="grey">
          {subtitle}
        </Typography>
        {/*Middle Section: Info Badges*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {infoItems.map((item) => (
            <InfoBadge key={item.key} label={item.label} value={item.value} />
          ))}
        </div>
      </CardContent>

      {/*Suggested Action Section*/}
      {suggestion && (
        <CardContent className="flex flex-wrap items-center gap-1 text-sm sm:text-base p-0">
          <Typography variant="subtitle" color="gray" className="inline">
            Porposed Action:
          </Typography>
          <Typography variant="subtitle" weight="semibold" color="yellow">
            {suggestion}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
}
