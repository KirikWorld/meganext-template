"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Content({ children }: { children: React.ReactNode }) {
  const locale = usePathname();

  const [opacity, setOpacity] = useState(0);
  const [timeoutRef, setTimeoutRef] = useState<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpacity(0);
    const timeout = setTimeout(() => setOpacity(1), 1);
    setTimeoutRef(timeout);

    return () => {
      if (timeoutRef) clearTimeout(timeoutRef);
    };
  }, [locale]);

  return (
    <main
      className="w-full h-full bg-background text-foreground mt-20 pb-10"
      style={{ opacity, transition: opacity === 0 ? "none" : "opacity 300ms ease" }}
    >
      {children}
    </main>
  );
}
