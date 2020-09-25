import React, { Component } from 'react'
import Gallery from './gallery.json'

export class Pandas extends Component {
  state = {
    pandas: Gallery.pandas,
    photos: Gallery.pandas.photos,
  }

  render() {
    return (
      <div>
        <h1>{this.state.pandas.title}</h1>
        <p>{this.state.pandas.description}</p>
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
