import { useEffect, useState } from "react";

// Tracks which section is currently in the viewport, for nav highlighting.
// Starts empty so nothing is highlighted while the (nav-less) hero is on screen.
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // First section (in document order) currently in the band, else none.
        setActive(ids.find((id) => visible.has(id)) ?? "");
      },
      // Trigger when a section sits roughly in the middle of the viewport.
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
