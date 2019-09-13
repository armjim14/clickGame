import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className='row'>

                <div className='col-md-6'>
                    <h1 className='text-center pl-2'>Click Game!</h1>
                </div>

                <div className='col-md-6'>
                    <h2 className='text-center'>Score: {this.props.score} | High Score: {this.props.topScore} </h2>
                </div>

            </div>
        )
    }
}

export default Header
