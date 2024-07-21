import { S_BASE_API_URL } from "../utils/env/env";
import { Article, PaginatedResponse } from "../utils/type";

export const fetchArticleCard = async () => {
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

export const fetchArticle = async () => {
  try {
    const res = await fetch(`${S_BASE_API_URL}/article?limit=9999`, {
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
