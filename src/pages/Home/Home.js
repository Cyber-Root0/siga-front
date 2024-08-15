// Home component
import React, { Component } from 'react';
import PageLayout from '../../components/Abstract/Layout/Page';
import FormLogin from '../../components/FormLogin/FormLogin';
import Panel from '../../components/FormLogin/Panel/Panel';
import './Home.css';
import './Animations.css';
class Home extends Component {
    constructor(props){
        super(props);
        this.IsTeacher = true;
    }
    onChangeUser = () => {
        alert(1);
        if (this.IsTeacher){
            this.IsTeacher = false;
        }else{
            this.IsTeacher = true;
        }
    }
    render() {
        return (
            <PageLayout title={'Home'} >
                <div className={this.IsTeacher ? 'container sign-up-mode' : 'container' }>
                    <FormLogin
                    />
                </div>
                <div className='panels-container'>
                    <Panel
                        direction={'left'}
                        title={'É um professor?'}
                        description={'Está do lado errado desse form, só clicar no botão que será levado ao local correto'}
                        IsRegister={false}
                        button={'Login - Prof.'}
                        onChangeUser={this.onChangeUser}
                    />
                    <Panel
                        direction={'right'}
                        title={'É um aluno??'}
                        description={'Está do lado errado desse form, só clicar no botão que será levado ao local correto'}
                        IsRegister={true}
                        button={'Login - Aluno'}
                        onChangeUser={this.onChangeUser}
                    />
                </div>
            </PageLayout>
        );
    }
}
export default Home;