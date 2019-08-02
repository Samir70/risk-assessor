import React from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const WhoAtRiskForm = (props) => {
    const personAtRiskInput = React.createRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        var personAtRisk = personAtRiskInput.current.value.trim();
        if (props.peopleAtRisk.includes(personAtRisk)) {
            alert('The list of people at risk already includes '+personAtRisk)
        } else {
            if (personAtRisk) {
                props.dispatch({type:'ADD_PERSON_AT_RISK', person:personAtRisk});
                personAtRiskInput.current.value = '';
            }
        }
    }

    const updateFormText = (people) => {
        if (people.length===0) {return 'So far: no-one is at risk.'}
        if (people.length===1) {return people[0]+' is at risk.'}
        return people.slice(0, -1).join(', ')+' and '+people.slice(-1)+' are at risk.'
    }

    props.dispatch({type:'UPDATE_AT_RISK_TEXT', newText: updateFormText(props.peopleAtRisk)})

    const peopleList = props.peopleAtRisk.map((person, i) => <li key={i}>{person}</li>);

    console.log('WhoAtRiskForm');

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
            <hr />
            <h3>People at Risk</h3>
            {props.peopleAtRisk.length === 0 ? <p>No-one currently listed</p> : <ul>{peopleList}</ul>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        peopleAtRisk: state.WhoAtRisk.peopleAtRisk
    }
}

export default connect(mapStateToProps)(WhoAtRiskForm);