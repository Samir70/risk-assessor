import React from 'react';
import FormCard from './FormCard';
import {Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const formTitles = [
  'R10.1 -- Who is at Risk', 
  'R10.2 -- Nature of the risk',
  'R10.3 -- Risk timescale', 
  'R10.4 -- Circumstances likely to increase risk',
  'R10.5 -- Factors likely to reduce risk',
  'R10.6 -- Details of key documents'
]

const formBodies =[
  <p>will this work1?</p>,
  <p>will this work2?</p>,
  <p>will this work3?</p>,
  <p>will this work4?</p>,
  <p>will this work5?</p>,
  <p>will this work6?</p>
]


const FormsHolder = (props) => {
  console.log('FormsHolder')
  const formsList = formTitles.map((t, i) => 
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

export default FormsHolder;
