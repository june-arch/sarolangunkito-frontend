"use client";

import Link from "next/link";
import Image from "next/image";
import { Divider, Group, Paper } from "@mantine/core";

const Logo = ({shadow}: {shadow: string}) => {
  return (
    <Paper
      shadow={shadow}
      p="md"
      radius={"md"}
      bg={"blue"}
      my={10}
      component={Link}
      href={"/"}
    >
      <Group justify="center" align="center" gap={"sm"}>
        <Image
          src="/thr.png"
          alt="logo-thr"
          height={70}
          width={110}
          style={{ objectFit: "contain" }}
          priority
        />
        <Divider orientation="vertical" />
        <Image
          src="/tj.png"
          alt="logo-tj"
          height={70}
          width={50}
          style={{ objectFit: "contain" }}
          priority
        />
        <Divider orientation="vertical" />
        <Image
          src="/sarolangunkito.png"
          alt="logo-sarolnagunkito"
          height={70}
          width={110}
          style={{ objectFit: "contain" }}
          priority
        />
      </Group>
    </Paper>
  );
};

export default Logo;
