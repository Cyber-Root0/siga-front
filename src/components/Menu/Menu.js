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
import NavLink from './../NavLink';
import './Menu.css';
class Menu extends Component {
    render() {
        return (
            <nav className="nav">
                <a href="#" className="nav-logo" title="Siga 2.0"></a>
                <div className="nav-menu" id="nav-menu">
                    <ul className="nav-list">
                        <NavLink
                            Link="/aluno/"
                            Title="Matricula"
                            isActive={true}
                            Icon="bi bi-info-circle link-icon" >
                            Matricula
                        </NavLink>
                        <NavLink
                            Link="/aluno/consultas"
                            Title="Consultas"
                            IsActive={true}
                            Icon="bi bi-search link-icon" >
                            Consultas
                        </NavLink>
                        <NavLink
                            Link=""
                            Title="Matricula"
                            IsActive={true}
                            Icon="bi bi-calendar4-event link-icon" >
                            Agenda
                        </NavLink>
                        <NavLink
                            Link=""
                            Title="Matricula"
                            IsActive={true}
                            Icon="bi bi-shield-check link-icon" >
                            Segurança
                        </NavLink>
                        <NavLink
                            Link=""
                            Title="Matricula"
                            IsActive={true}
                            Icon="bi bi-chat-square-text link-icon" >
                            Solicitações
                        </NavLink>
                        <NavLink
                            Link=""
                            Title="Matricula"
                            IsActive={true}
                            Icon="bi bi-file-earmark-arrow-up link-icon" >
                            Upload Arquivos
                        </NavLink>
                        <NavLink
                            Link=""
                            Title="Matricula"
                            IsActive={true}
                            Icon="bi bi-book link-icon" >
                            Plano de Ensino
                        </NavLink>
                        <NavLink
                            Link=""
                            Title="Matricula"
                            IsActive={true}
                            Icon="bi bi-folder2-open link-icon" >
                            Matriz Inglês
                        </NavLink>
                        <li className="nav-item nav-item-theme">
                            <a href="#" className="nav-link" id="change-theme" title="Mudar Tema">
                                <button className="checkbox" role="switch" aria-checked="false" id="checkbox">
                                </button>
                                <span className="link-text">Mudar Tema</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="nav-options">
                    <a href="../index.html" className="nav-link" title="Fazer logout">
                        <i className="bi bi-x-circle-fill link-icon link-exit"></i>
                        <span className="link-text">Sair</span>
                    </a>
                    <i className="bi bi-list menu-burger" id="nav-toggle"></i>
                </div>
            </nav>
        );
    }
}
export default Menu;