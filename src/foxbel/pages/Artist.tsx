import {InputSearch} from "../components";
import {FormEvent, useEffect, useState} from "react";
import {Artist as Artista} from "../interfaces/deezer.interfaces";
import {deezerApi} from "../../api/deezerApi";

export const Artist = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Artista[]>(
        localStorage.getItem('artist')
            ? JSON.parse(localStorage.getItem('artist')!)
            : []
    );


    useEffect(() => {
        try {
            const getAlbums = async () => {
                const { data: { data } } = await deezerApi.get(`/search/artist?q=${searchQuery}`);
                if (data === undefined) return;

                setSearchResults(data);
                localStorage.setItem('artist', JSON.stringify(data));
            }
            getAlbums();
        } catch (error) {
            console.log(error);
        }
    }, [searchQuery]);

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchQuery.trim() === '') return;
    };

    return (
        <>
            <form onSubmit={handleSearch}>
                <div className="relative max-w-2xl">
                    <InputSearch
                        searchTerm={searchQuery}
                        setSearchTerm={setSearchQuery}
                    />
                </div>
            </form>

            <div className="mt-5">
                <h2 className="light-red-primary-text my-3">
                    {searchResults.length ? 'Resultados': null}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {searchResults.map((artist) => (
                        <div
                            key={artist.id}
                            className="animate__animated animate__fadeIn"
                        >
                            <img className="w-full" src={artist.picture_medium} alt={artist.name} />
                            <div>
                                <h2 className="font-medium">{artist.name}</h2>
                                <p>N° Fans: {artist.nb_fan}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
