import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Divider, Grid, Stack } from "@mui/material";
import Logo from "./Logo";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://sarolangunkito.com/">
        sarolangunkito.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  title: string;
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
    url: string;
  }>;
}

export default function Footer(props: FooterProps) {
  const { description, title, social } = props;

  return (
    <Box component="footer" sx={{ bgcolor: "#fdef00" }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={3} bgcolor="primary.main">
            <Logo />
            <Divider sx={{ backgroundColor: "white", mx: 3 }} />
            <Stack direction={"column"} ml={3} my={2}>
              {["Aspiratif", "Kreatif", "Unggul", "Amanah", "Transparan"].map(
                (item, index) => (
                  <>
                    <Typography variant="subtitle2" color="white" key={index}>
                      {item}
                    </Typography>
                  </>
                )
              )}
            </Stack>
          </Grid>
          <Grid item xs={12} md={9} mt={6}>
            <Box ml={2}>
              <Typography variant="h6" gutterBottom textTransform={"uppercase"}>
                {title}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Sarolangun Kembang, Kec. Sarolangun, Kabupaten Sarolangun, Jambi
                37481
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                No Telp: 0852-6543-2109
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Email: sarolangunkito@gmail.com
              </Typography>
            </Box>
            <Box ml={2}>
              <Typography variant="h6" mb={1} textTransform={"uppercase"}>
                Following Us On:
              </Typography>
              <Stack direction={"row"} spacing={1}>
                {social.map((network) => (
                  <Link
                    display="block"
                    variant="body1"
                    href="#"
                    key={network.name}
                    sx={{ mb: 0.5 }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <div style={{ height: 24, width: 24 }}>
                        <network.icon />
                      </div>
                      <span>{network.name}</span>
                    </Stack>
                  </Link>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Divider />
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            {description}
          </Typography>
          <Copyright />
        </Container>
      </Container>
    </Box>
  );
}
