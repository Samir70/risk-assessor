import React from 'react';
import {Card, Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const FormCard = (props) => {
    return (
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey={props.Key} onClick={()=>props.onChange(props.formTitle)}>
            {props.formTitle}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.Key}>
            <Card.Body>
                {props.children}              
            </Card.Body>
        </Accordion.Collapse>
    </Card>
    )
}

export default FormCard;
