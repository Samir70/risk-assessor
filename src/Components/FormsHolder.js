import React from 'react';
import FormCard from './FormCard';
import WhoAtRiskForm from './Forms/WhoAtRiskForm';
import {Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const formsArray = [
  {id: 'WhoAtRisk', title:'R10.1 -- Who is at Risk', body: <WhoAtRiskForm />}, 
  {id: 'NatureOfRisk', title:'R10.2 -- Nature of the risk', body:<p>Temp body</p>},
  {id: 'Timescale', title:'R10.3 -- Risk timescale', body:<p>Temp body</p>}, 
  {id: 'CircIncRisk', title:'R10.4 -- Circumstances likely to increase risk', body:<p>Temp body</p>},
  {id: 'FactIncRisk', title:'R10.5 -- Factors likely to reduce risk', body:<p>Temp body</p>},
  {id: 'DocDetails', title:'R10.6 -- Details of key documents', body:<p>Temp body</p>}
]

const FormsHolder = (props) => {
  console.log('FormsHolder')
  const formsList = formsArray.map(f => 
     <FormCard 
       key={f.id} 
       eKey={f.id} 
       formTitle={f.title} >{f.body}</FormCard> );
    return (
        <Accordion defaultActiveKey='none' className={props.className}>
            {formsList}
        </Accordion>
    )
}

export default FormsHolder;
