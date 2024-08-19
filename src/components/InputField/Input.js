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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Input.css';
class InputField extends Component{
    constructor(props){
        super(props);
        this.input = props.children;
        this.icon = props.icon;
    }
    render(){
        return (
            <div className="input-field">
                <FontAwesomeIcon icon={this.icon} />
                {this.input}
            </div>
        );
    }
}
export default InputField;