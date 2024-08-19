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
import PageLayout from '../Layout/Page';
import Header from '../../Header/Header';
import './Ui.css';
class UInterface extends Component {
    constructor(props){
        super(props);
        this.Name = props.Name;
        this.Child = props.children;
    }
    render() {
        return (
            <PageLayout title={this.Name} >
                <Header />
                <main>
                    <div className='content ui'>
                        {this.Child}
                    </div>
                </main>
            </PageLayout>
        );
    }
}
export default UInterface;