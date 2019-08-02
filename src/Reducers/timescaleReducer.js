const initialTimescale = {
    formSummary: 'initial summary, should be changed before anyone sees it.'
}

const timescaleReducer = (state = initialTimescale, action) => {
    console.log('timescaleReducer called', state, action);
    switch (action.type) {
        case 'who knows' : return {
            ...state,
            sectionTitle: action.newSection, 
            formID: action.formID
        }        
        default: return state;
    }    
}

export default timescaleReducer;