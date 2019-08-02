import { ADD_KNOWN_PERSON_AT_RISK } from './actions';
import { CHECK_MALE, CHECK_FEMALE, CHECK_TRANS } from './actions';
import { combineReducers } from 'redux';

const initialWhoAtRisk = {  
    peopleAtRisk: []
}

const summaryReducer = (state = initialWhoAtRisk, action) => {
    //console.log('whoAtRisk summaryReducer called ', state, action);
    switch (action.type) {
        case ADD_KNOWN_PERSON_AT_RISK : return {
            ...state,
            peopleAtRisk: state.peopleAtRisk.concat(action.person)
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
    console.log('memPubreducer called ', state, action)
    switch (action.type) {
        case CHECK_MALE : return {
            ...state,
            male: !state.male
        }
        case CHECK_FEMALE : return {
            ...state,
            female: !state.female
        }
        case CHECK_TRANS : return {
            ...state,
            transgender: !state.transgender
        }
        default: return state;
    }
}

const whoAtRiskReducer = combineReducers({
    summary: summaryReducer,
    memPub: memPubReducer
})

export default whoAtRiskReducer;