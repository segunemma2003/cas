

function Navbar(props){
    return (
        <nav className="nav-custom d-flex flex-row">
            <input className="d-flex flex-row align-items-center search-nav " placeholder="Search your game"/>
            <div className="me-auto"></div>
            <div className="nav-signin d-flex flex-row">
                <a className="nav-link  text-nowrap">Sign in</a>
                <a className="nav-link color-nav">Register</a>
            </div>
                
        </nav>
    );
}

export default Navbar;