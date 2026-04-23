import type { ElementType, HTMLAttributes } from "react";
import { cx } from "@/components/portfolio/ui/minecraft/utils";

type MinecraftPanelTone = "default" | "dark" | "paper" | "wood" | "window" | "green";

type MinecraftPanelProps = HTMLAttributes<HTMLDivElement> & {
  as?: ElementType;
  tone?: MinecraftPanelTone;
};

export function minecraftPanelClasses(tone: MinecraftPanelTone = "default", className?: string) {
  return cx("mcui-panel", `mcui-panel--${tone}`, className);
}

export function MinecraftPanel({
  as: Component = "div",
  tone = "default",
  className,
  children,
  ...props
}: MinecraftPanelProps) {
  return (
    <Component className={minecraftPanelClasses(tone, className)} {...props}>
      {children}
    </Component>
  );
}
