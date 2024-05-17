import React from "react";
import { Link } from 'react-router-dom';

const Navbar =() => {
    return (
        // Sección de menú de navegación
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link id="inicio" className="navbar-brand" to="/login">
                <i className="fas fa-utensils"></i> Restaurante de la abuela
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarnav"
                aria-controls="navbarnav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarnav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                    
                        <li class="nav-item">
                            <a class="nav-link" href="#Menú">Menú del día</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#Chefs">Chefs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#Testimonios">Testimonio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contacto">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#horario">Horarios</a>
                        </li>
                    </ul>
            </div>
        </div>
    </nav>
    );
}
export default Navbar;