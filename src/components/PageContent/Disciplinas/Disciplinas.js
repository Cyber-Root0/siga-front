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
import Redirect from '../../../services/Browser/Browser';
import Title from './../../Title';
import Calendar from '../../Calendar/Calendar';
import CalendarInfo from '../../Calendar/Info/Info';
class DisciplinasContent extends Component {
    constructor(props) {
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
        const DisciplinasService = await GlobalContainer.resolve('Disciplinas');
        const data = await DisciplinasService.getAllDisciplinas();
        this.setState( (preV) => ({
             ...preV,
             data: data,
             loading: true
         }) );
    }
    render() {
        return this.state.loading === true ? (
            <>
                <Title>
                    <a className="nav-link" title="Plano de Ensino" onClick={() => { this.Navigate('/aluno') }}>
                        <i className="bi bi-arrow-left-circle link-icon content-title-icon"></i>
                    </a>
                    Disciplinas
                </Title>
                <Calendar>
                    {this.state.data.map(disciplina => (
                        <CalendarInfo
                            key={disciplina.ID}
                            Sigla={disciplina.ID}
                            Text={disciplina.DESCRICAO}
                            Teacher={disciplina.NOME}
                        />
                    ))}
                </Calendar>
            </>
        ) : <Loading />;
    }
}
export default Redirect(DisciplinasContent);