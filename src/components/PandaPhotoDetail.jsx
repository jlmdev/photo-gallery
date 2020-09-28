import React, { Component } from 'react'
import Gallery from './gallery.json'

export class PandaPhotoDetail extends Component {
  state = {
    photos: Gallery.pandas.photos,
  }

  render() {
    console.log(this.props)
    const photoIndex = this.props.match.params.index
    const photoImage = this.state.photos[photoIndex].imageURL
    const photoTitle = this.state.photos[photoIndex].title
    const photoSource = this.state.photos[photoIndex].sourceURL

    return (
      <div className="photo-detail-container">
        <figure className="photo-detail">
          <img src={photoImage} alt={photoTitle} />
          <figcaption>
            <a href={photoSource}>{photoTitle}</a>
          </figcaption>
        </figure>
      </div>
    )
  }
}
