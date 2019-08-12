import React from 'react';
import { 
    UPDATE_OFFENDER_FIRST_NAME, 
    UPDATE_OFFENDER_SECOND_NAME,
    UPDATE_OFFENDER_REFERENCE,
    SET_OFFENDER_PRONOUN 
} from '../../Reducers/actions';
import { Form, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

const OffenderData = ({firstName, secondName, offenderRef, dispatch}) => {
    const offenderFirstName = React.createRef();
    const offenderSecondName = React.createRef();
    const offenderReference = React.createRef();
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <Form onSubmit={handleSubmit} >
            <Form.Group as={Row}>
                <Col sm={6}>
                  <Form.Control 
                    type='text'
                    placeholder='First Name'
                    ref={offenderFirstName} 
                    value={firstName}
                    onChange={()=>dispatch({type: UPDATE_OFFENDER_FIRST_NAME, 
                      payload:offenderFirstName.current.value})} />
                </Col>
                <Col sm={6}>
                  <Form.Control 
                    type='text'
                    placeholder='Second Name'
                    ref={offenderSecondName} 
                    value={secondName}
                    onChange={()=>dispatch({type:UPDATE_OFFENDER_SECOND_NAME, 
                      payload:offenderSecondName.current.value})} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label as='legend' column sm={4} >
                    Alternative to full name:
                </Form.Label>
                <Col sm={8}>
                  <Form.Control 
                    type='text'
                    placeholder='reference'
                    ref={offenderReference} 
                    value={offenderRef}
                    onChange={()=>dispatch({type:UPDATE_OFFENDER_REFERENCE, 
                      payload:offenderReference.current.value})} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} >
                    <Form.Label as='legend' column sm={4}>
                        Pronoun to use:
                    </Form.Label>
                <Col sm={8}>
                    <Form.Check inline
                      type='radio'
                      label='he'
                      name='offenderPronoun'
                      onChange={()=>dispatch({type:SET_OFFENDER_PRONOUN, payload:'he'})} />
                    <Form.Check inline
                      type='radio'
                      label='she'
                      name='offenderPronoun'
                      onChange={()=>dispatch({type:SET_OFFENDER_PRONOUN, payload:'she'})} />
                </Col>
            </Form.Group>
        </Form>
    )
}

const mapStateToProps = (state) => {
    return {
        firstName: state.OffenderData.firstName,
        secondName: state.OffenderData.secondName,
        offenderRef: state.OffenderData.offenderRef
    }
}

export default connect(mapStateToProps)(OffenderData);
