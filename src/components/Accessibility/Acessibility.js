import React, { Component } from 'react';
import AcessibilityLink from './Link';
import './Style.css';
class Acessibility extends Component {
    render() {
        return (
            <div className="accessibility">
                <AcessibilityLink Title="Acessibilidade">
                    <i className="uil uil-accessible-icon-alt accessibility-icon"></i>
                </AcessibilityLink>
                <AcessibilityLink Title="Modo Constraste">
                    <button className="contrast" role="switch" aria-checked="false" id="contrast">
                    </button>
                </AcessibilityLink>
                <AcessibilityLink Title="Aumentar Fonte">
                    <i className="uil uil-letter-english-a accessibility-icon"></i>
                    <sup>
                        <i className="uil uil-plus"></i>
                    </sup>
                </AcessibilityLink>
                <AcessibilityLink Title="Diminuir Fonte">
                    <i className="uil uil-letter-english-a accessibility-icon"></i>
                    <sup>
                        <i className="uil uil-minus"></i>
                    </sup>
                </AcessibilityLink>
            </div>
        );
    }
}
export default Acessibility;