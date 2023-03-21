import AudioPlayer, {RHAP_UI} from "react-h5-audio-player";
import React from "react";

interface Props {
    songs: any;
    currentSong: any;
    setCurrentSong: (e: any) => void;
}

export const CurrentSong = ({songs, currentSong, setCurrentSong}: Props) => {
    return (
        <div className="fixed bottom-0 left-0 w-full light-red-primary flex justify-center gap-x-44 animate__animated  animate__fadeInUp">
            <div className="flex gap-x-3 items-center">
                <img className="w-20" src={songs[1].album.cover_medium} alt=""/>
                <div className="text-white">
                    <p className="block">Artista</p>
                    <p>Canción</p>
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
