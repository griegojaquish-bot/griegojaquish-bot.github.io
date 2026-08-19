"use client";

import { useEffect, useState } from "react";

export default function HeroMedia() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 851px) and (prefers-reduced-motion: no-preference)");
    const update = () => setShowVideo(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return <div className="designHeroImage">{showVideo && <video autoPlay muted loop playsInline preload="metadata" poster="/shanjiang-hero-hd.png"><source src="/shanjiang-hero-motion-v4.mp4" type="video/mp4" /></video>}</div>;
}
