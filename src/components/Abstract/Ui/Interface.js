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