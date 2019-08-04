import React from 'react';
import { connect } from 'react-redux';

import makeCheckboxGroup  from '../../../DataHandlers/makeCheckboxGroup';
import { GENDER_CHECK, CHECK_AGE } from '../../../Reducers/actions';

const MembersOfThePublic = ({genderFlags, ageFlags, dispatch}) => {
    const genderCheckboxData = {
        legend: 'Gender',
        labels: ['Male', 'Female', 'Transgender'],
        stateProp: genderFlags, 
        action: GENDER_CHECK, 
        changed: dispatch
    }
    const ageCheckboxData = {
        legend: 'Age Group',
        labels: ['0-2', '3-12', '13-18', '19-39', '40-59', '60+'],
        stateProp: ageFlags,
        action: CHECK_AGE,
        changed: dispatch
    }
    return (
        <div>
            <h3>Members of the public</h3>
            {makeCheckboxGroup(genderCheckboxData)}
            {makeCheckboxGroup(ageCheckboxData)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        genderFlags: state.WhoAtRisk.memPub.genderFlags,
        ageFlags: state.WhoAtRisk.memPub.ageFlags,
        // maleChecked: state.WhoAtRisk.memPub.male,
        // femaleChecked: state.WhoAtRisk.memPub.female,
        // transChecked: state.WhoAtRisk.memPub.transgender
    }
}

export default connect(mapStateToProps)(MembersOfThePublic);