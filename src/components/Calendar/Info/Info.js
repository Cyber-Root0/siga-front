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
import './Info.css';
class CalendarInfo extends Component {
    constructor(props) {
        super(props);
        this.Sigla = props.Sigla;
        this.Description = props.Text;
        this.Notas = props.Notas;
        this.Progress = props.Progress;
    }
    render() {
        return (
            <div className="calendar-info">
                <div className="info-course">
                    <p><b>Sigla:</b> {this.Sigla}</p>
                    <p>{this.Description}</p>
                </div>
                {
                    this.Progress ? (
                        <div className="circular-progress circular-progress">
                            <p className="value-container value-container">{this.Progress}</p>
                        </div>
                    ) : (
                        <>
                            <div className="divisor"></div>
                            <div className="info-test">
                                {this.Notas.map((nota, index) => (
                                    <p key={index}>
                                        <b>P{index + 1}</b> - {nota}
                                    </p>
                                ))}
                            </div>
                        </>
                    )
                }
            </div>
        );
    }
}
export default CalendarInfo;