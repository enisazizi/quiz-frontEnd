import React from 'react'
import { FormControl, Button, Form, Row, Col, Container } from "react-bootstrap";
import {getExamScore} from "../Api/exams"
import Question from "./Question"
export default class Home extends React.Component{
    state={
        questions:null,
        answer:null,
        exam:null,
    }
    componentDidMount = async()=>{
        this.getExams()
    }
    getExams = async()=>{
        const response = await getExamScore(this.props.match.params.id)
        this.setState({exam:response})
        this.setState({questions:response.question})
        console.log(this.state.exam)
    }
    render(){
        return(
            <Container>
            <div>
                
                <Row>
                    
                    {this.state.questions &&
                    this.state.questions.map((something)=>(
                        
                        <Question obj={something} ex={this.state.exam}></Question>
                      
                    ))}
                    
                   
                    
                </Row>

            </div>
            </Container>
        )
    }
}