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
import GlobalContainer from '../../../services/DI/Container';
import Loading from '../../Loading/Loading';
import Title from './../../Title';
import Calendar from '../../Calendar/Calendar';
import CalendarInfo from '../../Calendar/Info/Info';
import Redirect from '../../../services/Browser/Browser';
class NotasContent extends Component {
    constructor(props) {
        super(props);
        this.Navigate = props.navigate;
        this.Redirect = this.Redirect.bind(this);
        this.state = {
            loading: false,
            data: []
        };
    }
    async componentDidMount() {
        await this.getData();
    }
    async getData() {
        const NotasService = await GlobalContainer.resolve('NotasServices');
        const data = await NotasService.getAllNotas();
        this.setState( (preV) => ({
            ...preV,
            data: data,
            loading: true
        }) );
    }
    Redirect(Url) {
        this.Navigate(Url);
    }
    render() {
        return this.state.loading === true ? (
            <>
                <Title>
                    <a className="nav-link" title="Plano de Ensino" onClick={() => { this.Redirect('/aluno/consultas') }}>
                        <i className="bi bi-arrow-left-circle link-icon content-title-icon"></i>
                    </a>
                    Notas Parciais
                </Title>
                <Calendar>
                    {this.state.data.map(nota => (
                        <CalendarInfo
                            key={nota.id}
                            Sigla={nota.id}
                            Text={nota.descricao}
                            Notas={nota.notas.length > 0 ? nota.notas : [0, 0, 0]}
                        />
                    ))}
                </Calendar>
            </>
        ) : <Loading />;
    }
}
export default Redirect(NotasContent);