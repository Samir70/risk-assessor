import { 
    UPDATE_OFFENDER_FIRST_NAME, 
    UPDATE_OFFENDER_SECOND_NAME,
    SET_OFFENDER_PRONOUN,
    UPDATE_OFFENDER_REFERENCE
} from './actions';

const initialOffenderData = {
    firstName: '',
    secondName: '',
    offenderRef: 'the offender',
    offenderPronoun: '(none selected)'
}

const offDataReducer = (state = initialOffenderData, action) => {
    switch (action.type) {
        case UPDATE_OFFENDER_FIRST_NAME: return {...state, firstName:action.payload}
        case UPDATE_OFFENDER_SECOND_NAME: return {...state, secondName:action.payload}
        case SET_OFFENDER_PRONOUN: return {...state, offenderPronoun:action.payload}
        case UPDATE_OFFENDER_REFERENCE: return {...state, offenderRef:action.payload}
        default: return state
    }
}

export default offDataReducer;
