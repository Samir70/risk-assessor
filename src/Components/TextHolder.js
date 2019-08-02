import React from 'react';
import {connect} from 'react-redux';

const TextHolder = (props) => {
    console.log('TextHolder props: ', props)
    return (
        <div className={props.className} >
            <h1>{props.sectionTitle}</h1>
            <p>{props.formText}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      sectionTitle: state.general.sectionTitle,
      formID: state.general.formID,
      formText: state[state.general.formID].formSummary
    }
  }

export default connect(mapStateToProps)(TextHolder);
