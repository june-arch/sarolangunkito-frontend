import { Image } from "@mantine/core";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

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
      { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/tontawi_jauhari01/" },
      { name: "X", icon: <FaSquareXTwitter />, url: "#"},
      { name: "Facebook", icon: <FaFacebookSquare />, url: "https://www.facebook.com/profile.php?id=100007723877438" },
      { name: "Tiktok", icon: <AiFillTikTok />, url: "https://www.tiktok.com/@tontawijauhari" }
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