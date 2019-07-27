import React from 'react';
import FormCard from './FormCard';
import {Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const FormsHolder = (props) => {
    return (
        <Accordion defaultActiveKey='1'>
            <FormCard 
              formKey='1' 
              formTitle='R10.1 -- Who is at Risk'
              formBody='Everyone is at risk!!!!!!!!!!'  />
            <FormCard 
              formKey='2' 
              formTitle='R10.2 -- Nature of the risk'
              formBody='Very dangerous but funny!' />
            <FormCard 
              formKey='3' 
              formTitle='R10.3 -- Risk timescale'
              formBody='Counting down from 10, 9, 8, ...' />
            <FormCard 
              formKey='4' 
              formTitle='R10.4 -- Circumstances likely to increase risk'
              formBody='Daylight' />
            <FormCard 
              formKey='5' 
              formTitle='R10.5 -- Factors likely to reduce risk'
              formBody='Ice-cream!' />
            <FormCard 
              formKey='6' 
              formTitle='R10.6 -- Details of key documents'
              formBody='Brexit roadmap to hell' />
        </Accordion>
    )
}

export default FormsHolder;
