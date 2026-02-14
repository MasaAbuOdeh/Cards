"use client";
import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";
import { useTranslation } from "react-i18next";
import Typography from "./typoGraphy";
export default function RecommendationCard({
  title,
  description,
  icon,
  highlightText,
  borderVariant,
}) {
  const { i18n } = useTranslation("common");

  return (
    <Card
      className={`flex flex-row items-start gap-4 p-5 shadow-smborder-gray-500`}
      borderVariant={borderVariant}
    >
      {/* Icon */}
      {icon && (
        <div className="flex items-center ml-2 justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex-shrink-0">
          {icon}
        </div>
      )}

      {/* Content */}
      <CardContent className="">
        {title && (
          <Typography
            variant="h5"
            weight="semibold"
            color="black"
            className="mb-1"
          >
            {title}
          </Typography>
        )}
        {description && (
          <Typography variant="default" color="grey" className="mb-1">
            {description}
          </Typography>
        )}
        {highlightText && (
          <Typography variant="small" weight="bold" color="success">
            {highlightText}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
