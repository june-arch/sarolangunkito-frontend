import { S_BASE_API_URL } from "../utils/env/env";
import { Banner } from "../utils/type";

export const fetchBanner = async () => {
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
