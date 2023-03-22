import ImageLogo from '../../assets/foxbel-music.png';
import {Link, useMatch} from "react-router-dom";

export const Sidebar = () => {
    const homeMatch = useMatch({ path: '/' });
    const albumMatch = useMatch('/search/album');
    const artistMatch = useMatch('/search/artist');


    return (
        <div className="animate__animated animate__fadeIn">
            <Link to={'/'}>
                <img src={ImageLogo} alt="Imagen Logo"/>
            </Link>
            <nav className="p-2">
                <h2 className="text-white text-xl">Mi librería</h2>
                <Link
                    to={'/search/album'}
                    className={`${albumMatch ? 'active' : null} text-white hover:text-red-400 transition block text-sm mt-1`}
                >
                    Albums
                </Link>
                <Link
                    to={'/search/artist'}
                    className={`${artistMatch ? 'active' : null} text-white hover:text-red-400 transition block text-sm`}
                >
                    Artistas
                </Link>
                <Link
                    to={'/'}
                    className={`${homeMatch ? 'active' : null} text-white hover:text-red-400 transition text-sm`}
                >
                    Canciones
                </Link>
            </nav>

            <nav className="mt-2 p-2">
                <h2 className="text-white text-xl">Playlist</h2>
                <Link to={'/'} className="text-white block text-sm mt-1">
                    Metal
                </Link>
                <Link to={'/'} className="text-white block text-sm">
                    Para bailar
                </Link>
                <Link to={'/'} className="text-white text-sm">
                    Rock 90s
                </Link>
            </nav>

        </div>
    );
};
