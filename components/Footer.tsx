"use client";

import * as React from "react";
import Logo from "./Logo";
import {
  Box,
  Container,
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import Link from "next/link";
import { MAX_WIDTH } from "../utils/data/constant";
import { akurat } from "../utils/data/sections";

function Copyright() {
  return (
    <Text ta={"center"}>
      {"Copyright © "}
      <Link color="inherit" href="https://sarolangunkito.com/">
        sarolangunkito.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Text>
  );
}

interface FooterProps {
  description: string;
  title: string;
  social: ReadonlyArray<{
    icon: React.JSX.Element;
    name: string;
    url: string;
  }>;
}

export default function Footer(props: FooterProps) {
  const { description, title, social } = props;

  return (
    <Box component="footer" bg={"#fdef00"} mt={"xl"}>
      <Container size={MAX_WIDTH}>
        <Grid>
          <Grid.Col span={{ xs: 12, md: 6 }} maw={400} p={"xs"} bg={"blue"}>
            <Logo shadow="none" />
            <Divider />
            <Stack ml={3} my={2} gap={2}>
              {akurat.map((item, index) => (
                <Text ta={"center"} fz={14} fw={500} c={"white"} key={index}>
                  {item}
                </Text>
              ))}
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 6 }} mt={"xl"}>
            <Box ml={2}>
              <Title order={2} tt={"uppercase"}>
                {title}
              </Title>
              <Text fz={14}>
                Sarolangun Kembang, Kec. Sarolangun, Kabupaten Sarolangun, Jambi
                37481
              </Text>
              <Text fz={14}>No Telp: 0852-6543-2109</Text>
              <Text fz={14}>Email: sarolangunkito@gmail.com</Text>
            </Box>
            <Box ml={2}>
              <Title order={2} mb={1} tt={"uppercase"}>
                Following Us On:
              </Title>
              <Group gap={4}>
                {social.map((network, index) => (
                  <Link
                    href="#"
                    key={index}
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
              </Group>
            </Box>
          </Grid.Col>
        </Grid>
        <Divider mt={7} size={1} />
        <Container size={MAX_WIDTH} py={"sm"}>
          <Text component="p" ta={"center"}>
            {description}
          </Text>
          <Copyright />
        </Container>
      </Container>
    </Box>
  );
}
