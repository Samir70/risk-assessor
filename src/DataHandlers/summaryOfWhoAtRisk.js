import React from 'react';

const peopleAtRiskSentence = (people) => {
    if (people.length===0) {return 'So far: no-one is at risk.'}
    if (people.length===1) {return people[0]+' is at risk.'}
    return people.slice(0, -1).join(', ')+' and '+people.slice(-1)+' are at risk.'
}

const genderSentence = ({male, female, transgender}) => {
    var genderList = [];
    if (male) { genderList.push('men') }
    if (female) { genderList.push('women') }
    if (transgender) { genderList.push('transgender people') }
    switch (genderList.length) {
        case 0 : return 'The offender is not a danger to members of the public based on gender.'
        case 1 : return 'The offender is a danger to '+genderList[0]+'.'
        case 2 : return 'The offender is a danger to '+genderList[0]+' and '+genderList[1]+'.'
        case 3 : return 'The offender is a danger to '+genderList[0]+', '+genderList[1]+' and '+genderList[2]
        default : return 'The offender is a danger to more genders than I was aware of.'
    }
}

const summaryOfWhoAtRisk = (formData) => {
    const knownAdultsSentence = peopleAtRiskSentence(formData.summary.peopleAtRisk);
    const membersOfPublicSentence = genderSentence(formData.memPub)
    return (
        <div>
            <p>{membersOfPublicSentence}</p>
            <p>{knownAdultsSentence}</p>
        </div>
    )
}

export default summaryOfWhoAtRisk;