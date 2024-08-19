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
import PageLayout from '../../components/Abstract/Layout/Page';
import FormLogin from '../../components/FormLogin/FormLogin';
import Panel from '../../components/FormLogin/Panel/Panel';
import './Home.css';
import './Animations.css';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IsTeacher: false,
        };
    }
    onChangeUser = () => {
        this.setState((prevState) => ({
            IsTeacher: !prevState.IsTeacher,
        }));
    }
    render() {
        return (
            <div style={{background: '#22202d'}}>
                <PageLayout title={'Home'} />
                <div className={this.state.IsTeacher ? 'container sign-up-mode' : 'container'}>
                    <FormLogin />
                    <div className='panels-container'>
                        <Panel
                            direction={'left'}
                            title={'É um professor?'}
                            description={'Está do lado errado desse form, só clicar no botão que será levado ao local correto'}
                            IsRegister={false}
                            button={'Login - Prof.'}
                            onChangeUser={this.onChangeUser}
                        />
                        <Panel
                            direction={'right'}
                            title={'É um aluno?'}
                            description={'Está do lado errado desse form, só clicar no botão que será levado ao local correto'}
                            IsRegister={true}
                            button={'Login - Aluno'}
                            onChangeUser={this.onChangeUser}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
