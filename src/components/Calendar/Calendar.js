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
import './Calendar.css';
class Calendar extends Component {
    constructor(props){
        super(props);
        this.Child = props.children;
    }
    render() {
        return (
                <div className='calendar'>
                    {this.Child}
                </div>
        );
    }
}
export default Calendar;