import React, { Component } from 'react'
import Gallery from './gallery.json'

export class MiniaturePhotoDetail extends Component {
  state = {
    photos: Gallery.categories.miniatures.photos,
  }

  render() {
    console.log(this.props)
    const photoIndex = this.props.match.params.index
    const photoSource = this.state.photos[photoIndex].imageURL

    return (
      <div>
        <figure>
          <img src={photoSource} alt={this.props.alt} />
        </figure>
      </div>
    )
  }
}
