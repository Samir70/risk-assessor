import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const WhoAtRiskForm = (props) => {
    const personAtRiskInput = React.createRef();
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    console.log('WhoAtRiskForm')

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control 
                      type="text" 
                      placeholder="Name of person at risk" 
                      ref={personAtRiskInput} />
                </Form.Group>
                <Button variant="primary" type="submit">Add Person At Risk</Button>
            </Form>
        </div>
    )
}

export default WhoAtRiskForm;