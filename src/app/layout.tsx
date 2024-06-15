import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import theme from "@/theme";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="title"
          content="Sarolangunkito - Sumber Berita Sarolangun Anda"
        />
        <meta
          name="description"
          content="Tetap terupdate dengan berita dan pembaruan terbaru dari Sarolangun. Dapatkan yang terbaru tentang pemilihan Sarolangun 2024, berita lokal, dan lainnya."
        />
        <meta
          name="keywords"
          content="Sarolangunkito, Sarolangun news, berita Sarolangun, Tontawi Jauhari, Sarolangun 2024, Bupati Sarolangun, TJ, Akurat, Sarolangun, Kepala Daerah Sarolangun, cabup Sarolangun, cakada, sarolangun"
        />
        <meta name="author" content="M. Juniko Dwi Putra" />
        <link rel="shortcut icon" href="/favicon.ico" sizes="16x16" />
        <link rel="canonical" href="https://www.sarolangunkito.com" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://www.tontawi-jauhari.sarolangunkito.com" rel="dns-prefetch" />
        <meta name="google" content="notranslate" />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="id_ID" />
        <meta name="googlebot" content="index,follow" />
        <meta name="geo.country" content="id" />
        <meta name="language" content="Id-ID" />
        <meta name="distribution" content="global" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="publisher" content="Sarolangunkito" />
        <title>Sarolangunkito - Berita & Pembaruan Terbaru Sarolangun</title>

        {/* <!-- Open Graph Meta Tags --> */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:locale:alternate" content="en_ID" />
        <meta
          property="og:title"
          content="Sarolangunkito - Sumber Berita Sarolangun Anda"
        />
        <meta
          property="og:description"
          content="Tetap terupdate dengan berita dan pembaruan terbaru dari Sarolangun. Dapatkan yang terbaru tentang pemilihan Sarolangun 2024, berita lokal, dan lainnya."
        />
        <meta property="og:url" content="https://www.sarolangunkito.com" />
        <meta property="og:site_name" content="Sarolangunkito" />
        <meta property="og:image" content="/tj.png" />
        <meta property="og:image:alt" content="Sarolangunkito Logo" />

        {/* <!-- Social Media Profile Links --> */}
        <meta
          property="og:see_also"
          content="https://www.instagram.com/tontawi_jauhari01/"
        />
        <meta
          property="og:see_also"
          content="https://www.facebook.com/profile.php?id=100007723877438"
        />
        <meta
          property="og:see_also"
          content="https://www.tiktok.com/@tontawijauhari"
        />

        {/* <!-- Instagram Meta Tags --> */}
        <meta name="instagram:card" content="summary_large_image" />
        <meta name="instagram:site" content="@tontawi_jauhari01" />
        <meta name="instagram:creator" content="@tontawi_jauhari01" />
        <meta name="instagram:domain" content="sarolangunkito.com" />
        <meta
          name="instagram:title"
          content="Sarolangunkito - TJ 2024-2029, #AKURAT, Tontawi Jauhari, S.E, M.Pd"
        />
        <meta
          name="instagram:description"
          content="Tetap terupdate dengan berita dan pembaruan terbaru dari Sarolangun. Dapatkan yang terbaru tentang pemilihan Bupati Sarolangun 2024-2029 dengan calon Tontawi Jauhari, S.E, M.Pd, berita lokal, dan lainnya."
        />

        <meta
          name="instagram:image"
          content="https://instagram.fplm4-1.fna.fbcdn.net/v/t51.2885-19/381415824_1005140434035036_2769222462836051405_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fplm4-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=-82_wWzknrcQ7kNvgE7mwfi&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AYALcBzkwP9NhQA_Ka-J0VRlBqezk-aT1zxsr7lr24HFZg&oe=66736F60&_nc_sid=ee9879"
        />

        {/* <!-- Heylink Meta Tags --> */}
        <meta name="heylink.me:site" content="sarolangunkito.com" />
        <meta name="heylink.me:creator" content="Sarolangunkito" />
        <meta name="heylinkme:domain" content="sarolangunkito.com" />
      </head>
      <GoogleTagManager gtmId="GTM-WLRZ395S" />
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
      <GoogleAnalytics gaId="G-R1JF6SXF7F" />
    </html>
  );
}
