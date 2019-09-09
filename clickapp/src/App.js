import React from 'react';
import './App.css';
import Header from './comp/Header.js';
import Describe from './comp/Describe.js';
import Images from './comp/Images.js';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      score: 0
    }
  }

  render() {
    return (
      <div id='header' className='container-fluid'>
        <Header score={this.state.score} />
        <hr />
        <Describe />
        <hr />
        <Images />
      </div> // container ends
    )
  }

}

export default App;
