"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// lottie-react es solo cliente: lo cargamos con ssr:false (permitido en
// Client Components). La animación se carga desde /public/globe.json.
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Globe({ className }: { className?: string }) {
  const [data, setData] = useState<object | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/globe.json")
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
    <span className={className} aria-hidden="true">
      {data && (
        <Lottie animationData={data} loop autoplay className="h-full w-full" />
      )}
    </span>
  );
}
