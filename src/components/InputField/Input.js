// InputField component
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Input.css';
class InputField extends Component{
    constructor(props){
        super(props);
        this.input = props.children;
        this.icon = props.icon;
    }
    render(){
        return (
            <div className="input-field">
                <FontAwesomeIcon icon={this.icon} />
                {this.input}
            </div>
        );
    }
}
export default InputField;