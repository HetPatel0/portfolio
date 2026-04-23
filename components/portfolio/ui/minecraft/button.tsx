import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/components/portfolio/ui/minecraft/utils";

type MinecraftButtonVariant = "primary" | "secondary" | "clear";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: MinecraftButtonVariant;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

function isLinkProps(props: ButtonProps | LinkProps): props is LinkProps {
  return typeof (props as LinkProps).href === "string";
}

export function minecraftButtonClasses(variant: MinecraftButtonVariant = "primary", className?: string) {
  return cx("mcui-button", `mcui-button--${variant}`, className);
}

export function MinecraftButton(props: ButtonProps | LinkProps) {
  if (isLinkProps(props)) {
    const { children, className, variant = "primary", href, ...rest } = props;

    return (
      <a className={minecraftButtonClasses(variant, className)} href={href} {...rest}>
        {children}
      </a>
    );
  }

  const { children, className, variant = "primary", ...rest } = props as ButtonProps;

  return (
    <button className={minecraftButtonClasses(variant, className)} {...rest}>
      {children}
    </button>
  );
}
