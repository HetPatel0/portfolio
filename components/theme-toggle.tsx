"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "portfolio-theme";
const THEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function readThemeCookie(): Theme | null {
  if (typeof document === "undefined") {
    return null;
  }

  const cookieEntry = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${THEME_STORAGE_KEY}=`));

  if (!cookieEntry) {
    return null;
  }

  const cookieValue = decodeURIComponent(cookieEntry.split("=")[1] ?? "");
  if (cookieValue === "light" || cookieValue === "dark") {
    return cookieValue;
  }

  return null;
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;

  document.cookie = `${THEME_STORAGE_KEY}=${encodeURIComponent(theme)}; path=/; max-age=${THEME_COOKIE_MAX_AGE}; SameSite=Lax`;
}

function resolveStoredTheme(): Theme | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  } catch {
    // Ignore read failures and try DOM/cookie fallbacks.
  }

  if (
    typeof document !== "undefined" &&
    (document.documentElement.getAttribute("data-theme") === "light" ||
      document.documentElement.getAttribute("data-theme") === "dark")
  ) {
    return document.documentElement.getAttribute("data-theme") as Theme;
  }

  return readThemeCookie();
}

function resolvePreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolveInitialTheme(): Theme {
  const storedTheme = resolveStoredTheme();
  if (storedTheme) {
    return storedTheme;
  }

  if (typeof document !== "undefined" && document.documentElement.classList.contains("dark")) {
    return "dark";
  }

  return resolvePreferredTheme();
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(resolveInitialTheme);

  useEffect(() => {
    applyTheme(theme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage write errors to keep UI functional.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Button
      type="button"
      size="sm"
      variant="outline"
      onClick={toggleTheme}
      className="h-8 px-3 text-xs"
      aria-label="Toggle color theme"
    >
      {theme === "dark" ? "Dark mode" : "Light mode"}
    </Button>
  );
}
