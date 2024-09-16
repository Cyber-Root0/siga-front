/**
 * @fileoverview Integration of a React Front-End with the Siga API (PHP)
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
import { Scheduler } from "@aldabil/react-scheduler";
import { ptBR } from 'date-fns/locale';

class ScheduleContent extends Component {
    constructor(props) {
        super(props);
        this.Navigate = props.navigate;
        this.state = {
            data: [],
            loading: true,
            weekRange: {
                startHour: 7,
                endHour: 23,
            }
        }
    }
    getTranslations() {
        return {
            navigation: {
                month: "Mês",
                week: "Semana",
                day: "Dia",
                today: "Hoje",
                agenda: "Agenda"
            },
            form: {
                addTitle: "Adicionar Evento",
                editTitle: "Editar Evento",
                confirm: "Confirmar",
                delete: "Apagar",
                cancel: "Cancelar"
            },
            event: {
                title: "Título",
                subtitle: "Descrição",
                start: "Início",
                end: "Fim",
                allDay: "Dia todo"
            },
            validation: {
                required: "Obrigatório",
                invalidEmail: "E-mail inválido",
                onlyNumbers: "Somente números permitidos",
                min: "Mínimo {{min}} letras",
                max: "Máximo {{max}} letras"
            },
            moreEvents: "Mais...",
            noDataToDisplay: "Nenhum evento para exibir",
            loading: "Carregando..."
        };
    }
    async getweekRange() {
        const labels = {
            "Manhã": "manha",
            "Tarde": "tarde",
            "Noite": "noite"
        };
        const hours = {
            manha: [7, 14],
            tarde: [13, 20],
            noite: [19, 24]
        };
        const AlunoServices = await GlobalContainer.resolve('AlunoServices');
        const turno = await AlunoServices.getTurno();
        const data = {
            startHour: hours[labels[turno]][0],
            endHour: hours[labels[turno]][1]
        };
        return data;
    }
    async componentDidMount() {
        await this.getData();
    }

    Maper(key) {
        return this.state.maper ? this.state.maper[key] || key : key;
    }

    async getData() {
        try {
            const Horarios = await GlobalContainer.resolve('Horarios');
            const data = await Horarios.getAllSchedule();
            const weekRange = await this.getweekRange();
            this.setState({ data: data, loading: false, weekRange: weekRange });
        } catch (error) {
            console.error("Failed to fetch data:", error);
            this.setState({ loading: false });
        }
    }

    render() {
        return this.state.loading ? (
            <Loading />
        ) : (
            <>
                <Title>
                    <a
                        className="nav-link"
                        title="Plano de Ensino"
                        onClick={() => { this.Navigate('/aluno') }}>
                        <i className="bi bi-arrow-left-circle link-icon content-title-icon"></i>
                    </a>
                    HORÁRIOS
                </Title>
                <Scheduler
                    view="week"
                    events={this.state.data}
                    translations={this.getTranslations()}
                    hourFormat={24}
                    week={this.state.weekRange}
                    day={this.state.weekRange}
                    locale={ptBR}
                    disableGoToDay={true}
                    
                />
            </>
        );
    }
}

export default Redirect(ScheduleContent);
