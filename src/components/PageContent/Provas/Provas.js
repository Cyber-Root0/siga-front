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
import Loading from '../../Loading/Loading';
import GlobalContainer from '../../../services/DI/Container';
import Title from './../../Title';
import Calendar from '../../Calendar/Calendar';
import CalendarInfo from '../../Calendar/Info/Info';
class ProvasContent extends Component {
    constructor(props){
        super(props);
        this.Navigate = props.navigate;
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
        const data = await NotasService.getExamsDays();
        this.setState((prev) => ({
            ...prev,
            loading: true,
            data: data
        }));
    }
    render() {
        return this.state.loading === true ? (
            <>
                <Title>
                <a className="nav-link" title="Plano de Ensino" onClick={ ()=>{this.Navigate('/aluno')} }>
                        <i className="bi bi-arrow-left-circle link-icon content-title-icon"></i>
                    </a>
                    Data das Provas
                </Title>
                <Calendar>
                    { this.state.data.map( (exam) => (
                        <CalendarInfo 
                            key={exam.id}
                            Sigla={exam.id}
                            Text={exam.descricao}
                            Date={exam.dates}
                        />
                    ) ) }
                </Calendar>
            </>
        ) : <><Loading /></>;
    }
}
export default Redirect(ProvasContent);