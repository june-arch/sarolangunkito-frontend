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
        <meta name="title" content="Sarolangunkito - Sumber Berita Sarolangun Anda" />
        <meta name="description" content="Tetap terupdate dengan berita dan pembaruan terbaru dari Sarolangun. Dapatkan yang terbaru tentang pemilihan Sarolangun 2024, berita lokal, dan lainnya." />
        <meta name="keywords" content="Sarolangunkito, Sarolangun news, berita Sarolangun, Tontawi Jauhari, Sarolangun 2024, Bupati Sarolangun, TJ, Akurat, Sarolangun, Kepala Daerah Sarolangun, cabup Sarolangun, cakada, sarolangun" />
        <meta name="author" content="M. Juniko Dwi Putra" />
        <link rel="shortcut icon" href="/favicon.ico" />
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
        <title>Sarolangunkito - Berita & Pembaruan Terbaru Sarolangun</title>

        {/* <!-- Open Graph Meta Tags --> */}
        <meta property="og:title" content="Sarolangunkito - Sumber Berita Sarolangun Anda" />
        <meta property="og:description" content="Tetap terupdate dengan berita dan pembaruan terbaru dari Sarolangun. Dapatkan yang terbaru tentang pemilihan Sarolangun 2024, berita lokal, dan lainnya." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sarolangunkito.com" />
        <meta property="og:image" content="/tj.png" />
        <meta property="og:site_name" content="Sarolangunkito" />
        <meta property="og:locale" content="id_ID" />

        {/* <!-- Social Media Profile Links --> */}
        <meta property="og:see_also" content="https://www.instagram.com/tontawi_jauhari01/" />
        <meta property="og:see_also" content="https://www.facebook.com/profile.php?id=100007723877438" />
        <meta property="og:see_also" content="https://www.tiktok.com/@tontawijauhari" />
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
