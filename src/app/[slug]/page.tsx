import { C_BASE_API_URL, S_BASE_API_URL } from "@/utils/env/env";
import React from "react";
import { Article } from "../type";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {
  Box,
  Chip,
  Container,
  Grid,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { sections, sidebar } from "../page";
import { CarouselEmbla } from "@/components/CarouselEmbla";
import { LinkSharp } from "@mui/icons-material";
import dayjs from "dayjs";
import Image from "next/image";
import ClientOnlyViewTextEditor from "@/components/ClientOnlyViewTextEditor";

async function getDetails(slug: string) {
  try {
    const response = await fetch(`${C_BASE_API_URL}/article/${slug}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data: Article = await response.json();
    return data;
  } catch (e) {
    return {
      id: 25,
      user_id: 7,
      title: "Calon Bupati Kabupaten Sarolangun",
      content:
        '<p style="text-align: center">Balon beli di kota gurun</p><p style="text-align: center">Teronton jalan di tebo</p><p style="text-align: center">Calon bupati Sarolangun</p><p style="text-align: center">Bg iton pilihan kito</p><p style="text-align: center">Mari Kito bersatu</p><p style="text-align: center">Kito kompak selalu</p><p style="text-align: center">Sarolangun pasti maju</p><p style="text-align: center">Beli galon di pasar Jum\'at</p><p style="text-align: center">Menurun jalan ke jangkat</p><p style="text-align: center">Bg iton program nyo tepat</p><p style="text-align: center">Sarolangun Kito akurat</p><p style="text-align: center">Aspiratif kreatif</p><p style="text-align: center">Unggul, religius</p><p style="text-align: center">Amanah transparan</p><p style="text-align: center">Orangnyo Baek nian</p>',
      status: "1",
      slug: "calon-bupati-kabupaten-sarolangun",
      created_at: "2024-06-08T02:17:37.000000Z",
      updated_at: "2024-06-08T02:17:37.000000Z",
      url_video:
        '["https://www.tiktok.com/@tontawijauhari","https://www.instagram.com/tontawi_jauhari01/","https://www.facebook.com/profile.php?id=100007723877438"]',
      images: [],
      videos: [],
    };
  }
}

async function Detail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getDetails(slug);

  return (
    <>
      <Container maxWidth="lg">
        <Header title="Sarolangunkito" sections={sections} />
        <main>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                "& .markdown": {
                  py: 3,
                },
              }}
            >
              <div>
                <Typography variant="h4" gutterBottom>
                  {post.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  gutterBottom
                >
                  {dayjs(post.created_at).format("MMMM D, YYYY")}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 4,
                  }}
                >
                  {post.images && post.images.length > 1 ? (
                    <CarouselEmbla
                      height={300}
                      width={300}
                      images={post.images}
                    />
                  ) : (
                    <Image
                      src={`${C_BASE_API_URL}/${
                        post &&
                        post.images.length > 0 &&
                        post.images[0]?.path?.replaceAll("public", "storage")
                      }`}
                      alt={`${C_BASE_API_URL}/${
                        post &&
                        post.images.length > 0 &&
                        post.images[0]?.path?.replaceAll("public", "storage")
                      }`}
                      width={300}
                      height={300}
                    />
                  )}
                </Box>
                <ClientOnlyViewTextEditor post={post} />
                <Stack direction={"row"} spacing={2} mt={4}>
                  {post.url_video &&
                    JSON.parse(post.url_video).length > 0 &&
                    (JSON.parse(post.url_video) as string[]).map((url, i) => (
                      <Tooltip title={url}>
                        <Chip
                          key={i}
                          icon={<LinkSharp />}
                          label={url}
                          clickable
                          color="primary"
                          component="a"
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ maxWidth: 230 }}
                        />
                      </Tooltip>
                    ))}
                </Stack>
                {post.videos && post.videos.length > 0 && (
                  <>
                    <Typography variant="h6" gutterBottom mt={2}>
                      Video
                    </Typography>
                    <Grid container spacing={2}>
                      {post.videos.map((video, i) => (
                        <Grid item xs={6} md={4} key={i}>
                          <video
                            width="100%"
                            controls
                            src={`${C_BASE_API_URL}/${video.path.replaceAll(
                              "public",
                              "storage"
                            )}`}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </>
                )}
              </div>
            </Grid>

            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
              images={sidebar.images}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Contact Us" description="sarolangunkito" />
    </>
  );
}

export default Detail;
