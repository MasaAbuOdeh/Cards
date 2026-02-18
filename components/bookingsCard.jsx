import Typography from "./typoGraphy";
import { Card, CardContent } from "@/components/card";
import { Calendar } from "lucide-react";

export default function BookingsCard({
  title = "إجمالي الحجوزات",
  value = 0,
  iconColor = "text-red-500",
}) {
  return (
    <Card className="flex flex-row items-start gap-4 p-5 ">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100">
        <Calendar className={`w-5 h-5 ${iconColor}`} />
      </div>
      <CardContent className="items-center justify-between pr-5">
        <div className="flex flex-col gap-1">
          <Typography variant="default" weight="medium" color="grey">
            {title}
          </Typography>

          <Typography variant="h5" weight="bold" colot="black">
            {value}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
