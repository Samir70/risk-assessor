import React from 'react';
import {Card, Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const FormCard = (props) => {
    return (
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey={props.formKey}>
            {props.formTitle}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.formKey}>
            <Card.Body>
                {props.formBody}              
            </Card.Body>
        </Accordion.Collapse>
    </Card>
    )
}

export default FormCard;
