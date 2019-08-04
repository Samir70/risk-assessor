import React from 'react';
import { connect } from 'react-redux';
import { Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { CHECK_MALE, CHECK_FEMALE, CHECK_TRANS } from '../../../Reducers/actions';

const MembersOfThePublic = ({maleChecked, femaleChecked, transChecked, dispatch}) => {
    return (
        <div>
            <h3>Members of the public</h3>
            <fieldset>
              <Form.Group as={Row} >
                  <Form.Label as={'legend'} column sm={3} >
                      Gender
                  </Form.Label>
                  <Col sm={9}>
                      <Form.Check inline type='checkbox' 
                        label='Male' 
                        checked={maleChecked}
                        onChange={()=>dispatch({type:CHECK_MALE})} />
                      <Form.Check inline type='checkbox' 
                        label='Female'
                        checked={femaleChecked}
                        onChange={()=>dispatch({type:CHECK_FEMALE})} />
                      <Form.Check inline type='checkbox' 
                        label='Transgender'
                        checked={transChecked}
                        onChange={()=>dispatch({type:CHECK_TRANS})} />
                  </Col>
              </Form.Group>
            </fieldset>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        maleChecked: state.WhoAtRisk.memPub.male,
        femaleChecked: state.WhoAtRisk.memPub.female,
        transChecked: state.WhoAtRisk.memPub.transgender
    }
}

export default connect(mapStateToProps)(MembersOfThePublic);