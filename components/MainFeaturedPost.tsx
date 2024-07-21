"use client";
import * as React from "react";
import { CarouselEmbla } from "./CarouselEmbla";
import { Image } from "../utils/type";
import { Box } from "@mantine/core";

interface MainFeaturedPostProps {
  post: {
    description: string;
    images: Image[];
    imageText: string;
    linkText: string;
    title: string;
  };
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
  const { post } = props;

  return (
    <Box
      style={{
        position: "relative",
        mb: 4,
        borderRadius: 0,
        border: "none",
      }}
    >
      <CarouselEmbla height={370} width={500} images={post.images} />
    </Box>
  );
}
