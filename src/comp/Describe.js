import React, { Component } from 'react'

export class Describe extends Component {
    render() {
        return (
            <div id="section">
                <p id='desc'>
                    Click on a image to score a point, 
                    but if you click on the same image twice the score will reset
                    while the High score keeps track of your highest score.
                </p>
            </div>
        )
    }
}

export default Describe
