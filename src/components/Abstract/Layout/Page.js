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
import { Context } from '../../../config/Provider/GlobalConfig';
import { Helmet } from "react-helmet";
import GlobalContainer from '../../../services/DI/Container';
class PageLayout extends Component {
    static contextType = Context;
    constructor(props) {
        super(props);
        this.title = props.title;
        this.bodycontent = props.children;
        this.link = this.getPath();
        this.state = {
            firstRender: true
        };
    }
    isDark() {
        let theme = false;
        if (this.state.firstRender) {
            theme = GlobalContainer.resolve('Storages').get('globalconfig').theme || false;
            this.state.firstRender = false;
        } else {
            theme = this.context.config.theme;
        }
        return theme === true;
    }
    getPath() {
        return document.location.href;
    }
    render() {
        return (
            <>
                <Helmet>
                    <meta charset="utf-8" />
                    <title>{this.title} - SIGA 2.0</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="canonical" href={this.link} />
                    <meta name="keywords" content="grade, horário, grade curricular, grade de aulas, horário de aulas, matérias, cursos, grade de matérias" />
                    <meta name="author" content="BRUNO VENANCIO ALVES, RAFAEL MEDEIROS SOBRINHO" />
                    <meta name="description" content={`Página de ${this.title} de aulas do aluno`} />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"></link>
                    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
                </Helmet>
                <div className={`${this.title} uipage ${this.isDark() ? ' dark-theme' : ''}`}>
                    {this.bodycontent}
                </div>
            </>
        );
    }
}
export default PageLayout;