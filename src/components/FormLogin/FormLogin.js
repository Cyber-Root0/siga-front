/**
 * @fileoverview Integração de um Front-End em React com a API do Siga (PHP)
 * @author Bruno Venancio Alves
 * @contact boteistem@gmail.com
 *
 * Copyright (c) 2024 Bruno Venancio Alves
 * 
 * Permission is granted to use, copy, modify, and distribute this software,
 * provided that this notice remains in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
 */
import React, { Component } from 'react';
import GlobalContainer from '../../services/DI/Container';
import Redirect from '../../services/Browser/Browser';
import Loading from '../Loading/Loading';
import InputField from '../InputField/Input';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import './FormLogin.css';
class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            processing: false
        };
        this.login = GlobalContainer.resolve('Logins');
        this.submit = this.submit.bind(this);
    }
    async componentDidMount() {
        const { navigate } = this.props;
        const isLoggedIn = await this.login.isLoggedIn();
        if (isLoggedIn) {
            navigate('/aluno/');
        }
    }
    async submit(event) {
        event.preventDefault();
        this.setState((prev) => ({
            ...prev,
            processing: true
        }));
        const { login, password } = this.state;
        const isLoogin = await this.login.login(login, password);
        if (isLoogin) {
            Swal.fire({
                title: 'Sucesso!',
                text: 'Login efetuado com sucesso!',
                icon: 'success'
            });
            this.props.navigate('/aluno/');
        } else {
            this.setState((prev) => ({
                ...prev,
                processing: false
            }));
            Swal.fire({
                title: 'Error!',
                text: 'Usuário / Senha incorreto ',
                icon: 'error'
            });
        }
    }
    toFatecApp = (event) => {
        event.preventDefault();
        document.location.href = "https://siga.cps.sp.gov.br/fatec/login.aspx";
    }
    onChangeValue = (event) => {
        const { name, value } = event.target;
        this.setState((prevData) => (
            {
                ...prevData,
                [name]: value
            }
        ));
    }
    render() {
        return (
            <div className="form-container">
                <div className="singin-singup">
                    <form action="#" className="sign-in-form" id="form" name="form" onSubmit={this.submit}>
                        <h2 className="title-form">
                            Login <span>-</span> Aluno
                        </h2>
                        <InputField icon={faUser}>
                            <input type="text" placeholder="Usuário" id="login" name="login" required onChange={this.onChangeValue} />
                        </InputField>
                        <InputField icon={faLock}>
                            <input type="password" placeholder="Senha" id="password" name="password" required onChange={this.onChangeValue} />
                        </InputField>
                        {this.state.processing === true ? <Loading />  :   
                           <> <a className="form-a" href="https://siga.cps.sp.gov.br/ALUNO/login_auxproblemas.aspx">Esqueceu sua senha?</a>
                            <input type="submit" value="Login" className="btn solid"></input> </>
                        }
                    </form>
                    <form action="#" className="sign-up-form" id="form" name="form">
                        <h2 className="title-form">
                            Login <span>-</span> Professor
                        </h2>
                        <a className="form-a" href="https://siga.cps.sp.gov.br/fatec/sis_login_auxiloproblemas.aspx">Esqueceu sua senha?</a>
                        <input type="submit" value="Login" className="btn solid" onClick={this.toFatecApp}></input>
                    </form>
                </div>
            </div>
        );
    }
}
export default Redirect(FormLogin);