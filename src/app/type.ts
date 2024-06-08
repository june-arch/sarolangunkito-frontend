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