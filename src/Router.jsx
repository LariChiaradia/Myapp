import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contato from "./pages/Contato";
import Home from "./pages/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;