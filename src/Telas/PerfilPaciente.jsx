import React from 'react'
import '../css/paciente.css'

const CadastroPaciente = () => {
    return (
        <div>
            <div class="main-login">
                <div class="left-login">
                    <h1>Cadastre-se e tenha<br/>o melhor atendimento</h1>
                    <img src="../Imagens/doctor.svg" class="left-login-image" alt=""/>
                </div>
                <div class="right-login">
                    <div class="card-login">
                        <div class="title-a">
                            <a>Bem Vindo(a) ao</a>
                        </div>
                        <div class="title">
                            <img src="../Imagens/logo-card-login.svg" class="title-image"/>
                        </div>
                        <div class="textfield">
                            <label for="date">Data de Nascimento</label>
                            <input type="date" name="date" required/>
                        </div>
                        <div class="textfield">
                            <label for="telefone">Telefone</label>
                            <input type="tel" name="telefone" placeholder="Telefone" pattern="/^\([1-9]{2}\)[0-9]{4,5}-[0-9]{4}$/" required/>
                        </div>
                        <div class="textfield">
                            <label for="CEP">CEP</label>
                            <input name="CEP" id="CEP" required pattern="\d{5}-\d{3}" placeholder="CEP" />
                        </div>
                        <div class="textfield">
                            <label for="numero">Número</label>
                            <input type="number" name="numero" placeholder="Número" required/>
                        </div>
                        <div class="textfield">
                            <label for="complemento">Complemento</label>
                            <input type="text" name="complemento" placeholder="Complemento" required/>
                                <p>Ao criar uma conta, você aceita os termos e condições de uso da Dr. Connect e reconhece que leu e entendeu nossa política de privacidade.
                                </p>
                        </div>
                        <button class="btn-login trasitionButton">Prosseguir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CadastroPaciente