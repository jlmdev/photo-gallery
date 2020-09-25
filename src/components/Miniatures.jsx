import React, { Component } from 'react'
import Gallery from './gallery.json'

export class Miniatures extends Component {
  state = {
    miniatures: Gallery.miniatures,
    photos: Gallery.miniatures.photos,
  }

  render() {
    return (
      <div>
        <h1>{this.state.miniatures.title}</h1>
        <p>{this.state.miniatures.description}</p>
        {this.state.photos.map(photo => (
          <figure>
            <img src={photo.imageURL} alt={photo.title} />
            <figcaption>
              {photo.title}
              <a href={photo.sourceURL}>Source</a>
            </figcaption>
          </figure>
        ))}
      </div>
    )
  }
}
