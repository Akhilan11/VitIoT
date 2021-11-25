import React from 'react'

import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button, Col, Row } from 'react-bootstrap';


function PatientSignup() {
    return (
        
            
            <div className="App">

            <Card style={{ width: "30rem" }}>

                <Card.Img variant="top" src="" />

                <Card.Body>

                <Card.Title style={{ textAlign: "center" }}>Patient Signup</Card.Title>
                <hr />
                <div>
                    <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInputCustom">Email address</label>
                    </Form.Floating>
                    <Form.Floating>
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="password"
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPasswordCustom">Password</label>

                    <p className="justify-content-md-center" style={{ textAlign: "center", marginTop: "1em", marginBottom:"2em" }}>Already Having account? Login</p> 

                    <Row className="justify-content-md-center" >
                        
                        <Button variant="primary" type="submit" style={{width:"8em"}}>
                        Signup
                        </Button>
                        
                    </Row>

                    </Form.Floating>
                </div>

                </Card.Body>

            </Card>


        </div>
    )
}

export default PatientSignup



