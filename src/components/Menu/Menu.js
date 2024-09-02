import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../config/Provider/GlobalConfig';
import Redirect from '../../services/Browser/Browser';
import GlobalContainer from '../../services/DI/Container';
import NavLink from '../NavLink';
import './Menu.css';

const Menu = ({ navigate }) => {
    const { setConfig } = useContext(Context);
    const [globalConfig, setGlobalConfig] = useState('');

    useEffect(() => {
        setGlobalConfig(GlobalContainer.resolve('Storages').get('globalconfig'));
    }, []);

    const defineMenu = async (id) => {
        await setConfig({ menu: id });
    };

    const verify = (id) => {
        return globalConfig.menu === id;
    };

    const logout = () => {
        const loginService = GlobalContainer.resolve('Logins');
        loginService.logout();
        navigate('/');
    };
    const chageTheme = () => {
        setConfig({
            theme: !isDark()
        });
    };
    const isDark = () => {
        const { theme } = GlobalContainer.resolve('Storages').get('globalconfig');
        return theme === true;
    };
    const menuItems = [
        { link: "/aluno/", title: "Matricula", id: "matricula", icon: "bi bi-info-circle link-icon" },
        { link: "/aluno/consultas", title: "Consultas", id: "consulta", icon: "bi bi-search link-icon" },
        { link: "/aluno/agenda/avaliacoes", title: "Provas", id: "prova", icon: "bi bi-calendar4-event link-icon" },
        { link: "/aluno/agenda/horarios", title: "Horários", id: "horario", icon: "bi bi-calendar4-event link-icon" },
        { link: "/aluno/disciplinas", title: "Disciplinas", id: "disciplinas", icon: "bi bi-chat-square-text link-icon" },
        { link: "", title: "Plano de Ensino", id: "planoensino", icon: "bi bi-book link-icon" },
        { link: "", title: "Manual", id: "manual", icon: "bi bi-question-octagon link-icon" },
        { link: "", title: "Suporte", id: "suporte", icon: "bi bi-telephone-outbound link-icon" }
    ];
    return (
        <nav className="nav">
            <a className="nav-logo" title="Siga 2.0"></a>
            <div className="nav-menu" id="nav-menu">
                <ul className="nav-list">
                    {menuItems.map(({ link, title, id, icon }) => (
                        <NavLink
                            key={id}
                            Link={link}
                            Title={title}
                            isActive={verify(id)}
                            Icon={icon}
                            CallBack={() => defineMenu(id)}
                        >
                            {title}
                        </NavLink>
                    ))}
                    <li className="nav-item nav-item-theme" onClick={chageTheme}>
                        <a href="#" className="nav-link" id="change-theme" title="Mudar Tema">
                            <button className={`checkbox ${isDark() ? 'on' : ''}`} role="switch" aria-checked="true" id="checkbox"></button>
                            <span className="link-text">Mudar Tema</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="nav-options">
                <a href="#" className="nav-link" title="Fazer logout" onClick={logout}>
                    <i className="bi bi-x-circle-fill link-icon link-exit"></i>
                    <span className="link-text">Sair</span>
                </a>
                <i className="bi bi-list menu-burger" id="nav-toggle"></i>
            </div>
        </nav>
    );
};

export default Redirect(Menu);
