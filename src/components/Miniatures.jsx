import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Gallery from './gallery.json'
import { MiniaturePhotoDetail } from './MiniaturePhotoDetail'

export class Miniatures extends Component {
  state = {
    miniatures: Gallery.miniatures,
    photos: Gallery.miniatures.photos,
  }

  render() {
    return (
      <div className="photo-entry">
        <h2>{this.state.miniatures.title}</h2>
        <p>{this.state.miniatures.description}</p>
        <section className="photo-list">
          {this.state.photos.map((photo, index) => (
            <figure>
              <Link to={`/miniatures/${index}`} className="image-link">
                <img src={photo.imageURL} alt={photo.title} />
              </Link>
              <figcaption>
                {photo.title}
                <a href={photo.sourceURL}>Source</a>
              </figcaption>
            </figure>
          ))}
        </section>
      </div>
    )
  }
}
