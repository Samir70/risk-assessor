import React from 'react';
import { connect } from 'react-redux';
import { Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const MembersOfThePublic = ({maleChecked}) => {
    return (
        <div>
            <h3>Members of the public</h3>
            <Form>
              <fieldset>
                <Form.Group as={Row} >
                    <Form.Label as={'legend'} column sm={3} >
                        Gender
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Check inline type='checkbox' label='Male' checked={maleChecked} />
                        <Form.Check inline type='checkbox' label='Female' />
                        <Form.Check inline type='checkbox' label='Transgender' />
                    </Col>
                </Form.Group>
              </fieldset>
            </Form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        maleChecked: state.WhoAtRisk.memPub.male
    }
}

export default connect(mapStateToProps)(MembersOfThePublic);