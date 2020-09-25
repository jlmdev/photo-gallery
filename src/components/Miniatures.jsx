import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Gallery from './gallery.json'
import { MiniaturePhotoDetail } from './MiniaturePhotoDetail'

export class Miniatures extends Component {
  state = {
    miniatures: Gallery.categories.miniatures,
    photos: Gallery.categories.miniatures.photos,
  }

  render() {
    return (
      <div>
        <h1>{this.state.miniatures.title}</h1>
        <p>{this.state.miniatures.description}</p>
        {this.state.photos.map((photo, index) => (
          <figure>
            <Link to={`/miniatures/${index}`}>
              <img src={photo.imageURL} alt={photo.title} />
            </Link>
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
