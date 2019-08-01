const initialState = {
    sectionTitle: 'Pick a section to get started'    
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
