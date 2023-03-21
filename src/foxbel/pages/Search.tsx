import {FormEvent, useState} from 'react';
import {CurrentSong, InputSearch, SearchResults} from "../components";
import {Song} from "../interfaces/deezer.interfaces";
import 'react-h5-audio-player/lib/styles.css';
import {deezerApi} from "../../api/deezerApi";

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [songs, setSongs] = useState<Song[]>(
        localStorage.getItem('songs') ? JSON.parse(localStorage.getItem('songs')!) : []
    );
    const [currentSong, setCurrentSong] = useState(null);

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (searchTerm.trim() === '') return;

        deezerApi.get(`/search?q=${searchTerm}&limit=1000`)
            .then(({ data: { data } }) => {
                setSongs(data);
                localStorage.setItem('songs', JSON.stringify(data));
            })
            .catch(error => {
                console.error(error);
            });
        setSearchTerm('');
    };

    const handleSongClick = (song: any) => {
        setCurrentSong(song.preview);
    };

    return (
        <div>
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
                    songs={songs}
                    currentSong={currentSong}
                    setCurrentSong={setCurrentSong}
                />
            )}
        </div>
    );
}
