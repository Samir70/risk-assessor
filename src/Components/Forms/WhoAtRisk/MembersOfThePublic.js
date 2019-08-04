import React from 'react';
import { connect } from 'react-redux';

import makeCheckboxGroup  from '../../../DataHandlers/makeCheckboxGroup';
import { GENDER_CHECK } from '../../../Reducers/actions';

const parseAgeFlags = (str) => [...str].map(c => c==='1'?true:false);

const MembersOfThePublic = ({genderFlags, dispatch}) => {
    const genderCheckboxData = {
        legend: 'Gender',
        labels: ['Male', 'Female', 'Transgender'],
        stateProp: genderFlags, 
        action: GENDER_CHECK, 
        changed: dispatch
    }
    const ageCheckboxData = {
        legend: 'Age Group',
        labels: ['0-2', '3-12', '13-18', '19-40', '40-60', '60+'],
        stateProp: parseAgeFlags('110000'),
        actions: ['CHECK_AGE'],
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
        genderFlags: state.WhoAtRisk.memPub.genderFlags
        // maleChecked: state.WhoAtRisk.memPub.male,
        // femaleChecked: state.WhoAtRisk.memPub.female,
        // transChecked: state.WhoAtRisk.memPub.transgender
    }
}

export default connect(mapStateToProps)(MembersOfThePublic);