export function mobileImageSrc(src: string) {
  const [path, query] = src.split("?");
  const match = path.match(/^(.+)\.(png|jpe?g|webp|avif)$/i);
  if (!match) return src;
  return `${match[1]}-mobile.webp${query ? `?${query}` : ""}`;
}
