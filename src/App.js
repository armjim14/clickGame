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
      topScore: 0,
      color: "white"
    }
  }

  updateTop = () => {
    if (this.state.score >= this.state.topScore){
      this.setState({topScore: this.state.score + 1})
    }
  }

  updateState = run => {
    if (run){
      var temp = this.state.score + 1;
      if (this.state.score == -1){
        this.setState({score: temp})
      } else {
        this.setState({score: temp, color: "rgb(0, 123, 255)"})
      }
      this.updateTop()
    } else {
      this.setState({score: 0, color: "red"})
    }
  }

  render() {
    return (
      <div className="app">
        <Header upStyle={this.state.color} score={this.state.score} topScore={this.state.topScore} />
        <Describe />
        <Images handleRes={this.updateState} />
      </div> // container ends
    )
  }

}

export default App;
