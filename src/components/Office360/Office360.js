import React, { Component } from 'react';
import './Office.css';
class Office360 extends Component {
    constructor(props){
        super(props);
        this.Email = props.Email;
    }
    render() {
        return (
            <div className="content-office">
            <div className="office-title">
                <h2 className="office-title-text">Office 365</h2>
            </div>
            <div className="office-text">
                <span>
                    <b>Email Institucional:</b>
                    <a href={'mailto:' + this.Email} className="office-link">{this.Email}</a>
                </span>
                <span>
                    <b>Termos de uso:</b>
                    <a href="https://www.microsoft.com/pt-br/microsoft-365/business/terms-and-conditions" className="office-link">Clique aqui</a>
                </span>
            </div>
            <div className="office-footer">
                <p className="office-title-text">Outros benefícios:</p>
                <a href="https://www.office.com/" className="office-link">Clique aqui</a>
            </div>
        </div>
        );
    }
}
export default Office360;