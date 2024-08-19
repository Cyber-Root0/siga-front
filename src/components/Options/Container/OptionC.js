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
import './Container.css';
class OptionC extends Component {
    constructor(props) {
        super(props);
        this.Title = props.Title;
        this.Icon = props.Icon;
        this.Url = props.Url;
    }
    render() {
        return (
            <div className="options-container">
                <span className="options-title">
                    {this.Title}
                    <i className={this.Icon + ' options-icon'}></i>
                </span>
                <a href={this.Url} className="options-link">Visualizar</a>
            </div>
        );
    }
}
export default OptionC;