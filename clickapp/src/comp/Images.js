import React, { Component } from 'react'
import ImagesUrl from '../ImagesUrl.json'

class Images extends Component {

    renderImages = () => {
        return ImagesUrl.map( ({url, id}) => <img key={id} src={url} alt="Icon" /> )
    }

    render() {
        console.log(ImagesUrl[0].url)
        return (
            <div className='images'>
                {this.renderImages()}
                <img alt="some" src="./picOne.png" />
            </div>
        )
    }
}

export default Images