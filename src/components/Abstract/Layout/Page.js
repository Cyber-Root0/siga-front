//PageLayout component
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
class PageLayout extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.bodycontent = props.children;
        this.link = this.getPath();
    }
    getPath = () => {
        return document.location.href;
    }
    render() {
        return (
            <>
                <Helmet>
                <meta charset="utf-8" />
                <title>{this.title} - SIGA 2.0</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href={this.link} />
                <meta name="keywords" content="grade, horário, grade curricular, grade de aulas, horário de aulas, matérias, cursos, grade de matérias" />
                <meta name="author" content="BRUNO VENANCIO ALVES, RAFAEL MEDEIROS SOBRINHO" />
                <meta name="description" content={`Página de ${this.title} de aulas do aluno`} />
                </Helmet>
                {this.bodycontent}
            </>
        );
    }
}
export default PageLayout;