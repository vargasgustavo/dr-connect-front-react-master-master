import React from 'react';
import '../css/loginstyle.css';
import DrConnect from '../images/logo-card-login.svg';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from '@react-oauth/google';
import axiosInstance from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [form, setForm] = React.useState({ email: "", senha: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        navigate("/edit-profile-patient")
        navigate("/edit-profile-medic")
        navigate("/choice")
    }

    return (
        <div>
            <div className="main-login">
                <div className="right-login">
                    <div className="card-login">
                        <div className="title-a">
                            <a>Bem Vindo(a) ao</a>
                        </div>
                        <div className="title">
                            <img src={DrConnect} className="title-image" alt='Dr Connect' />
                        </div>
                        <div className="textfield">
                            <label for="usuario">E-mail</label>
                            <input type="text" name="email" placeholder="Usuário" required value={form.email} onChange={handleChange} />
                        </div>
                        <div className="textfield">
                            <label for="senha">Senha</label>
                            <input type="password" name="senha" placeholder="Senha" required value={form.senha} onChange={handleChange} />
                        </div>
                        <button className="btn-login trasitionButton" onClick={signIn}>Login</button>
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