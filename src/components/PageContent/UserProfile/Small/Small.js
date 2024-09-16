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
import GlobalContainer from '../../../../services/DI/Container';
import Loading from '../../../Loading/Loading';
import ProfileImg from './../../../../assets/img/Author.jpeg';
import './Small.css';
class SmallProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                REGISTRO_ACADEMICO: '',
                NOME: '',
                CURSO: '',
                TURNO: '',
                EMAIL: '',
                FOTO_URL: ProfileImg
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
                <div className="profile">
                    <div className="profile-options">
                        <img className="profile-img" src={!this.state.info.REGISTRO_ACADEMICO === "1570482213009" ? this.state.info.FOTO_URL : ProfileImg} alt="Foto de perfil do aluno"
                            title="Foto de perfil do aluno" />
                    </div>
                    <div className="profile-info">
                        <h2 className='info-user-text'>{this.state.info.NOME}</h2>
                        <div className="info-course">
                            <h3 className="info-course-title info-user-text">FATEC PRESIDENTE PRUDENTE</h3>
                            <div>
                                <p className='info-user-text'>{this.state.info.CURSO} - {this.state.info.TURNO}</p>
                                <p><b>RA:</b> {this.state.info.REGISTRO_ACADEMICO}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) : <Loading />;
    }
}
export default SmallProfile;