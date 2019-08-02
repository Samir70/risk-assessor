import { UPDATE_AT_RISK_TEXT, ADD_KNOWN_PERSON_AT_RISK } from './actions';
import { CHECK_MALE } from './actions';
import { combineReducers } from 'redux';

const initialWhoAtRisk = {  
    formSummary: 'initial summary, should be changed before anyone sees it.',
    peopleAtRisk: []
}

const summaryReducer = (state = initialWhoAtRisk, action) => {
    console.log('whoAtRiskReducer called ', state, action);
    switch (action.type) {
        case ADD_KNOWN_PERSON_AT_RISK : return {
            ...state,
            peopleAtRisk: state.peopleAtRisk.concat(action.person)
        }
        case UPDATE_AT_RISK_TEXT : return {
            ...state,
            formSummary: action.newSummary
        }
        default: return state;
    }
}

const initialMemPubForm = {
    male: false,
    female : false,
    transgender : false
}
const memPubReducer = (state = initialMemPubForm, action) => {
    switch (action.type) {
        case CHECK_MALE : return {
            ...state,
            male: !state.male
        }
        default: return state;
    }
}

const whoAtRiskReducer = combineReducers({
    summary: summaryReducer,
    memPub: memPubReducer
})

export default whoAtRiskReducer;