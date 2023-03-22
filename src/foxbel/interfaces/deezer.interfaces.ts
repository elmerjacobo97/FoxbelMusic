export interface Song {
    id      :number;
    title   :string;
    artist: {
        name    :string;
    };
    album: {
        title           :string;
        cover_medium    :string;
    };
}

export interface Album {
    id: number;
    title: string;
    cover_medium: string;
    artist: {
        name: string;
    };
    coverImage: string;
    year: string
}

export interface Artist {
    id: number;
    name: string
    link: string
    picture_medium: string
    nb_fan: string
}
