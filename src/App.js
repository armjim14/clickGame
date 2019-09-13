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
    console.log(this.state.score);
    console.log(this.state.topScore)
    if (this.state.score >= this.state.topScore){
      this.setState({topScore: this.state.score + 1})
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
      <div className="app">
        <Header score={this.state.score} topScore={this.state.topScore} />
        <Describe />
        <Images handleRes={this.updateState} />
      </div> // container ends
    )
  }

}

export default App;
