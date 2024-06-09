import * as React from "react";
import Container from "@mui/material/Container";
import FeaturedPost from "@/components/FeaturedPost";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainFeaturedPost from "@/components/MainFeaturedPost";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import Grid from "@mui/material/Grid";
import Instagram from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { S_BASE_API_URL } from "@/utils/env/env";
import { Article, Banner, PaginatedResponse } from "./type";
import Image from "next/image";
import TikTokIcon from "@/components/TiktokIcon";

export const sections = [
  { title: "Aspiratif", url: "#" },
  { title: "Kreatif", url: "#" },
  { title: "Unggul", url: "#" },
  { title: "Amanah", url: "#" },
  { title: "Transparan", url: "#" },
  { title: "TJ", url: "#" },
  { title: "AKURAT", url: "#" },
  { title: "2024", url: "#" },
  { title: "Bupati", url: "#" },
  { title: "Sarolangun", url: "#" },
];

export const sidebar = {
  title: "About",
  description:
    "Website ini didedikasikan untuk mendukung dan mempromosikan calon Bupati Kabupaten Sarolangun, menyediakan informasi terkini tentang visi, misi, dan program kerja yang ditawarkan untuk kemajuan daerah. Pengunjung dapat menemukan artikel mendalam, berita terbaru, serta jadwal kegiatan kampanye yang dirancang untuk memenangkan hati dan dukungan masyarakat. Dengan komitmen kuat terhadap transparansi dan keterlibatan publik, website ini juga berfungsi sebagai platform interaktif di mana warga dapat berpartisipasi melalui diskusi, memberikan masukan, dan mengetahui lebih lanjut tentang calon pemimpin mereka.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/tontawi_jauhari01/" },
    { name: "X", icon: XIcon, url: "#"},
    { name: "Facebook", icon: FacebookIcon, url: "https://www.facebook.com/profile.php?id=100007723877438" },
    { name: "Tiktok", icon: TikTokIcon, url: "https://www.tiktok.com/@tontawijauhari" }
  ],
  images: [
    <Image
      src={"/sidebar-1.jpeg"}
      alt="image"
      width={300}
      height={300}
      style={{ width: "100%", height: "auto" }}
    />,
    <Image
      src={"/sidebar-2.jpg"}
      alt="image"
      width={300}
      height={300}
      style={{ width: "100%", height: "auto" }}
    />,
    <Image
      src={"/sidebar-3.jpg"}
      alt="image"
      width={300}
      height={300}
      style={{ width: "100%", height: "auto" }}
    />,
    <Image 
      src={"/sidebar-4.jpg"}
      alt="image"
      width={300}
      height={300}
      style={{ width: "100%", height: "auto" }}
    />,
  ],
};

