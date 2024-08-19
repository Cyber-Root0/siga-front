import React, { Component } from 'react';
import UInterface from '../../components/Abstract/Ui/Interface';
import UserProfile from '../../components/UserProfile/Profile';
import './Matricula.css';
class Matricula extends Component {
    render() {
        return (
            <UInterface Name={'Matricula'}>
                <UserProfile />
            </UInterface>
        );
    }
}

export default Matricula;
