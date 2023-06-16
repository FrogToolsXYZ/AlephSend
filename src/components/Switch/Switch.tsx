"use client";

import * as RadixSwitch from "@radix-ui/react-switch";
import clsx from "clsx";
import { useId } from "react";

export interface SwitchProps {
  id?: string;
  label?: string;
}

export function Switch({ label, ...props }: SwitchProps) {
  const defaultId = useId();
  const id = props?.id ?? defaultId;

  const RootClassNames = clsx([
    "flex items-center w-12 h-4 cursor-pointer",
    "rounded-full relative outline-none cursor-default",
    "bg-neutral-700/80 data-[state=checked]:bg-primary/50",
  ]);

  const ThumbClassNames = clsx([
    "block w-5 h-5 cursor-pointer",
    "bg-gray-200 hover:bg-gray-300 rounded-full transition will-change-transform",
    "data-[state=checked]:bg-primary data-[state=checked]:translate-x-8",
  ]);

  return (
    <div className="flex items-center gap-x-3">
      <RadixSwitch.Root id={id} className={RootClassNames}>
        <RadixSwitch.Thumb className={ThumbClassNames} />
      </RadixSwitch.Root>

      {label && (
        <label className="cursor-pointer leading-none text-white" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
}
