import React from 'react'
import '../css/agenstyle.css'
import Logo from '../images/logo.svg'

const Agendamento = () => {

    const filter = []

    return (
        <div>
            <div class="main">
                <div class="header">
                    <div class="logo">
                        <img src={Logo} class="logo-image"/>
                    </div>
                    <div class="menu">
                        <nav>
                            <ul>
                                <li><a href='/agenda'>Agendar</a></li>
                                <li><a href='/nossos-servicos'>Visão Geral</a></li>
                                <li><a href='/meuperfil'>Meu Perfil</a></li>
                                <li><a href='/ajuda'>Ajuda</a></li>
                                <li><a href='/'>Sair</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="body">
                    <div class="ask">
                        <h1>Deseja agendar uma consulta?</h1>
                    </div>
                    <div class="card-scheduling">
                        <div class="textfield">
                            <label for="specialty">Escolha uma especialidade: </label>
                            <input type="text" name="specialty" required/>
                        </div>
                        <div class="textfield">
                            <label for="insurance">Escolha um convênio: </label>
                            <input type="password" name="insurance" required/>
                        </div>
                        <div class="card-button">
                            <button class="btn-scheduling trasitionButton">Avançar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agendamento