const initialWhoAtRisk = {  
    formSummary: 'initial summary, should be changed before anyone sees it.',
    peopleAtRisk: []
}

const whoAtRiskReducer = (state = initialWhoAtRisk, action) => {
    console.log('whoAtRiskReducer called ', state, action);
    switch (action.type) {
        case 'ADD_PERSON_AT_RISK' : return {
            ...state,
            peopleAtRisk: state.peopleAtRisk.concat(action.person)
        }
        case 'UPDATE_AT_RISK_TEXT' : return {
            ...state,
            formSummary: action.newText
        }
        default: return state;
    }
}

export default whoAtRiskReducer;