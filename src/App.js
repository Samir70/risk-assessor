import React from 'react';
import FormsHolder from './Components/FormsHolder';
import TextHolder from './Components/TextHolder';
import './App.css';

class App extends React.Component {
  state = {sectionTitle: 'Pick a section to get started'}

  changeSection = (newTitle) => {this.setState({sectionTitle: newTitle})}

  render () {
    return (
      <div className="App blueTheme">
        <h1>Risk Assessor</h1>
        <div id='workSpace'>
          <FormsHolder className='halfWidth' onAccordionChange={this.changeSection} />
          <TextHolder className='halfWidth' sectionTitle={this.state.sectionTitle} />
        </div>
      </div>
    );
  }
}

export default App;
