import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/" className="navbar-brand">Werchow </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home </Link>
                    </li>

                    <li className="nav-item dropdown">
                        <Link to="" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Titulares </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                            <Link to="/titulares" className="nav-link text-dark">Listado de Titulares</Link>

                            <hr className="my-4" />

                            <Link to="/titulares/nuevo" className="nav-link text-dark">Ingresar Titular</Link>

                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <Link to="" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Adherentes </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                            <Link to="/adherentes/nuevo" className="nav-link text-dark">Agregar un Adherente</Link>

                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
