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
import Schedule from '../../Schedule';
class ScheduleContent extends Component {
    constructor(props){
        super(props);
        this.Navigate = props.navigate;
    }
    getDates = () => {
        return [
            {
                time: '19:00-19:50',
                subject: 'LIN600'
            },
            {
                time: '19:00-19:50',
                subject: 'LIN600'
            },
            {
                time: '19:00-19:50',
                subject: 'LIN600'
            },
            {
                time: '19:00-19:50',
                subject: 'LIN600'
            }
        ]
    }
    render() {
        return (
            <>
                <Title>
                <a className="nav-link" title="Plano de Ensino" onClick={ ()=>{this.Navigate('/aluno')} }>
                        <i className="bi bi-arrow-left-circle link-icon content-title-icon"></i>
                    </a>
                    HORÁRIOS
                </Title>
                <Calendar>
                    <div className='calendar-info'>
                        <Schedule Horarios={this.getDates()} Day='Segunda' />
                        <Schedule Horarios={this.getDates()} Day='Terça' />
                        <Schedule Horarios={this.getDates()} Day='Quarta' />
                        <Schedule Horarios={this.getDates()} Day='Quinta' />
                        <Schedule Horarios={this.getDates()} Day='Sexta' />
                        <Schedule Horarios={this.getDates()} Day='Sabado' />
                    </div>
                </Calendar>
            </>
        );
    }
}
export default Redirect(ScheduleContent);