import React from 'react'
import Logo from '../images/logo.svg'
import '../css/homepatient.css'

const HomePaciente = () => {
    return (
        <div>
            <body>
                <div className="header">
                    <div className="logo">
                        <img src={Logo} className="logo-image" alt=''/>
                    </div>
                    <div className="menu">
                        <nav>
                            <ul>
                                <li><a>Agendar</a></li>
                                <li><a>Tratamentos</a></li>
                                <li><a>Visão Geral</a></li>
                                <li><a>Ajuda</a></li>
                                <li><a>Usuário</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="body">
                    <div className="header-body">
                        <div className="left-header-body">
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default HomePaciente