"use client";

import { Article } from "@/app/type";
import useExtensions from "./useExtensions";
import { RichTextReadOnly } from "mui-tiptap";

export default function ClientOnlyViewTextEditor({ post }: { post: Article }) {
  const extensions = useExtensions({
    placeholder: "Add your own content here...",
  });

  return <RichTextReadOnly content={post?.content} extensions={extensions} />;
}
