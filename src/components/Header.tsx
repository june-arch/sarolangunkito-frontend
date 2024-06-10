"use client";

import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LiveDateTime from "./LiveDateTime";
import dayjs from "dayjs";
import "dayjs/locale/id";
import { Box, Container, Divider, useMediaQuery } from "@mui/material";
import Logo from "./Logo";
import theme from "@/theme";

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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Toolbar sx={{ padding: "0px !important" }}>
          {/* <Button size="small">Subscribe</Button> */}

          <Typography variant="subtitle2" color="inherit" noWrap>
            {dayjs().format("dddd, DD MMMM YYYY")}
          </Typography>
          <Typography
            component="a"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
            ml={-9}
            href="/"
            style={{ textDecoration: "none" }}
          >
            {!isMobile && title}
          </Typography>
          <LiveDateTime />
          {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
          {/* <Button variant="outlined" size="small">
          Sign up
        </Button> */}
        </Toolbar>
      </Container>
      <Divider />
      <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
        <Logo />
      </Box>
      <section style={{ backgroundColor: "yellowgreen" }}>
        <Container maxWidth="lg">
          <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: "space-between", overflowX: "auto" }}
          >
            {sections.map((section) => (
              <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={"#"}
                sx={{ p: 1, flexShrink: 0 }}
              >
                {section.title}
              </Link>
            ))}
          </Toolbar>
        </Container>
      </section>
    </React.Fragment>
  );
}
