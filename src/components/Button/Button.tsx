"use client";

import { Icon } from "../Icon";
import { useButton } from "@mui/base";
import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef, ReactNode, Ref } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  color?: "inherit" | "primary" | "secondary" | "error" | "success" | "info";
  size?: "small" | "medium" | "large";
  shape?: "square" | "rounded" | "circular";
  variant?: "contained" | "outlined" | "text";
  loading?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
}

const Variants = cva("flex justify-center items-center transition duration-250 font-light", {
  variants: {
    color: {
      inherit: "text-text-primary bg-gray-500 border-gray-500",
      primary: "text-primary bg-primary border-primary",
      secondary: "text-secondary bg-secondary border-secondary",
      success: "text-green-500 bg-green-500 border-green-500",
      error: "text-red-500 bg-red-500 border-red-500",
      info: "text-blue-500 bg-blue-500 border-blue-500",
    },
    variant: {
      text: "bg-opacity-0 hover:bg-opacity-hover active:bg-opacity-active",
      contained: "bg-opacity-80 hover:bg-opacity-90 active:bg-opacity-100",
      outlined: "border bg-opacity-0 hover:bg-opacity-hover active:bg-opacity-active",
    },
    size: {
      small: "px-2 py-1.5",
      medium: "px-4 py-2",
      large: "px-5 py-3",
    },
    shape: {
      square: "rounded-none",
      rounded: "rounded-md",
      circular: "rounded-full",
    },
  },
  compoundVariants: [
    { variant: "contained", color: "primary", className: "text-black/90" },
    { variant: "contained", color: "secondary", className: "text-black/90" },
    { variant: "contained", color: "error", className: "text-black/90 dark:text-white/90" },
    { variant: "contained", color: "success", className: "text-black/90" },
    { variant: "contained", color: "info", className: "text-black/90" },
  ],
});

export const Button = forwardRef(function Button(
  {
    children,
    className,
    startIcon,
    color = "inherit",
    size = "medium",
    shape = "rounded",
    variant = "text",
    loading = false,
    disabled = false,
    ...props
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>,
) {
  const isDisabled = disabled || loading;
  const { getRootProps } = useButton({ rootRef: ref, disabled: isDisabled });

  const classNames = twMerge(
    Variants({ color, size, shape, variant }),
    isDisabled && [
      "pointer-events-none text-text-disabled",
      "border-gray-500/30",
      variant === "contained" && "bg-gray-500/30 dark:bg-white/30",
    ],
    className,
  );

  return (
    <button className={classNames} {...getRootProps()} {...props}>
      {loading && (
        <div className="mr-2">
          <Icon icon={{ prefix: "fas", iconName: "circle-notch" }} fixedWidth spin />
        </div>
      )}
      {startIcon && !loading && <div className="mr-2">{startIcon}</div>}
      {children}
    </button>
  );
});