const fetchBanner = async () => {
  try {
    const res = await fetch(`${S_BASE_API_URL}/banner`, {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const data: Banner = await res.json();
    return data;
  } catch (error) {
    return {
      name: "Title of a longer featured blog post",
      deskripsi:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      images: [
        {
          id: 1,
          banner_id: 1,
          path: "https://source.unsplash.com/random?wallpapers",
          created_at: "2021-10-10",
          updated_at: "2021-10-10",
        },
      ],
      imageText: "main image description",
      linkText: "Continue reading…",
    };
  }
};

const fetchArticleCard = async () => {
  try {
    const res = await fetch(`${S_BASE_API_URL}/article_card`, {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const data: Article[] = await res.json();
    return data;
  } catch (error) {
    const data: Article[] = [
      {
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
        images: [
          {
            id: 41,
            article_id: 25,
            path: "public/images/1fb898f5-cd23-4d52-9d28-e21a1e38bd60_7.jpg",
            created_at: "2024-06-08T02:21:19.000000Z",
            updated_at: "2024-06-08T02:21:19.000000Z",
          },
        ],
        videos: [
          {
            id: 3,
            article_id: 25,
            path: "public/videos/50f9fa66-9453-4746-a0fa-bbbf356c75f1_7.mp4",
            created_at: "2024-06-08T02:21:19.000000Z",
            updated_at: "2024-06-08T02:21:19.000000Z",
          },
        ],
      },
    ];
    return data;
  }
};

const fetchArticle = async () => {
  try {
    const res = await fetch(`${S_BASE_API_URL}/article`, {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const data: PaginatedResponse<Article> = await res.json();
    return data;
  } catch (error) {
    return {
      current_page: 1,
      data: [
        {
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
          images: [
            {
              id: 41,
              article_id: 25,
              path: "public/images/1fb898f5-cd23-4d52-9d28-e21a1e38bd60_7.jpg",
              created_at: "2024-06-08T02:21:19.000000Z",
              updated_at: "2024-06-08T02:21:19.000000Z",
            },
          ],
          videos: [
            {
              id: 3,
              article_id: 25,
              path: "public/videos/50f9fa66-9453-4746-a0fa-bbbf356c75f1_7.mp4",
              created_at: "2024-06-08T02:21:19.000000Z",
              updated_at: "2024-06-08T02:21:19.000000Z",
            },
          ],
        },
      ],
      first_page_url: "http://localhost:8000/article?page=1",
      from: 1,
      last_page: 2,
      last_page_url: "http://localhost:8000/article?page=2",
      links: [
        {
          url: null,
          label: "&laquo; Previous",
          active: false,
        },
        {
          url: "http://localhost:8000/article?page=1",
          label: "1",
          active: true,
        },
        {
          url: "http://localhost:8000/article?page=2",
          label: "2",
          active: false,
        },
        {
          url: "http://localhost:8000/article?page=2",
          label: "Next &raquo;",
          active: false,
        },
      ],
      next_page_url: "http://localhost:8000/article?page=2",
      path: "http://localhost:8000/article",
      per_page: 3,
      prev_page_url: null,
      to: 3,
      total: 5,
    };
  }
};

export default async function Home() {
  const bannerMain = await fetchBanner();
  const articleCard = await fetchArticleCard();
  const article = await fetchArticle();

  let mainFeaturedBanner = {
    title: "Title of a longer featured blog post",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    images: [
      {
        id: 1,
        banner_id: 1,
        path: "https://source.unsplash.com/random?wallpapers",
        created_at: "2021-10-10",
        updated_at: "2021-10-10",
      },
    ],
    imageText: "main image description",
    linkText: "Continue reading…",
  };

  if (bannerMain) {
    mainFeaturedBanner = {
      title: bannerMain.name,
      description: bannerMain.deskripsi,
      images: bannerMain.images,
      imageText: bannerMain.deskripsi,
      linkText: "Continue reading…",
    };
  }

  let featuredPosts = [
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random?wallpapers",
      imageLabel: "Image Text",
      slug: "featured-post",
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random?wallpapers",
      imageLabel: "Image Text",
      slug: "post-title",
    },
  ];

  if (articleCard) {
    featuredPosts = articleCard.map((article) => {
      return {
        title: article.title,
        date: article.created_at,
        description: article.content,
        image: `${S_BASE_API_URL}/${article.images[0].path.replaceAll(
          "public",
          "storage"
        )}`,
        imageLabel: `${S_BASE_API_URL}/${article.images[0].path.replaceAll(
          "public",
          "storage"
        )}`,
        slug: article.slug,
      };
    });
  }

  return (
    <>
      <Header title="sarolangunkito" sections={sections} />
      <main>
        <section style={{ backgroundColor: "#fdef00", padding: 20 }}>
          <Container maxWidth="lg">
            <MainFeaturedPost post={mainFeaturedBanner} />
            <Grid container spacing={4}>
              {featuredPosts.map((post, index) => (
                <FeaturedPost key={index} post={post} />
              ))}
            </Grid>
          </Container>
        </section>
        <Container maxWidth="lg">
          <Grid container spacing={5} sx={{ mt: 3, mb: 2 }}>
            <Main title="Artikel Terbaru" posts={article} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
              images={sidebar.images}
            />
          </Grid>
        </Container>
      </main>
      <Footer title="Alamat :" social={sidebar.social} description="sarolangunkito" />
    </>
  );
}
