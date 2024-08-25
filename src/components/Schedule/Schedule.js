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
import './Schedule.css';
class Schedule extends Component {
    constructor(props) {
        super(props);
        this.Horarios = props.Horarios;
        this.Day = props.Day;
    }
    render() {
        return (
            <div className="schedule">
              <span className='link-text'>{this.Day}</span>
              <table>
                <thead>
                  <tr>
                    <th>Horário</th>
                    <th>Disciplina</th>
                  </tr>
                </thead>
                <tbody>
                  {this.Horarios.map((item, index) => (
                    <tr key={index}>
                      <td>{item.time}</td>
                      <td>{item.subject}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
    }
}
export default Schedule;