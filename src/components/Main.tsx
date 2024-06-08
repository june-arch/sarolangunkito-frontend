"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { RichTextReadOnly } from "mui-tiptap";
import { Article, PaginatedResponse } from "@/app/type";
import useExtensions from "./useExtensions";
import { Box, Chip, Stack, Tooltip } from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";
import { C_BASE_API_URL } from "@/utils/env/env";
import { CarouselEmbla } from "./CarouselEmbla";
import { LinkSharp } from "@mui/icons-material";

interface MainProps {
  posts: PaginatedResponse<Article>;
  title: string;
}

export default function Main(props: MainProps) {
  const { posts, title } = props;
  const extensions = useExtensions({
    placeholder: "Add your own content here...",
  });
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <Stack spacing={10}>
        {posts.data.map((post, index) => (
          <div key={index}>
            <Typography variant="h4" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {dayjs(post.created_at).format("MMMM D, YYYY")}
            </Typography>
            <Box
              sx={{
                position: "relative",
                mb: 4,
                mt: 2,
                borderRadius: 0,
                border: "none",
                margin: '0px auto'
              }}
            >
              {post.images && post.images.length > 1 ? (
                <CarouselEmbla height={300} width={300} images={post.images} />
              ) : (
                <Image
                  src={`${C_BASE_API_URL}/${post.images[0]?.path?.replaceAll(
                    "public",
                    "storage"
                  )}`}
                  alt={`${C_BASE_API_URL}/${post.images[0]?.path?.replaceAll(
                    "public",
                    "storage"
                  )}`}
                  style={{ width: "auto", height: "auto" }}
                  width={300}
                  height={300}
                />
              )}
            </Box>
            <RichTextReadOnly content={post?.content} extensions={extensions} />
            <Stack direction={"row"} spacing={2} mt={4}>
              {post.url_video &&
                JSON.parse(post.url_video).length > 0 &&
                (JSON.parse(post.url_video) as string[]).map((url, i) => (
                  <Tooltip title={url} key={i}>
                    <Chip
                      icon={<LinkSharp />}
                      label={url}
                      clickable
                      color="primary"
                      component="a"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ maxWidth: 230 }}
                    />
                  </Tooltip>
                ))}
            </Stack>
            {post.videos && post.videos.length > 0 && (
              <>
                <Typography variant="h6" gutterBottom mt={2}>
                  Video
                </Typography>
                <Grid container spacing={2}>
                  {post.videos.map((video, i) => (
                    <Grid item xs={6} md={4} key={i}>
                      <video
                        width="100%"
                        controls
                        src={`${C_BASE_API_URL}/${video.path.replaceAll(
                          "public",
                          "storage"
                        )}`}
                      />
                    </Grid>
                  ))}
                </Grid>
              </>
            )}
          </div>
        ))}
      </Stack>
    </Grid>
  );
}
