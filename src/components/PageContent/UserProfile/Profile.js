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
import Loading from '../../Loading/Loading';
import GlobalContainer from '../../../services/DI/Container';
import Title from './../../Title';
import Office360 from '../../Office360';
import Skin from './../../../assets/img/Author.jpeg';
import './UserProfile.css';
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                REGISTRO_ACADEMICO: '',
                NOME: '',
                CURSO: '',
                TURNO: '',
                CICLO: '',
                EMAIL: '',
                FOTO_URL: '' 
            },
            loading: false
        };
    }

    async componentDidMount() {
        await this.getData();
    }

    async getData() {
        const AlunoService = await GlobalContainer.resolve('AlunoServices');
        const data = await AlunoService.getAlunoInfo();
        this.setState((prev) =>(
            {
                ...prev,
                info: data,
                loading: true
            }
        ) );
    }
    render() {
        return this.state.loading === true ? (
            <>
                <div className="content-info">
                    <Title>
                        Matrícula do Aluno
                    </Title>
                    <div className="content-user">
                        <img src={ !this.state.info.REGISTRO_ACADEMICO === "1570482213009" ? this.state.info.FOTO_URL : Skin} alt="Foto de Perfil do Aluno" className="user-img" />
                        <div className="info-user">
                            <p className="info-user-text"><b>RA:</b> {this.state.info.REGISTRO_ACADEMICO}</p>
                            <p className="info-user-text"><b>Nome:</b> {this.state.info.NOME}</p>
                        </div>
                        <div className="info-user">
                            <p className="info-user-text">
                                <b>Habilitação:</b> {this.state.info.CURSO}
                            </p>
                            <p className="info-user-text"><b>Situação:</b> Em curso</p>
                        </div>
                        <div className="info-user">
                            <p className="info-user-text"><b>Período:</b> {this.state.info.TURNO}</p>
                            <p className="info-user-text"><b>Semestre Ingresso:</b> {this.state.info.CICLO}º Semestre </p>
                        </div>
                    </div>
                </div>
                <Office360 Email={this.state.info.EMAIL} />
            </>
        ) : <Loading />;
    }
}
export default UserProfile;