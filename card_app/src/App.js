import React, { Component } from 'react';
import FirstStep from './components/steps/first/FirstStep';
import SecondStep from './components/steps/second/SecondStep';
import Line from './components/line/Line';
import './App.css';

class App extends Component {
 
  constructor(){
    super()
    this.state = {
      firbaseObjectId: ""
    }
  }

  saved = (p1) => {
    this.setState({
      firbaseObjectId: p1
    });
  }

  render() {
    return (
      <div>
        <FirstStep onClickSave={(p1) => this.saved(p1)} />
        <Line />
        <SecondStep firbaseObjectId={this.state.firbaseObjectId} />
      </div>
    );
  }
}

export default App;
