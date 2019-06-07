import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Afiliados
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/altaafiliado">Ingresar Afiliado</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/altaadherhente">Ingresar Aderhente</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/listadotitulares">Listado de Titulares</a>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Campañas
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/listado1001">Listados 1001</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Ingresar Aderhente</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Listado de Titulares</a>
                                </div>
                            </li>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;