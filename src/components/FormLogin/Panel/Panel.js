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
import bg3 from './../../../assets/bg3.svg';
import registerSVG from './../../../assets/register.svg';
import './Panel.css';
class Panel extends Component {
    constructor(props){
        super(props);
        this.direction = props.direction;
        this.title = props.title;
        this.description = props.description;
        this.register = props.IsRegister;
        this.button = props.button;
        this.onChangeUser = props.onChangeUser;
    }
    getImage = () =>{
        if (this.register === true){
            return registerSVG;
        }
        return bg3;
    }
    onClick = (event) => {
        this.onChangeUser();
    }
    render(){
        return (
            <div className={`panel ${this.direction}-panel`}>
                <div className="content">
                    <h3>{this.title}</h3>
                    <p>{this.description}</p>
                    <button className="btn transparent" id="sign-up-btn" onClick={this.onClick}>
                        {this.button}
                    </button>
                </div>
                <img className="image" src={this.getImage()} alt="Get in the rocket" />
            </div>
        );
    }
}
export default Panel;