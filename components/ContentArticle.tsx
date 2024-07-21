"use client";

import { Grid, Title, Box, Stack, Tooltip, Badge, Image, Text } from "@mantine/core";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa";
import { sidebar } from "../utils/data/sidebar";
import { C_BASE_API_URL } from "../utils/env/env";
import { CarouselEmbla } from "./CarouselEmbla";
import Sidebar from "./Sidebar";
import { Article } from "../utils/type";
import ClientOnlyViewTextEditor from "./ClientOnlyViewTextEditor";

function ContentArticle({ post }: { post: Article}) {
  return (
    <Grid mt={3}>
      <Grid.Col span={{ base: 12, md: 8 }} py={3}>
        <div>
          <Title order={2} fw={500} mt={'xl'}>
            {post.title}
          </Title>
          <Text mb={'lg'}>{dayjs(post.created_at).format("MMMM D, YYYY")}</Text>

          {post.images && post.images.length > 1 ? (
            <Box
              style={{
                position: "relative",
                marginBottom: 4,
                marginTop: 2,
                borderRadius: 0,
                border: "none",
                margin: "0px auto",
              }}
            >
              <CarouselEmbla height={300} width={300} images={post.images} />
            </Box>
          ) : (
            <Box
              style={{
                position: "relative",
                marginBottom: 4,
                marginTop: 2,
                borderRadius: 0,
                border: "none",
                justifyContent: "center",
              }}
              display="flex"
            >
              <Image
                src={`${C_BASE_API_URL}/${
                  post &&
                  post.images.length > 0 &&
                  post.images[0]?.path?.replaceAll("public", "storage")
                }`}
                alt={`${C_BASE_API_URL}/${
                  post &&
                  post.images.length > 0 &&
                  post.images[0]?.path?.replaceAll("public", "storage")
                }`}
                style={{ width: "auto", height: "auto" }}
                width={300}
                height={300}
              />
            </Box>
          )}

          <ClientOnlyViewTextEditor post={post} />
          <Stack mt={4}>
            {post.url_video &&
              JSON.parse(post.url_video).length > 0 &&
              (JSON.parse(post.url_video) as string[]).map((url, i) => (
                <Tooltip label={url} key={i}>
                  <Link href={url} target="_blank">
                    <Badge color="primary" style={{ maxWidth: 230 }}>
                      <FaLink /> {url}
                    </Badge>
                  </Link>
                </Tooltip>
              ))}
          </Stack>
          {post.videos && post.videos.length > 0 && (
            <>
              <Text size="lg" fw={400} mt={2}>
                Video
              </Text>
              <Grid>
                {post.videos.map((video, i) => (
                  <Grid.Col span={{ xs: 6, md: 4 }} key={i}>
                    <video
                      width="100%"
                      controls
                      src={`${C_BASE_API_URL}/${video.path.replaceAll(
                        "public",
                        "storage"
                      )}`}
                    />
                  </Grid.Col>
                ))}
              </Grid>
            </>
          )}
        </div>
      </Grid.Col>

      <Sidebar
        title={sidebar.title}
        description={sidebar.description}
        archives={sidebar.archives}
        social={sidebar.social}
        images={sidebar.images}
      />
    </Grid>
  );
}

export default ContentArticle;
