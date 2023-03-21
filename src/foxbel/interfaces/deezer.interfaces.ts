export interface Song {
    id: number;
    title: string;
    artist: {
        name: string;
        id: number;
    };
    album: {
        title: string;
        cover_medium: string;
    };
}
