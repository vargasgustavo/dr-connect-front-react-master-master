import React from 'react'
import '../css/medico.css'

const CadastroMedico = () => {
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
                            <label for="crm">CRM</label>
                            <input type="text" name="crm" placeholder="CRM" required/>
                        </div>
                        <div class="textfield">
                            <label for="especialidade">Especialidade</label>
                            <input type="text" name="especialidade" placeholder="Especialidade" required/>
                        </div>
                        <div class="textfield">
                            <label for="Telefone">Telefone</label>
                            <input type="number" name="telefone" placeholder="Telefone" required/>
                        </div>
                        <div class="textfield">
                            <label for="cidade">Cidade</label>
                            <input type="text" name="cidade" placeholder="Cidade" required/>
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

export default CadastroMedico