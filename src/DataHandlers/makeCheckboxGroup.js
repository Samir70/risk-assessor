import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

/* Expect data like:

const genderCheckboxData = {
    legend: 'Gender',
    labels: ['Male', 'Female', 'Transgender'],
    stateProp: [ARRAY OF BOOLEAN],
    action: ACTION THAT NEEDS AN INDEX, TO SPECIFY WHICH FLAG TO CHANGE,
    changed: dispatch
}

*/

const makeCheckboxGroup = ({legend, labels, stateProp, action, changed}) => {
    const checkboxList = labels.map((label, i) => {
        return (
            <Form.Check inline type='checkbox'
                        key={legend + i}
                        label={label}
                        checked={stateProp[i]}
                        onChange={()=>changed({type:action, genderIndex:i})} />
        )
    });

    return (
        <Form.Group as={Row} >
            <Form.Label as={'legend'} column sm={3} >
                {legend}
            </Form.Label>
            <Col sm={9}>
                {checkboxList}
            </Col>
        </Form.Group>
    )
}

export default makeCheckboxGroup;
