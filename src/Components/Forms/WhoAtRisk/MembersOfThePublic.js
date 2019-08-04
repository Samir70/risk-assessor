import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


import makeCheckboxGroup  from '../../../DataHandlers/makeCheckboxGroup';
import { GENDER_CHECK, CHECK_AGE, CHECK_CHILD_TYPE } from '../../../Reducers/actions';
import { genderLabels, ageLabels, childTypeLabels } from '../../../Reducers/whoAtRiskReducer'

const MembersOfThePublic = ({genderFlags, ageFlags, childTypeFlags, dispatch}) => {
    const genderCheckboxData = {
        legend: 'Gender',
        labels: genderLabels,
        stateProp: genderFlags, 
        action: GENDER_CHECK, 
        changed: dispatch
    }
    const ageCheckboxData = {
        legend: 'Age Group',
        labels: ageLabels,
        stateProp: ageFlags,
        action: CHECK_AGE,
        changed: dispatch
    }
    const typeOfchildren = {
        legend: '',
        labels: childTypeLabels,
        stateProp: childTypeFlags,
        action: CHECK_CHILD_TYPE,
        changed: dispatch
    }
    const relToOffender = {
        legend: 'Relationship to offender',
        labels: ['family members', 'friends', 'stranger', 'future partner', 'co-worker', 'house-mate', 'neighbour'],
        stateProp: ageFlags,
        action: 'CHECK_REL',
        changed: dispatch
    }
    
    return (
        <Form>
            <h3>Members of the public</h3>
            {makeCheckboxGroup(genderCheckboxData)}
            {makeCheckboxGroup(ageCheckboxData)}
            {(ageFlags[0]||ageFlags[1]||ageFlags[2]) && makeCheckboxGroup(typeOfchildren)}
            {makeCheckboxGroup(relToOffender)}
        </Form>
    )
}

const mapStateToProps = (state) => {
    return {
        genderFlags: state.WhoAtRisk.memPub.genderFlags,
        ageFlags: state.WhoAtRisk.memPub.ageFlags,
        childTypeFlags: state.WhoAtRisk.memPub.childTypeFlags
    }
}

export default connect(mapStateToProps)(MembersOfThePublic);