import './Navbar.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import NavbarProfile from './NavbarProfile';
import NavbarMenu from './NavbarMenu';
import NavbarFooter from './NavbarFooter';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <NavbarProfile />
                <NavbarMenu />
                <NavbarFooter />
            </div>
            <div className='pageDetail'>
                <Outlet />
            </div>
        </>
        
    )
} 

export default Navbar;