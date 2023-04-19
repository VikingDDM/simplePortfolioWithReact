import './NavbarMenu.css'
import {
    Routes,
    Route,
    Outlet,
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";
  import type { LinkProps } from "react-router-dom";

const NavbarMenu = () => {
    return(
        <div className="navbarMenu">
            <div className="NavbarMainMenu">
                <ul>
                    <li><CustomLink to="/">HOME</CustomLink></li>
                    <li><CustomLink to="/about">ABOUT</CustomLink></li>
                    <li><CustomLink to="/services">SERVICES</CustomLink></li>
                    <li><CustomLink to="/skills">SKILLS</CustomLink></li>
                    <li><CustomLink to="/education">EDUCATION</CustomLink></li>
                    <li><CustomLink to="/experience">EXPERIENCE</CustomLink></li>
                    <li><CustomLink to="/work">WORK</CustomLink></li>
                    <li><CustomLink to="/blog">BLOG</CustomLink></li>
                    <li><CustomLink to="/contact">CONTACT</CustomLink></li>
                </ul>
            </div>
        </div>
    )
}

function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    let linkstyle = {
        textDecoration: match ? "underline" : "none",
        color: match ? "#2c98f0" :"rgba(0, 0, 0, 0.7)"
    }
  
    return (
      <div>
        <Link
          style={linkstyle}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {/* {match && " (active)"} */}
      </div>
    );
  }

export default NavbarMenu;