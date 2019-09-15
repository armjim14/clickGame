import React, { Component } from 'react'
import ImagesUrl from '../ImagesUrl.json'

class Images extends Component {

    state = {
        list: [],
        correctGuess: []
    }

    newCards = (id) => {
        let shuffle = ImagesUrl.sort( () => .5 - Math.random() )
        let run = true;
        let arr = this.state.correctGuess;
        
        for (let v in this.state.correctGuess){
            if (this.state.correctGuess[v] === id){
                run = false
            }
        }

        this.setState({list: shuffle})

        if (run){
            if (!id){
                console.log("Welcome to the game")
            } else {
                arr.push(id);
                this.setState({correctGuess: arr})
                this.props.handleRes(true)
            }   
        } else {
            this.props.handleRes(false)
            this.setState({correctGuess: []})
        }
    }

    renderImages = () => {
        return this.state.list
            .map( ({id, url}) => 
                <div 
                    key={id} 
                    className="forImg">

                    <img 
                        onClick={ this.newCards.bind(this, id) } 
                        src={url} alt="Some Icon" />
                </div> )
    }

    componentDidMount() {
        this.newCards()
    }

    render() {
        return (
            <div className='images'>
                {this.renderImages()}
            </div>
        )
    }
}

export default Images