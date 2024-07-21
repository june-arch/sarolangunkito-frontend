"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./embla.css";
import ImageNext from "next/image";
import { ArticleImage, Image } from "../utils/type";
import { C_BASE_API_URL } from "../utils/env/env";

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
              src={`${C_BASE_API_URL}/${image.path.replaceAll(
                "public",
                "storage"
              )}`}
              alt={`${C_BASE_API_URL}/${image.path.replaceAll(
                "public",
                "storage"
              )}`}
              unoptimized
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
