import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {FoxbelLayout} from "./foxbel/layout/FoxbelLayout";
import {Albums, Artist, Search} from "./foxbel/pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FoxbelLayout />} >
                    <Route index element={<Search />} />
                    <Route path={'search/album'} element={<Albums />} />
                    <Route path={'search/artist'} element={<Artist />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App
