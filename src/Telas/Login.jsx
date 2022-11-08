import React from 'react';
import '../css/loginstyle.css';
import DrConnect from '../images/logo-card-login.svg';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from '@react-oauth/google';
import axiosInstance from 'axios';

const Login = (props) => {
    const [form, setForm] = React.useState({ email: "", senha: "" });
    const dispatch = useDispatch();

    const responseGoogle = async (response) => {
        console.log(response);
        const tokenId = response.credential;
        const res = await axiosInstance.post("/login/loginWithGoogle", { tokenId })
        const data = await res.data;
        const token = data.token;
        localStorage.setItem("token", token);
        const res2 = await axiosInstance.post("/messages/register", { fcmToken: props.token })
        dispatch({ type: "LOGIN" });
    }

    const handleChange = e => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const signIn = async () => {
        const res = await axiosInstance.post("/login/signIn", form);
        const data = await res.data;
        const token = data.token;
        localStorage.setItem("token", token);
        dispatch({ type: "LOGIN" });
    }

    return (
        <div>
            <div class="main-login">
                <div class="right-login">
                    <div class="card-login">
                        <div class="title-a">
                            <a>Bem Vindo(a) ao</a>
                        </div>
                        <div class="title">
                            <img src={DrConnect} class="title-image" alt='Dr Connect' />
                        </div>
                        <div class="textfield">
                            <label for="usuario">E-mail</label>
                            <input type="text" name="email" placeholder="Usuário" required value={form.email} onChange={handleChange} />
                        </div>
                        <div class="textfield">
                            <label for="senha">Senha</label>
                            <input type="password" name="senha" placeholder="Senha" required value={form.senha} onChange={handleChange} />
                        </div>
                        <button class="btn-login trasitionButton" onClick={signIn}>Login</button>
                        <GoogleLogin
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login