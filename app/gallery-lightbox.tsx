"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ResponsiveImage from "./responsive-image";

type GalleryItem = {
  src: string;
  alt: string;
  section: string;
  title: string;
  feature?: boolean;
};

export default function GalleryLightbox({ items, existingSelector, replaceSelector }: { items: GalleryItem[]; existingSelector?: string; replaceSelector?: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [replaceHost, setReplaceHost] = useState<HTMLElement | null>(null);
  const active = activeIndex === null ? null : items[activeIndex];

  useEffect(() => {
    if (!replaceSelector) return;
    const host = document.querySelector<HTMLElement>(replaceSelector);
    if (!host) return;

    const legacyNodes = Array.from(host.children) as HTMLElement[];
    legacyNodes.forEach((node) => { node.style.display = "none"; });
    setReplaceHost(host);
    return () => {
      setReplaceHost(null);
      legacyNodes.forEach((node) => { node.style.display = ""; });
    };
  }, [replaceSelector]);

  useEffect(() => {
    if (!existingSelector || replaceSelector) return;

    const cleanups: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>(existingSelector).forEach((figure) => {
      const image = figure.querySelector<HTMLImageElement>("img");
      if (!image) return;

      const imagePath = new URL(image.currentSrc || image.src, window.location.href).pathname;
      const index = items.findIndex((item) => item.src === imagePath);
      if (index < 0) return;

      const previousRole = figure.getAttribute("role");
      const previousTabIndex = figure.getAttribute("tabindex");
      const previousLabel = figure.getAttribute("aria-label");
      const open = () => setActiveIndex(index);
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          open();
        }
      };

      figure.classList.add("galleryExistingItem");
      figure.setAttribute("role", "button");
      figure.setAttribute("tabindex", "0");
      figure.setAttribute("aria-label", `Enlarge ${items[index].title}`);
      figure.addEventListener("click", open);
      figure.addEventListener("keydown", onKeyDown);
      cleanups.push(() => {
        figure.classList.remove("galleryExistingItem");
        if (previousRole === null) figure.removeAttribute("role"); else figure.setAttribute("role", previousRole);
        if (previousTabIndex === null) figure.removeAttribute("tabindex"); else figure.setAttribute("tabindex", previousTabIndex);
        if (previousLabel === null) figure.removeAttribute("aria-label"); else figure.setAttribute("aria-label", previousLabel);
        figure.removeEventListener("click", open);
        figure.removeEventListener("keydown", onKeyDown);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [existingSelector, items, replaceSelector]);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => current === null ? null : (current - 1 + items.length) % items.length);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => current === null ? null : (current + 1) % items.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, items.length]);

  const showPrevious = () => setActiveIndex((current) => current === null ? null : (current - 1 + items.length) % items.length);
  const showNext = () => setActiveIndex((current) => current === null ? null : (current + 1) % items.length);

  const gridContent = items.map((item, index) => <figure className={item.feature ? "galleryFeature" : undefined} key={item.src}>
        <button className="galleryImageButton" type="button" onClick={() => setActiveIndex(index)} aria-label={`放大查看${item.title}`}>
          <ResponsiveImage src={item.src} alt={item.alt} loading={index === 0 ? "eager" : "lazy"} mobileSizes="(max-width: 850px) 100vw, 50vw"/>
        </button>
        <figcaption><small>{item.section}</small><b>{item.title}</b></figcaption>
      </figure>);

  return <>
    {replaceSelector ? replaceHost && createPortal(<>{gridContent}</>, replaceHost) : !existingSelector && <div className="galleryGrid">{gridContent}</div>}
    {active && <div className="galleryLightbox" role="dialog" aria-modal="true" aria-label={`${active.title}大图`} onClick={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}>
      <button className="galleryLightboxClose" type="button" onClick={() => setActiveIndex(null)} aria-label="关闭大图">×</button>
      <button className="galleryLightboxNav galleryLightboxPrev" type="button" onClick={showPrevious} aria-label="上一张">‹</button>
      <figure className="galleryLightboxPanel">
        <img src={active.src} alt={active.alt}/>
        <figcaption><small>{active.section}</small><b>{active.title}</b></figcaption>
      </figure>
      <button className="galleryLightboxNav galleryLightboxNext" type="button" onClick={showNext} aria-label="下一张">›</button>
    </div>}
  </>;
}
