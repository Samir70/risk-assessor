import React from 'react';
import { connect } from 'react-redux';
import { addKnownPersonAtRisk } from '../../../Reducers/actions';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const KnownAdults = (props) => {
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
    return (
        <Form onSubmit={handleSubmit}>
            <h3>Known Adults</h3>
            <Form.Group>
                <Form.Control 
                  type="text" 
                  placeholder="Name of person at risk" 
                  ref={personAtRiskInput} />
            </Form.Group>
            <Button variant="primary" type="submit">Add Person At Risk</Button>
            <h3>People at Risk</h3>
            {props.peopleAtRisk.length === 0 ? <p>No-one currently listed</p> : <ul>{peopleList}</ul>}
        </Form>
    )
}

const mapStateToProps = (state) => {
    return {
        peopleAtRisk: state.WhoAtRisk.summary.peopleAtRisk
    }
}

export default connect(mapStateToProps)(KnownAdults);
