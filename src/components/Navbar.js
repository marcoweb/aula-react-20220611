import { Link } from 'react-router-dom'
import './Navbar.css'

const NavbarItem = ({ title, href, to }) => {
    return(
        <li>
            <Link to={to}>{title}</Link>
        </li>
    )
}

const Navbar = ({ children, logo, title }) => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" />
            <h1>{title}</h1>
            <ul>
                {children}
            </ul>
        </nav>
    )
}

export { Navbar, NavbarItem }