import React from "react";
import {Container, Row, Col, Button, CardTitle, Card, CardText} from 'reactstrap';
import style from '../TestandoAPI/TestandoAPI.module.css'




class TestandoAPI extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            funcionarios:[]
        }

        this.busca = this.busca.bind(this)
        // this.construindoEventos = this.construindoEventos.bind(this);

    }

    busca(){
    const funcionarios = fetch("http://localhost:4200/funcionarios");
    const funcionariosJson = funcionarios.json();
    this.setState({funcionarios:funcionariosJson})
    };


    // construindoEventos() {
    //      return this.cards.map((card)=>{
    //         return (<Col className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 d-flex justify-content-center'><Card className={`${style.cardUnico} my-3 my-xl-0`} style={{width: '19rem'}}>
    //         <CardTitle tag='h5'>{card.nome_funcionario}</CardTitle>
    //         <CardText>{card.email_funcionario}</CardText>
    //         <Button className={style.botaoCard}>Ver Mais</Button>
    //         </Card></Col>)
    //     })

    // }

    render() {
        return <Container className={style.caixaCards} fluid>
            <Row className="my-5">
                <button onClick={this.busca}>Get</button>
                <h1>{this.state.funcionarios}</h1>
            </Row>
            </Container>
        }
}



export default TestandoAPI;