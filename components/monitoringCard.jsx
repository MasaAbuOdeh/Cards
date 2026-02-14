import * as React from "react";
import {
  Card,
  CardContent,
} from "./card";

import Typography from "./typoGraphy";
import { InfoBadge } from "./infoBadge";

export default function MonitoringCard({ deviceName, status, infoItems = [] }) {
  let borderVariant;
  let statusColor;
  if (status === "connected") {
    borderVariant = "green";
    statusColor = "success";
  } else if (status == "maintenance") {
    borderVariant = "yellow";
    statusColor = "yellow";
  } else {
    borderVariant = "red";
    statusColor = "error";
  }
  return (
    <Card
      className="flex items-start gap-4 p-5 shadow-smborder-gray-500"
      borderVariant={borderVariant}
    >
      <CardContent>
        <div className="flex flex-row item-start justify-between">
          {deviceName && (
            <Typography
              variant="h5"
              weight="semibold"
              color="black"
              className="mb-1"
            >
              {deviceName}
            </Typography>
          )}

          <Typography variant="subtitle" weight="medium" color={statusColor}>
            {status}
          </Typography>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-3">
          {infoItems.map((item) => (
            <InfoBadge key={item.key} label={item.label} value={item.value} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
