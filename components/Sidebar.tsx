"use client";

import { Grid, Group, Paper, Stack, Text, ThemeIcon } from "@mantine/core";
import Link from "next/link";
import * as React from "react";

interface SidebarProps {
  archives: ReadonlyArray<{
    url: string;
    title: string;
  }>;
  description: string;
  social: ReadonlyArray<{
    icon: React.JSX.Element;
    name: string;
    url: string;
  }>;
  title: string;
  images: React.JSX.Element[];
}

export default function Sidebar(props: SidebarProps) {
  const { archives, description, social, title, images } = props;

  return (
    <Grid.Col span={{ base: 12, md: 4 }} mb={2}>
      <Paper p={'sm'} bg={"#E4E6ED"} mt={'xl'}>
        <Text size="lg" fw={500}>{title}</Text>
        <Text fz={14}>{description}</Text>
      </Paper>
      {/* <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))} */}
      <Text size="lg" fw={500} mt={3}>
        Social
      </Text>
      {social.map((network) => (
        <Link
          href="#"
          key={network.name}
          style={{ marginBottom: 0.5, textDecoration: "none" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="transparent" size={24}>
              {network.icon}
            </ThemeIcon>
            <Text ml={-2} c={"blue"}>
              {network.name}
            </Text>
          </div>
        </Link>
      ))}
      <Stack mt={3} gap={3}>
        {images.map((image, index) => (
          <React.Fragment key={index}>{image}</React.Fragment>
        ))}
      </Stack>
    </Grid.Col>
  );
}
