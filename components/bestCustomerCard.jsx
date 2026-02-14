import * as React from "react";
import { Card, CardContent } from "./card";
import Typography from "./typoGraphy";
import { User, Star } from "lucide-react";

export default function UserStatsCard({
  amount = 0,
  currency = "",
  rating = 0,
  clientname = "",
  numberofsession = "",
}) {
  return (
    <Card className="p-4 sm:p-5 flex sm:flex-row sm:items-center sm:justify-between gap-10">
      {/* Left Section: User Info + Icon */}
      <CardContent className="flex items-center gap-3 p-0">
        {/* User Icon */}
        <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gray-100">
          <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 text-gray-600 shadow-sm">
            <User className="w-4 h-4" />
          </div>
        </div>

        {/* User Info */}
        <div className="flex flex-col items-start text-left">
          <Typography
            variant="h5"
            weight="semi-bold"
            color="black"
            className="whitespace-nowrap"
          >
            {clientname}
          </Typography>
          {numberofsession && (
            <Typography variant="subtitle" color="grey">
              {numberofsession} session
            </Typography>
          )}
        </div>
      </CardContent>

      {/* Right Section: Amount + currency + Rating */}
      <CardContent className="flex flex-col items-end sm:items-end gap-2 p-0">
        <div className="flex items-baseline gap-1">
          <Typography variant="h3" weight="bold" color="black">
            {amount}
          </Typography>

          {currency && (
            <Typography variant="subtitle" color="grey">
              {currency}
            </Typography>
          )}
        </div>

        <div className="flex justify-center sm:justify-start">
          <div className="inline-flex items-center ml-5 px-1.5 py-[3px] bg-gray-100 rounded-md text-[11px] font-medium text-gray-700 leading-none">
            <Typography variant="subtitle" color="grey">
              {rating}
            </Typography>
            <span className="flex items-center text-yellow-500 [&_svg]:w-3 [&_svg]:h-3 [&_svg]:fill-current">
              <Star />
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
