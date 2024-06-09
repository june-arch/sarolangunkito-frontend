"use client";

import Link from "next/link";
import { Divider, Stack, styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <Stack
      direction="row"
      bgcolor="primary.main"
      justifyContent="center"
      alignItems="center"
      padding={2}
      spacing={2}
      borderRadius="15px"
      divider={<Divider orientation="vertical" flexItem sx={{backgroundColor: 'white'}} />}
      mt={2}
    >
      <LinkStyled
        href="/"
        style={{ position: "relative", height: 70, width: 50 }}
        color="primary"
      >
        <Image
          src="/tj.png"
          alt="logo-tj"
          height={70}
          width={50}
          style={{ objectFit: "contain" }}
          priority
        />
      </LinkStyled>
      <LinkStyled
        href="/"
        style={{ position: "relative", height: 70, width: 120 }}
      >
        <Image
          src="/sarolangunkito.png"
          alt="logo-sarolnagunkito"
          height={70}
          width={110}
          style={{ objectFit: "contain" }}
          priority
        />
      </LinkStyled>
    </Stack>
  );
};

export default Logo;
