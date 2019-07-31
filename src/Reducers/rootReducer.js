const initialState = {
    sectionTitle: 'Pick a section to get started', 
    formTitles : [
        'R10.1 -- Who is at Risk', 
        'R10.2 -- Nature of the risk',
        'R10.3 -- Risk timescale', 
        'R10.4 -- Circumstances likely to increase risk',
        'R10.5 -- Factors likely to reduce risk',
        'R10.6 -- Details of key documents'
      ]
}

const rootReducer = (state = initialState, action) => {
    console.log('rootReducer called', state, action);
    switch (action.type) {
        case 'CHANGE_SECTION' : return {
            ...state,
            sectionTitle: action.newSection
        }
        default: return state;
    }    
}

export default rootReducer;
