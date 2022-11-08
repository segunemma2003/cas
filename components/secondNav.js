


function SecondNav(props){
        return (
            <nav class="navbar navbar-expand-lg navt px-4">
                <div class="container-fluid">
                    <a class="navbar-brand nav-text m-4" href="#">BluffsCasino</a>

                    <form class="d-flex flex-row align-items-center inputse me-auto">
                        <input class="form-control seinput" type="search" placeholder="Search your game" aria-label="Search" />
                    
                    </form>

                    <div>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
                        <li class="nav-item ">
                            <a class="nav-link log " aria-current="page" href="#">Sign in</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link reg" href="#" >Register</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
}

export default SecondNav;