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
import Redirect from '../../../services/Browser/Browser';
import Title from '../../Title';
class ManualContent extends Component {
    constructor(props) {
        super(props);
        this.Redirect = this.Redirect.bind(this);
        this.Navigate = props.navigate;
    }
    Redirect(Url) {
        this.Navigate(Url);
    }
    render() {
        return (
            <>
                <Title>
                    <a className="nav-link" title="Plano de Ensino" onClick={() => { this.Redirect('/aluno/consultas') }}>
                        <i className="bi bi-arrow-left-circle link-icon content-title-icon"></i>
                    </a>
                    Manual
                </Title>
                <iframe
                    style={{}}
                    src={`https://www.youtube.com/embed/lFkVMuHx7Mo`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube Video"
                />
            </>
        );
    }
}
export default Redirect(ManualContent);