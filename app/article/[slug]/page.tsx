import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { C_BASE_API_URL, S_BASE_API_URL } from "../../../utils/env/env";
import { Article, PaginatedResponse } from "../../../utils/type";
import Header from "../../../components/Header";
import { sections } from "../../../utils/data/sections";
import { Container } from "@mantine/core";
import { MAX_WIDTH } from "../../../utils/data/constant";
import { sidebar } from "../../../utils/data/sidebar";
import Footer from "../../../components/Footer";
import ContentArticle from "../../../components/ContentArticle";

async function getDetails(slug: string) {
  try {
    const response = await fetch(`${S_BASE_API_URL}/article/${slug}`);
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

export type Props = {
  params: { slug: string };
  searchParams: URLSearchParams;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  const post = await getDetails(slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const image =
    post.images.length > 0
      ? `${S_BASE_API_URL}/${post.images[0].path.replaceAll(
          "public",
          "storage"
        )}`
      : "/favicon.ico";

  return {
    title: post.title,
    description: post.slug,
    openGraph: {
      title: post.title,
      description: post.slug,
      url: `https://www.sarolangunkito.com/${slug}`,
      type: "article",
      images: [
        {
          url: image,
          width: 800, // Set appropriate width
          height: 600, // Set appropriate height
          alt: post.title,
        },
        ...previousImages,
      ],
    },
  };
}

export async function generateStaticParams() {
  // Fetch the list of articles or slugs from your API
  const response = await fetch(`${S_BASE_API_URL}/article?limit=9999`, {
    headers: { Accept: "application/json" },
    next: { revalidate: 60 },
  });
  const articles: PaginatedResponse<Article> = await response.json();

  return articles.data.map((article) => ({
    slug: article.slug,
  }));
}

async function Detail({ params }: Props) {
  const { slug } = params;
  const post = await getDetails(slug);

  return (
    <>
      <Header title="Sarolangunkito" sections={sections} />
      <Container size={MAX_WIDTH}>
        <main>
          <ContentArticle post={post} />
        </main>
      </Container>
      <Footer
        title="Alamat :"
        social={sidebar.social}
        description="sarolangunkito"
      />
    </>
  );
}

export default Detail;
