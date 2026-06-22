"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// lottie-react es solo cliente: lo cargamos con ssr:false (permitido en
// Client Components). La animación se carga desde /public/globe/globe.json.
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Globe({ className }: { className?: string }) {
  const [data, setData] = useState<object | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/globe/globe.json")
      .then((r) => r.json())
      .then((d) => {
        if (active) setData(d);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return (
    // invert(1): el globe.json es negro; el filtro lo pinta blanco sin tocar el
    // JSON (replica el invert-filter de Webflow; aguanta re-exports del Lottie).
    <span className={`${className ?? ""} invert`} aria-hidden="true">
      {data && (
        <Lottie animationData={data} loop autoplay className="h-full w-full" />
      )}
    </span>
  );
}
