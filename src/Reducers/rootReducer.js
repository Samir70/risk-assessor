const initialState = {
    sectionTitle: 'Pick a section to get started', 
    formID: 'none', // use this to select the formText
    // formTexts are the text summaries that appear in clipboard area once data is added
    formTexts: {
        form0: 'text for form0',
        form1: 'text for form1',
        form2: 'text for form2',
        form3: 'text for form3',
        form4: 'text for form4',
        form5: 'text for form5'
    },  
    
    peopleAtRisk: []
}

const rootReducer = (state = initialState, action) => {
    console.log('rootReducer called', state, action);
    switch (action.type) {
        case 'CHANGE_SECTION' : return {
            ...state,
            sectionTitle: action.newSection, 
            formID: action.formID
        }

        case 'ADD_PERSON_AT_RISK' : return {
            ...state,
            peopleAtRisk: state.peopleAtRisk.concat(action.person)
        }
        case 'UPDATE_AT_RISK_TEXT' : return {
            ...state,
            formTexts: {...state.formTexts, form0:action.newText}
        }
        default: return state;
    }    
}

export default rootReducer;
