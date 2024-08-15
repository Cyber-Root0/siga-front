// FomrLogin component
import React, { Component } from 'react';
import InputField from '../InputField/Input';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './FormLogin.css';
class FormLogin extends Component {
    render() {
        return (
            <div className="form-container">
                <div className="singin-singup">
                    <form action="#" className="sign-in-form" id="form" name="form">
                        <h2 className="title-form">
                            Login <span>-</span> Aluno
                        </h2>
                        <InputField icon={faUser}>
                            <input type="text" placeholder="Usuário" id="login" name="login" required />
                        </InputField>
                        <InputField icon={faLock}>
                            <input type="password" placeholder="Senha" id="password" name="password" required />
                        </InputField>
                        <a className="form-a" href="/a">Esqueceu sua senha?</a>
                        <input type="submit" value="Login" className="btn solid"></input>
                    </form> 
                </div>
            </div>
        );
    }
}
export default FormLogin;