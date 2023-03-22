import {FormEvent, useEffect, useState} from 'react';
import {CurrentSong, InputSearch, SearchResults} from "../components";
import {Song} from "../interfaces/deezer.interfaces";
import 'react-h5-audio-player/lib/styles.css';
import {deezerApi} from "../../api/deezerApi";

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [songs, setSongs] = useState<Song[]>(
        localStorage.getItem('songs') ? JSON.parse(localStorage.getItem('songs')!) : []
    );
    const [song, setSong] = useState<Song>({
        album: {cover_medium: "", title: ""},
        artist: {name: ""},
        id: 0, title: ""
    });
    const [currentSong, setCurrentSong] = useState(null);

    useEffect(() => {
        try {
            const getSearchSongs = async () => {
                const { data: { data } } = await deezerApi.get(`/search?q=${searchTerm}`);
                if (data === undefined) return;
                setSongs(data);
                localStorage.setItem('songs', JSON.stringify(data));
            }
            getSearchSongs();
        } catch (e) {
            console.log(e);
        }
    }, [searchTerm]);


    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchTerm.trim() === '') return;
    };

    const handleSongClick = (song: any) => {
        setSong(song);
        setCurrentSong(song.preview);
    };

    return (
        <>
            <form onSubmit={handleSearch}>
                <div className="relative max-w-2xl">
                    <InputSearch
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                </div>
            </form>

            <div className="mt-5">
                <h2 className="light-red-primary-text my-3">
                    {songs.length ? 'Resultados': null}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {songs.map((song: Song) => (
                        <SearchResults
                            key={song.id}
                            song={song}
                            handleSongClick={handleSongClick}
                        />
                    ))}
                </div>
            </div>

            {currentSong && (
                <CurrentSong
                    song={song}
                    currentSong={currentSong}
                    setCurrentSong={setCurrentSong}
                />
            )}
        </>
    );
}
