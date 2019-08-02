const initialNatureOfRisk = {
    formSummary: 'initial summary, should be changed before anyone sees it.'
}

const natureOfRiskReducer = (state = initialNatureOfRisk, action) => {
    //console.log('natureOfRiskReducer called', state, action);
    switch (action.type) {
        case 'who knows' : return {
            ...state,
            sectionTitle: action.newSection, 
            formID: action.formID
        }        
        default: return state;
    }    
}

export default natureOfRiskReducer;