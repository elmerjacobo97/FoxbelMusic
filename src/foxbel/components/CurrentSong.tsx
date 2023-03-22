import AudioPlayer, {RHAP_UI} from "react-h5-audio-player";
import {Song} from "../interfaces/deezer.interfaces";

interface Props {
    song: Song;
    currentSong: string;
    setCurrentSong: (e: null) => void;
}

export const CurrentSong = ({currentSong, setCurrentSong, song}: Props) => {

    return (
        <div className="fixed bottom-0 left-0 w-full light-red-primary flex gap-x-44 animate__animated animate__fadeInUp">
            <div className="flex gap-x-3 items-center w-full">
                <img className="w-20" src={song.album.cover_medium} alt=""/>
                <div className="text-white">
                    <p>{ song.artist.name }</p>
                    <p>{ song.title }</p>
                </div>
            </div>
            <AudioPlayer
                autoPlay
                src={currentSong}
                onEnded={() => setCurrentSong(null)}
                layout="horizontal"
                customProgressBarSection={[RHAP_UI.MAIN_CONTROLS]}
                customControlsSection={[RHAP_UI.ADDITIONAL_CONTROLS, RHAP_UI.VOLUME_CONTROLS]}
                customAdditionalControls={[]}
                className="light-red-primary shadow-none"
            />
        </div>
    );
};
