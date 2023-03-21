import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {Song} from "../interfaces/deezer.interfaces";

interface Props {
    song: Song;
    handleSongClick: (song: Song) => void;
}

export const SearchResults = ({ song, handleSongClick }: Props) => {

    return (
        <div
            key={song.id}
            className="relative shadow-md rounded-md p-4 animate__animated animate__fadeIn"
        >
            <div className="relative">
                <img
                    src={song.album.cover_medium}
                    alt={song.album.title}
                    className="w-full"
                />
                <button
                    className="absolute top-1/2 left-1/2 -mt-6 -ml-6 rounded-full shadow-md"
                    onClick={() => handleSongClick(song)}
                >
                    <FontAwesomeIcon
                        color="white"
                        size="2x"
                        icon={faPlay}
                    />
                </button>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-medium">{song.title}</h3>
                <p className="text-sm text-gray-600">
                    {song.artist.name} - {song.album.title}
                </p>
            </div>
        </div>
    );
};
