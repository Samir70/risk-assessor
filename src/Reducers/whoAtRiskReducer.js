import { ADD_KNOWN_PERSON_AT_RISK } from './actions';
import { GENDER_CHECK } from './actions';
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
    // and array of flags for the male, female, transgender checkboxes
    genderFlags : [false, false, false] 
}
const memPubReducer = (state = initialMemPubForm, action) => {
    console.log('memPubreducer called ', state, action)
    switch (action.type) {
        case GENDER_CHECK: return {
            ...state,
            genderFlags: state.genderFlags.map((g, i) => i===action.genderIndex?!g:g)
        }
        default: return state;
    }
}

const whoAtRiskReducer = combineReducers({
    summary: summaryReducer,
    memPub: memPubReducer
})

export default whoAtRiskReducer;