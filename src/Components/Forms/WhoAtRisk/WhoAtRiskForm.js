import React from 'react';

import MembersOfThePublic from './MembersOfThePublic';
import KnownAdults from './KnownAdults';

const WhoAtRiskForm = (props) => {
    console.log('WhoAtRiskForm');

    return (
        <div>
            <MembersOfThePublic />
            <hr />
            <KnownAdults />
        </div>
    )
}



export default WhoAtRiskForm;