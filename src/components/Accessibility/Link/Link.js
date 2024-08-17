import React, { Component } from 'react';
import './Link.css';
class AcessibilityLink extends Component {
    constructor(props){
        super(props);
        this.Component = props.children;
        this.Title = props.Title;
    }
    render(){
        return (
            <a href="#" className="accessibility-link" title={this.Title}>
                {this.Component}
            </a>
        );
    }
}
export default AcessibilityLink;