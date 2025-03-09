import Image from "next/image";
import { cn } from "@/lib/utils";

interface StaticImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function StaticImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: StaticImageProps) {
  // Determine if using a placeholder SVG
  const isPlaceholder = src.includes("placeholder.svg");

  // Default dimensions
  const defaultWidth = width || (isPlaceholder ? 800 : 1200);
  const defaultHeight = height || (isPlaceholder ? 600 : 900);

  return (
    <Image
      src={src}
      alt={alt}
      width={defaultWidth}
      height={defaultHeight}
      className={cn("object-cover", className)}
      priority={priority}
      // Don't use object-fit for SVG placeholders
      style={isPlaceholder ? {} : { objectFit: "cover" }}
    />
  );
}
