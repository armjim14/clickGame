import React, { Component } from 'react'

export class Describe extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <p id='desc' className='text-center'>Click on every image once to win!.<br />
                    If you choose on the same image twice the score will reset<br /> but the High score will stay the same.</p>
                </div>
            </div>
        )
    }
}

export default Describe
