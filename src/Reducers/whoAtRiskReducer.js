import { ADD_KNOWN_PERSON_AT_RISK } from './actions';
import { GENDER_CHECK, CHECK_AGE } from './actions';
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

export const genderTextArray = ['men', 'women', 'transgender people'];
export const agesTextArray = 
    ['infants', 'young children', 'teenagers', 'adults 19-39', 'adults 40-59', 'pensioners'];
const parseFlags = (str) => [...str].map(c => c==='1'?true:false);
const initialMemPubForm = {
    // and array of flags for the male, female, transgender checkboxes
    genderFlags : [false, false, false],
    ageFlags: parseFlags('000000')
}
const memPubReducer = (state = initialMemPubForm, action) => {
    console.log('memPubreducer called ', state, action)
    switch (action.type) {
        case GENDER_CHECK: return {
            ...state,
            genderFlags: state.genderFlags.map((f, i) => i===action.flagIndex?!f:f)
        }
        case CHECK_AGE: return {
            ...state,
            ageFlags: state.ageFlags.map((f, i) => i===action.flagIndex?!f:f)
        }
        default: return state;
    }
}

const whoAtRiskReducer = combineReducers({
    summary: summaryReducer,
    memPub: memPubReducer
})

export default whoAtRiskReducer;