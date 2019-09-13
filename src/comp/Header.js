import React, { Component } from 'react'

class Header extends Component {

    // updateStyle = () => {
    //     if (this.props.upStyle !== "white"){
    //         setInterval( function() {
    //             return { color: this.props.upStyle }
    //         }, 2000)
    //     } else {
    //         return { color: "white" }
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
            </div>
        )
    }
}

export default Header
