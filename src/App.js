import React from 'react';
import FormsHolder from './Components/FormsHolder';
import TextHolder from './Components/TextHolder';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App blueTheme">
        <h1>Risk Assessor</h1>
        <div id='workSpace'>
          <FormsHolder className='halfWidth' />
          <TextHolder className='halfWidth' />
        </div>
      </div>
    );
  }
}

export default App;
