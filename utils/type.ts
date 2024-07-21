export interface Image {
  id: number;
  banner_id: number;
  path: string;
  created_at: string;
  updated_at: string;
}

export interface Banner {
  id: number;
  name: string;
  deskripsi: string;
  url: string;
  status: number;
  created_at: string;
  updated_at: string;
  images: Image[];
}

export interface ArticleImage {
  id: number;
  article_id: number;
  path: string;
  created_at: string;
  updated_at: string;
}

export interface ArticleVideo {
  id: number;
  article_id: number;
  path: string;
  created_at: string;
  updated_at: string;
}

export interface Article {
  id: number;
  user_id: number;
  title: string;
  content: string;
  status: string;
  slug: string;
  created_at: string;
  updated_at: string;
  url_video: string; // Array of strings for URLs
  images: ArticleImage[];
  videos: ArticleVideo[];
}

export interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginatedResponse<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number | null;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number | null;
  total: number;
}
