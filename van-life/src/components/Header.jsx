import { NavLink, Link } from 'react-router-dom';


export default function Header() {

    const activeStyles = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
    }

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink 
                    to='/host'
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>

                <NavLink 
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>

                <NavLink 
                    to='/vans'
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>

                <Link to="login" className="login-link">
                    <img 
                        src="https://scrimba.com/blobs/sha1:436bc1225ebc08ad811df8f56659e578af60cc98.png" 
                        className="login-icon"
                    />
                </Link>
                <button onClick={fakeLogOut}>X</button>

            </nav>
        </header>
    )
}
