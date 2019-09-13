import React, { Component } from 'react'
import ImagesUrl from '../ImagesUrl.json'

class Images extends Component {

    state = {
        list: [],
        correctGuess: []
    }

    shuffle = a => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    newCards = (id) => {
        var newarr = this.shuffle(ImagesUrl)
        let run = true;
        let arr = this.state.correctGuess;
        for (let v in this.state.correctGuess){
            if (this.state.correctGuess[v] === id){
                run = false
            }
        }
        console.log(arr.length)
        console.log(run)
        console.log(this.state.correctGuess)
        this.setState({list: newarr})

        if (run){
            arr.push(id);
            this.setState({correctGuess: arr})
            this.props.handleRes(true)
        } else {
            this.props.handleRes(false)
            this.setState({correctGuess: []})
        }
    }

    renderImages = () => {
        return this.state.list.map( ({id, url}) => <div className="forImg"><img key={id} onClick={ this.newCards.bind(this, id) } src={url} alt="Some Icon" /></div> )
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