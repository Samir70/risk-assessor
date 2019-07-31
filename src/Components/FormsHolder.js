import React from 'react';
import {connect} from 'react-redux';
import FormCard from './FormCard';
import {Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const formBodies =[
  <p>will this work1?</p>,
  <p>will this work2?</p>,
  <p>will this work3?</p>,
  <p>will this work4?</p>,
  <p>will this work5?</p>,
  <p>will this work6?</p>
]


const FormsHolder = (props) => {
  const formsList = props.formTitles.map((t, i) => 
     <FormCard 
       key={'form'+i} 
       eKey={'form'+i} 
       formTitle={t} >{formBodies[i]}</FormCard> );
    return (
        <Accordion defaultActiveKey='none' className={props.className}>
            {formsList}
        </Accordion>
    )
}

const mapStateToProps = (state) => {
  return {formTitles : state.formTitles}
}

export default connect(mapStateToProps)(FormsHolder);
