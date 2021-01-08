import React from 'react'
import { FormControl, Button, Form } from "react-bootstrap";
import {startTest} from "../Api/exams"

export default class Start extends React.Component{

    state = {
        quiz :{candidateName:""},
    }
    handleChange = (e)=>{
        this.setState({
            quiz :{candidateName: e.currentTarget.value} 

        })
    }
    handleSubmit = async(e)=>{
        e.preventDefault()
        const response = await startTest(this.state.quiz)
        console.log(response._id)
        this.props.history.push(`/quiz/${response._id}`)
    }
    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                    <Form.Label>Example select</Form.Label>
                        <Form.Control 
                        size="lg" 
                        type="text"
                         placeholder="Canditade name"
                         id="name"
                         onChange={this.handleChange}

                         ></Form.Control>
                    </Form.Group>
                    <Button variant="primary"  type="submit">
                 Start Exam
                </Button>
                </Form>
            </div>
        )
    }
}