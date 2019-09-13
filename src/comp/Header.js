import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div id="header">
                <div id="header-left">
                    <h2>Memorize</h2>
                </div>
                <div id="header-right">
                    <h2>Score: {this.props.score} | High Score: {this.props.topScore} </h2>
                </div>
            </div>
        )
    }
}

export default Header
