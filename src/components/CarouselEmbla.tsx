"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArticleImage, Image } from "@/app/type";
import "./embla.css";
import { S_BASE_API_URL } from "@/utils/env/env";
import ImageNext from "next/image";

export function CarouselEmbla({ images, height, width }: { images: Image[] | ArticleImage[], height: number, width: number}) {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container" style={{height: height}}>
        {images.map((image, i) => (
          <div key={i} className="embla__slide">
            <ImageNext
              style={{
                display: "block",
                overflow: "hidden",
                objectFit: 'contain',
                margin: "0 auto",
              }}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={`${S_BASE_API_URL}/${image.path.replaceAll(
                "public",
                "storage"
              )}`}
              alt={`${S_BASE_API_URL}/${image.path.replaceAll(
                "public",
                "storage"
              )}`}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
