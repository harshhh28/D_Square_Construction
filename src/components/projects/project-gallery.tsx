"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectGallery({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <h2 className="text-3xl font-bold">Project Gallery</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0">
                  <Image
                    src={images[currentImage] || "/placeholder.svg"}
                    alt={`Project image ${currentImage + 1}`}
                    fill
                    className="object-cover"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm border-white/10 hover:bg-black/30"
                    onClick={() => setLightboxOpen(true)}>
                    <Maximize2 className="h-5 w-5 text-white" />
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 rounded-full bg-background shadow-md"
              onClick={prevImage}
              aria-label="Previous image">
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 rounded-full bg-background shadow-md"
              onClick={nextImage}
              aria-label="Next image">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-5 gap-2 mt-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative aspect-[4/3] rounded-md overflow-hidden transition-all ${
                  currentImage === index
                    ? "ring-2 ring-primary"
                    : "opacity-70 hover:opacity-100"
                }`}>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Project thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}>
            <div
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}>
              <div className="relative aspect-auto h-full">
                <Image
                  src={images[currentImage] || "/placeholder.svg"}
                  alt={`Project image ${currentImage + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 rounded-full bg-black/20 backdrop-blur-sm border-white/10 hover:bg-black/30"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Previous image">
                <ChevronLeft className="h-5 w-5 text-white" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 rounded-full bg-black/20 backdrop-blur-sm border-white/10 hover:bg-black/30"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Next image">
                <ChevronRight className="h-5 w-5 text-white" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 rounded-full bg-black/20 backdrop-blur-sm border-white/10 hover:bg-black/30"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close lightbox">
                <X className="h-5 w-5 text-white" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
