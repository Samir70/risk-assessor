const initialCircumstances = {
    formSummary: 'initial summary, should be changed before anyone sees it.'
}

const circReducer = (state = initialCircumstances, action) => {
    //console.log('circReducer called', state, action);
    switch (action.type) {
        case 'who knows' : return {
            ...state,
            sectionTitle: action.newSection, 
            formID: action.formID
        }        
        default: return state;
    }    
}

export default circReducer;