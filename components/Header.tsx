"use client";

import * as React from "react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import LiveDateTime from "./LiveDateTime";
import {
  Box,
  Container,
  Divider,
  Group,
  ScrollArea,
  Text,
} from "@mantine/core";
import Logo from "./Logo";
import Link from "next/link";
import { MAX_WIDTH } from "../utils/data/constant";

dayjs.locale("id");

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Container size={MAX_WIDTH}>
        <Group justify="space-between" gap={0} h={50}>
          <Text
            component="a"
            size="xl"
            fw={500}
            href="/"
            style={{ textDecoration: "none" }}
          >
            {title}
          </Text>
          <Group gap={"xs"}>
            <Text size="sm" fw={500}>
              {dayjs().format("dddd, DD MMMM YYYY")}
            </Text>
            <LiveDateTime />
          </Group>
        </Group>
      </Container>
      <Divider />
      <Group justify="center" mb={2}>
        <Logo shadow="xs" />
      </Group>
      <section style={{ backgroundColor: "yellowgreen" }}>
        <Container size={MAX_WIDTH}>
          <ScrollArea py={4}>
            <Box
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              {sections.map((section) => (
                <Link
                  key={section.title}
                  href={"#"}
                  style={{
                    padding: 1,
                    flexShrink: 0,
                    color: "black",
                    fontSize: 14,
                  }}
                >
                  {section.title}
                </Link>
              ))}
            </Box>
          </ScrollArea>
        </Container>
      </section>
    </React.Fragment>
  );
}
