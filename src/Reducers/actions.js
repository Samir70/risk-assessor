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

export const GENDER_CHECK = 'GENDER_CHECK';
export const CHECK_AGE = 'CHECK_AGE';
export const CHECK_CHILD_TYPE = 'CHECK_CHILD_TYPE';

//for offender data
export const UPDATE_OFFENDER_FIRST_NAME = 'UPDATE_OFFENDER_FIRST_NAME';
export const UPDATE_OFFENDER_SECOND_NAME = 'UPDATE_OFFENDER_SECOND_NAME';
export const SET_OFFENDER_PRONOUN = 'SET_OFFENDER_PRONOUN';
export const UPDATE_OFFENDER_REFERENCE = 'UPDATE_OFFENDER_REFERENCE'; 
