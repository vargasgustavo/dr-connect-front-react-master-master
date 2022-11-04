import React from 'react'
import '../css/loginstyle.css'
import DrConnect from '../images/logo-card-login.svg'

const Login = () => {


    return (
        <div>
            <div class="main-login">
                <div class="right-login">
                    <div class="card-login">
                        <div class="title-a">
                            <a>Bem Vindo(a) ao</a>
                        </div>
                        <div class="title">
                            <img src={DrConnect} class="title-image" alt=''/>
                        </div>
                        <div class="textfield">
                            <label for="usuario">E-mail</label>
                            <input type="text" name="usuario" placeholder="Usuário" required/>
                        </div>
                        <div class="textfield">
                            <label for="senha">Senha</label>
                            <input type="password" name="senha" placeholder="Senha" required/>
                        </div>
                        <button class="btn-login trasitionButton">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login