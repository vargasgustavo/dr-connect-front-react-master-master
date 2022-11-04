import React from 'react'
import '../css/filtro.css'
import Logo from '../images/logo.svg'

const Filtro = () => {

    

    return (
        <div>
            <div class="main">
                <div class="header">
                    <div class="logo">
                        <img src={Logo} class="logo-image"/>
                    </div>
                    <div class="menu">
                        <div class="btn-especialidade">
                            <button class="btn">Especialidade</button>
                        </div>
                        <div class="btn-convenio">
                            <button class="btn">Convênio</button>
                        </div>
                        <div class="btn-buscar-especialistas">
                            <button class="btn">Buscar Especialistas</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="body-body">
                <div class="doctor-one">
                    <div class="img-one">
                        <img src="../Imagens/doctor_one.svg" alt="Primeiro médico(a)"/>
                    </div>
                    <div class="text-one">
                        <div class="sub">
                            <h2>Dr. Augusto de Moraes</h2>
                        </div>
                        <div class="sub-i">
                            <h3>Otorrinolaringologista</h3>
                        </div>
                        <div class="sub-e">
                            <p>Endereço: Rua das Cámelias, 321, Jardim Flora<br/>Indaiatuba-SP</p>
                        </div>
                    </div>
                    <div class="btn-agenda">
                        <button class="btn">
                            Ver Agenda
                        </button>
                    </div>
                </div>
                <div class="doctor-two">
                    <div class="img-two">
                        <img src="../Imagens/doctor_two.svg" alt="Segundo médico(a)"/>
                    </div>
                    <div class="text-two">
                        <div class="sub">
                            <h2>Dra. Maria Luisa Silva</h2>
                        </div>
                        <div class="sub-i">
                            <h3>Ginecologista</h3>
                        </div>
                        <div class="sub-e">
                            <p>Endereço: Rua XX de Julho, 654, Centro<br/>Indaiatuba-SP</p>
                        </div>
                    </div>
                    <div class="btn-agenda">
                        <button class="btn">
                            Ver Agenda
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filtro