import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {FoxbelLayout} from "./foxbel/layout/FoxbelLayout";
import {Search} from "./foxbel/pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FoxbelLayout />} >
                    <Route index element={<Search />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App
