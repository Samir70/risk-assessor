import React from 'react';
import {connect} from 'react-redux';
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
          <TextHolder className='halfWidth' sectionTitle={this.props.sectionTitle} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sectionTitle: state.sectionTitle
  }
}

export default connect(mapStateToProps)(App);
