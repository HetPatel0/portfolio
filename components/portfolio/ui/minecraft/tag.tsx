import type { HTMLAttributes } from "react";
import { cx } from "@/components/portfolio/ui/minecraft/utils";

type MinecraftTagTone = "default" | "green" | "blue" | "gold";

type MinecraftTagProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: MinecraftTagTone;
};

export function MinecraftTag({
  tone = "default",
  className,
  children,
  ...props
}: MinecraftTagProps) {
  return (
    <span className={cx("mcui-tag", `mcui-tag--${tone}`, className)} {...props}>
      {children}
    </span>
  );
}
