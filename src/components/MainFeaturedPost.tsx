"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Image } from "@/app/type";
import { CarouselEmbla } from "./CarouselEmbla";

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
      sx={{
        position: "relative",
        mb: 4,
        mt: 2,
        borderRadius: 0,
        border: "none",
      }}
    >
      <CarouselEmbla height={300} width={500} images={post.images} />
    </Box>
  );
}
