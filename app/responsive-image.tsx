"use client";

import type { ImgHTMLAttributes } from "react";
import { mobileImageSrc } from "./image-paths";

type ResponsiveImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  mobileSizes?: string;
};

export default function ResponsiveImage({
  src,
  alt,
  sizes = "(max-width: 850px) 100vw, 50vw",
  mobileSizes,
  ...props
}: ResponsiveImageProps) {
  const mobileSrc = typeof src === "string" ? mobileImageSrc(src) : undefined;
  const srcSet =
    mobileSrc && mobileSrc !== src
      ? `${mobileSrc} 900w, ${src} 1800w`
      : undefined;

  return (
    <img
      {...props}
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? mobileSizes || sizes : undefined}
      alt={alt}
    />
  );
}
