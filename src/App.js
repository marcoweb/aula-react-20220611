import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar, NavbarItem } from "./components/Navbar"
import Home from './pages/Home'
import Sobre from './pages/Sobre'

import logo from './images/ham-ico.png'

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Navbar logo={logo} title="Larika">
                <NavbarItem title="Home" to="/" />
                <NavbarItem title="Hot Dog" to="/hotdog" />
                <NavbarItem title="Sobre" to="/sobre" />
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App