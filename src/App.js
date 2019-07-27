import React from 'react';
import FormsHolder from './Components/FormsHolder';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <h1>Risk Assessor</h1>
        <FormsHolder />
      </div>
    );
  }
}

export default App;
