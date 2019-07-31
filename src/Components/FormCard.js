import React from 'react';
import {Card, Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const FormCard = (props) => {
    return (
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey={props.eKey} onClick={()=>props.onChange(props.formTitle)}>
            {props.formTitle}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.eKey}>
            <Card.Body>
                {props.children}              
            </Card.Body>
        </Accordion.Collapse>
    </Card>
    )
}

export default FormCard;
