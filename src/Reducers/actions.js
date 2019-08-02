// actions for the general reducer
export const CHANGE_SECTION = 'CHANGE_SECTION';
export const changeSection = (section, ID) => {
    return {
        type: CHANGE_SECTION,
        newSection: section,
        formID: ID
    }
}


// for WhoAtRisk data
export const ADD_KNOWN_PERSON_AT_RISK = 'ADD_PERSON_AT_RISK';
export const addKnownPersonAtRisk = (person) => {
    return {
        type: ADD_KNOWN_PERSON_AT_RISK, 
        person: person
    }
}

export const CHECK_MALE = 'CHECK_MALE';
export const CHECK_FEMALE = 'CHECK_FEMALE';
export const CHECK_TRANS = 'CHECK_TRANS';