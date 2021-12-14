import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-5">
                <Link className="navbar-brand title" to="/">
                    <img src="/img/logo.png" alt="logo" className="logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 li_menu_item">
                        <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
                        {/* <li className="nav-item"><Link className="nav-link" to="/about">Acerca</Link></li> */}
                        <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={{pathname: "https://www.getonbrd.com/blog/posts" }} target="_blank">Blog</Link></li>

                        <li className="nav-item"><Link className="nav-link" to="/singin">Iniciar sesion</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/singup">Registrarse</Link></li> 
                       
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
