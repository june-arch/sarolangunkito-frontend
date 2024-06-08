import * as React from "react";
import Container from "@mui/material/Container";
import post1 from '@/components/blog-post.1.md';
import post2 from '@/components/blog-post.2.md';
import post3 from '@/components/blog-post.3.md';
import FeaturedPost from "@/components/FeaturedPost";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainFeaturedPost from "@/components/MainFeaturedPost";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { S_BASE_API_URL } from "@/utils/env/env";
import { Banner } from "./type";

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const fetchBanner = async () => {
  try {
    const res = await fetch(`${S_BASE_API_URL}/banner`, { headers: { 'Accept': 'application/json' },  next: { revalidate:  60 } });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data: Banner = await res.json();
    return data;
  } catch (error) {
    return {
      name: 'Title of a longer featured blog post',
      deskripsi:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      images: [{ id: 1, banner_id: 1, path: 'https://source.unsplash.com/random?wallpapers', created_at: '2021-10-10', updated_at: '2021-10-10' }],
      imageText: 'main image description',
      linkText: 'Continue reading…',
    };
  }
};

export default async function Home() {
  const bannerMain = await fetchBanner();
  let mainFeaturedBanner = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    images: [{ id: 1, banner_id: 1, path: 'https://source.unsplash.com/random?wallpapers', created_at: '2021-10-10', updated_at: '2021-10-10' }],
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };

  if (bannerMain) {
    mainFeaturedBanner = {
      title: bannerMain.name,
      description: bannerMain.deskripsi,
      images: bannerMain.images,
      imageText: bannerMain.deskripsi,
      linkText: 'Continue reading…',
    };
  }

  return (
    <>
      <Container maxWidth="lg">
        <Header title="Sarolangunkito" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedBanner} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </>
  );
}
