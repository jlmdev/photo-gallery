import React, { Component } from 'react'
import Gallery from '../components/gallery.json'

export class PhotoDetail extends Component {
  render() {
    const category = this.props.match.params.category
    const photoIndex = this.props.match.params.index
    const photo = Gallery[category].photos[photoIndex]

    return (
      <div className="photo-detail-container">
        <figure className="photo-detail">
          <img src={photo.imageURL} alt={photo.title} />
          <figcaption>
            <a href={photo.sourceURL}>{photo.title}</a>
          </figcaption>
        </figure>
      </div>
    )
  }
}
