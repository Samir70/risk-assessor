import React from 'react';
import {connect} from 'react-redux';

const TextHolder = (props) => {
    console.log('TextHolder')
    return (
        <div className={props.className} >
            <h1>{props.sectionTitle}</h1>
            <p>This is a place for the output text</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      sectionTitle: state.sectionTitle
    }
  }

export default connect(mapStateToProps)(TextHolder);
