import ImageLogo from '../../assets/foxbel-music.png';
import {Link} from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <img src={ImageLogo} alt="Imagen Logo"/>
            <nav className="p-3">
                <h2 className="text-white text-xl">Mi librería</h2>
                <Link to={'/'} className="text-white block mt-1">
                    Albums
                </Link>
                <Link to={'/'} className="text-white block">
                    Artistas
                </Link>
                <Link to={'/'} className="text-white">
                    Canciones
                </Link>
            </nav>

            <nav className="mt-5 p-3">
                <h2 className="text-white text-xl">Playlist</h2>
                <Link to={'/'} className="text-white block mt-1">
                    Metal
                </Link>
                <Link to={'/'} className="text-white block">
                    Para bailar
                </Link>
                <Link to={'/'} className="text-white">
                    Rock 90s
                </Link>
            </nav>
        </div>
    );
};
