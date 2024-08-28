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
import './Container.css';
class OptionC extends Component {
    constructor(props) {
        super(props);
        this.Title = props.Title;
        this.Icon = props.Icon;
        this.Url = props.Url;
        this.Navigate = props.navigate;
        this.Redirect = this.Redirect.bind(this);
    }
    Redirect(){
        this.Navigate(this.Url);
    }
    render() {
        return (
            <div className="options-container">
                <span className="options-title">
                <i className={this.Icon + ' options-icon'}></i>
                    {this.Title}
                </span>
                <a onClick={this.Redirect} className="options-link">Visualizar</a>
            </div>
        );
    }
}
export default Redirect(OptionC);