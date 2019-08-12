import React from 'react';
import {connect} from 'react-redux';
import summaryOfWhoAtRisk from '../DataHandlers/summaryOfWhoAtRisk';

const FormSummary = (props) => {
    console.log('FormSummary props: ', props);
    var summaryText = 'This text is from before switch.'
    switch (props.formID) {
      case 'OffenderData' : {
        summaryText = 'The offender is called '
            +props.formState.firstName+' '+props.formState.secondName
            +', and will be referred to as '+props.formState.offenderRef
            +' or with the pronoun: '+props.formState.offenderPronoun;
        break;
      }
      case 'WhoAtRisk' : { 
        summaryText = summaryOfWhoAtRisk(props.formState);
        break;
      }
      default: summaryText = <p>'I probably did not recognise the formID: '+{props.formID}</p>
    }

    return (
        <div className={props.className} >
            <h1>{props.sectionTitle}</h1>
            {summaryText}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      sectionTitle: state.general.sectionTitle,
      formID: state.general.formID,
      formState: state[state.general.formID]
    }
  }

export default connect(mapStateToProps)(FormSummary);
