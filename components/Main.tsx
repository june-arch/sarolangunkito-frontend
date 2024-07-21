"use client";

import * as React from "react";
import { Article, PaginatedResponse } from "../utils/type";
import { Divider, Grid, Pagination, Stack, Title } from "@mantine/core";
import HorizontalArticle from "./HorizontalArticle";
import { C_BASE_API_URL, S_BASE_API_URL } from "../utils/env/env";

interface MainProps {
  posts: PaginatedResponse<Article>;
  title: string;
}

function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

export default function Main(props: MainProps) {
  const { posts, title } = props;

  const postsPerPage = 15; // Adjust the number of posts per page

  const data = chunk(posts.data, postsPerPage);
  const [activePage, setPage] = React.useState(1);

  const items = data[activePage - 1].map((article) => (
    <HorizontalArticle
      post={{
        title: article.title,
        date: article.created_at,
        description: article.content,
        image: `${C_BASE_API_URL}/${article.images[0].path.replaceAll(
          "public",
          "storage"
        )}`,
        imageLabel: `${C_BASE_API_URL}/${article.images[0].path.replaceAll(
          "public",
          "storage"
        )}`,
        slug: article.slug,
      }}
      key={article.id}
    />
  ));
  return (
    <Grid.Col span={{ base: 12, md: 8 }} py={3}>
      <Title order={3} mt={"xl"}>
        {title}
      </Title>
      <Divider />
      <Stack gap={10} mt={"xl"}>
        {items}
      </Stack>
      <Pagination
        total={data.length}
        value={activePage}
        onChange={setPage}
        mt="sm"
      />
    </Grid.Col>
  );
}
