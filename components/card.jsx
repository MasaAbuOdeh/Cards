"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

/* =========================
   Card Base Styles
========================= */
const cardBaseStyles = "rounded-lg bg-white p-0 h-full flex flex-col";

/* =========================
   Card
========================= */
const Card = React.forwardRef(
  ({ className, borderVariant, style, ...props }, ref) => {
    const { i18n } = useTranslation("common");
    const isRTL = i18n.language === "ar";

    // Get border classes and color based on variant and direction
    const getBorderClasses = () => {
      if (!borderVariant || borderVariant === "none") {
        return "border-none shadow-none";
      }

      // Use border-l-4 for RTL (Arabic) and border-r-4 for LTR (English)
      return isRTL ? "border-l-4" : "border-r-4";
    };

    const getBorderColor = () => {
      if (!borderVariant || borderVariant === "none") return {};

      const colorMap = {
        green: "var(--success-500)",
        red: "var(--error-500)",
        blue: "var(--cyan-500)",
        yellow: "var(--primary-500)",
        grey: "var(--grey-400)",
        black: "var(--grey-900)",
      };

      const borderColor = colorMap[borderVariant];
      // Use borderRightColor for RTL, borderLeftColor for LTR
      return borderColor
        ? isRTL
          ? { borderLeftColor: borderColor }
          : { borderRightColor: borderColor }
        : {};
    };

    return (
      <div
        ref={ref}
        className={cn(cardBaseStyles, getBorderClasses(), className)}
        style={{ ...getBorderColor(), ...style }}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

/* =========================
   Card Header
========================= */
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-2 p-4 mb-0 border-b border-border-color shrink-0",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

/* =========================
   Card Title
========================= */
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("text-sm font-bold text-text-primary", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

/* =========================
   Card Description
========================= */
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

/* =========================
   Card Content
========================= */
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex-1 w-full", className)} {...props} />
));
CardContent.displayName = "CardContent";

/* =========================
   Card Footer
========================= */
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};