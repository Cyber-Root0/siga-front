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
import Redirect from '../../../services/Browser/Browser';
import Title from './../../Title';
import Calendar from '../../Calendar/Calendar';
import CalendarInfo from '../../Calendar/Info/Info';
import Loading from '../../Loading/Loading';
import progressBar from './Effect';
import GlobalContainer from '../../../services/DI/Container';
class FrequenciaContent extends Component {
    constructor(props) {
        super(props);
        this.Navigate = props.navigate;
        this.Redirect = this.Redirect.bind(this);
        this.state = {
            data: [],
            loading: false
        };
    }
    async componentDidMount() {
        await this.getData();
    }
    componentDidUpdate() {
        progressBar();
    }
    async getData() {
        const FaltasService = await GlobalContainer.resolve('FaltasServices');
        const data = await FaltasService.getAllFaltas();
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
                    Frequência
                </Title>
                <Calendar>
                    {this.state.data.map(frequencia => (
                        <CalendarInfo
                            key={frequencia.ID}
                            Sigla={frequencia.ID}
                            Text={frequencia.DESCRICAO}
                            Progress={ frequencia.TOTAL > 0 ? ((frequencia.PRESENCAS / frequencia.TOTAL).toFixed(2) *100) : 1 }
                        />
                    ))}
                </Calendar>
            </>
        ) : <Loading /> ;
    }
}
export default Redirect(FrequenciaContent);