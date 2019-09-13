import React from 'react';
import './App.css';
import Header from './comp/Header.js';
import Describe from './comp/Describe.js';
import Images from './comp/Images.js';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      score: -1,
      topScore: 0
    }
  }

  updateTop = () => {
    if (this.state.score > this.state.topScore){
      this.setState({topScore: this.state.score})
    }
  }

  updateState = run => {
    if (run){
      var temp = this.state.score + 1;
      this.setState({score: temp})
      this.updateTop()
    } else {
      this.setState({score: 0})
    }
  }

  render() {
    return (
      <div id='header' className='container-fluid'>
        <Header score={this.state.score} topScore={this.state.topScore} />
        <hr />
        <Describe />
        <hr />
        <Images handleRes={this.updateState} />
      </div> // container ends
    )
  }

}

export default App;
