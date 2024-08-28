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
import Title from './../../Title';
import Calendar from '../../Calendar/Calendar';
import CalendarInfo from '../../Calendar/Info/Info';
import Redirect from '../../../services/Browser/Browser';
class NotasContent extends Component {
    constructor(props){
        super(props);
        this.Navigate = props.navigate;
        this.Redirect = this.Redirect.bind(this);
    }
    Redirect(Url){
        this.Navigate(Url);
    }
    render() {
        return (
            <>
                <Title>
                    <a className="nav-link" title="Plano de Ensino" onClick={ () =>{this.Redirect('/aluno/consultas')}  }>
                        <i className="bi bi-arrow-left-circle link-icon content-title-icon"></i>
                    </a>
                    Notas Parciais
                </Title>
                <Calendar>
                    <CalendarInfo
                        Sigla='IES011'
                        Text='Engenharia de Software'
                        Notas={[7, 8, 9]}
                     />
                     <CalendarInfo
                        Sigla='IES011'
                        Text='Engenharia de Software'
                        Notas={[7, 8, 9]}
                     />
                     <CalendarInfo
                        Sigla='IES011'
                        Text='Engenharia de Software'
                        Notas={[7, 8, 9]}
                     />
                     <CalendarInfo
                        Sigla='IES011'
                        Text='Engenharia de Software'
                        Notas={[7, 8, 9]}
                     />
                     <CalendarInfo
                        Sigla='IES011'
                        Text='Engenharia de Software'
                        Notas={[7, 8, 9]}
                     />
                     <CalendarInfo
                        Sigla='IES011'
                        Text='Engenharia de Software'
                        Notas={[7, 8, 9]}
                     />
                </Calendar>
            </>
        );
    }
}
export default Redirect(NotasContent);