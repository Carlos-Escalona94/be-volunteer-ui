import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const Router = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    )
}

export default Router;