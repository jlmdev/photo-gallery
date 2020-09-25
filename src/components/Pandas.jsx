import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Gallery from './gallery.json'
import { PandaPhotoDetail } from './PandaPhotoDetail'

export class Pandas extends Component {
  state = {
    pandas: Gallery.categories.pandas,
    photos: Gallery.categories.pandas.photos,
  }

  render() {
    console.log(this.props)

    return (
      <div>
        <h1>{this.state.pandas.title}</h1>
        <p>{this.state.pandas.description}</p>
        {this.state.photos.map((photo, index) => (
          <figure>
            <Link to={`/pandas/${index}`}>
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
