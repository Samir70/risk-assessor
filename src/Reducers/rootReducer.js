import { combineReducers } from 'redux';
import genearlReducer from './generalReducer';
import whoAtRiskReducer from './whoAtRiskReducer';
import natureOfRiskReducer from './natureOfRiskReducer';
import timescaleReducer from './timescaleReducer';
import circReducer from './circReducer';
import factorReducer from './factorReducer';
import docReducer from './docReducer';

/* I want state to eventually have one 'general' section
 * then a section for each of the tabs on the accordion
 * so it will look like:
 * state = {
 *     general : { ... }, 
 *     WhoAtRisk: { formSummary: 'dfgdf', ... },
 *     ...
 *     }
*/



const rootReducer = combineReducers({
    general: genearlReducer,
    WhoAtRisk: whoAtRiskReducer,
    NatureOfRisk: natureOfRiskReducer, 
    Timescale: timescaleReducer,
    CircIncRisk: circReducer,
    FactIncRisk: factorReducer,
    DocDetails: docReducer
})

export default rootReducer;
