import React, { Component } from 'react';
import './Title.css';
class Title extends Component {
    constructor(props){
        super(props);
        this.Child = props.children;
    }
    render() {
        return (
                <h1 className="content-title">
                    {this.Child}
                </h1>
        );
    }
}
export default Title;