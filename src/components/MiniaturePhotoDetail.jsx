import React, { Component } from 'react'
import Gallery from './gallery.json'

export class MiniaturePhotoDetail extends Component {
  state = {
    photos: Gallery.categories.miniatures.photos,
  }

  render() {
    console.log(this.props)
    const photoIndex = this.props.match.params.index
    const photoImage = this.state.photos[photoIndex].imageURL
    const photoTitle = this.state.photos[photoIndex].title
    const photoSource = this.state.photos[photoIndex].sourceURL

    return (
      <div>
        <figure>
          <img src={photoImage} alt={photoTitle} />
          <figcaption>
            <a href={photoSource}>{photoTitle}</a>
          </figcaption>
        </figure>
      </div>
    )
  }
}
