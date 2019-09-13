import React from 'react';
import './App.css';
import Header from './comp/Header.js';
import Describe from './comp/Describe.js';
import Images from './comp/Images.js';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      topScore: 0
    }
  }

  updateState = run => {
    console.log(run);
    if (run){
      console.log("top part")
      var temp = this.state.score + 1;
      this.setState({score: temp})
    } else {
      console.log("bottom part")
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
