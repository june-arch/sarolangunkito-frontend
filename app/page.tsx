import { Container, Grid, SimpleGrid } from "@mantine/core";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { fetchArticle, fetchArticleCard } from "../server-actions/article";
import { fetchBanner } from "../server-actions/banner";
import { sections } from "../utils/data/sections";
import { sidebar } from "../utils/data/sidebar";
import { S_BASE_API_URL } from "../utils/env/env";
import { MAX_WIDTH } from "../utils/data/constant";
import MainFeaturedPost from "../components/MainFeaturedPost";
import HorizontalArticle from "../components/HorizontalArticle";
import MainArticlePost from "../components/MainArticlePost";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

export default async function HomePage() {
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
        <section style={{ backgroundColor: "#fdef00", paddingTop: 20, paddingBottom: 20 }}>
          <Container size={MAX_WIDTH}>
            <MainFeaturedPost post={mainFeaturedBanner} />
            <MainArticlePost featuredPosts={featuredPosts} />
          </Container>
        </section>
        <Container size={MAX_WIDTH}>
          <Grid mt={3} mb={4}>
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
      <Footer
        title="Alamat :"
        social={sidebar.social}
        description="sarolangunkito"
      />
    </>
  );
}
