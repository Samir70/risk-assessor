const initialFactors = {
    formSummary: 'initial summary, should be changed before anyone sees it.'
}

const factorReducer = (state = initialFactors, action) => {
    console.log('factorReducer called', state, action);
    switch (action.type) {
        case 'who knows' : return {
            ...state,
            sectionTitle: action.newSection, 
            formID: action.formID
        }        
        default: return state;
    }    
}

export default factorReducer;