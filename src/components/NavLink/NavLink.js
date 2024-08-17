import React, { Component } from 'react';
import './NavLink.css';
class NavLink extends Component {
    constructor(props) {
        super(props);
        this.Link = props.Link;
        this.Title = props.Title;
        this.isActive = props.isActive;
        this.Icon = props.Icon;
        this.children = props.children;
        console.log(this.isActive);
    }
    render() {
        return (
            <li className="nav-item">
                <a href={this.Link} className={`nav-link ${this.isActive ? 'nav-link-active' : ''}`} title={this.Title}>
                    <i className={this.Icon} />
                    <span className="link-text">{this.children}</span>
                </a>
            </li>
        );
    }
}
export default NavLink;