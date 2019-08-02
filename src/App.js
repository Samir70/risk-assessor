import React from 'react';
import FormsHolder from './Components/FormsHolder';
import FormSummary from './Components/FormSummary';
import './App.css';

class App extends React.Component {
  render () {
    console.log('App.js');
    return (
      <div className="App blueTheme">
        <h1>Risk Assessor</h1>
        <div id='workSpace'>
          <FormsHolder className='halfWidth' />
          <FormSummary className='halfWidth'  />
        </div>
      </div>
    );
  }
}

export default App;
