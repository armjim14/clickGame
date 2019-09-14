import React, { Component } from 'react'
// "#007bff"
class Header extends Component {

    // state = {
    //     color: this.props.upStyle
    // }

    // updateStyle = () => {
    //     return {color: this.state.color}
    // }

    // componentDidMount() {
    //     this.updateStyle()
    // }

    // updateStyle = () => {
    //     console.log(this.props.upStyle)
    //     if (this.props.upStyle !== "white"){
    //         let count = 0;
    //         // let int = setInterval( () => {
    //             return this.props.upStyle;
    //             // count++;
    //         //     if (count == 2){
    //         //         clearInterval(int)
    //         //         "white"
    //         //     }
    //         // }, 2000)
    //     } else {
    //         return "white"
    //     }
    // }

    render() {
        return (
            <div id="header">
                <div id="header-left">
                    <h2 style={{color: this.props.upStyle}} className="properGuess">Memorize</h2>
                </div>
                <div id="header-right">
                    <h2 style={{color: this.props.upStyle}} className="properGuess">Score: {this.props.score} | High Score: {this.props.topScore} </h2>
                </div>
                {/* <div id="header-left">
                    <h2 style={ this.updateStyle() } id="change" className="properGuess">Memorize</h2>
                </div>
                <div id="header-right">
                    <h2 className="properGuess">Score: {this.props.score} | High Score: {this.props.topScore} </h2>
                </div> */}
            </div>
        )
    }
}

export default Header
