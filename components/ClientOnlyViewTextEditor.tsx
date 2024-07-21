"use client";

import { useState, useEffect } from "react";
import { Article } from "../utils/type";
import useExtensions from "./useExtensions";
import dynamic from "next/dynamic";
import { Box, Skeleton } from "@mantine/core";

const RichTextReadOnly = dynamic(() => import("mui-tiptap").then(mod => mod.RichTextReadOnly), {
  ssr: false,
});

export default function ClientOnlyViewTextEditor({ post }: { post: Article }) {
  const extensions = useExtensions({
    placeholder: "Add your own content here...",
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if(typeof window !== 'undefined'){
      setIsClient(true);
    }
  }, []);

  if (!isClient) {
    return <Box>
      <Skeleton h={40} w={'100%'} mt={'sm'} animate/>
      <Skeleton h={40} w={'100%'} mt={'sm'} animate/>
      <Skeleton h={40} w={'100%'} mt={'sm'} animate/>
      <Skeleton h={40} w={'100%'} mt={'sm'} animate/>
      <Skeleton h={40} w={'100%'} mt={'sm'} animate/>
      <Skeleton h={40} w={'100%'} mt={'sm'} animate/>
    </Box>; // or some loading spinner
  }

  return <RichTextReadOnly content={post?.content} extensions={extensions} />;
}
