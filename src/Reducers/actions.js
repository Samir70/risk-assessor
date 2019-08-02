
// for WhoAtRisk data
export const UPDATE_AT_RISK_TEXT = 'UPDATE_AT_RISK_TEXT';
export const updateAtRisk = (summary) => {
    return {
        type : UPDATE_AT_RISK_TEXT,
        newSummary: summary
    }
}

export const ADD_KNOWN_PERSON_AT_RISK = 'ADD_PERSON_AT_RISK';
export const addKnownPersonAtRisk = (person) => {
    return {
        type: ADD_KNOWN_PERSON_AT_RISK, 
        person: person
    }
}

export const CHECK_MALE = 'CHECK_MALE';