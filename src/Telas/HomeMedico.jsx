import React from 'react'
import Logo from '../images/logo.svg'
import '../css/homemedic.css'

const HomeMedico = () => {
    return (
        <div>
            <body>
                <div class="main">
                    <div class="header">
                        <div class="logo">
                            <img src={Logo} class="logo-image" alt=''/>
                        </div>
                        <div class="menu">
                            <nav>
                                <ul>
                                    <li><a href='/calendar'>Agendar</a></li>
                                    <li><a href='/nossos-servicos'>Visão Geral</a></li>
                                    <li><a>Perfil</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <h2 class="sub">Suas Estatísticas</h2>
                    <div class="body-body">
                        <div class="main-body">
                            <div class="card-details">
                                <div class="agend">
                                    <p class="agg">Agendamentos</p>
                                </div>
                                <div class="patients">
                                    <p class="pat">Pacientes</p>
                                </div>
                                <div class="trat">
                                    <p class="ment">Tratamentos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="body">
                        <div class="header-body">
                            <div class="left-header-body">

                            </div>
                            <div class="right-header-body">
                                <h2 class="sub-sub">Próximas Consultas</h2>
                                <div class="main-mini-card">
                                    <div class="mini-card">
                                        <button>Agendamentos para Hoje</button>
                                    </div>
                                    <div class="mini-card">
                                        <button>Agendamentos para Amanhã</button>
                                    </div>
                                    <div class="mini-card">
                                        <button>Todos os Agendamentos</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default HomeMedico