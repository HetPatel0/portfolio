"use client";

import { useEffect, useState } from "react";

export function useTyping(text: string, speed = 24) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTyped(text.slice(0, index));
      if (index >= text.length) {
        window.clearInterval(timer);
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [text, speed]);

  return typed;
}
