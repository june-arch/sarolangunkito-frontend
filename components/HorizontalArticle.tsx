"use client";

import * as React from "react";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { sendGTMEvent } from "@next/third-parties/google";
import { sendGAEvent } from "@next/third-parties/google";
import {
  Box,
  Card,
  Grid,
  Group,
  Image,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { useRouter } from "next/navigation";

interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
    slug: string;
  };
}

export default function HorizontalArticle(props: FeaturedPostProps) {
  const { post } = props;
  const router = useRouter();
  return (
    <motion.div whileHover={{ scale: 1.05, boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }} whileTap={{ scale: 0.9 }}>
      <Card
        display={"flex"}
        p={0}
        h={{ base: 90, sm: 140 }}
        bg={"none"}
        onClick={() => {
          sendGTMEvent({
            event: "article-detail",
            value: `/article/${post.slug}`,
          });
          sendGAEvent({
            event: "article-detail",
            value: `/article/${post.slug}`,
          });
          return router.push(`/article/${post.slug}`);
        }}
        style={{ cursor: "pointer" }}
      >
        <Group wrap="nowrap" gap={0}>
          <Box h={{ base: 90, sm: 140 }} w={{ base: 100, sm: 300 }}>
            <Image
              src={post.image}
              h={{ base: 90, sm: 140 }}
              w={{ base: 100, sm: 300 }}
              alt={post.imageLabel}
            />
          </Box>
          <div style={{ marginLeft: 14 }}>
            <Tooltip multiline w={220} label={<Text>{post.title}</Text>}>
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
                {post.title}
              </Title>
            </Tooltip>
            <Text c={"dimmed"}>{dayjs(post.date).format("MMMM D, YYYY")}</Text>
            <Text
              mt={-10}
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}
              component={"div"}
              dangerouslySetInnerHTML={{ __html: post.description }}
              visibleFrom="sm"
            ></Text>
            <Text c="primary">Continue reading...</Text>
          </div>
        </Group>
      </Card>
    </motion.div>
  );
}
