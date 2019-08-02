const initialGeneralState = {
    sectionTitle: 'R10.1 -- Who is at Risk', 
    formID: 'WhoAtRisk', // use this to select the part of state holding the relevent formSummary
    // formSummaries are calculated from inputs to the form and
    // appear in clipboard area once data is added 
}

const genearlReducer = (state = initialGeneralState, action) => {
    console.log('genearlReducer called', state, action);
    switch (action.type) {
        case 'CHANGE_SECTION' : return {
            ...state,
            sectionTitle: action.newSection, 
            formID: action.formID
        }        
        default: return state;
    }    
}

export default genearlReducer;
