import {Outlet} from "react-router-dom";
import {Sidebar} from "../components";

export const FoxbelLayout = () => {
    return (
        <div className='md:flex md:min-h-screen'>
            <div className='md:w-1/4 dark-red-secondary px-5 py-10'>
                <Sidebar />
            </div>

            <div className='md:w-3/4 main-color p-10 md:h-screen md:overflow-y-scroll'>
                <Outlet />
            </div>
        </div>
    );
};
