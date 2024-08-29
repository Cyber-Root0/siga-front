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
import Schedule from '../../Schedule';
class ScheduleContent extends Component {
    constructor(props) {
        super(props);
        this.Navigate = props.navigate;
        this.state = {
            maper: {
                segunda: "Segunda-feira",
                terca: "Terça-feira",
                quarta: "Quarta-feira",
                quinta: "Quinta-feira",
                sexta: "Sexta",
                sabado: "Sábado"
            },
            data: [],
            loading: false
        };
    }
    async componentDidMount() {
        await this.getData();
    }
    Maper(key) {
        return this.state.maper[key] || key;
    }
    async getData() {
        const Horarios = await GlobalContainer.resolve('Horarios');
        const data = await Horarios.getAllSchedule();
        this.setState((prev) => ({
            ...prev,
            data: data,
            loading: true
        }))
    }
    render() {
        return this.state.loading === true ? (
            <>
                <Title>
                    <a className="nav-link" title="Plano de Ensino" onClick={() => { this.Navigate('/aluno') }}>
                        <i className="bi bi-arrow-left-circle link-icon content-title-icon"></i>
                    </a>
                    HORÁRIOS
                </Title>
                <Calendar>
                    <div className='calendar-info'>
                        {
                            Object.keys(this.state.data).map((day) => (
                                <Schedule
                                    Horarios={this.state.data[day]}
                                    Day={this.Maper(day)}
                                    key={day}
                                />
                            ))
                        }
                    </div>
                </Calendar>
            </>
        ) : <Loading />;
    }
}
export default Redirect(ScheduleContent);