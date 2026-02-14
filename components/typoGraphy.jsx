"use client";

import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-[36px]",
      h2: "text-[32px]",
      h3: "text-[28px]",
      h4: "text-[24px]",
      h5: "text-[20px]",
      subtitle: "text-[14px] text-muted-foreground",
      default: "text-[16px]",
      small: "text-[12px]",
    },
    weight: {
      bold: "font-bold",
      semibold: "font-semibold",
      medium: "font-medium",
      normal: "font-normal",
    },
    leading: {
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
    color: {
      // primary: "text-grey-950 dark:text-grey-950",
      primary: "text-grey-900 dark:text-grey-900",
      grey: "text-grey-600 dark:text-grey-300",
      info: "text-cyan-600 dark:text-cyan-400",
      success: "text-success-600 dark:text-success-400",
      // secondary: "text-slate-500 dark:text-slate-500",
      secondary: "text-grey-500 dark:text-grey-500",
      warning: "text-warning-600 dark:text-warning-400",
      error: "text-error-600 dark:text-error-400",
      mint: "text-mint-600 dark:text-mint-400",
      yellow: "text-yellow-600 dark:text-yellow-400",
      brand: "text-primary-600 dark:text-primary-400",
      teal: "text-teal-600 dark:text-teal-400",
      cyan: "text-cyan-600 dark:text-cyan-400",
      indigo: "text-indigo-600 dark:text-indigo-400",
      purple: "text-purple-600 dark:text-purple-400",
      pink: "text-pink-600 dark:text-pink-400",
      brown: "text-brown-600 dark:text-brown-400",
      white: "text-white dark:text-white",
      black: "text-black dark:text-black",
    },
  },
  defaultVariants: {
    variant: "default",
    weight: "normal",
    leading: "normal",
    color: undefined,
  },
});
const Typography = React.forwardRef(
  (
    {
      variant = "default",
      weight = "normal",
      leading = "normal",
      color,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          typographyVariants({ variant, weight, leading, color, className })
        )}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
export default Typography;