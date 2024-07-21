"use client";

import {
  SimpleGrid,
  Grid,
  Card,
  Group,
  Image,
  Tooltip,
  Text,
  Title,
  Box,
  useMatches,
} from "@mantine/core";
import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";
import { motion } from "framer-motion";
import React from "react";
import HorizontalArticle from "./HorizontalArticle";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

function MainArticlePost({
  featuredPosts,
}: {
  featuredPosts: {
    title: string;
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    slug: string;
  }[];
}) {
  const router = useRouter();
  const lineClamp = useMatches({
    sm: "7",
    md: "5",
    lg: "4",
  });
  return (
    <>
      <SimpleGrid mt={"md"} cols={{ base: 1, sm: 2 }} spacing="md">
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Card
            p={0}
            h={580}
            bg={"none"}
            onClick={() => {
              sendGTMEvent({
                event: "article-detail",
                value: `/article/${featuredPosts[0].slug}`,
              });
              sendGAEvent({
                event: "article-detail",
                value: `/article/${featuredPosts[0].slug}`,
              });
              return router.push(`/article/${featuredPosts[0].slug}`);
            }}
            style={{ cursor: "pointer" }}
            visibleFrom="sm"
          >
            <Card.Section mb={"sm"}>
              <Image
                src={featuredPosts[0].image}
                width={"100%"}
                height={280}
                alt={featuredPosts[0].imageLabel}
              />
            </Card.Section>
            <div
              style={{ marginLeft: 14, position: "relative", height: "100%" }}
            >
              <Tooltip
                multiline
                w={250}
                label={<Text>{featuredPosts[0].title}</Text>}
              >
                <Title
                  order={4}
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "1",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {featuredPosts[0].title}
                </Title>
              </Tooltip>
              <Text c={"dimmed"}>
                {dayjs(featuredPosts[0].date).format("MMMM D, YYYY")}
              </Text>
              <Text
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: lineClamp,
                  WebkitBoxOrient: "vertical",
                }}
                component={"div"}
                dangerouslySetInnerHTML={{
                  __html: featuredPosts[0].description,
                }}
              ></Text>
              <Text pos={"absolute"} left={0} bottom={0} c="primary">
                Continue reading...
              </Text>
            </div>
          </Card>
        </motion.div>

        <Box hiddenFrom="sm">
          <HorizontalArticle post={featuredPosts[0]} />
        </Box>
        <Grid gutter="md">
          {featuredPosts.slice(1).map((post, index) => (
            <Grid.Col span={{ xs: 12, md: 12 }} key={index}>
              <HorizontalArticle post={post} />
            </Grid.Col>
          ))}
        </Grid>
      </SimpleGrid>
    </>
  );
}

export default MainArticlePost;
