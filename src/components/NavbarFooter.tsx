import './NavbarFooter.css'

const NavbarFooter = () => {
    return(
        <div className="navbarFooter">
            <p>
                <small>
                  © Copyright ©
                  <script>document.write(new Date().getFullYear());</script>
                  2023 All rights reserved | This template is made with 
                  by Colorlib Demo Images: Unsplash.com
                </small>
            </p>
        </div>
    )
}

export default NavbarFooter;