import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import {answerExam,getExamScore} from "../Api/exams"


export default class Question extends React.Component{
    state={
        answer:this.props.obj.answers,
        correct:0,
        isCompleted:this.props.ex.isCompleted,
        counter:0

        mybody:{}
    }
    
    handleSubmit = async(index)=>{
       this.setState({correct:index})
       console.log(index)
        const response = await answerExam(this.props.ex._id,this.state.correct,this.state.mybody)
        console.log(this.props.ex._id)
        this.state.counter+=1
    }
    // componentDidUpdate = async()=>{
    //     await getExamScore(this.props.ex._id)
    // }

    
    render(){
        return(
            <>
            {!this.state.isCompleted ? (
            <Col xs={12}>
                <h5>{this.props.obj.text}</h5>
                <Form onSubmit={this.handleSubmit}>
                <Row>
                   
                    {this.state.answer.map((singleAnswer,index)=>(
                    <Col xs={6} className="mt-4">
                       <Button tybe="submit" onClick={()=> this.handleSubmit(index)}> {singleAnswer.text}</Button>
                      
                    {/* <select name="name">
                        <option>John</option>
                        <option>Henry</option>
                    <select> */}
                
                
                                    
                    </Col>
                    ))}
                 
                </Row>
                </Form>
                </Col>
            ): (
                <div>
                <h5>Your score is {this.props.ex.score} </h5>
                </div>
               
            )}
                </>
        )
    }
}