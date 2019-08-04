import React from 'react';
import { genderTextArray, agesTextArray } from '../Reducers/whoAtRiskReducer';

const peopleAtRiskSentence = (people) => {
    if (people.length===0) {return 'So far: no-one is at risk.'}
    if (people.length===1) {return people[0]+' is at risk.'}
    return people.slice(0, -1).join(', ')+' and '+people.slice(-1)+' are at risk.'
}

const flagsToText = (topic, flags, textArray) => {
    var includeList = [];
    for (var i in flags) {
        if (flags[i]) { includeList.push(textArray[i]) }
    }

    switch (includeList.length) {
        case 0 : return 'The offender does not choose victims based on ' + topic+'.';
        case 1 : return 'The offender poses a risk to '+includeList[0]+'.';
        case 2 : return 'The offender poses a risk to '+includeList[0]+' and '+includeList[1]+'.';
        default: return 'The offender poses a risk to '
              +includeList.slice(0, -1).join(', ')+' and '
              +includeList[includeList.length-1]+'.'
    }
}

const summaryOfWhoAtRisk = (formData) => {
    const knownAdultsSentence = peopleAtRiskSentence(formData.summary.peopleAtRisk);
    const membersOfPublicSentence = 
        flagsToText('gender', formData.memPub.genderFlags, genderTextArray) + '  '+
        flagsToText('age', formData.memPub.ageFlags, agesTextArray);
    return (
        <div>
            <p>{membersOfPublicSentence}</p>
            <p>{knownAdultsSentence}</p>
        </div>
    )
}

export default summaryOfWhoAtRisk;