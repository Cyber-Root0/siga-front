import React, { Component } from 'react';
import Acessibility from '../Accessibility/Acessibility';
import Menu from '../Menu/Menu';
import './Header.css';
class Header extends Component {
    render(){
        return (
            <header>
                <Acessibility />
                <Menu />
            </header>
        );
    }
}
export default Header;