const initialDocs = {
    formSummary: 'initial summary, should be changed before anyone sees it.'
}

const docReducer = (state = initialDocs, action) => {
    console.log('docReducer called', state, action);
    switch (action.type) {
        case 'who knows' : return {
            ...state,
            sectionTitle: action.newSection, 
            formID: action.formID
        }        
        default: return state;
    }    
}

export default docReducer;