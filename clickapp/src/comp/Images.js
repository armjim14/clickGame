import React, { Component } from 'react'
import ImagesUrl from '../ImagesUrl.json'

class Images extends Component {

    renderImages = () => {
        var random = [];
        return ImagesUrl.map( ({url, id}) => <img key={id} src={url} alt="Icon" /> )
    }

    render() {
        console.log(typeof ImagesUrl[0].url)
        return (
            <div className='images'>
                {this.renderImages()}
            </div>
        )
    }
}

export default Images