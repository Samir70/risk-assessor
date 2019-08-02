import React from 'react';
import { connect } from 'react-redux';
import { addKnownPersonAtRisk } from '../../../Reducers/actions';
import MembersOfThePublic from './MembersOfThePublic';
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
                props.dispatch(addKnownPersonAtRisk(personAtRisk));
                personAtRiskInput.current.value = '';
            }
        }
    }

    const peopleList = props.peopleAtRisk.map((person, i) => <li key={i}>{person}</li>);

    console.log('WhoAtRiskForm');

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <MembersOfThePublic />
                
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
        peopleAtRisk: state.WhoAtRisk.summary.peopleAtRisk
    }
}

export default connect(mapStateToProps)(WhoAtRiskForm);