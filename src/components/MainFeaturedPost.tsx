"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Image } from "@/app/type";
import { Button, MobileStepper, useTheme } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { C_BASE_API_URL } from "@/utils/env/env";
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
