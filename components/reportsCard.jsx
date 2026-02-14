import * as React from "react";
import { Card, CardContent } from "./card";
import Typography from "./typoGraphy";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ReportsCard({
     icon: Icon, title, subtitle, value 
}) {
    return (
    <Card className="p-4">
      <CardContent className="flex items-start justify-between p-0">
        
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
            <Icon className="h-5 w-5 text-yellow-500" />
          </div>

          <div className="flex flex-col">
            <Typography varient="subtitle" color="grey">
                {subtitle}
            </Typography>
            <Typography varient="h5" weight="bold" color="black">
                {title}
            </Typography>
          </div>
        </div>

        {/* Right Section */}
        <Typography varient="subtitle" color="success" className={cn("inline-flex items-center gap-1 rounded-full mt-2 ml-10 px-2 py-1 bg-emerald-100")}>
            <ArrowUp className="h-3 w-3" />
          {value}%
        </Typography>
      </CardContent>
    </Card>);
}
